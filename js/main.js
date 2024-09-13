import { SITE_CONTENT, STYLE_DATA_COMPONENT, SITE_STACKS, PAGES_CHANGED } from '../api/dataaccess'
import { addDomListener, undo } from "./undo";
import { createLi, newPage, notify } from "./add";
import { generateSvg } from "../api/generateAsset";
import "../main.css";
import siteCss2 from "!!raw-loader!../site/site-default.css"
import { initialize, getAccess, getSiteId } from "../utils/requests";
import { tdApiRequestInstance } from "../utils/requests2";
import fUtils from "../utils/";
import reFormatCamelToOtherCase from "./../utils/formatStrCase";
import fStyle from "./../lib/style"
import fComponent from "./../lib/component";
import { Stack } from './undo';
import { takeScreenShot } from '../lib/component/screenshot';
import { editorBg, mobileImg, pointer, desktopImg } from '../public/assets/index'
import mimicActions from './mimic';
import { title } from 'process';


// data structure
export const tailordom = (function () {
  class State {
    constructor(value) {
      this.value = value;
    }

    getValue() {
      return this.value;
    }

    setValue(_value) {
      this.value = _value;
    }
  }
  return {
    State,
    useEffect(effecfCallback, deps) {
      let renderState = false;
      // console.log("init useEffect...", renderState);
      if (!deps || (Array.isArray(deps) && deps.length < 1)) {
        //re-render at default
        // console.log("init useEffect...re-render");
      }
      effecfCallback();
      // console.log("after bind.");
    },
    render2(app) {
      app.innerHTML = htmlNode;
    },
    async render(rawData, cssStyleInstance) {
      const { styles } = rawData;
      // console.log("---- loading the render ---- ", { styles })
      const htmlDoc = await tranformTreeToDoc(rawData);
      let frame = document.getElementById("site-iframe-next");
      //const canvasArea = document.getElementById("site-iframe-next");

      // canvasArea.contentWindow.addEventListener("load", function (evt) {
      //  console.log("----------- nexted load width ----------",{evt});
      // //  testInit(frame, htmlDoc, {rawData, cssStyleInstance});
      //   console.log("----------- after testInit ----------");
      // });

      let doc = document.implementation.createHTMLDocument("tailordom");
      try {
        //head
        setUpHeadTag(doc, rawData.title);
        doc.body.appendChild(htmlDoc);
        const destDocument = frame.contentDocument;

        const srcNode = doc.documentElement;
        const newNode = destDocument.importNode(srcNode, true);

        destDocument.replaceChild(newNode, destDocument.documentElement);
        //inlineBlocks for, inline styling added by the editor
        if (styles.style) {
          //console.log(cssStyleInstance);
          cssStyleInstance.addCssRule(styles.style);
        }

      } catch (e) {
        // console.log(e);
      }
    },
  };
})();

let userData;

window.addEventListener("error", async (event) => {

  // console.log("Encountered an error while loading window  .. ", { event });
})
window.addEventListener("load", async (event) => {
  try {

    // console.log("the page is fully load ");
    //State class
    const UseState = tailordom.State;

    const htmlState = new UseState();

    const siteComponentsState = new UseState();

    const appState = new UseState();

    const activeNodeState = new UseState();
    const activeStack = new UseState();
    const tdLoaderState = new UseState(false);

    const previewStateForGuest = new UseState(false)

    const previewMode = new UseState(false)

    const initialScreenChangeState = new UseState(false)

    const stylesState = new UseState({
      currentSelectedStyles: {
        default: null,
        max990: null,
        max767: null,
        min1280: null,
        min1600: null,
      },
      styleSheet: null
    })

    const nodeInstances = tdManageState(htmlState, activeStack);
    const activeNodeInstances = null;
    const styleInstances = null;

    let newInitView;

    tailordom.useEffect(async () => {
      // console.log("=========== logging useEffect ==========");
      const acNode = document.createElement("div");
      //let isloading = true;
      activeNodeState.setValue(acNode);
      // console.log({ nodeState: activeNodeState.getValue() });

      rootViewContainer(mainViewEntry);

      //newInitView = await initView(isloading);
    });

    async function rootViewContainer(callback) {
      tdLoaderState.setValue(true);
      let isLoading = true;
      // console.log("Loading ....", isLoading);
      let data = {};
      data = Object.assign({}, { isLoading }, data);

      try {
        //Init

        // async function checkDeviceAndInitialize() {
        if (isMobileDevice()) {
          showMobileRestrictionMessage();
        } else {
          // initView();
          newInitView = await initView(tdLoaderState);
        }
        // }

        const { site, components, user, guest } = await initialize();

        userData = user

        const home = site.pages.find(e => e.route.includes("/index") || e.route === "/")

        // console.log("--- entering root---", { initNode: site.pages[0], site })
        // set site Nodes and styles
        htmlState.setValue({
          pages: site.pages,
          initial_node: home ? home.nodes[0] : site.pages[0].nodes[0],
          nodes: home ? home.nodes : site.pages[0].nodes,
          styles: home ? home.styles : site.pages[0].styles,
          id: home ? home.page_id : site.pages[0].page_id,
          title: home ? home.name : site.pages[0].name,
        });

        //set preview for guest
        previewStateForGuest.setValue(guest)


        // set Site components 
        siteComponentsState.setValue(SITE_CONTENT)

        appState.setValue(site);

        tdLoaderState.setValue(false);
        // console.log("=================================", htmlState.getValue())

        newInitView.mainLoader(tdLoaderState);
        //const tLoaded = document.getElementById("site-iframe-next");
        setTimeout(() => {
          callback(data);
        }, 2);
        //callback(data);
      } catch (error) {
        // console.log(error);
      }
    }

    async function mainViewEntry(data) {
      const { isLoading } = data;

      //Init Iframe window
      let canvasWindow;

      canvasWindow = document.querySelector("iframe").contentWindow;
      let devMode = canvasWindow.document.querySelector(".td-design-mode");

      let designMode = devMode ? true : false;

      Object.assign({}, { designMode }, data);
      // shared object to pass instance of other functions without having to rearrange
      const sharedObject = {};


      // console.log({ devMode, designMode, data, isLoading });

      const cssStyleInstance = stylesheetRule(canvasWindow.document);

      //const htmlElementInstance = htmlElement(canvasWindow);

      const { stackProperties } = undo(htmlState, previewStateForGuest);

      activeStack.setValue(stackProperties.stack);

      activeStack.getValue().getStyleInstance(cssStyleInstance);

      const nodeManagerInstance = nodeMainManager(
        canvasWindow,
        {
          node: nodeInstances,
          style: styleInstances,
          activeNode: activeNodeInstances,
        },
        cssStyleInstance,
        activeStack.getValue(),
        htmlState
      );
      const appUtils = await tdUtils(
        canvasWindow.document,
        nodeManagerInstance,
        htmlState,
        cssStyleInstance,
        activeStack,
        appState,
        previewStateForGuest
      );

      const viewInstance = await veiwSection(
        document,
        {
          dataRepo: {
            payload: htmlState.getValue(),
            content: siteComponentsState.getValue(),
          },
        },
        { nodeManager: nodeManagerInstance },
        appUtils,
        activeStack,
        htmlState,
        cssStyleInstance,
        canvasWindow.document,
        appState,
        previewStateForGuest,
        initialScreenChangeState,
        sharedObject,
        previewMode,
        stylesState
      );
      const reactModelMount = editorReactMount(canvasWindow.document);
      const viewIndicatorInstance = viewIndicator(
        canvasWindow,
        { view: viewInstance, reactModelMount, initView: newInitView },
        {
          node: nodeInstances,
          style: styleInstances,
          activeNode: activeNodeInstances,
        },
        activeStack,
        htmlState,
        previewStateForGuest,
        previewMode,
        cssStyleInstance,
        stylesState
      );

      sharedObject.viewIndicatorInstance = viewIndicatorInstance;

      fscroll(canvasWindow.document, canvasWindow);

      //init objects

      const canvasInstance = fCanvasArea(".web-canvas-area");
      canvasInstance.resizeWindowWithbarHandle(".web-canvas-area");


      //re-render these section after every state change
      tailordom.render(htmlState.getValue(), cssStyleInstance);

      const tdApiStateManagerInstance = tdApiStateManager(htmlState, appState, tdLoaderState, previewStateForGuest);

      if (previewStateForGuest.getValue() == false) {
        tdApiStateManagerInstance.upDateSite()
        tdApiStateManagerInstance.deployFunc()

        //listeners for redo and undo
        addDomListener(activeStack);

      }

      // console.log("after render");
    }
  } catch (error) {
    // console.error({ error });
  }
});

function fCanvasArea(canvas) {
  const canvasArea = document.querySelector(canvas);
  const canvasDefaultWidth = document.querySelector(
    ".screen__window-setting-val"
  );
  return {
    //resizeWindowWithDeviceOrientation,
    resizeWindowWithbarHandle() {
      // console.log("enter init resize....");
      const resizeHandles = document.querySelectorAll(canvas + " .handler");
      const minSize = 20;
      let originalWidth = 0;
      let originalX = 0;
      let originalMouseX = 0;

      for (let i = 0; i < resizeHandles.length; i++) {
        const currentResizeHandle = resizeHandles[i];
        currentResizeHandle.addEventListener("mousedown", (e) => {
          //console.log("doc mousedown logging...", e);
          e.preventDefault();
          originalWidth = parseFloat(
            getComputedStyle(canvasArea, null)
              .getPropertyValue("width")
              .replace("px", "")
          );
          originalX = canvasArea.getBoundingClientRect().left;
          originalMouseX = e.pageX;
          document.addEventListener("mousemove", resize);
          document.addEventListener("mouseup", stopResize);
        });

        function resize(e) {
          //console.log({ classList: currentResizeHandle.classList });
          if (currentResizeHandle.classList.contains("handle-right")) {
            const width = originalWidth + (e.pageX - originalMouseX);
            if (width > minSize) {
              canvasArea.style.width = width + "px";
              canvasDefaultWidth.innerContent = width + "px";
            } else {
              // console.log("canvas width can not be less than 20px");
            }
          } else {
            //console.log("else logging...", e);
            const width = originalWidth - (e.pageX - originalMouseX);
            if (width > minSize) {
              canvasArea.style.width = width + "px";
              canvasDefaultWidth.innerContent = width + "px";
              //canvasArea.style.left = originalY + (e.pageY - originalMouseY) + "px";
            } else {
              // console.log("canvas width can not be less than 20px");
            }
          }
        }

        function stopResize() {
          //window.removeEventListener("mousemove", resize);
          document.removeEventListener("mousemove", resize);
        }
      }
    },
  };
}

function resizeWindowWithDeviceOrientation2(deviceOT, initialScreenChangeState) {
  //deviceOT enum("Mobile", "Desktop", "Tablet")
  let canvasArea = document.querySelector(".web-canvas-area");
  const canvasDefaultWidth = document.querySelector(
    ".screen__window-setting-val"
  );

  switch (deviceOT) {
    case "MOBILE":
      canvasArea.style.width = "320px";
      break;
    case "TABLET":
      canvasArea.style.width = "786px";
      break;
    case "LAPTOP-MEDUIM":
      canvasArea.style.width = "991px";
      break;
    case "LAPTOP":
      canvasArea.style.width = "1200px";
      break;
    case "DESKTOP":
      canvasArea.style.width = "1280px";
      break;
    case "DESKTOP-EXTRA":
      canvasArea.style.width = "1920px";
      break;

    default:
      break;
  }
  //console.log({width: canvasArea.style.width, canvasDefaultWidth});
  canvasDefaultWidth.textContent = canvasArea.style.width;
  //iframe width has been changed after initial render
  initialScreenChangeState.setValue(true)


}
function handleCanvasResize(canvas) {
  const canvasArea = document.querySelector(canvas);
  const resizeHandles = document.querySelectorAll(canvas + " .handler");
  const minSize = 20;
  let originalWidth = 0;
  let originalX = 0;
  let originalMouseX = 0;

  for (let i = 0; i < resizeHandles.length; i++) {
    const currentResizeHandle = resizeHandles[i];
    currentResizeHandle.addEventListener("mousedown", (e) => {
      e.preventDefault();
      originalWidth = parseFloat(
        getComputedStyle(canvasArea, null)
          .getPropertyValue("width")
          .replace("px", "")
      );
      originalX = canvasArea.getBoundingClientRect().left;
      originalMouseX = e.pageX;
      document.addEventListener("mousemove", resize);
      document.addEventListener("mouseup", stopResize);
    });

    function resize(e) {
      //console.log({ classList: currentResizeHandle.classList });
      if (currentResizeHandle.classList.contains("handle-right")) {
        //console.log("logging...", e);
        const width = originalWidth + (e.pageX - originalMouseX);
        if (width > minSize) {
          canvasArea.style.width = width + "px";
        } else {
          // console.log("canvas width can not be less than 20px");
        }
      } else {
        // console.log("else logging...", e);
        const width = originalWidth - (e.pageX - originalMouseX);
        if (width > minSize) {
          canvasArea.style.width = width + "px";
          //canvasArea.style.left = originalY + (e.pageY - originalMouseY) + "px";
        } else {
          // console.log("canvas width can not be less than 20px");
        }
      }
    }

    function stopResize() {
      //window.removeEventListener("mousemove", resize);
      document.removeEventListener("mousemove", resize);
    }
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  // getAccess();
  // console.log("DOM fully loaded and parsed");

  componentDidMountInsideDom();
});

async function componentDidMountInsideDom() {
  // console.log("render after component has mounted");

  //await renderComponent();
}

//Utils
function genDocument(name, className = null, attr = {}) {
  // console.log({ name, className, attr });
  let newEle = document.createElement(name);
  newEle.classList.add(className);
  let attrKeys = Object.keys(attr);
  for (let i = 0; i < attrKeys.length; i++) {
    const akey = attrKeys[i];
    newEle.setAttribute(`data-t-${akey}`, attr[akey]);
  }
  return newEle;
}

function genEleDocument(node, styles, attr = {}) {
  if (!node) return;
  if (node.text == true) {
    const textNode = document.createTextNode(node.v);
    return textNode;
  }
  let newEle = document.createElement(node.tag);
  node.classes &&
    node.classes.forEach((cls) => {
      let styleObj = styles.style.find((ele) => ele._id == cls);
      //@todo - link the id to get the exact phrase value, then append
      //console.log({styleObj})
      //create and add new style rule to doc
      //@example .[sel]{["styleLess"]}
      newEle.classList.add(styleObj?.data.sel.substring(1) || cls);
    });
  //newEle.classList.add(node.classes[0]);
  let newAttr = Object.assign({}, attr, { id: node._id });
  let attrKeys = Object.keys(newAttr);
  let eleAttrKeys = node.data && Object.keys(node.data);

  //Element attribute/props
  if (eleAttrKeys && Array.isArray(eleAttrKeys)) {
    for (let i = 0; i < eleAttrKeys.length; i++) {
      const akey = eleAttrKeys[i];
      if (akey.tag || akey.type) return;
      newEle.setAttribute(`${akey}`, node.data[akey]);
    }
  }
  //data attributes
  for (let i = 0; i < attrKeys.length; i++) {
    const akey = attrKeys[i];
    newEle.setAttribute(`data-t-${akey}`, newAttr[akey]);
    newEle.setAttribute(`${akey}`, newAttr[akey]);
  }
  return newEle;
}

function genAGridDocument(colNum, rowNum, width = "auto", height = "50px") {
  let grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
  grid.style.gridAutoColumns = "1fr";
  grid.style.gridTemplateRows = "auto";
  grid.style.gap = "40px";
  let gridCol; // = document.createElement("div");
  //let gridRow = document.createElement("div");
  for (let i = 0; i < colNum; i++) {
    gridCol = document.createElement("div");
    gridCol.classList.add("grid-column");
    gridCol.setAttribute("data-col", `${i}`);
    for (let j = 0; j < rowNum; j++) {
      let gridRow = document.createElement("div");
      gridRow.setAttribute("data-id", `${i}${j}`);
      gridRow.setAttribute("data-cell", `${i}${j}`);
      gridRow.style.height = height;
      gridRow.style.width = width;
      gridRow.style.gap = "40px";
      gridRow.style.backgroundColor = `#${i}${i}eaa${j}`;
      gridRow.classList.add("grid-row");
      gridCol.appendChild(gridRow);
    }

    grid.appendChild(gridCol);
  }
  // let newEle = document.createElement(name);
  // createEle.classList = className;
  //console.log({grid});
  return grid;
}
async function renderComponent(domTree = "") {
  let frame = document.getElementById("site-iframe-next");
  let doc = document.implementation.createHTMLDocument("New Document 2");

  let siteContent = document.createElement("div");
  let sectionEle = document.createElement("section");
  sectionEle.innerHTML = `<div><h1>Heading H1</h1><p>lorem ipsum dhfbjrhirbi fiubf</p><div><div class='gridList'></div><div class='gridList'></div></div</div>`;
  siteContent.appendChild(sectionEle);

  doc.body.appendChild(siteContent);

  const destDocument = frame.contentDocument;
  const srcNode = doc.documentElement;

  const newNode = destDocument.importNode(srcNode, true);

  destDocument.replaceChild(newNode, destDocument.documentElement);
  return doc;
}

function convertArrToTree(indexEle, arr, styles, j, parent) {
  if (!isEmpty(indexEle) || !Array.isArray(arr)) {
    let newEle = genEleDocument(indexEle, styles);
    if (indexEle.children) {
      indexEle.children.forEach((e) => {
        let childEleDetail = arr.find((ele) => ele._id == e);
        convertArrToTree(childEleDetail, arr, styles, j + 1, newEle);
      });
    }
    if (!parent || parent == undefined || typeof parent == undefined) {
      return newEle;
    }
    parent && parent.appendChild(newEle);
  }
}

function tranformTreeToDoc(data) {
  //console.log("recursion:...",data)
  const isObjEmpty = Object.keys(data);
  if (isObjEmpty && isObjEmpty.length < 2) {
    // console.log("data should not be empty or less that three props");
    return;
  }
  const indexElement = data.nodes[0],
    cssStyle = data.styles;
  return (function renderArrTotree(indexEle, arr, styles, j, parent) {
    // console.log("recursion...", { indexEle, arr, styles, j, parent });

    // Generate the element for the current node
    let newEle = genEleDocument(indexEle, styles);

    // Ensure indexEle and its children exist
    if (indexEle && indexEle.children) {
      indexEle.children.forEach((e) => {
        // Find the child element by its ID
        let childEleDetail = arr.find((ele) => ele._id == e);

        // Ensure childEleDetail is valid before recursing
        if (childEleDetail) {
          renderArrTotree(childEleDetail, arr, styles, j + 1, newEle);
        }
      });
    }

    // Check if the parent is valid and append the new element
    if (!parent || parent == undefined || typeof parent == undefined) {
      return newEle;
    }

    // Append the new element to the parent
    parent && parent.appendChild(newEle);
  })(indexElement, data.nodes, cssStyle, 0, undefined);

}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
// this is to setup the head section of our html
//@todo - cleanup the innerHTML statement
async function setUpHeadTag(doc, pageTitle = "home") {
  const head = doc.head;
  const meta1 = doc.createElement("meta");
  const meta2 = doc.createElement("meta");
  const styleEl = doc.createElement("style");
  const linkDefaultGfont = doc.createElement("link");

  meta1.setAttribute("name", "utf-8");
  meta2.setAttribute("charset", "viewport");
  meta2.setAttribute("content", "width=device-width, initial-scale=1");

  linkDefaultGfont.setAttribute("type", "text/css");
  linkDefaultGfont.setAttribute("rel", "stylesheet");
  linkDefaultGfont.setAttribute("href", "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  styleEl.innerText = siteCss2;
  head.appendChild(meta1);
  head.appendChild(meta2);
  head.appendChild(linkDefaultGfont);
  head.appendChild(styleEl);
}

//   async function setupStylesheet(doc){
//     //const newCssInstance = new CSSStyleSheet();
//     let stylesheet = new CSSStyleSheet({ media: "print" });
//     stylesheet.insertRule("* { background-color: blue; }");
//     stylesheet.replaceSync("a { color: red; }");
//     console.log({stylesheet});

//   }

// function addCSSRule(sheet, selector, rules, index) {
//     console.log({sheet});
//     if("insertRule" in sheet) {
//         sheet.insertRule(selector + "{" + rules + "}", index);
//     } else if("addRule" in sheet) {
//         sheet.addRule(selector, rules, index);
//     }
// }

async function addStylesheetRule(doc, rules) {
  const styleEl = doc.createElement("style");
  styleEl.setAttribute("type", "text/css");
  styleEl.setAttribute("rel", "stylesheet");
  // Append <style> element to <head>
  doc.head.appendChild(styleEl);

  // console.log("append element to head ", { rules });

  // Grab style element's sheet
  const styleSheet = styleEl.sheet;
  // console.time("load styling ", { styleSheet });
  for (let i = 0; i < rules.length; i++) {
    const ele = rules[i];
    // Insert CSS Rule
    await styleSheet.insertRule(
      `${ele.data.sel}{${ele.data.styleLess}}`,
      styleSheet.cssRules.length
    );
  }
  //console.log({keysl: Object.keys(styleEl), keys2: Object.keys(styleSheet)})
  // console.timeEnd("load styling ");
  //console.log({lencssRules: styleSheet.cssRules.length})
}
function stylesheetRule(doc) {
  // console.log(
  //   "----------------------- stylesheetRule =-----------------------------"
  // );

  // const styleEl = doc.createElement("style");
  // styleEl.setAttribute("type", "text/css")
  // styleEl.setAttribute("rel", "stylesheet")
  // // Append <style> element to <head>
  // doc.head.appendChild(styleEl);
  // // Grab style element's sheet
  // let styleSheet = styleEl.sheet;


  async function addCssRule(newRule) {
    // console.log(doc, newRule);
    const styleEl = doc.createElement("style");
    styleEl.setAttribute("type", "text/css");
    styleEl.setAttribute("rel", "stylesheet");

    doc.head.appendChild(styleEl);
    const styleSheet = styleEl.sheet;

    let tinyStyle = ''
    let smallStyle = ''
    let mediumStyle = ''
    let largeStyle = ''
    let xxlStyle = ''


    // console.log({ styleEl, styleSheet });

    for (let i = 0; i < newRule.length; i++) {
      let ele = newRule[i];

      if (ele.hasOwnProperty('id')) {
        ele['style_id'] = ele['id'];
        delete ele['id'];
      }

      // console.log(ele.data.variants);

      const elementVarients = ele.data.variants
      // console.log(elementVarients);
      for (const variants in elementVarients) {
        if (Object.hasOwnProperty.call(elementVarients, variants)) {
          applyVarient(variants, elementVarients)
        }
      }

      // Insert CSS RuleRule
      await styleSheet.insertRule(
        `${ele.data.sel}{${ele.data.styleLess}}`,
        styleSheet.cssRules.length
      );
    }

    let tiny = `@media (max-width: 470px) {${tinyStyle}}`
    let small = `@media (max-width: 767px) {${smallStyle}}`
    let medium = `@media (max-width: 990px) {${mediumStyle}}`
    let large = `@media (min-width: 1280px) {${largeStyle}}`
    let xxl = `@media (min-width: 1600px) {${xxlStyle}}`





    function applyVarient(varient, elementVarients) {

      switch (varient) {
        case "tiny":
          let tinyV = elementVarients[varient];
          tinyStyle += `${tinyV.sel}{${tinyV.styleLess}} `
          break;

        case "small":
          let smallV = elementVarients[varient];
          smallStyle += `${smallV.sel}{${smallV.styleLess}} `
          // console.log(smallStyle);
          break;

        // case "main":
        //   console.log(varient);
        //   break;

        case "medium":
          let mdm = elementVarients[varient];
          mediumStyle += `${mdm.sel}{${mdm.styleLess}} `
          // console.log(mediumStyle);
          break;

        case "large":
          let largeV = elementVarients[varient];
          largeStyle += `${largeV.sel}{${largeV.styleLess}} `
          // console.log(largeStyle);
          break;

        case "xxl":
          let xxlV = elementVarients[varient];
          xxlStyle += `${xxlV.sel}{${xxlV.styleLess}} `
          // console.log(xxlStyle);
          break;
        default:
          break;
      }
    }



    //medium
    await styleSheet.insertRule(
      medium,
      styleSheet.cssRules.length
    );
    //small
    await styleSheet.insertRule(
      small,
      styleSheet.cssRules.length
    );
    //tiny
    await styleSheet.insertRule(
      tiny,
      styleSheet.cssRules.length
    );
    //large
    await styleSheet.insertRule(
      large,
      styleSheet.cssRules.length
    );
    //xxl
    await styleSheet.insertRule(
      xxl,
      styleSheet.cssRules.length
    );

    //console.log({ styleSheet });
  }

  async function addIdStyles(styles) { }

  async function replaceCssRule(textRule) {
    await styleSheet.replaceSync(textRule);
  }

  async function removeCssRule(index) {
    await styleSheet.deleteRule(index);
  }

  function getStyleSheet() {
    // return styleSheet;
  }

  return {
    addCssRule,
    replaceCssRule,
    removeCssRule,
    getStyleSheet,
  };
}
async function compileAndAddEvent(arrTrigger, handler) {
  if (!arrTrigger) return;
  arrTrigger.list.map(async (trigger, i) => {
    let eleNode = document.querySelector(`[data-td-id="${trigger._id}"]`); //selet by attr id
    if (!eleNode) {
      return;
    }
    await eleNode.addEventListener("click", function (e) {
      eleNode.dataset.tdType.toUpperCase();
      handler(eleNode);
    });
  });
}

function setupSidebarRight(props) {
  if (Object.keys(props).length > 2) {
    return { message: "No Props of Element is selected" };
  }
  const { activeElement } = props;
  const rightSidebar = document.getElementById("sidebar-right");
  return {
    renderHtml() {
      return {
        getStylesTab() {
          // console.log("Geting styles props for ", activeElement);
        },
      };
    },
  };
}

function editorTd() {
  function singleClick(ele) {
    ele.preventDefault();
    //hightlight element
    // add border lin with blue or red color
    // set to active selected state
  }

  function doubleClick(ele) {
    ele.preventDefault();
    // add in-line style
    // add a switch statement to determine the element before assigning behaivor
    // set some attribute e.g. spell check, content-editable
    // style="white-space: pre-wrap;" spellcheck="true" data-gramm_editor="false" contenteditable="true" data-editing-component-property="false"
  }

  return {
    singleClick,
    doubleClick,
  };
}

//utility functions
function switchOnOffSideBar(status, target) {
  let overlayPanel = document.querySelector(".nc-overlay-panel-layer-left"); //td-overlay-panel-layer-left, none
  //const getStatus = status? "block" : "none";
  let _container = document.querySelector(".sidebar-container")
  _container.childNodes.forEach(function (innerNode) {
    innerNode.style.backgroundColor = "transparent";
  });

  const getStyleBg = "#101828"
  overlayPanel.style.display = overlayPanel.style.display == "none" ? "block" : "none";
  target.parentNode.style.backgroundColor = getStyleBg;
}

function viewIndicator(canvasWindow, useCase, store, stack, htmlState, previewStateForGuest, previewMode, cssStyleInstance, stylesState) {
  let currentNode;
  const doc = canvasWindow.document;
  //init and create the element
  initIndicatorViews();

  //function highlightNode(wraperDiv, color = "red"){
  function highlightNode(wraperDiv, color = "#980") {
    doc.addEventListener("mouseover",
      function (event) {
        //event.preventDefault();
        let selectedEle = event.target;
        const officiallySelected = false
        setOutlineStyle(selectedEle, wraperDiv, color, officiallySelected);

        //set new active element
        //setActiveTab(true, {node: selectedEle});
      },
      false
    );


    doc.addEventListener("mousedown",
      function (event) {
        let selectedEle = event.target;
        let log;

        switch (event.button) {
          case 0:
            log = "Left button clicked.";
            break;
          case 1:
            log = "Middle button clicked.";
            break;
          case 2:
            event.preventDefault();
            //display custom modal
            useCase.reactModelMount.handleRightClick();
            break;
          case 3:
            //browser back button
            useCase.reactModelMount.handleRightClick();
            break;
          case 4:
            //browser forward button
            useCase.reactModelMount.handleRightClick();
            break;
          default:
            log = `Unknown button code: ${e.button}`;
        }
      },
      false
    );

    // doc.addEventListener("mousemove", function(event){
    //     //event.preventDefault();
    //     let selectedEle = event.target;

    //    // console.log("mousemove event... ",selectedEle)
    //     setOutlineStyle(selectedEle, wraperDiv);

    // }, false);


    //determine guests 
    const previewButton = document.querySelector('.design-preview-mode');
    const _getSidebarLeft = document.getElementById("td-main-sidebar-left");
    const _getSidebarRight = document.getElementById("sidebar-right");
    const _getBottombar = document.getElementById("td-bottomBar");
    const tdStyle = document.querySelector(".td__style-tool");
    const htmlMain = document.querySelector("html");
    const iframeTag = document.querySelector("iframe");
    const entireEndOfTopBar = document.querySelector(".topBar-group-right")


    if (previewStateForGuest.getValue()) {
      //console.log(1, "doing");
      previewOn()
      previewButton.style.display = "none"
      entireEndOfTopBar.innerHTML = ""
    }

    function previewOn() {
      if (_getSidebarLeft) _getSidebarLeft.style.display = "none";
      if (_getSidebarRight) _getSidebarRight.style.display = "none";
      if (_getBottombar) _getBottombar.style.display = "none";
      if (tdStyle && tdStyle.parentNode) {
        tdStyle.parentNode.removeChild(tdStyle);
      }

      htmlMain.classList.remove("sidebar-ignore-right", "sidebar-ignore-left", "ignore-bottom-bar");

      if (iframeTag) {
        iframeTag.style.height = "100vh";
      }
    }

  }

  function initIndicatorViews() {
    const _getToolContainer =
      document.getElementsByClassName("td__style-tool")[0];
    const _sectionWrapper = document.createElement("div");
    _sectionWrapper.style.position = "absolute";
    _sectionWrapper.style.height = "100%";
    //_sectionWrapper.style.width = "100%";
    _sectionWrapper.style.left = "0px";

    const _hoverDiv = document.createElement("div");
    _hoverDiv.classList.add(
      "bem-OutlineHoveredNode",
      "hovered-outline",
      "td-outline",
      "active"
    );
    _hoverDiv.setAttribute("data-auto-id", "outline-hovered-node");

    const _selectedDiv = document.createElement("div");
    _selectedDiv.classList.add(
      "tool-OutlineSelectedNode",
      "td-outline",
      "active"
    );
    _selectedDiv.setAttribute("data-auto-id", "outline-selected-node");

    _sectionWrapper.appendChild(_hoverDiv);
    _sectionWrapper.appendChild(_selectedDiv);

    highlightNode(_hoverDiv, "green");
    selectedPopupModal(_getToolContainer, _selectedDiv);


    selectedNode(_selectedDiv, "#456");



    //_getToolContainer.appendChild(_sectionWrapper);
    _getToolContainer.appendChild(_sectionWrapper);
  }

  function selectedPopupModal(parnetNode, selectedNode) {
    const _newDiv = document.createElement("div");
    const _newDiv2 = document.createElement("div");

    _newDiv2.classList.add("td-mini-setting");
    _newDiv2.id = "td-mini-setting";
    _newDiv2.setAttribute("data-auto-id", "td-mini-setting");
    // _newDiv2.style["backgroundColor"] = "#dddfff";
    // _newDiv2.style["width"] = "200px", _newDiv2.style["height"] = "100px", _newDiv2.style["position"] = "fixed";
    (_newDiv.style["height"] = "100%"), (_newDiv.style["width"] = "100%");
    (_newDiv2.style["position"] = "absolute"),
      (_newDiv2.style.left = "0px"), (_newDiv2.style.top = "20px"),
      (_newDiv2.style.touchAction = "none");

    doc.addEventListener("click", async function (event) {
      event.preventDefault();
      let selectedEle = event.target;
      let newPopUpDiv = await setOutlineStylePopUp2(
        selectedEle,
        _newDiv2,
        "red"
      );
      _newDiv.appendChild(newPopUpDiv);
    });

    //_newDiv.appendChild(_newDiv2);
    parnetNode.appendChild(_newDiv);
  }

  function selectedNodeClicked(selectedEle) {
    const tabsContainer = document.querySelector('.sidebar__tabs');

    tabsContainer.querySelectorAll('.tab').forEach((tab) => {
      tab.classList.remove('active');
    });
    tabsContainer.firstElementChild.classList.add("active")
    useCase.view.renderRightSideViewStyle({ status: true, node: selectedEle });

    let _divMain2 = document.querySelector("#mini-settings-td-container");
    if (_divMain2) {
      _divMain2.innerHTML = ""
    }


    //set and render new active element
    useCase.initView.bottomViewSelectedNodeBreadcrumb(selectedEle);

    handleKeyboardevent(selectedEle);

    setCurrentNode(selectedEle)
  }

  function selectedNodestylesSearch(selectedNode) {

    const sheets = doc.styleSheets

    const keys = Object.keys(sheets)
    const styleSheet = sheets[keys.length - 1]

    stylesState.getValue().styleSheet = styleSheet

    const screenSizes = [
      { screen: "default", styles: styleSheet.cssRules, media: "default" },
      { screen: "max990", styles: styleSheet.cssRules[styleSheet.cssRules.length - 5].cssRules, media: 5 },
      { screen: "max767", styles: styleSheet.cssRules[styleSheet.cssRules.length - 4].cssRules, media: 4 },
      // {screen:"max320", styles : styleSheet.cssRules[styleSheet.cssRules.length - 3]},
      { screen: "min1280", styles: styleSheet.cssRules[styleSheet.cssRules.length - 2].cssRules, media: 2 },
      { screen: "min1600", styles: styleSheet.cssRules[styleSheet.cssRules.length - 1].cssRules, media: 1 },
    ]


    screenSizes.forEach((obj, i) => {
      for (let i = 0; i < obj.styles.length; i++) {
        stylesState.getValue().currentSelectedStyles[obj.screen] = obj.styles[i];
        if (obj.styles[i].selectorText === `#${selectedNode.id}`) {
          break
        } else {
          stylesState.getValue().currentSelectedStyles[obj.screen] = null;
        }
      }
    });
  }

  function setCurrentNode(node) {
    currentNode = node
  }

  function getCurrentNode() {
    return currentNode
  }

  function selectedNode(wraperDiv, color = "red") {
    let targetNodeToEdit
    let textContent
    const tabsContainer = document.querySelector('.sidebar__tabs');




    doc.addEventListener("click", function (event) {
      event.preventDefault();
      let selectedEle = event.target;

      if (previewStateForGuest.getValue() || previewMode.getValue()) {
        mimicActions({ selectedEle, event: "click", doc: canvasWindow, cssStyleInstance, htmlState })
      } else {
        const officiallySelected = true
        setCurrentNode(selectedEle)
        selectedNodestylesSearch(selectedEle)
        setOutlineStyle(selectedEle, wraperDiv, color, officiallySelected);
        selectedNodeClicked(selectedEle)

        const isClickedInsideTargetNode = targetNodeToEdit && targetNodeToEdit.contains(selectedEle);
        // If not, remove input mode from targetNode
        if (!isClickedInsideTargetNode && targetNodeToEdit) {
          targetNodeToEdit.setAttribute("contenteditable", false);

          if (typeof textContent == 'undefined') {
            //delete initial value
            stack.getValue().deleteUndo()
          }
        }
      }
    });





    doc.addEventListener("dblclick", (e) => {
      e.preventDefault();
      targetNodeToEdit = e.target;


      if (targetNodeToEdit.firstChild.nodeType === Node.TEXT_NODE) {
        // true
        targetNodeToEdit.setAttribute("contenteditable", true);
        let tdtext = targetNodeToEdit.innerText;
        textContent;

        //style while editing
        targetNodeToEdit.style.outline = "none"


        const arrOfObj = htmlState.value.nodes
        const objectId = targetNodeToEdit.id;
        const parentObj = arrOfObj.find(obj => obj._id === objectId);
        const childrenId = parentObj.children[0]
        const childrenObj = arrOfObj.find(obj => obj._id === childrenId);


        //get initial value of text and push to stack before editing
        stack.getValue().pushUndo({ parent: null, node: childrenId, case: "TextChange", nodes: null, position: null, styles: null, text: tdtext })

        targetNodeToEdit.addEventListener('input', (e) => {
          textContent = targetNodeToEdit.innerText;

          //console.log(textContent, tdtext);

          // console.log(nodes)

          if (childrenObj) {
            //push to stack current value
            stack.getValue().pushUndo({ parent: null, node: childrenId, case: "TextChange", nodes: null, position: null, styles: null, text: textContent })

            childrenObj.v = textContent;

          }

        })
        // console.log({ newText: tdtext });        
      }
      targetNodeToEdit.classList.toggle("large");
    });


    tabsContainer.addEventListener("click", openRequiredTab)

    function openRequiredTab(event) {
      const selectedNode = getCurrentNode()
      if (!selectedNode) {
        return
      }
      const clickedTab = event.target.closest('.tab');

      if (clickedTab && tabsContainer.contains(clickedTab)) {

        tabsContainer.querySelectorAll('.tab').forEach((tab) => {
          tab.classList.remove('active');
        });

        clickedTab.classList.add('active');

        let selectedTab = clickedTab.getAttribute('data-auto-id').split("-")[2]

        switch (selectedTab) {
          case 'style':
            useCase.view.renderRightSideViewStyle({ status: true, node: selectedNode });
            break;
          case 'setting':
            useCase.view.renderRightSideViewImageSettings({ node: selectedNode })
            break;
          case 'animate':
            break;
          default:
            useCase.view.renderRightSideViewStyle({ status: true, node: selectedNode });
            break
        }
      }
    }
  }



  function handleKeyboardevent(selectedNode) {
    let slk = selectedNode;
    try {
      document.addEventListener(
        "keydown",
        (event) => {
          let isCtrl = event.ctrlKey || event.metaKey;

          switch (event.key) {
            case "ArrowDown":
              moveCursor('down');
              break;
            case "ArrowUp":
              moveCursor('up');
              break;
            case "ArrowLeft":
              moveCursor('left');
              break;
            case "ArrowRight":
              moveCursor('right');
              break;
            case "Enter":
              // Handle Enter key press
              break;
            case "Escape":
              // Handle Escape key press
              break;
            default:
              if (isCtrl) {
                switch (event.key) {
                  case "z":
                    // Handle undo (Ctrl+Z)
                    stack.getValue().popUndo()
                    break;
                  case "y":
                    // Handle redo (Ctrl+Y)
                    stack.getValue().popRedo()
                    break;
                  case "a":
                    // Highlight text (Ctrl+A)
                    doc.execCommand('selectAll');
                    break;
                  case "x":
                    // Cut text (Ctrl+X)
                    doc.execCommand('cut');
                    break;
                  default:
                    return; // Quit when this doesn't handle the key event.
                }
              } else {
                return; // Quit when this doesn't handle the key event.
              }
          }

          // Cancel the default action to avoid it being handled twice
          event.preventDefault();
        },
        true
      );
    } catch (error) {
      // console.error({ error });
    }

    function moveCursor(direction) {
      const selection = window.getSelection();
      if (!selection.rangeCount) return;

      const range = selection.getRangeAt(0);
      let newOffset = range.startOffset;

      if (direction === 'left' || direction === 'right') {
        if (direction === 'left') newOffset = Math.max(0, newOffset - 1);
        else if (direction === 'right') newOffset = Math.min(range.startContainer.textContent.length, newOffset + 1);

        range.setStart(range.startContainer, newOffset);
        range.setEnd(range.startContainer, newOffset);
      } else {
        const node = range.startContainer;
        const parentNode = node.parentNode;
        let targetNode;

        if (direction === 'up') {
          targetNode = findAdjacentNode(node, 'previousSibling');
        } else if (direction === 'down') {
          targetNode = findAdjacentNode(node, 'nextSibling');
        }

        if (targetNode) {
          range.setStart(targetNode, Math.min(newOffset, targetNode.textContent.length));
          range.setEnd(targetNode, Math.min(newOffset, targetNode.textContent.length));
        }
      }

      selection.removeAllRanges();
      selection.addRange(range);
    }

    function findAdjacentNode(node, siblingType) {
      while (node) {
        node = node[siblingType];
        if (node && node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
          return node;
        }
      }
      return null;
    }



  }


  async function setOutlineStyle(target, wraperDiv, color, officiallySelected) {
    const { offsetHeight, offsetWidth, offsetParent } = target;
    const { left, top } = target.getClientRects()[0];
    wraperDiv.style.display = "inline-block";
    wraperDiv.style.outline = `1px solid ${color}`;
    wraperDiv.style.position = "absolute";
    wraperDiv.style.width = `${offsetWidth}px`;
    wraperDiv.style.height = `${offsetHeight}px`;
    // wraperDiv.style.transform = `translate(${left}px, ${top + canvasWindow.scrollY
    //   }px)`;
    wraperDiv.style.top = `${top + canvasWindow.scrollY
      }px`
    wraperDiv.style.left = `${left}px`
    const result = await findRecordByIndex(target.dataset.tId);
    if (result) {
      let newObj = Object.assign({}, { arrObj: result }, { node: target });
      let selectedNodeIndicator = renderSelectedNodeIndicator(newObj, target, officiallySelected);
      wraperDiv.replaceChildren(selectedNodeIndicator);
    }
  }

  async function setOutlineStylePopUp2(target, wraperDiv, color) {
    const { offsetHeight, offsetWidth, offsetParent } = target;
    const { left, top } = target.getClientRects()[0];
    wraperDiv.style.display = "inline-block";
    // wraperDiv.style.outline = `1px solid ${color}`;
    wraperDiv.style.position = "absolute";
    // wraperDiv.style.width = `${offsetWidth}px`;
    // wraperDiv.style.height = `${offsetHeight}px`;
    wraperDiv.style.transform = `translate(${left}px, ${top + canvasWindow.scrollY
      }px)`;
    wraperDiv.style.zIndex = 99;
    //wraperDiv.style.top = `${top + canvasWindow.scrollY}px`;
    //const result = await findRecordByIndex(target.dataset.tId);

    //let newObj = Object.assign({}, {arrObj: result}, {node: target});
    // let selectedNodeIndicator = renderSelectedNodeIndicator(newObj);
    // wraperDiv.replaceChildren(selectedNodeIndicator);

    return wraperDiv;
  }
  async function removeNodeOutlineStyle(parentNode, target) {
    if (target.parentNode) {
      //first remove from node object before removing from dom
      const ttd = traverseAndCollectIds(target);
      // console.log(target.dataset.tTd,ttd);
      let nodesR = [];
      for (const id of ttd) {
        let v = htmlState.getValue().nodes.find((e) => e._id == id);
        nodesR.push(v);
      }
      const parent = target.parentNode.id;
      const node = target.id;
      const parentNodeOject = htmlState
        .getValue()
        .nodes.find((e) => e._id == parent);

      const position = parentNodeOject.children.indexOf(node);
      parentNodeOject.children.splice(position, 1);
      stack
        .getValue()
        .pushUndo({ parent, node, nodes: nodesR, position, case: "Removed" });
      // console.log(htmlState.getValue().nodes);

      for (const node of nodesR) {
        let indexofnode = htmlState.getValue().nodes.indexOf(node);
        htmlState.getValue().nodes.splice(indexofnode, 1);
      }
      target.remove();
    }

    //return;
  }

  function renderSelectedNodeIndicator(eleObj, target, officiallySelected) {
    //console.log(eleObj);
    let { arrObj, node } = eleObj;
    const _newDivMain = document.createElement("div");
    const _newDivMainInner = document.createElement("div");
    const _newDivCrumbs = document.createElement("div");
    let _newDivIconContainer = document.createElement("div");
    let _newDivOrderContainer = document.createElement("div");

    _newDivMain.classList.add("breadcrumbs");
    _newDivIconContainer.classList.add("mini-settings-td");
    _newDivIconContainer.id = "mini-settings-td";
    _newDivMainInner.classList.add("inner");
    _newDivCrumbs.classList.add("crumbs", "clearfix");
    _newDivOrderContainer.classList.add("order")

    _newDivMainInner.appendChild(_newDivCrumbs);


    const nodeArr = [
      { _id: "01", class: ["crumb"], active: false },
      { _id: "02", class: ["crumb"], active: true, data: {} },
    ];
    nodeArr.map((item) => {
      let _newDiv = document.createElement("div");
      _newDiv.classList.add("crumb");
      if (item.active) {
        _newDiv.classList.add("current");
        let _newDivInner2 = document.createElement("div");
        _newDivInner2.classList.add("inner", "indicator", "has-mini-settings");

        let _newDivIcon = document.createElement("div");
        let _newDivLabel = document.createElement("div");
        let _newDivIconSetting = document.createElement("div");
        let _newDivIconLink = document.createElement("div");
        let _newDivIconDelete = document.createElement("div");
        let _newDivUp = document.createElement("div");
        let _newDivDown = document.createElement("div");
        let _newDivDivider = document.createElement("div");
        _newDivIcon.classList.add("icon");
        _newDivLabel.classList.add("label");
        _newDivIconSetting.style.pointerEvents = 'auto';
        _newDivIconSetting.style.color = 'white';
        _newDivIconLink.style.color = 'white';
        _newDivIconDelete.style.pointerEvents = 'auto';
        _newDivIconLink.style.pointerEvents = 'auto';
        _newDivUp.style.pointerEvents = 'auto';
        _newDivDown.style.pointerEvents = 'auto';
        _newDivIconSetting.classList.add(
          "element",
          "setting",
          "mini-element-setting"
        );
        _newDivIconDelete.classList.add(
          "element",
          "setting",
          "mini-element-setting"
        );
        _newDivIconLink.classList.add(
          "element",
          "setting",
          "mini-element-setting"
        );
        _newDivIconDelete.setAttribute(
          "data-auto-id",
          "outline-breadcrumbs-mini-delete"
        );
        _newDivIconSetting.setAttribute(
          "data-auto-id",
          "outline-breadcrumbs-mini-settings"
        );
        _newDivIconLink.setAttribute(
          "data-auto-id",
          "outline-breadcrumbs-mini-settings"
        );
        _newDivIconSetting.innerHTML = `<span>${generateSvg('setting2')}</span>`;
        _newDivIconDelete.innerHTML = `<span>${generateSvg('delete')}</span>`
        _newDivIconLink.innerHTML = `<span>${generateSvg('mini-link')}</span>`

        _newDivUp.innerHTML = `<span>${generateSvg('up')}</span>`
        _newDivDown.innerHTML = `<span>${generateSvg('down')}</span>`
        _newDivDivider.innerHTML = `<span>${generateSvg('divider')}</span>`

        // _newDivIcon.innerHTML = `<span>&angmsdaa;</span>`;
        _newDivLabel.innerHTML = `<span>${arrObj.type || "H1 heading"}</span>`;



        _newDivUp.addEventListener("click", () => {
          let currentElement = node;
          let previousElement = currentElement.previousElementSibling;
          if (previousElement) {
            const initialPosition = Array.prototype.indexOf.call(currentElement.parentNode.children, currentElement);
            // console.log(`Initial Position: ${initialPosition}, ID: ${currentElement.id}`);
            currentElement.parentNode.insertBefore(currentElement, previousElement);
            updateHtmlState(currentElement.parentNode);
          }
        });

        _newDivDown.addEventListener("click", () => {
          let currentElement = node;
          let nextElement = currentElement.nextElementSibling;
          if (nextElement) {
            const initialPosition = Array.prototype.indexOf.call(currentElement.parentNode.children, currentElement);
            // console.log(`Initial Position: ${initialPosition}, ID: ${currentElement.id}`);
            currentElement.parentNode.insertBefore(nextElement, currentElement);
            updateHtmlState(currentElement.parentNode);
          }
        });



        const miniIconList = [_newDivIconSetting, _newDivIconLink, _newDivIconDelete]

        _newDivIconSetting.addEventListener("click", (e) => {
          //do somthing
          miniIconList.forEach(icon => {
            icon.firstElementChild.firstElementChild.classList.remove("highlightLinkIconAdded")
            icon.firstElementChild.firstElementChild.classList.remove("highlightSettingsIconAdded")
          })

          //highlight current 
          _newDivIconSetting.firstElementChild.firstElementChild.classList.add("highlightSettingsIconAdded")

          //mini setting  
          useCase.view.renderMinisetting({ node });

        });

        _newDivIconLink.addEventListener("click", (e) => {
          //do somthing
          miniIconList.forEach(icon => {
            icon.firstElementChild.firstElementChild.classList.remove("highlightLinkIconAdded")
            icon.firstElementChild.firstElementChild.classList.remove("highlightSettingsIconAdded")
          })

          //highlight current 
          _newDivIconLink.firstElementChild.firstElementChild.classList.add("highlightLinkIconAdded")


          //mini setting  
          useCase.view.renderMinisettingLink({ node });

        });

        _newDivIconDelete.addEventListener("click", function (e) {
          const target = node;
          if (target.parentNode) {
            //first remove from node object before removing from dom
            const ttd = traverseAndCollectIds(target);
            // console.log(target.dataset.tTd,ttd);
            let nodesR = [];
            for (const id of ttd) {
              let v = htmlState.getValue().nodes.find((e) => e._id == id);
              nodesR.push(v);
            }
            const parent = target.parentNode.id;
            const node = target.id;
            const parentNodeOject = htmlState
              .getValue()
              .nodes.find((e) => e._id == parent);

            const position = parentNodeOject.children.indexOf(node);
            parentNodeOject.children.splice(position, 1);
            stack
              .getValue()
              .pushUndo({ parent, node, nodes: nodesR, position, case: "Removed" });
            //console.log(htmlState.getValue().nodes);

            for (const node of nodesR) {
              let indexofnode = htmlState.getValue().nodes.indexOf(node);
              //console.log(indexofnode, "two");
              htmlState.getValue().nodes.splice(indexofnode, 1);
            }
            target.remove();
          }
          // remove outlineStyle
          const wrapperDiv = document.querySelector(".tool-OutlineSelectedNode");
          wrapperDiv.style.display = "none"
        })

        _newDivInner2.appendChild(_newDivIcon);
        _newDivInner2.appendChild(_newDivLabel);
        _newDivIconContainer.appendChild(_newDivIconDelete)
        _newDivIconContainer.appendChild(_newDivIconLink)
        _newDivIconContainer.appendChild(_newDivIconSetting)
        // _newDiv.appendChild(_newDivInner2);

        // const main = doc.querySelector("main");
        // const mainId = main.id

        // if (node.parentElement && node.parentElement.id === mainId) {
        //   _newDivOrderContainer.appendChild(_newDivUp);
        //   _newDivOrderContainer.appendChild(_newDivDivider);
        //   _newDivOrderContainer.appendChild(_newDivDown);
        //   if (!node.previousElementSibling) {
        //     _newDivUp.style.visibility = 'hidden';
        //   } else if (!node.nextElementSibling) {
        //     _newDivDown.style.visibility = 'hidden';
        //   }
        // }

        if (officiallySelected) {
          let new_divChild = document.createElement("div")
          new_divChild.id = "mini-settings-td-container"
          _newDivIconContainer.appendChild(new_divChild)
        }
      }
      _newDivCrumbs.appendChild(_newDiv);
    });

    _newDivMain.replaceChildren(_newDivMainInner);
    _newDivMain.appendChild(_newDivIconContainer)

    if (_newDivOrderContainer.children.length > 0) {
      _newDivMain.appendChild(_newDivOrderContainer);
    }


    const rect = node.getBoundingClientRect();
    const viewWidth = doc.body.clientWidth;

    // console.log("rect: " + rect)
    // console.log("viewportWidth: " + viewWidth)
    if (viewWidth <= 320) {
      _newDivOrderContainer.style.left = '-13px'
    } else if (viewWidth <= 991) {
      _newDivOrderContainer.style.left = '1px'
    } else if (viewWidth <= 1590) {
      _newDivOrderContainer.style.left = '-139px'
    }
    renderResponsive(_newDivMain, target)

    return _newDivMain;
  }

  function updateHtmlState(parentNode) {
    const childNodes = Array.from(parentNode.children);
    const parentNodeId = parentNode.id;
    const parentObj = htmlState.getValue().nodes.find(n => n._id === parentNodeId);

    if (parentObj && parentObj.children) {

      const newChildren = childNodes.map(child => child.id);
      parentObj.children = newChildren;
    }

  }






  function renderResponsive(container, target) {
    const rect = target.getClientRects()[0];
    if (rect.top < 65) {
      container.style.top = `auto`
      container.style.bottom = `-65px`
    }
  }

  async function findRecordByIndex(id) {
    let arr = store.node.getAllData(); //SITE_PAYLOAD.siteContent.nodes;
    for (let i = 0; i < arr.length; i++) {
      const ele = arr[i];
      if (ele._id == id || ele.id == id) {
        //console.log(`${ele._id} == ${id}`)
        return ele;
      }
    }
    return null; //not found
  }

  return {
    highlightNode,
    selectedNode,
    setOutlineStyle,
    selectedNodeClicked,
  };
}

function fscroll(doc, canvasWindow) {
  const canvasWindow2 = document.querySelector("iframe").contentWindow;
  let lastKnownScrollPosition = 0;
  let ticking = false;
  // console.log("Init..... ScrollEvent", { doc, canvasWindow2, canvasWindow })

  //set hover container before scrolling is initiated
  doSomething(0)


  canvasWindow2.document.addEventListener("scroll", async (evt) => {
    // console.log(".....", evt.target)
    await handleScrollEventII();
  });
  function fmousemovement() {
    canvasWindow2.document.addEventListener("mouseenter", async (evt) => {
      //await handleScrollEventII()
    });
    canvasWindow2.document.addEventListener("mouseover", async (evt) => {
      //await handleScrollEventII()
    });
  }

  function doSomething(scrollPos) {
    // Do something with the scroll position
    //console.log("logging scroll position...",{scrollPos});
    const docNodeHoverPos = document.querySelectorAll(`.--style-nc-tool > div`);
    //Array.isArray(docNodeHoverPos) &&
    //console.log("before..........",{docNodeHoverPos})
    docNodeHoverPos.forEach((item) => {
      //console.log("handling scroll.....",{item});
      item.style.position = `absolute`;
      item.style.top = `${scrollPos * -1}px`;
    });
    //const parentdocNodeHoverPos = document.querySelector(".td__style-tool");
    //console.log("..........",{docNodeHoverPos})
    //docNodeHoverPos.style.top = `${scrollPos *  -1 }px`;
  }

  function handleScrollEvent() {
    // console.log("Init..... ScrollEvent")
    doc.addEventListener("scroll", (event) => {
      //console.log("event...........", {event})
      lastKnownScrollPosition = canvasWindow.scrollY;

      if (!ticking) {
        canvasWindow.requestAnimationFrame(() => {
          doSomething(lastKnownScrollPosition);
          ticking = false;
        });

        ticking = true;
      }
    });
  }
  function handleScrollEventII() {
    lastKnownScrollPosition = canvasWindow2.scrollY;
    //console.log("Init..... ScrollEvent II",lastKnownScrollPosition)
    if (!ticking) {
      canvasWindow2.requestAnimationFrame(() => {
        doSomething(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  }

  return {
    handleScrollEvent,
  };
}



function nodeMainManager(canvasWindow, store, cssStyleInstance, activeStack, htmlState) {
  let doc = canvasWindow.document;
  async function addComponent(
    arrTree,
    parentTagSelector = "0a3cc0d1-866a-6dc2-09ac-034856d1bcad"
  ) {
    // console.log(arrTree);
    let mainWrapper;
    const leftPanelWrapper = document.querySelector(
      `#td-overlay-panel-layer-left`
    );
    if (typeof parentTagSelector == "string")
      mainWrapper = doc.querySelector(`[data-t-id="${parentTagSelector}"]`);
    mainWrapper = doc.querySelector("main");

    if (!arrTree) throw new Error("arrTree not found ", arrTree);
    if (!mainWrapper) {
      mainWrapper = document.createElement("main");
      // console.log({ mainWrapper });
      doc.body.appendChild(mainWrapper);
      //throw new Error("Tag not found ",mainWrapper);
    }
    const newlyCreatedComponent = await createComponent(arrTree);
    newlyCreatedComponent.draggable = true;
    // console.log({ newlyCreatedComponent });
    mainWrapper.appendChild(newlyCreatedComponent);
    // reorderEle(newlyCreatedComponent)

    //canvasWindow
    canvasWindow.scrollTo({
      top: newlyCreatedComponent.offsetTop,
      left: newlyCreatedComponent.offsetLeft,
      behavior: "smooth",
    });
    leftPanelWrapper.style.display = "none";
    return newlyCreatedComponent;
  }

  function removeNode(nodehtml) {
    // console.log("remove this node: ", nodehtml);
  }

  async function createComponent(data) {
    const newData = replaceIds(data);
    const { styles, node } = newData;
    let newl = store.node.addData(newData);
    //console.log({incomingData: data.node.length, len2: newl.length, data});
    //iteration
    const htmlDoc = await tranformTreeToDoc(newData.node);
    //await addStylesheetRule(doc, styles.blocks);
    if (styles) {
      if (styles.style) {
        await cssStyleInstance.addCssRule(styles.style);
      } else {
        await cssStyleInstance.addCssRule(styles.blocks);
      }

    }
    return htmlDoc; //.textContent = "God is love";
  }

  function tranformTreeToDoc(data) {
    //console.log("recursion:...",data[0]);
    if (!Array.isArray(data)) return;
    const indexElement = data[0],
      cssStyle = []; //data.styles;
    return (function renderArrTotree(indexEle, arr, styles, j, parent) {
      //console.log("recursion...",{indexEle, arr, styles, j, parent})
      let newEle = genEleDocument(indexEle); //, styles);
      if (indexEle.children) {
        indexEle.children.forEach((e) => {
          let childEleDetail = arr.find((ele) => ele._id == e);
          renderArrTotree(childEleDetail, arr, styles, j + 1, newEle);
        });
      }
      if (!parent || parent == undefined || typeof parent == undefined) {
        return newEle;
      }
      parent && parent.appendChild(newEle);
    })(indexElement, data, cssStyle, 0, undefined);
  }

  const sections = htmlState.value.nodes;
  // function handleReorder(direction, element) {
  //   const parent = element.parentElement;
  //   // console.log(params);

  //   if (direction === 'up' && element.previousElementSibling) {
  //     parent.insertBefore(element, element.previousElementSibling);
  //   } else if (direction === 'down' && element.nextElementSibling) {
  //     parent.insertBefore(element.nextElementSibling, element);
  //   }

  //   canvasWindow.scrollTo({
  //     top: element.offsetTop,
  //     left: element.offsetLeft,
  //     behavior: "smooth",
  //   })


  // }
  // function reorderEle(newlyCreatedComponent) {
  //   const btnContainer = document.createElement('div');

  //   // SVG 1
  //   const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  //   svg1.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  //   svg1.setAttribute("width", "17");
  //   svg1.setAttribute("height", "17");
  //   svg1.setAttribute("viewBox", "0 0 17 17");
  //   svg1.setAttribute("fill", "none");

  //   const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  //   path1.setAttribute("d", "M8.93587 13.6016V4.26823M8.93587 4.26823L4.26921 8.9349M8.93587 4.26823L13.6025 8.9349");
  //   path1.setAttribute("stroke", "#344054");
  //   path1.setAttribute("stroke-width", "1.48387");
  //   path1.setAttribute("stroke-linecap", "round");
  //   path1.setAttribute("stroke-linejoin", "round");

  //   svg1.appendChild(path1);

  //   // SVG 2
  //   const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  //   svg2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  //   svg2.setAttribute("width", "17");
  //   svg2.setAttribute("height", "17");
  //   svg2.setAttribute("viewBox", "0 0 17 17");
  //   svg2.setAttribute("fill", "none");

  //   const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  //   path2.setAttribute("d", "M8.93522 3.88281V13.2161M8.93522 13.2161L13.6019 8.54948M8.93522 13.2161L4.26855 8.54948");
  //   path2.setAttribute("stroke", "#344054");
  //   path2.setAttribute("stroke-width", "1.48387");
  //   path2.setAttribute("stroke-linecap", "round");
  //   path2.setAttribute("stroke-linejoin", "round");

  //   svg2.appendChild(path2);

  //   // SVG 3
  //   const svg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  //   svg3.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  //   svg3.setAttribute("width", "13");
  //   svg3.setAttribute("height", "7");
  //   svg3.setAttribute("viewBox", "0 0 13 7");
  //   svg3.setAttribute("fill", "none");

  //   const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  //   path3.setAttribute("d", "M0.935547 6.74219L0.935547 5.24219L12.9355 5.24219L12.9355 6.74219L0.935547 6.74219ZM0.935547 2.24219L0.935547 0.742188L12.9355 0.742188V2.24219L0.935547 2.24219Z");
  //   path3.setAttribute("fill", "#D0D5DD");

  //   svg3.appendChild(path3);

  //   // Append SVG elements to btnContainer
  //   btnContainer.appendChild(svg1);
  //   btnContainer.appendChild(svg3);
  //   btnContainer.appendChild(svg2);

  //   newlyCreatedComponent.appendChild(btnContainer);

  //   newlyCreatedComponent.addEventListener('mouseenter', () => {
  //     btnContainer.style.cssText = `

  //       display: flex;
  //       flex-direction: column;
  //       justify-content: space-between;
  //       align-items: center;
  //       gap: 10px;
  //       height: 100px;
  //       box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  //     `
  //   });

  //   newlyCreatedComponent.addEventListener('mouseleave', () => {
  //     btnContainer.style.display = 'none';
  //   });

  //   btnContainer.addEventListener("mouseenter", () => {
  //     btnContainer.style.cursor = 'pointer';
  //   })

  //   svg2.onclick = () => handleReorder('down', newlyCreatedComponent);
  //   svg1.onclick = () => handleReorder('up', newlyCreatedComponent);


  // }

  //private methid
  function genEleDocument(node, styles, attr = {}) {
    if (!node) return;
    if (node.text == true) {
      const textNode = document.createTextNode(node.v);
      return textNode;
    }
    let newEle = document.createElement(node.tag);
    node.classes &&
      node.classes.forEach((cls) => {
        if (!styles) {
          newEle.classList.add(cls);
        } else {
          let styleObj = styles.blocks.find((ele) => ele._id == cls);
          //@todo - link the id to get the exact phrase value, then append
          //console.log({styleObj})
          //create and add new style rule to doc
          //@example .[sel]{["styleLess"]}
          newEle.classList.add(styleObj?.data.sel.substring(1) || cls);
        }
      });
    //newEle.classList.add(node.classes[0]);
    let newAttr = Object.assign({}, attr, { id: node._id });
    let attrKeys = Object.keys(newAttr);
    let eleAttrKeys = node.data && Object.keys(node.data);

    //Element attribute/props
    if (eleAttrKeys && Array.isArray(eleAttrKeys)) {
      for (let i = 0; i < eleAttrKeys.length; i++) {
        const akey = eleAttrKeys[i];
        if (akey.tag || akey.type) return;
        newEle.setAttribute(`${akey}`, node.data[akey]);
      }
    }
    //data attributes
    for (let i = 0; i < attrKeys.length; i++) {
      const akey = attrKeys[i];
      newEle.setAttribute(`data-t-${akey}`, newAttr[akey]);
      newEle.setAttribute(`${akey}`, newAttr[akey]);
    }
    return newEle;
  }

  return {
    addComponent,
    removeNode,
  };
}


async function veiwSection(
  outDoc,
  data,
  event,
  utils,
  activeStack,
  htmlState,
  cssStyleInstance,
  innerDoc,
  appState,
  previewStateForGuest,
  initialScreenChangeState,
  sharedObject,
  previewMode,
  stylesState
) {
  const { nodeMainManager } = event;

  //display this at the initate level
  renderMainAndTop(data);
  const leftView = renderLeftSideView(data.dataRepo);
  leftView.leftMostpaneView(outDoc, data.dataRepo);

  //init stylesfstyle
  const tdStyleToolsInstance = fStyle.fstyleTools(htmlState, activeStack, stylesState);
  const tdStyleInstance = fStyle.fstyleCat(tdStyleToolsInstance, initialScreenChangeState, stylesState);

  async function renderRightSideViewImageSettings(props) {
    let { node } = props;
    let currentNode = htmlState.getValue().nodes.find(e => e._id == node.id)
    const canvasArea = document.getElementById("site-iframe-next")

    let width = canvasArea.offsetWidth

    canvasArea.contentWindow.addEventListener("resize", function () {
      width = canvasArea.offsetWidth
    });

    let innerContentWrapper = document.querySelector(
      `.sidebar__tab-pane .sidebar__tab-heading`
    );
    let sidebarMainSetting = document.querySelector(
      `#sidebar__tab-style-props`
    );

    sidebarMainSetting.innerHTML = ''
    sidebarMainSetting.style.display = "none"

    switch (node.tagName.toLocaleLowerCase()) {
      case 'img':
        renderRightSideViewImageSettings()
        break;

      default:
        renderRightSideViewOTherElementSettings()
        break;
    }

    function renderRightSideViewImageSettings() {
      let currentImage = appState.getValue().assets.images.find(e => e.url === node.src)




      innerContentWrapper.innerHTML = `
      <div class="image-settings-gen-container">
      <div class="image-settings-get-container-first">
        <div class="image-settings-get-container-first-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <mask id="mask0_7426_64355" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect x="24" width="24" height="24" transform="rotate(90 24 0)" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_7426_64355)">
              <path d="M8.94687 11.9996L14.6219 6.34961L15.6719 7.39961L11.0719 11.9996L15.6719 16.5996L14.6219 17.6496L8.94687 11.9996Z" fill="white"/>
            </g>
          </svg>
          <p class="remove-image-margin-p">Image settings</p>
        </div>
        <div class="image-settings-get-container-first-2">
          <div style="display:flex; align-items:center;">
            <img src="${node.src}" alt="" style="border: 2.50px white solid; object-fit:cover; object-position:center;" srcset="">
          </div>
        </div>
        <label for="replace-image-gen" class="image-settings-gen-container-button">
          ${generateSvg('replace')}
          <span>Replace Image </span>
          <input style="display: none;" type="file" accept="image/jpeg, image/png, image/jpg"  id="replace-image-gen">
        </label>
      </div>

      <div class="image-settings-set-container-hr"></div>

      <div class="image-settings-gen-container-second">
        <div class="image-settings-gen-container-second-input">
          <span>Width</span>
          <div>
            <input type="number" value="${node.width}" name="" id="image-setting-width">
            <span>PX</span>
          </div>
        </div>
        <div class="image-settings-gen-container-second-input">
          <span>Height</span>
          <div>
            <input type="number" value="${node.height}" name="" id="image-setting-height">
            <span>PX</span>
          </div>
        </div>
      </div>

      <div class="image-settings-set-container-hr"></div>

      <div class="image-settings-get-container-first-1 image-settings-gen-container-sixth">
        <p class="remove-image-margin-p">File Details</p>
      </div>

      <div class="image-settings-set-container-hr"></div>

      <div  class="image-settings-gen-container-third">
        <div class="image-settings-gen-container-third-first">
          <p class="image-settings-set-container-middle-p remove-image-margin-p">Type</p>
          <div class="image-settings-gen-container-third-first">
            <p class="remove-image-margin-p">${currentImage ? currentImage.type : "Not Found"}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <g clip-path="url(#clip0_7428_64835)">
                <path d="M5.83687 7.58299C6.08738 7.9179 6.40699 8.19501 6.77402 8.39553C7.14105 8.59606 7.54691 8.7153 7.96408 8.74518C8.38125 8.77506 8.79996 8.71487 9.19182 8.56869C9.58368 8.42252 9.93952 8.19378 10.2352 7.89799L11.9852 6.14799C12.5165 5.5979 12.8105 4.86114 12.8038 4.0964C12.7972 3.33166 12.4904 2.60012 11.9497 2.05935C11.4089 1.51858 10.6774 1.21183 9.91262 1.20519C9.14788 1.19854 8.41112 1.49253 7.86103 2.02382L6.8577 3.02132M8.1702 6.41632C7.91969 6.08141 7.60008 5.8043 7.23305 5.60377C6.86602 5.40325 6.46016 5.284 6.04299 5.25413C5.62582 5.22425 5.20711 5.28444 4.81525 5.43061C4.42339 5.57679 4.06755 5.80553 3.77187 6.10132L2.02187 7.85132C1.49057 8.40141 1.19659 9.13817 1.20324 9.90291C1.20988 10.6676 1.51662 11.3992 2.0574 11.94C2.59817 12.4807 3.32971 12.7875 4.09445 12.7941C4.85919 12.8008 5.59594 12.5068 6.14603 11.9755L7.14353 10.978" stroke="#98A2B3" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_7428_64835">
                  <rect width="14" height="14" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div class="image-settings-gen-container-third-first">
          <p class="image-settings-set-container-middle-p remove-image-margin-p">Size</p>
          <p class="remove-image-margin-p">${currentImage ? (Number(currentImage.size) / (1024 * 1024)).toFixed(2) : "NotFound"}MB</p>
        </div>
        <div class="image-settings-gen-container-third-first">
          <p class="image-settings-set-container-middle-p remove-image-margin-p" >Resolution</p>
          <p class="remove-image-margin-p">${currentImage ? currentImage.resolution.width : "NotFound"} Px ${currentImage ? currentImage.resolution.height : "NotFound"} PX</p>
        </div>
      </div>

      <div class="image-settings-set-container-hr"></div>
      <div  class="image-settings-gen-container-forth">
        <div class="image-settings-gen-container-forth-input">
          <span>Alt text</span>
          <textarea id="image-setting-gen-alt-edit" cols="10" placeholder="A big dinosaur with wings" rows="2">${node.alt}</textarea>
        </div>
        <div class="image-settings-gen-container-forth-input">
          <span>Image click behaviour</span>
          <select>
            <option value="one">None</option>
          </select>
        </div>
      </div>

      <div class="image-settings-set-container-hr"></div>

      <div class="image-settings-get-container-first-1 image-settings-get-container-fifth">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <mask id="mask0_7426_64355" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect x="24" width="24" height="24" transform="rotate(90 24 0)" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_7426_64355)">
            <path d="M8.94687 11.9996L14.6219 6.34961L15.6719 7.39961L11.0719 11.9996L15.6719 16.5996L14.6219 17.6496L8.94687 11.9996Z" fill="white"/>
          </g>
        </svg>
        <p class="remove-image-margin-p">Image Design</p>
      </div>

      <div class="image-settings-set-container-hr"></div>

      <div class="image-settings-get-container-seventh">
        <div style="width: 55px;height: 55px; position:relative;">
          ${generateSvg('frame-check')}
          <img class="image-frame-exp" id="image-frame-exp-1" style="width: 100%; height: 100%;background: linear-gradient(0deg, #475467 0%, #475467 100%);object-fit: cover;object-position: center;" src="${node.src}" alt="${node.alt}" />
        </div>
        <div style="width: 55px;height: 55px; position:relative;">
          ${generateSvg('frame-check')}
          <img class="image-frame-exp" id="image-frame-exp-2"  style="width: 100%; height: 100%; position: relative; background: linear-gradient(0deg, #475467 0%, #475467 100%); border: 2.50px #101828 solid;object-fit: cover;object-position: center;" src="${node.src}"  alt="${node.alt}" />
        </div>
        <div style="width: 55px;height: 55px; position:relative;">
          ${generateSvg('frame-check')}
          <img id="image-frame-exp-3" class="image-frame-exp"  style="width: 100%; height: 100%; position: relative; background: linear-gradient(0deg, #475467 0%, #475467 100%); border-radius: 4px;object-fit: cover;object-position: center;" src="${node.src}" alt="${node.alt}" />
        </div>
        <div style="width: 55px;height: 55px; position:relative;">
          ${generateSvg('frame-check')}
          <img id="image-frame-exp-4" class="image-frame-exp"  style="width: 100%; height: 100%; position: relative; background: linear-gradient(0deg, #475467 0%, #475467 100%); box-shadow: 0px 24px 48px -12px rgba(15.96, 23.62, 40.04, 0.18); border: 2.50px white solid;object-fit: cover;object-position: center;" src="${node.src}" alt="${node.alt}" />
        </div>
        <div style="width: 55px;height: 55px; position:relative;">
          ${generateSvg('frame-check')}
          <img id="image-frame-exp-5" class="image-frame-exp"  style="width: 100%; height: 100%; background: linear-gradient(0deg, #475467 0%, #475467 100%); border-radius: 100px;object-fit: cover;object-position: center;" src="${node.src}" alt="${node.alt}" />
        </div>
        <div style="width: 55px;height: 55px; position:relative;">
          ${generateSvg('frame-check')}
          <img id="image-frame-exp-6" class="image-frame-exp"  style="width: 100%; height: 100%; background: linear-gradient(0deg, #475467 0%, #475467 100%); border-radius: 100px; border: 2.50px white solid;object-fit: cover;object-position: center;" src="${node.src}" alt="${node.alt}" />
        </div>
        <div  style="width: 55px;height: 55px; position:relative;">
          ${generateSvg('frame-check')}
          <img id="image-frame-exp-7" class="image-frame-exp" style="width: 100%; height: 100%; padding-bottom: 8px;  background: linear-gradient(0deg, white 0%, white 100%);border: 2.50px solid white ;object-fit: cover;object-position: center;" src="${node.src}" alt="${node.alt}" />
        </div>
      </div>
      
    </div>
      `
      document.getElementById('image-setting-width').addEventListener("input", function (e) {
        let unitCat = 'px'

        if (width < 767) {
          tdStyleToolsInstance.updateStyleMediaRule(node.id, `${e.target.value}${unitCat}`, 'width', 4)
          //properties include nodeId, value, property to edit, will be added as default without media queries in stylesheet
        } else if (width >= 767 && width < 991) {
          //properties include nodeId, value, property to edit, media position in stylesheet
          tdStyleToolsInstance.updateStyleMediaRule(node.id, `${e.target.value}${unitCat}`, 'width', 5)
        } else if (width >= 991 && width < 1280) {
          tdStyleToolsInstance.updateStyleRule(node.id, `${e.target.value}${unitCat}`, 'width');
        } else if (width >= 1280 && width < 1500) {
          tdStyleToolsInstance.updateStyleMediaRule(node.id, `${e.target.value}${unitCat}`, 'width', 2)
        } else if (width >= 1500) {
          tdStyleToolsInstance.updateStyleMediaRule(node.id, `${e.target.value}${unitCat}`, 'width', 1)
        }

      })

      document.getElementById('image-setting-height').addEventListener("input", function (e) {

        let unitCat = 'px'

        if (width < 767) {
          tdStyleToolsInstance.updateStyleMediaRule(node.id, `${e.target.value}${unitCat}`, 'height', 4)
          //properties include nodeId, value, property to edit, will be added as default without media queries in stylesheet
        } else if (width >= 767 && width < 991) {
          //properties include nodeId, value, property to edit, media position in stylesheet
          tdStyleToolsInstance.updateStyleMediaRule(node.id, `${e.target.value}${unitCat}`, 'height', 5)
        } else if (width >= 991 && width < 1280) {
          tdStyleToolsInstance.updateStyleRule(node.id, `${e.target.value}${unitCat}`, 'height');

        } else if (width >= 1280 && width < 1500) {
          tdStyleToolsInstance.updateStyleMediaRule(node.id, `${e.target.value}${unitCat}`, 'height', 2)
        } else if (width >= 1500) {
          tdStyleToolsInstance.updateStyleMediaRule(node.id, `${e.target.value}${unitCat}`, 'height', 1)
        }
      })

      document.getElementById('image-setting-gen-alt-edit').addEventListener("input", function (e) {
        node.alt = e.target.value
        currentNode.data.alt = e.target.value
      })



      const frames = document.querySelectorAll('.image-frame-exp')

      frames.forEach((frame, i) => {
        frame.addEventListener("click", async function (e) {
          let display = e.target.parentNode.firstElementChild.style.display;

          e.target.parentNode.firstElementChild.style.display = display == "none" ? "block" : "none";

          frames.forEach(framCon => {
            if (e.target.parentNode.firstElementChild != framCon.parentNode.firstElementChild) {
              framCon.parentNode.firstElementChild.style.display = "none"
            }
          });

          const nodeWidth = node.offsetWidth
          const nodeHeight = node.offsetHeight
          switch (frame.id) {
            case "image-frame-exp-1":
              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'fit-content', 'height');
              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'fit-content', 'width');
              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'overflow', 'auto');
              await tdStyleToolsInstance.updateStyleRule(node.id, ``, '', "width: 100%; height: 100%;");
              e.target.classList.add("active-check")
              break;
            case "image-frame-exp-2":
              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'fit-content', 'height');
              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'fit-content', 'width');
              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'overflow', 'auto');
              await tdStyleToolsInstance.updateStyleRule(node.id, ``, '', "width: 100%; height: 100%; position: relative;  border: 1.50px #101828 solid;");
              break;
            case "image-frame-exp-3":
              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'fit-content', 'height');
              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'fit-content', 'width');
              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'overflow', 'auto');
              await tdStyleToolsInstance.updateStyleRule(node.id, ``, '', "width: 100%; height: 100%; position: relative;  border-radius: 4px;");
              break;
            case "image-frame-exp-4":

              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'fit-content', 'height');
              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'fit-content', 'width');
              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'overflow', 'auto');
              await tdStyleToolsInstance.updateStyleRule(node.id, ``, '', "width: 100%; height: 100%; position: relative;  box-shadow: 0px 24px 48px -12px rgba(15.96, 23.62, 40.04, 0.18); border: 1.50px white solid;");
              break;
            case "image-frame-exp-5":
              if (nodeHeight > nodeWidth) {
                await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, `${nodeWidth}`, 'height');
                await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, `${nodeWidth}`, 'width');
              } else {
                await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, `${nodeHeight}`, 'height');
                await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, `${nodeHeight}`, 'width');
              }

              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'overflow', 'hidden');
              await tdStyleToolsInstance.updateStyleRule(node.id, ``, '', "width: 100%; height: 100%;  border-radius: 50%;object-fit: cover;object-position: center;");
              break;
            case "image-frame-exp-6":
              if (nodeHeight > nodeWidth) {
                await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, `${nodeWidth}`, 'height');
                await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, `${nodeWidth}`, 'width');
              } else {
                await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, `${nodeHeight}`, 'height');
                await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, `${nodeHeight}`, 'width');
              }
              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'overflow', 'hidden');
              await tdStyleToolsInstance.updateStyleRule(node.id, ``, '', "width: 100%; height: 100%;  border-radius: 50%; border: 1.50px white solid;object-fit: cover;object-position: center;");
              break;
            case "image-frame-exp-7":
              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'fit-content', 'height');
              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'fit-content', 'width');
              await tdStyleToolsInstance.updateStyleRule(node.parentNode.id, 'overflow', 'auto');
              await tdStyleToolsInstance.updateStyleRule(node.id, ``, '', "width: 100%; height: 100%; padding-bottom: 8px; bacground-color:white; border: 1.50px solid white box-shadow: 0px 24px 48px -12px rgba(15.96, 23.62, 40.04, 0.18);");
              break;
            default:
              node.style.cssText = "width: 100%; height: 100%;"
              break;
          }
        })
      })

      const fileInput = document.getElementById('replace-image-gen');

      fileInput.addEventListener('change', async function (e) {
        currentImage = await utils.uploadFiles(e.target.files)

        //push to stack
        activeStack.getValue().pushUndo({ parent: null, node: node.id, case: "Img Src Changed", nodes: null, position: null, styles: null, text: null, beforeSrc: node.src, afterSrc: currentImage[0].url })

        node.src = currentImage[0].url
        node.alt = ""
        currentNode.data.src = currentImage[0].url
        currentNode.data.alt = ""
        renderRightSideViewImageSettings({ node })
      });

    }

    function renderRightSideViewOTherElementSettings() {
      innerContentWrapper.innerHTML = `${node.tagName.toLocaleLowerCase()} settings coming soon`
    }
  }

  async function renderRightSideViewStyle(props) {
    let { node } = props;
    let innerContentWrapper = document.querySelector(
      `.sidebar__tab-pane .sidebar__tab-heading`
    );
    let sidebarMainSetting = document.querySelector(
      `#sidebar__tab-style-props`
    );


    sidebarMainSetting.style.display = "block"

    let contentViewHead = `
    <div>
        <h3>Layer</h3>
        <div data-automation-id="style-rule-token-wrapper" style="cursor: text; user-select: none; padding: 1.5em 1em; display:flex; align-items: center; justify-content: start; box-sizing: border-box; min-width: 26px; max-width: 90%; width: 100%; border: 2px solid #475467; border-radius: 2px; height: 24px; margin-bottom: 2em; position: relative; font-size: 11px; text-shadow: none; box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px; overflow: hidden; color: rgb(255, 255, 255);">
              <span data-automation-id="style-rule-token-text" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: normal; opacity: 1; font-family: inherit; font-size: 1.2em; color: inherit; font-weight: inherit; outline: none;">None</span>
        </div>
        <div class="touch">
        <div class="touch__icon-ctn">
          ${generateSvg("touch")}
        </div>
        <p class="touch__text">Select an element on canvas to activate properties on this panel.</p>
        </div>
    </div>
            `;


    await props.node.classList.forEach((ele) => {
      contentViewHead = `
      <h3>Layer</h3>
      <div data-automation-id="style-rule-token-wrapper" style="cursor: text; user-select: none; padding: 1.5em 1em; display:flex; align-items: center; justify-content: start; box-sizing: border-box; min-width: 26px; max-width: 90%; width: 100%; border: 2px solid #475467; border-radius: 2px; height: 24px; margin-bottom: 2em; position: relative; font-size: 11px; text-shadow: none; box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px; overflow: hidden; color: rgb(255, 255, 255);">
            <span data-automation-id="style-rule-token-text" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: normal; opacity: 1; font-family: inherit; font-size: 1.2em; color: inherit; font-weight: inherit; outline: none;">${ele}</span>
            </div>
        `;
    });

    let contentViewHead1 = `</div></div><input autocomplete="off" autocorrect="off" spellcheck="false" data-automation-id="css-token-input" value="" style="background: transparent; border: none; color: inherit; flex: 0 0 0px; line-height: 28px; margin-left: 0px; min-width: 0px; outline: none; padding: 0px; width: 0px;"></div><div tabindex="-1"></div></div><div data-automation-id="selector-state-menu-button" data-prevent-global-event-handlers="true" tabindex="0" class="--styled-bHjHRy td-ozm0f3"><div class="--styled-eLVQBC td-l6ya6m" style="width: 18px; height: 18px; border-radius: 2px; color: inherit; max-height: 18px;"><svg data-td-icon="CaretSmallDownIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L7 6.01H9L12 6L8 10L4 6Z" fill="currentColor"></path></svg></div></div></div></div><div class="--styled-fZkKlQ td-1nm1a1b"><a class="target-toggle affecting"><span>2 on this page</span></a></div>
        </div></div>`;
    innerContentWrapper.innerHTML = contentViewHead;

    let newArrData = Object.assign(
      {},
      { styleViewArr: STYLE_DATA_COMPONENT, selectedDoc: props }
    );

    let divResult = await renderRightList(newArrData);


    sidebarMainSetting.replaceChildren(divResult);

    return contentViewHead;
  }

  async function renderRightList(dataArr) {
    let { styleViewArr, selectedDoc } = dataArr;
    const newDivMain = document.createElement("div");
    const divWrapper = document.createElement("div");
    newDivMain.id = "sidebar__tab-style-props";
    newDivMain.classList.add("sidebar__tab-style-props-2");

    // console.log({ styleViewArr, selectedDoc });
    for (let index = 0; index < styleViewArr.length; index++) {
      const element = styleViewArr[index];

      let newContentDiv = await renderRightListItem2(element, selectedDoc);
      divWrapper.appendChild(newContentDiv);
    }
    newDivMain.replaceChildren(divWrapper);
    return newDivMain;
  }

  async function renderRightListItem2(data, selectedDoc) {
    //console.log({data, selectedDoc});

    const divWrapper = document.createElement("div");
    const newDivHead = document.createElement("div");
    const newDivBody = document.createElement("div");

    divWrapper.classList.add("--pick-right-item");
    divWrapper.setAttribute("data-auto-id", data.type);

    newDivHead.classList.add("--pick-head");
    newDivHead.setAttribute("data-auto-id", data.id);
    newDivHead.setAttribute("tabindex", 0);
    newDivBody.classList.add("--pick-body");

    //newDivHead.textContent = `head - ${data.label}`;
    newDivHead.innerHTML = `<div claas="--pick-head-wrapper">
                <div class="--pick-head-icon>
                    <div class="accord-icon">${generateSvg(
      "caretSmallDown"
    )}</div>
                    </div>
                <div class="--pick-head-label">${data.label}</div>
        </div>`;
    //newDivBody.textContent = `body - ${data.label}`

    divWrapper.appendChild(newDivHead);
    divWrapper.appendChild(newDivBody);

    let __bodyContent = await insertRightSideBodyContent({
      itemData: data,
      selectedDoc,
    });
    if (data.label === "Spacing") {
      __bodyContent = await spaceUI({
        itemData: data,
        selectedDoc,
      })
    }
    newDivBody.replaceChildren(__bodyContent);

    //add event
    newDivHead.addEventListener("click", async () => {
      //newDivBody.style.display = "block";
      const carretIcon = newDivHead.querySelector(".styleCaret");
      if (carretIcon) {
        carretIcon.classList.toggle("rotate180");
      }

      newDivBody.toggleAttribute("hidden");
    });
    return divWrapper;
  }

  async function spaceUI(data) {
    let { itemData, selectedDoc } = data;
    const canvasArea = document.getElementById("site-iframe-next");
    const styleSheetCss = canvasArea.contentDocument.styleSheets;

    //const evtInstance = tdstyleAction();
    // console.log("===== spaceUI -----", { itemData, selectedDoc })
    const _newDivMain = document.createElement("div");
    const _newDivWrapper = document.createElement("div");
    _newDivWrapper.classList.add("--pick-body-wrappern");
    const paddingContainer = document.createElement('div');
    // ppaddingContainer.classList.add("space_input_container")


    paddingContainer.classList.add('padding-container');
    const UIhtml = `  <div class="spacing-container">
      <input type="text" name="margin-top" class="input-margin space-input top" placeholder="0px" />
      <input type="text" name="margin-right" class="input-margin space-input right" placeholder="0px" />
      <input type="text" name="margin-bottom" class="input-margin space-input bottom" placeholder="0px" />
      <input type="text" name="margin-left" class="input-margin space-input left" placeholder="0px" />
      <div class="margin-label">Margin</div>

      <div class="box">
        <input type="text" name="padding-top" class="input-padding space-input top" placeholder="0px" />
        <input type="text" name="padding-right" class="input-padding space-input right" placeholder="0px" />
        <input type="text" name="padding-bottom" class="input-padding space-input bottom" placeholder="0px" />
        <input type="text" name="padding-left" class="input-padding space-input left" placeholder="0px" />
        <div class="padding-label">Padding</div>
      </div>
    </div>`;


    paddingContainer.innerHTML = UIhtml;
    _newDivWrapper.appendChild(paddingContainer);
    _newDivMain.appendChild(_newDivWrapper);

    document.body.appendChild(_newDivMain);

    const inputs = _newDivMain.querySelectorAll(".space-input");

    inputs.forEach((input, i) => {
      let newItem = itemData.list[i];
      //console.log("---- input -----",{selectedDoc, input, itemData, newItem});

      let initialValue = getCssValFromStyleOrNode(selectedDoc.node, styleSheetCss, newItem.name) || selectedDoc.node.style[newItem.name];
      //console.log({initialValue, name: newItem.name});
      input.value = initialValue;

      input.addEventListener('input', e => {
        const propertyType = e.target.name.startsWith('margin') ? 'margin' : 'padding';
        const side = e.target.name.split('-')[1];
        const formattedSide = side.charAt(0).toUpperCase() + side.slice(1);
        const value = e.target.value.endsWith('px') ? e.target.value : `${e.target.value}px`;

        if (propertyType === 'padding') {

          tdStyleInstance.padding[`padding${formattedSide}`](e, selectedDoc.node);
        } else {

          tdStyleInstance.margin[`margin${formattedSide}`](e, selectedDoc.node);
        }

        //console.log(`Updated ${propertyType}${formattedSide} to ${value}`);
      });
    });

    return _newDivMain;

  }


  async function insertRightSideBodyContent(data) {
    let { itemData, selectedDoc } = data;
    const evtInstance = tdstyleAction();
    const _newDivMainWrapper = document.createElement("div");
    const _newDivMain = document.createElement("div");
    const _newDivWrapper = document.createElement("div");
    _newDivWrapper.classList.add("--pick-body-wrappern");

    for (let index = 0; index < itemData.list.length; index++) {
      const element = itemData.list[index];
      const _newDivList = document.createElement("div");
      _newDivList.classList.add("--pick-body-list");
      if (element.data.category === "size") {
        _newDivList.classList.add("--pick-body-list-width");
      }
      if (element.data.category === "position" && element.name === "top") {
        _newDivList.classList.add("--pick-body-list-width");
      }
      if (element.data.category === "position" && element.name === "right") {
        _newDivList.classList.add("--pick-body-list-width");
      }
      if (element.data.category === "position" && element.name === "bottom") {
        _newDivList.classList.add("--pick-body-list-width");
      }
      if (element.data.category === "position" && element.name === "left") {
        _newDivList.classList.add("--pick-body-list-width");
      }
      if (element.data.category === "font" && element.name === "lineHeight") {
        _newDivList.classList.add("--pick-body-list-width");
      }
      if (element.data.category === "font" && element.name === "fontSize") {
        _newDivList.classList.add("--pick-body-list-width");
      }
      if (element.data.category === "font" && element.name === "letterSpacing") {
        _newDivList.classList.add("--pick-body-list-flex");
      }
      if (element.data.category === "font" && element.name === "textIndent") {
        _newDivList.classList.add("--pick-body-list-flex");
      }
      if (element.data.category === "font" && element.name === "column") {
        _newDivList.classList.add("--pick-body-list-flex");
      }
      if (element.data.category === "font" && element.name === "textShadow") {
        _newDivList.classList.add("--pick-body-list-flex-2c");
      }

      _newDivList.setAttribute("data-auto-id", "--pick-body-list");

      const _divListLabel = document.createElement("div");
      _divListLabel.classList.add("_divListLabel");
      _divListLabel.setAttribute("data-auto-id", element.label);
      _divListLabel.textContent = element.label;
      _newDivList.appendChild(_divListLabel);

      const _devListItemWrapper = document.createElement("div");
      _divListLabel.setAttribute("data-auto-id", element.label);
      _divListLabel.setAttribute("aria-labelledby", `td-${element.label}`);
      _divListLabel.setAttribute("role", "radiogroup");
      _devListItemWrapper.classList.add("--pick-body-option-wrapper");

      const _newDivMainItem = document.createElement("div");

      _newDivMainItem.classList.add(element.type ? element.type : "no-type");

      _newDivMainItem.id = `layout-${element.label}-options`;
      _newDivMainItem.setAttribute("aria-checked", false);
      _newDivMainItem.setAttribute("cursor", "default");

      switch (element.type) {
        case "textInput":
          await evtInstance.handleOnChange(
            _newDivMainItem,
            element,
            selectedDoc
          );
          break;
        case "textInputAndColor":
          await evtInstance.handleColor(_newDivMainItem, element, selectedDoc);
          break;
        case "dropDown":
          await evtInstance.handleSelectOption(
            _newDivMainItem,
            element,
            selectedDoc
          );
          break;
        case "buttonGroup":
          await evtInstance.renderButtonGroup(
            _newDivMainItem,
            element,
            selectedDoc
          );
          break;
        case "buttonGroupWithDropdown":
          await evtInstance.renderButtonGroupWithDropdown(
            _newDivMainItem,
            element,
            selectedDoc
          );
          break;
        case "spaceUI":
          // console.log("----------- spaceUI -----------", { evtInstance })
          await evtInstance.spaceUI(
            _newDivMainItem,
            element,
            selectedDoc
          );
          break;
        case "range":
          await evtInstance.handleRangeInput(
            _newDivMainItem,
            element,
            selectedDoc
          );
          break;
        case "textShadowControl":


          const titleStyle = document.createElement("span");
          titleStyle.innerText = element.label

          const ctrlIcon = document.createElement("div");
          ctrlIcon.innerHTML = generateSvg("show");

          ctrlIcon.classList.add("control-icon-toggle");

          const textShadowWrapper = document.createElement("div");
          textShadowWrapper.classList.add("text-shadow-wrapper");
          textShadowWrapper.style.display = "none";

          ctrlIcon.addEventListener("click", function () {
            // console.log("textShadowControl...");
            const isOpen = textShadowWrapper.style.display !== "none";
            textShadowWrapper.style.display = isOpen ? "none" : "block";
            ctrlIcon.innerHTML = generateSvg(isOpen ? "show" : "hide");
          });


          const textShadowControlContainer = document.createElement("div");
          textShadowControlContainer.classList.add("text-shadow-control-container");


          _divListLabel.classList.add("_divListLabel-ctr-head")
          _divListLabel.appendChild(ctrlIcon);
          textShadowControlContainer.appendChild(textShadowWrapper);

          _devListItemWrapper.classList.add("--pick-body-option-wrapper-ctrl-option")
          _devListItemWrapper.appendChild(textShadowControlContainer);

          _newDivWrapper.appendChild(_newDivList);
          break;


        default:
          _newDivMainItem.classList.add("--pick-body-option-svg");
          _newDivMainItem.innerHTML = generateSvg("display-block");
          await evtInstance.handleOnClick(
            _newDivMainItem,
            element,
            selectedDoc
          );
          break;
      }

      _devListItemWrapper.appendChild(_newDivMainItem);
      _newDivList.appendChild(_devListItemWrapper);
      _newDivWrapper.appendChild(_newDivList);
    }

    _newDivMain.appendChild(_newDivWrapper);
    _newDivMainWrapper.appendChild(_newDivWrapper);

    return _newDivMainWrapper;
  }

  function tdstyleAction() {
    const canvasArea = document.getElementById("site-iframe-next");
    const styleSheetCss = canvasArea.contentDocument.styleSheets;
    async function handleOnChange(parentNode, item, selectedDocument) {
      // console.log("handleOnChange..................", { parentNode, item, selectedDocument });
      let textInputContainer = document.createElement("div");
      let textInputWrapper = document.createElement("div");
      textInputWrapper.classList.add("kit-unit-box", "kit-text-input");
      let inputWrapper = document.createElement("input");
      let inputDeciText = document.createElement("span");
      inputWrapper.classList.add(...item.data.class.split(" "));
      inputWrapper.type = "text";
      inputWrapper.placeholder = item.data.placeholder;
      inputWrapper.name = item.data.name;

      let initialValue = getCssValFromStyleOrNode(selectedDocument.node, styleSheetCss, item.name) || selectedDocument.node.style[item.name];
      inputWrapper.value = initialValue;

      // console.log({ initialValue, itemName: item.name, valAlt: initialValue, style: selectedDocument.node.style })

      inputDeciText.classList.add("unit");
      inputDeciText.textContent = "px";

      textInputWrapper.appendChild(inputWrapper);

      if (initialValue === '') {
        textInputWrapper.appendChild(inputDeciText);
      }

      textInputContainer.appendChild(textInputWrapper);
      parentNode.appendChild(textInputContainer);

      inputWrapper.addEventListener(
        "input",
        (e) => {
          tdStyleInstance[item.data.category][item.data.name](e, selectedDocument.node, item);
          if (e.target.value === '') {
            // Add the unit only if it's not already added
            if (!textInputWrapper.contains(inputDeciText)) {
              textInputWrapper.appendChild(inputDeciText);
            }
          } else {
            if (textInputWrapper.contains(inputDeciText)) {
              textInputWrapper.removeChild(inputDeciText);
            }
          }
        },
        false
      );
    }

    async function handleColor(parentNode, item, selectedDocument) {
      // console.log("handleColor..................");
      // console.log({ parentNode, item, selectedDocument });
      let colorPickerWrapper = document.createElement("div");
      colorPickerWrapper.classList.add("colorPickerWrapper", "kit-text-input");
      let colorPicker = document.createElement("input");
      let colorPickerText = document.createElement("input");
      colorPicker.classList.add("input", "input-color"),
        (colorPicker.type = "color");
      colorPickerText.classList.add("input", "input-colorText"),
        (colorPickerText.type = "text"),
        (colorPickerText.placeholder = item.data.placeholder);

      //let initialValue = selectedDocument.node.style[item.name] || getStyleValFromNode(selectedDocument.node,item.name) || '';
      let initialValue = getCssValFromStyleOrNode(selectedDocument.node, styleSheetCss, item.name) || selectedDocument.node.style[item.name];

      // console.log({ initVal: initialValue, itemName: item.name, valAlt: initialValue, style: selectedDocument.node.style })
      colorPicker.value = initialValue;
      colorPickerText.value = initialValue;

      colorPickerWrapper.appendChild(colorPicker);
      colorPickerWrapper.appendChild(colorPickerText);

      parentNode.appendChild(colorPickerWrapper);

      colorPicker.addEventListener("input", (e) => {
        // console.log({ initialValue }, "----- color picker selected ------", { val: e.target.value })
        colorPickerText.value = e.target.value;
        tdStyleInstance[item.data.category].color(e, selectedDocument.node, item);
      },
        false
      );
      colorPickerText.addEventListener("input", (e) => {
        // console.log({ initialValue }, "----- color picker text selected ------", { val: e.target.value })
        colorPicker.value = e.target.value;
        tdStyleInstance[item.data.category][item.data.type](e, selectedDocument.node, item);
      },
        false
      );
    }



    function handleSelectOption(parentNode, item, selectedDocument) {
      // console.log("handleSelectOption ..................", { parentNode, item, selectedDocument });
      let selectOptionWrapper = document.createElement("div");
      selectOptionWrapper.classList.add("inputSelecteOption", "kit-text-input");

      let selectOption = document.createElement("select");
      let optionWrapper = document.createElement("option");

      selectOption.setAttribute("name", `${item.label.toLowerCase()}`),
        selectOption.setAttribute("id", "12");
      optionWrapper.setAttribute("value", ""),
        optionWrapper.setAttribute("class", "option");

      optionWrapper.textContent = `Select ${item.label}`;
      selectOption.appendChild(optionWrapper);

      let initialValue = getCssValFromStyleOrNode(selectedDocument.node, styleSheetCss, item.name) || selectedDocument.node.style[item.name];
      //console.log("=== before looping options ----: ", {initialValue, label: item.label, name: item.name});
      item.options &&
        item.options.map((item) => {
          let _optionWrapper = document.createElement("option");
          _optionWrapper.setAttribute("value", item.label),
            _optionWrapper.setAttribute("class", "option");
          _optionWrapper.textContent = `${item.label}`;
          let strToLower = initialValue ? initialValue.toLowerCase() : "";
          if (item.label.toLowerCase() == strToLower || item.label2 == strToLower) {
            _optionWrapper.setAttribute("selected", true);
          }

          selectOption.appendChild(_optionWrapper);
        });

      selectOptionWrapper.appendChild(selectOption);

      parentNode.appendChild(selectOptionWrapper);

      selectOption.addEventListener("input", (e) => {
        //console.log("=== onchange before looping options ----: ", {initialValue, val: e.target.value});
        tdStyleInstance[item.data.category][item.data.type](e, selectedDocument.node, item);
        //console.log("category: ", item.data.category, "type: ", item.data.type, "event: ", e.target.value, " selected: ", selectedDocument.node);
      },
        false
      ); //font.fontSize(e, node)}, false);
    }

    async function handleInputText(parentNode, item, selectedDocument) {
      // console.log("handleColor..................");
      // console.log({ parentNode, item, selectedDocument });
      let inputTextWrapper = document.createElement("div");
      inputTextWrapper.classList.add("inputTextWrapper", "kit-text-input");
      //let colorPicker  = document.createElement("input");
      let _inputText = document.createElement("input");
      //colorPicker.classList.add("input", "input-color"), colorPicker.type = "color";
      _inputText.classList.add("it", "input-text"),
        (colorPickerText.type = item.data.inputType || "text"),
        (colorPickerText.placeholder = item.data.placeholder);

      //colorPickerWrapper.appendChild(colorPicker);
      inputTextWrapper.appendChild(_inputText);

      //colorPicker.addEventListener("input", (e) => {tdStyleInstance[item.data.category].color(e, selectedDocument.node)}, false);
      _inputText.addEventListener(
        "input",
        (e) => {
          tdStyleInstance[item.data.category][item.data.type](
            e,
            selectedDocument.node
          );
        },
        false
      ); //font.fontSize(e, node)}, false);
    }

    async function renderButtonGroup(parentNode, item, selectedDocument) {
      const container = document.createElement("div");
      container.classList.add("button-group");

      let initialValue = getCssValFromStyleOrNode(selectedDocument.node, styleSheetCss, item.name) || selectedDocument.node.style[item.name];
      //console.log("------ renderButtonGroup --------",{initialValue, name: item.name, selectedDocument});

      item.options.forEach((option) => {
        // const button = document.createElement("button");
        // button.id = option.id;
        // button.classList.add("icon-button");
        // // button.innerHTML = `${generateSvg(option.icon)}`;

        const button = document.createElement("div");
        button.id = option.id;
        button.title = option.label;
        button.classList.add("icon-button");
        button.setAttribute("role", "button");
        button.setAttribute("tabindex", "0");
        button.setAttribute("aria-label", option.label);

        if (option.icon && typeof generateSvg === 'function') {
          button.innerHTML = generateSvg(option.icon);
          button.firstElementChild.classList.add('button-icon');
        } else {
          button.textContent = option.label;
        }
        button.firstElementChild.value = option.label
        button.value = option.label;

        if (option.label.toLowerCase() == initialValue.toLowerCase()) {
          //button.focus();
          button.style.backgroundColor = "#101828";
          //console.log(`label: ${option.label}  == ${initialValue} :vale `, {color: button.style.backgroundColor})
        }

        button.addEventListener("click", (e) => {
          tdStyleInstance[item.data.category][item.name](e, selectedDocument.node, item);
        });
        container.appendChild(button);
        parentNode.appendChild(container);
      });

      return container;
    }

    async function renderButtonGroupWithDropdown(parentNode, item, selectedDoc) {

      const container = document.createElement("div");
      container.classList.add("button-group-with-dropdown");

      item.options.slice(0, 3).forEach((option) => {
        // const button = document.createElement("button");
        // button.id = option.id;
        // button.value = option.label
        // button.classList.add("icon-button");
        // button.textContent = option.label;
        const button = document.createElement("div");
        button.id = option.id;
        button.value = option.label;
        button.classList.add("icon-button");
        button.textContent = option.label;
        button.title = option.label;
        button.setAttribute("role", "button");
        button.setAttribute("tabindex", "0");
        button.setAttribute("aria-label", option.label);
        button.addEventListener("click", (event) => {
          // selectedDoc.node.style[section.data.type] = option.label;
          tdStyleInstance[item.data.category][item.data.type](event, selectedDoc.node, item);
        });
        container.appendChild(button);
      });

      const dropdown = document.createElement("select");
      dropdown.id = `${item.name}-dropdown`;
      dropdown.classList.add("dropdown", "button-group-dropdown", "inputSelecteOption", "kit-text-input");

      // let option4 = document.createElement("option");
      // option4.value = item.options[3].label;
      // option4.textContent = item.options[3].label;
      // dropdown.appendChild(option4);

      // let option5 = document.createElement("option");
      // option5.value = item.options[4].label;
      // option5.textContent = item.options[4].label;
      // dropdown.appendChild(option5);

      item.options.slice(3).forEach((option) => {
        const dropdownOption = document.createElement("option");
        dropdownOption.value = option.label;
        dropdownOption.textContent = option.label;
        dropdown.appendChild(dropdownOption);
      });

      dropdown.addEventListener("change", (event) => {
        tdStyleInstance[item.data.category][item.data.type](event, selectedDoc.node, item);// event.target.value);
      });

      container.appendChild(dropdown);

      parentNode.appendChild(container);

      return container;
    }

    // function for range in opacity


    async function handleRangeInput(parentNode, item, selectedDocument) {
      //console.log("handleRangeInput...");

      let rangeInputContainer = document.createElement("div");
      let rangeValueContainer = document.createElement("div");
      let rangeInputWrapper = document.createElement("div");
      rangeInputWrapper.classList.add("rangeInputWrapper", "kit-unit-box", "kit-text-input");

      let inputWrapper = document.createElement("input");
      let rangeValueDisplay = document.createElement("span");
      let inputUnit = document.createElement("span");
      inputWrapper

      rangeValueDisplay.classList.add("range-value-display");
      inputUnit.classList.add("input-unit");
      inputWrapper.classList.add("input");
      inputWrapper.type = "range";
      inputWrapper.placeholder = item.data.placeholder;
      inputWrapper.name = item.data.name;
      inputWrapper.min = item.data.min || "0";
      inputWrapper.max = item.data.max || "1";
      inputWrapper.step = item.data.step || "0.1";
      inputWrapper.value = item.data.defaultValue || "0";

      inputUnit.textContent = "";
      rangeValueDisplay.textContent = inputWrapper.value;

      rangeInputWrapper.appendChild(inputWrapper);
      rangeValueContainer.classList.add("rangeInputWrapper")
      rangeValueContainer.appendChild(rangeValueDisplay);
      rangeValueContainer.appendChild(inputUnit);

      rangeInputContainer.appendChild(rangeInputWrapper);
      rangeInputContainer.appendChild(rangeValueContainer);

      parentNode.appendChild(rangeInputContainer);

      inputWrapper.addEventListener("input", (e) => {
        rangeValueDisplay.textContent = e.target.value;
        if (tdStyleInstance && tdStyleInstance[item.data.category] && typeof tdStyleInstance[item.data.category][item.data.name] === "function") {
          tdStyleInstance[item.data.category][item.data.name](e, selectedDocument.node, item);
        } else {
          console.error('The tdStyleInstance method is not defined for this item.');
        }
      }, false);
    }
    async function handleOnClick(ele, item) {
      if (!item) {
        return;
      }
      //console.log(item,"--- onClick -----",ele);
      await ele.addEventListener("click", (e) => {
        e.preventDefault();
        // console.log(item, "--- onChange  handleOnClick does nothing -----", ele);
      });
    }
    function getStyleValFromNode(node, stylePro = "") {
      // Traverse up the DOM tree until we find an element node or reach the document node
      if (!stylePro) return;
      let parent = node.parentNode;
      while (parent && parent.nodeType !== Node.ELEMENT_NODE && parent !== document) {
        parent = parent.parentNode;
      }

      // Check if we found an element node
      if (parent && parent.nodeType === Node.ELEMENT_NODE) {
        // Get the computed style of the parent element
        const computedStyle = window.getComputedStyle(parent);
        // Get the font size from the computed style
        const styleVal = computedStyle.getPropertyValue(reFormatCamelToOtherCase(stylePro));//'font-size');
        return styleVal;
      } else {
        // If no element node was found, return null
        return null;
      }
    }

    //   function getCssValFromStyleOrNode(node, cssStylesheet, selector, selVal, index=0) {
    //     let computedStyle = null;
    //     let newStylesheet = cssStylesheet[2];
    //     let nodeIdSel = `#${node.id}`;
    //     //console.log({type: typeof node, type2: node.nodeType, nodeIdSel , node, cssStylesheet, newStylesheet, selector})
    //     if(!selector) return;
    //     // If the node is passed, get its computed style
    //     if (node.nodeType) {//if (node instanceof HTMLElement) {
    //         computedStyle = window.getComputedStyle(node);
    //     } else if (typeof node === 'string') {
    //         // If a selector string is passed, find the corresponding element and get its computed style
    //         const element = document.querySelector(node);
    //         if (element) {
    //             computedStyle = window.getComputedStyle(element);
    //         } else {
    //             console.error('Element with selector not found');
    //             return null;
    //         }
    //     } else {
    //         console.error('Invalid node or selector provided');
    //         return null;
    //     }

    //     // Find the rule in the stylesheet that matches the selector
    //     let cssRule = null;
    //     for (const rule of newStylesheet.cssRules) {

    //         if (rule.selectorText === nodeIdSel){//reFormatCamelToOtherCase(selector)) {
    //             cssRule = rule;
    //             break;
    //         }
    //     }



    //     // If the rule is found, return the corresponding style value
    //     if (cssRule) {
    //         return computedStyle.getPropertyValue(reFormatCamelToOtherCase(selector)) || cssRule.style[reFormatCamelToOtherCase(selector)];
    //     } else {
    //         console.error('Rule with selector not found in the stylesheet');
    //         return null;
    //     }
    // }

    return {
      handleOnChange,
      handleColor,
      handleSelectOption,
      handleOnClick,
      renderButtonGroup,
      handleRangeInput,
      renderButtonGroupWithDropdown,
      // spaceUI
    };
  }

  function getCssValFromStyleOrNode(node, cssStylesheet, selector, selVal, index = 0) {
    let computedStyle = null;
    // let newStylesheet = cssStylesheet[2];
    const keys = Object.keys(cssStylesheet)
    const newStylesheet = cssStylesheet[keys.length - 1]
    let nodeIdSel = `#${node.id}`;
    //console.log({type: typeof node, type2: node.nodeType, nodeIdSel , node, cssStylesheet, newStylesheet, selector})
    if (!selector) return;
    // If the node is passed, get its computed style
    if (node.nodeType) {//if (node instanceof HTMLElement) {
      computedStyle = window.getComputedStyle(node);
    } else if (typeof node === 'string') {
      // If a selector string is passed, find the corresponding element and get its computed style
      const element = document.querySelector(node);
      if (element) {
        computedStyle = window.getComputedStyle(element);
      } else {
        // console.error('Element with selector not found');
        return null;
      }
    } else {
      // console.error('Invalid node or selector provided');
      return null;
    }

    // Find the rule in the stylesheet that matches the selector
    let cssRule = null;
    for (const rule of newStylesheet.cssRules) {

      if (rule.selectorText === nodeIdSel) {//reFormatCamelToOtherCase(selector)) {
        cssRule = rule;
        break;
      }
    }



    // If the rule is found, return the corresponding style value
    if (cssRule) {
      return computedStyle.getPropertyValue(reFormatCamelToOtherCase(selector)) || cssRule.style[reFormatCamelToOtherCase(selector)];
    }
    // if (cssRule) {
    //     return computedStyle.getPropertyValue(reFormatCamelToOtherCase(selector)) || cssRule.style[reFormatCamelToOtherCase(selector)];
    // } else {
    //     console.error('Rule with selector not found in the stylesheet');
    //     return null;
    // }
  }


  function renderLeftSideView(props) {
    // console.log("=========== ui", { props });
    const mainWrapper = document.getElementById("td-main-sidebar-left");
    const mainOverlayWrapper = document.getElementById(
      "td-overlay-panel-layer-left"
    );

    const leftOverlayInstance = leftOverlayView(htmlState);
    async function leftMostpaneView(doc, dataRepo) {
      let { content } = dataRepo;
      let newData = [
        {
          id: "001",
          title: "Base Component",
          type: "ADD_LAYOUT",
          slug: "components",
          data: { class: "nc-add-layout", icon: "layout" },
        },
        // {
        //   id: "002",
        //   type: "ADD_NODE",
        //   slug: "addElement",
        //   data: { class: "nc-add-nodenc-navigator", icon: "addElement" },
        // },
        {
          id: "003",
          title: "Layer",
          type: "SHOW_NAVIGATOR",
          slug: "layer",
          data: { class: "nc-navigator", icon: "navigator" },
        },
        {
          id: "004",
          title: "Add Page",
          type: "ADD_PAGES",
          slug: "addPage",
          data: { class: "pages", icon: "addPage" },
        },
        {
          id: "005",
          title: "Media",
          type: "ADD_MEDIA",
          slug: "addMedia",
          data: { class: "media", icon: "media-plus" },
        },
        {
          id: "006",
          title: "Setting",
          type: "ADD_SETTINGS",
          slug: "settingTd",
          data: { class: "settings", icon: "setting2" },
        },
      ];
      let _newContainer = document.createElement("div");
      _newContainer.classList.add(
        "sidebar-container",
        "sidebar-left-container"
      );
      newData.map((item) => {
        //await content.component.list.map(item => {
        let _newDivTemp = document.createElement("div");
        _newDivTemp.id = `td-${item.id}`;
        _newDivTemp.classList.add("nc-btn-overlay", item.data.class);
        _newDivTemp.innerHTML = `<div class="nc-btn-overlay-cover" title="${item.title}"></div> ${generateSvg(item.data.icon)}`;
        _newDivTemp.onclick = (e) => {
          //console.log("click... please add active class...",{item, tar: e.target});
          switchOnOffSideBar(true, e.target);
          activePaneView(item, dataRepo.content[item.slug]);
        };

        _newContainer.appendChild(_newDivTemp);
      });

      const form = document.createElement("div");
      form.classList.add("custom-form");
      _newContainer.appendChild(form);

      mainWrapper.appendChild(_newContainer);
      //mainWrapper.innerHTML = _newContainer;

      //nc-tools
      await compileAndAddEvent(content.addElement, function (e) {
        elementHandler(e, activeSection);
      });
    }

    async function activePaneView(props, data) {
      let leftOverLay;
      switch (props.type) {
        case "ADD_NODE":
          // leftOverLay = await leftOverlayInstance.viewLeftOverlayAddNode();
          leftOverLay = await leftOverlayInstance.viewLeftOverlayAddElement(
            data
          );
          break;
        case "ADD_COMPONENT":
          leftOverLay = await leftOverlayInstance.viewLeftOverlayAddComponent();
          break;
        case "ADD_LAYOUT":
          leftOverLay = await leftOverlayInstance.viewLeftOverlayAddLayout(
            data
          );
          break;
        case "ADD_FORMS":
          leftOverLay = await leftOverlayInstance.viewLeftOverlayAddLayout(
            data
          );
          break;
        case "SHOW_NAVIGATOR":
          leftOverLay = await leftOverlayInstance.viewLeftOverlayAddLayoutLayer(
            data
          ); //viewLeftOverlayNavigator();
          break;
        case "ADD_PAGES":
          leftOverLay = await leftOverlayInstance.viewLeftOverlayAddPage(
            data
          );
          break;
        case "ADD_MEDIA":
          leftOverLay = await leftOverlayInstance.viewLeftOverlayAddLayoutMedia(
            data
          );
          break;
        default:
          leftOverLay = await leftOverlayInstance.viewLeftOverlayAddElement(
            data
          );
          break;
      }

      mainOverlayWrapper.replaceChildren(leftOverLay);

      leftOverlayInstance.displayListOptions(props.type)


      // second switch case  to run all the function that need to be run but could'nt because the first switch case result has not yet been appended to the dom 
      switch (props.type) {
        case "ADD_LAYOUT":
          await utils.processAccordion(
            { tabSel: ".node-element-head", listTabSel: ".pane-body-content-2-body" },
            { item: props.data, dataRepo: data }
          );
          break;
        case "ADD_MEDIA":
          await utils.processAccordionMedia()
          break;
        // case "ADD_COMPONENT":
        //   break;
        // case "ADD_LAYOUT":
        //   break;
        // case "ADD_FORMS":
        //   break;
        case "SHOW_NAVIGATOR":
          // activate the ability for the layers to expand and collapse if show navigator is selected
          activateLayerExpand()
          break;
        case "ADD_PAGES":
          await utils.processAccordionAddPage(
            { tabSel: ".node-element-head", listTabSel: ".pane-body-content-2-body" },
            { item: props.data, dataRepo: data }
          );
          break
        default:
          await utils.processAccordion(
            { tabSel: ".node-element-head", listTabSel: ".pane-body-content-2-body" },
            { item: props.data, dataRepo: data }
          );
          break;
      }
      // break;

      //extra
      let closeBtn = document.querySelector(".nc-button");
      let overlayPanel = document.querySelector(".nc-overlay-panel-layer-left");
      closeBtn.addEventListener("click", (e) => {
        overlayPanel.style.display = "none";
      })
      // await processAccordion({tabSel: ".node-element-head", listTabSel: ".node-pane-body"}, {item: props.data, dataRepo: dataAccess});
      //mainOverlayWrapper.innerHTML = leftOverLay;
      leftOverLay = null;

    }


    const addNodeData = {
      id: "001",
      type: "ADD_LAYOUT",
      slug: "components",
      data: { class: "nc-add-layout", icon: "layout" },
    };
    // console.log("dataRepooooo", dataRepo);
    document.body.addEventListener("click", function (event) {
      const addButton = event.target.closest(".layer-cta");
      if (addButton) {

        switchOnOffSideBar(true, event.target);
        activePaneView(addNodeData, props.content[addNodeData.slug]);

        setTimeout(() => {
          switchOnOffSideBar(true, event.target);
          activePaneView(addNodeData, props.content[addNodeData.slug]);
        }, 300)


      }



    });


    function activateLayerExpand() {
      const listContainers = document.querySelectorAll('.list-container');
      const setOutlineStyleFunc = sharedObject.viewIndicatorInstance.setOutlineStyle;
      const selectedNodeClickedFunc = sharedObject.viewIndicatorInstance.selectedNodeClicked;


      if (listContainers) {
        listContainers.forEach(listContainer => {
          // hover on selected ele on the dom
          listContainer.addEventListener('mouseover', function (event) {
            const wrapperDiv = document.querySelector(".bem-OutlineHoveredNode");
            const officiallySelected = false;
            const color = "#980";
            let selectedEle;
            if (event.target.hasAttribute('data-map-id')) {
              var mapId = event.target.getAttribute('data-map-id');
              // console.log("data-map-id:", mapId);
              selectedEle = innerDoc.getElementById(mapId)
              if (selectedEle) {
                if (selectedEle.nodeType == (Node.TEXT_NODE || null)) {
                  setOutlineStyleFunc(selectedEle.parentElement, wrapperDiv, color, officiallySelected);
                } else {
                  setOutlineStyleFunc(selectedEle, wrapperDiv, color, officiallySelected);
                }
              }
            }
          });

          listContainer.addEventListener('click', function (event) {

            //activate collapse dropdown
            if (event.target.classList.contains('layout-dropdown-collapse-arrow')) {
              const subList = event.target.parentElement.nextElementSibling;
              if (subList && subList.classList.contains('layer-list-item')) {
                subList.style.display = subList.style.display === 'block' ? 'none' : 'block'
                event.target.style.transform = event.target.style.transform === 'rotate(0deg)' ? 'rotate(90deg)' : 'rotate(0deg)';
              }
            }


            //select element on the dom
            if (event.target.hasAttribute('data-map-id')) {
              const wrapperDiv = document.querySelector(".tool-OutlineSelectedNode");
              let selectedEle;
              const mapId = event.target.getAttribute('data-map-id');
              const officiallySelected = true
              const color = `rgb(68, 85, 102)`
              selectedEle = innerDoc.getElementById(mapId)
              if (selectedEle) {
                if (selectedEle.nodeType == (Node.TEXT_NODE || null)) {
                  setOutlineStyleFunc(selectedEle.parentElement, wrapperDiv, color, officiallySelected);
                  selectedNodeClickedFunc(selectedEle.parentElement)
                } else {
                  setOutlineStyleFunc(selectedEle, wrapperDiv, color, officiallySelected);
                  selectedNodeClickedFunc(selectedEle)
                }
              }
            }
          });
        });
      }
    }


    return {
      leftMostpaneView,
    };
  }


  function renderMainAndTop(dataArr) {
    const _getDivLeft = document.querySelector(".topBar-group-left");
    const _getDivMiddle = document.querySelector(".topBar-group-middle");
    const _getDivRight = document.querySelector(".topBar-group-right");

    let resl = handleViewLeftTop();
    _getDivLeft.appendChild(resl[0]);
    _getDivLeft.appendChild(resl[1]);
    _getDivLeft.appendChild(resl[2]);
    // create pages list after topbar contents has been appended
    createLi(htmlState, cssStyleInstance, activeStack);


    let firstName
    let lastName
    let firstNameInnitial
    let lastNameInnitial
    let displayInnitial

    if (previewStateForGuest.getValue() == false) {
      firstName = userData.data.firstName;
      lastName = userData.data.lastName;
      firstNameInnitial = firstName.split("")[0].toUpperCase()
      lastNameInnitial = lastName.split("")[0].toUpperCase()
      displayInnitial = `${firstNameInnitial}${lastNameInnitial}`
    }

    let middleViewPort = handleViewPortZoom();
    _getDivMiddle.appendChild(middleViewPort);
    _getDivRight.innerHTML = `<div class="topBar-group-right-container">
        <div class="design-history-buttons">
            <div class="nc-history-button button-back" title="Undo">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_1146_17435" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                    <rect width="24" height="24" transform="matrix(-1 0 0 1 24.9137 0)" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_1146_17435)">
                    <path d="M14.9637 18.7496C16.497 18.7496 17.822 18.2496 18.9387 17.2496C20.0554 16.2496 20.6137 14.9996 20.6137 13.4996C20.6137 11.9996 20.0554 10.7496 18.9387 9.74961C17.822 8.74961 16.497 8.24961 14.9637 8.24961H8.06371L10.9137 5.39961L9.86371 4.34961L5.21371 8.99961L9.86371 13.6496L10.9137 12.5996L8.06371 9.74961H14.9637C16.0804 9.74961 17.051 10.1036 17.8757 10.8116C18.701 11.5203 19.1137 12.4163 19.1137 13.4996C19.1137 14.5829 18.701 15.4789 17.8757 16.1876C17.051 16.8956 16.0804 17.2496 14.9637 17.2496H8.11371V18.7496H14.9637Z" fill="white"/>
                    </g>
                </svg>
            </div>
            <div class="nc-history-button button-forward" title="Redo">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_1146_17438" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                    <rect x="0.913696" width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_1146_17438)">
                    <path d="M10.8637 18.7496C9.33035 18.7496 8.00535 18.2496 6.88868 17.2496C5.77202 16.2496 5.21368 14.9996 5.21368 13.4996C5.21368 11.9996 5.77202 10.7496 6.88868 9.74961C8.00535 8.74961 9.33035 8.24961 10.8637 8.24961H17.7637L14.9137 5.39961L15.9637 4.34961L20.6137 8.99961L15.9637 13.6496L14.9137 12.5996L17.7637 9.74961H10.8637C9.74702 9.74961 8.77635 10.1036 7.95168 10.8116C7.12635 11.5203 6.71368 12.4163 6.71368 13.4996C6.71368 14.5829 7.12635 15.4789 7.95168 16.1876C8.77635 16.8956 9.74702 17.2496 10.8637 17.2496H17.7137V18.7496H10.8637Z" fill="white"/>
                    </g>
                </svg>
            </div>
        </div>
        <div class="design-collab-online-list">
          ${previewStateForGuest.getValue() == false &&
      `<div class="design-collab-container">
                <div class="collab-online-user">
                  <span>${displayInnitial}</span>                                 
                </div>`
      } 
            </div>
        </div>
        <div class="design-share-link" title="Share">
            <svg class="design-share-link-svg" width="32" height="30" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.6637 27.75C22.897 27.75 22.247 27.4833 21.7137 26.95C21.1804 26.4167 20.9137 25.7667 20.9137 25C20.9137 24.8833 20.922 24.754 20.9387 24.612C20.9554 24.4707 20.9887 24.35 21.0387 24.25L13.6387 19.9C13.372 20.1667 13.072 20.375 12.7387 20.525C12.4054 20.675 12.047 20.75 11.6637 20.75C10.897 20.75 10.247 20.4833 9.7137 19.95C9.18036 19.4167 8.9137 18.7667 8.9137 18C8.9137 17.2333 9.18036 16.5833 9.7137 16.05C10.247 15.5167 10.897 15.25 11.6637 15.25C12.047 15.25 12.4054 15.325 12.7387 15.475C13.072 15.625 13.372 15.8333 13.6387 16.1L21.0387 11.75C20.9887 11.65 20.9554 11.529 20.9387 11.387C20.922 11.2457 20.9137 11.1167 20.9137 11C20.9137 10.2333 21.1804 9.58333 21.7137 9.05C22.247 8.51667 22.897 8.25 23.6637 8.25C24.4304 8.25 25.0804 8.51667 25.6137 9.05C26.147 9.58333 26.4137 10.2333 26.4137 11C26.4137 11.7667 26.147 12.4167 25.6137 12.95C25.0804 13.4833 24.4304 13.75 23.6637 13.75C23.2804 13.75 22.922 13.675 22.5887 13.525C22.2554 13.375 21.9554 13.1667 21.6887 12.9L14.2887 17.25C14.3387 17.35 14.372 17.4667 14.3887 17.6C14.4054 17.7333 14.4137 17.8667 14.4137 18C14.4137 18.1167 14.4054 18.2457 14.3887 18.387C14.372 18.529 14.3387 18.65 14.2887 18.75L21.6887 23.1C21.9554 22.8333 22.2554 22.625 22.5887 22.475C22.922 22.325 23.2804 22.25 23.6637 22.25C24.4304 22.25 25.0804 22.5167 25.6137 23.05C26.147 23.5833 26.4137 24.2333 26.4137 25C26.4137 25.7667 26.147 26.4167 25.6137 26.95C25.0804 27.4833 24.4304 27.75 23.6637 27.75ZM23.6637 12.25C24.0137 12.25 24.3097 12.129 24.5517 11.887C24.793 11.6457 24.9137 11.35 24.9137 11C24.9137 10.65 24.793 10.354 24.5517 10.112C24.3097 9.87067 24.0137 9.75 23.6637 9.75C23.3137 9.75 23.018 9.87067 22.7767 10.112C22.5347 10.354 22.4137 10.65 22.4137 11C22.4137 11.35 22.5347 11.6457 22.7767 11.887C23.018 12.129 23.3137 12.25 23.6637 12.25ZM11.6637 19.25C12.0137 19.25 12.3097 19.129 12.5517 18.887C12.793 18.6457 12.9137 18.35 12.9137 18C12.9137 17.65 12.793 17.3543 12.5517 17.113C12.3097 16.871 12.0137 16.75 11.6637 16.75C11.3137 16.75 11.018 16.871 10.7767 17.113C10.5347 17.3543 10.4137 17.65 10.4137 18C10.4137 18.35 10.5347 18.6457 10.7767 18.887C11.018 19.129 11.3137 19.25 11.6637 19.25ZM23.6637 26.25C24.0137 26.25 24.3097 26.129 24.5517 25.887C24.793 25.6457 24.9137 25.35 24.9137 25C24.9137 24.65 24.793 24.3543 24.5517 24.113C24.3097 23.871 24.0137 23.75 23.6637 23.75C23.3137 23.75 23.018 23.871 22.7767 24.113C22.5347 24.3543 22.4137 24.65 22.4137 25C22.4137 25.35 22.5347 25.6457 22.7767 25.887C23.018 26.129 23.3137 26.25 23.6637 26.25Z" fill="white"/>
            </svg>
            <div class="share-btn-modal-container" style="display:none;">
                <div class="share-root">
                <div class="share-feat">
                  <h3>Share Site</h3>
                  <select name="" id="share-permission">
                    <option value="view-only">Can view</option>
                  </select>
                </div>
                <div class="hr"></div>
                <div class="share-feat">
                  <div class="share-feat-1">
                    <p class="share-feat-base">Share read-only link</p>
                    <span class="share-feat-xm">Anyone with the link can view the site in the editor, but won’t be able to edit it.</span>
                  </div>
                  <div class="share-feat-description">
                    <div  class='share-switchContainer'>
                      <label class="share-switch">
                        <input type="checkbox" id="share-toggle" />
                        <span class="share-slider share-round"></span>
                      </label>
                      </div>
                  </div>
                </div>
                <div class="share-feat share-url-cont">
                  <input readonly  value="" class="share-feat-url" />
                  <button  class="share-feat-btn"><span>copy</span></button>
                </div>
              </div>
            </div>  
        </div>
        <div class="design-preview-mode" title="Preview">
        <button class="design-preview-mode" style="background: none; border: none; padding: 0; margin: 0; cursor: pointer;">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_1146_17458" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                <rect x="0.913696" width="24" height="24" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_1146_17458)">
                <path d="M9.4137 18.1004V5.90039L18.9887 12.0004L9.4137 18.1004ZM10.9137 15.3504L16.1887 12.0004L10.9137 8.65039V15.3504Z" fill="white"/>
                </g>
            </svg>
            </button>
        </div>
        <div class="design-site-publish" title="Publish">
            <div class="design-site-publish">
                <div class="design-publish-site-button">
                    <span>Publish</span>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.4137 7.5L10.4137 12.5L15.4137 7.5" stroke="#158B8D" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>`;
  }
  let isPreviewMode = previewMode.getValue();
  const previewButton = document.querySelector('.design-preview-mode');
  previewButton.addEventListener("click", () => {
    isPreviewMode = !isPreviewMode;
    previewMode.setValue(!previewMode.getValue())
    const _getSidebarLeft = document.getElementById("td-main-sidebar-left");
    const _getSidebarRight = document.getElementById("sidebar-right");
    const _getBottombar = document.getElementById("td-bottomBar");
    const tdStyle = document.querySelector(".td__style-tool");
    const htmlMain = document.querySelector("html");
    const iframeTag = document.querySelector("iframe");

    if (isPreviewMode) {
      if (_getSidebarLeft) _getSidebarLeft.style.display = "none";
      if (_getSidebarRight) _getSidebarRight.style.display = "none";
      if (_getBottombar) _getBottombar.style.display = "none";
      if (tdStyle && tdStyle.parentNode) tdStyle.parentNode.style.display = "none";

      htmlMain.classList.remove("sidebar-ignore-right", "sidebar-ignore-left", "ignore-bottom-bar");

      if (iframeTag) {
        iframeTag.style.height = "100vh";
      }
    } else {
      if (_getSidebarLeft) _getSidebarLeft.style.display = "";
      if (_getSidebarRight) _getSidebarRight.style.display = "";
      if (_getBottombar) _getBottombar.style.display = "";
      if (tdStyle && tdStyle.parentNode) tdStyle.parentNode.style.display = "";

      htmlMain.classList.add("sidebar-ignore-right", "sidebar-ignore-left", "ignore-bottom-bar");
      if (iframeTag) {
        iframeTag.style.height = "100vh";
      }
    }
  });

  let isShareModal = false;
  const shareBtn = document.querySelector(".design-share-link-svg")
  const shareBtnModal = document.querySelector(".share-btn-modal-container")
  const shareBtnUrlInput = document.querySelector(".share-feat-url")
  const shareBtnCopy = document.querySelector(".share-feat-btn")
  const shareSelect = document.querySelector("#share-permission")

  shareBtn.addEventListener("click", () => {
    isShareModal = !isShareModal;
    shareBtnModal.style.position = "fixed"
    shareBtnModal.style.zIndex = '40'
    shareBtnModal.style.top = "40px"
    shareBtnModal.style.right = "100px"
    if (isShareModal) {
      shareBtnModal.style.display = "block"
    } else {
      shareBtnModal.style.display = "none"
    }
  })

  const toggle = document.getElementById("share-toggle")
  const url = document.querySelector('.share-feat-url')
  const urlContainer = document.querySelector('.share-url-cont')



  toggle.addEventListener("change", () => {

    if (toggle.checked) {
      //generate Link
      shareSelect.style.display = "block"
      urlContainer.style.display = "flex"
      url.value = window.location.protocol + '//' + window.location.host + '?siteId=' + getSiteId() + '&type=sharing'
    } else {
      urlContainer.style.display = "none"
      shareSelect.style.display = "none"
      url.value = ""
    }

  })

  shareBtnCopy.addEventListener("click", (e) => {
    shareBtnUrlInput.select();
    document.execCommand('copy');
    e.target.innerText = "Copied!"
    alert("Copied to clipboard");
    setTimeout(() => {
      e.target.innerText = "Copy"
      toggle.checked = false
      urlContainer.style.display = "none"
      shareSelect.style.display = "none"

    }, 50000)
  })

  function handleViewLeftTop(win) {
    let _minDiv = document.createElement("div"),
      _minDivWrapper = document.createElement("div");
    let _minDivChild1 = document.createElement("div"),
      _minDivChild2 = document.createElement("div"),
      _minDivChild3 = document.createElement("div");
    let _minDivChild1Wrapper = document.createElement("div"),
      _minDivChild2Wrapper = document.createElement("div"), wPageBtn = document.createElement("div");
    let _spanTitle = document.createElement("span"),
      _spanTitle2 = document.createElement("span"),
      _child2SvgWrapper = document.createElement("div");
    const _selectOptions = document.createElement("ul");
    // _minDiv.classList.add("page-menu"),
    _minDivChild1.title = "Go to Dashboard"
    _minDivChild1.classList.add(
      "nc-design-logo-button",
      "td-design-logo-button"
    ),
      _minDivChild2.classList.add("page-menu"),
      _minDivChild3.classList.add("preview-innerW");
    _minDivChild1Wrapper.classList.add("nc-logoIcon"),
      _minDivChild2Wrapper.classList.add("page-menu-wrapper", "active-page"), wPageBtn.classList.add("pageBtn", "page-menu-contentList"), _child2SvgWrapper.classList.add("page-open-list-dropdown");
    _spanTitle.classList.add("page-menu-label"),
      _spanTitle2.classList.add("page-menu-contentList");
    _selectOptions.classList.add("select-options");

    _minDivChild1.setAttribute("data-auto-id", "site-logo");
    _minDivChild2.setAttribute("data-auto-id", "pages-menu");
    _minDivChild3.setAttribute("data-auto-id", "preview-btn");

    _minDivChild1.appendChild(_minDivChild1Wrapper);
    _minDivChild2.appendChild(_minDivChild2Wrapper);
    _minDivChild2Wrapper.appendChild(wPageBtn)
    // wPageBtn.appendChild(_spanTitle);
    wPageBtn.appendChild(_spanTitle2);
    wPageBtn.appendChild(_child2SvgWrapper);

    _minDivChild1.style.cursor = "pointer";

    _minDivChild1.addEventListener("click", function () {
      const confirmChoice = confirm("Go to Dashboard")
      if (confirmChoice) {
        window.location.replace(process.env.DASHBOARD_REPO_URL)
      }
    })

    _spanTitle.textContent = "Page: ";
    const Home = htmlState.getValue().pages.find(e => e.route.includes("/index") || e.route === "/")
    _spanTitle2.textContent = Home ? Home.name : htmlState.getValue().pages[0].name;

    _minDivChild1Wrapper.innerHTML = generateSvg("main-logo");
    _minDivChild2.appendChild(_selectOptions);
    _child2SvgWrapper.innerHTML = generateSvg("angle-down-icon");
    // _minDivChild3.innerHTML = generateSvg("preview-icon");

    _minDivChild2.addEventListener("click", (evt) => {
      // console.log("open pages on the left overlay", { tar: evt.target, evt });
    });

    // _child2SvgWrapper.addEventListener("click", () => {
    // });

    return [_minDivChild1, _minDivChild2, _minDivChild3];
  }

  function handleViewPortZoom() {
    let arrList = [
      {
        _id: 1,
        icon: "small-view",
        screenType: "MOBILE",
        classes: ["nc-screen-mobile", "media-screen-viewport-mobile"],
      },
      // {
      //   _id: 2,
      //   icon: "medium-view",
      //   screenType: "TABLET",
      //   classes: ["media-screen-viewport-mobile", "nc-screen-tablet"],
      // },
      {
        _id: 3,
        icon: "medium-view",
        screenType: "LAPTOP-MEDUIM",
        classes: ["media-screen-viewport-mobile", "nc-screen-tablet"],
      },
      // {
      //   _id: 4,
      //   icon: "desktop-view",
      //   screenType: "DESKTOP",
      //   classes: ["media-screen-viewport-mobile", "nc-screen-desktop"],
      // },
      {
        _id: 5,
        icon: "desktop-view",
        screenType: "DESKTOP-EXTRA",
        classes: ["media-screen-viewport-mobile", "nc-screen-desktop"],
      },
    ];

    let _divMainContainer = document.createElement("div");
    let _divMain = document.createElement("div");
    let _divMainWrapper = document.createElement("div");
    _divMain.classList.add("topBar-group-middle-container");
    _divMainWrapper.classList.add("media-screen-viewport");
    _divMain.appendChild(_divMainWrapper);
    arrList.map((item) => {
      let _divMainItem = document.createElement("div");
      _divMainItem.classList.add(item.classes[0], item.classes[1]);
      _divMainItem.title = item.screenType

      _divMainItem.innerHTML = generateSvg(item.icon);

      _divMainItem.addEventListener("click", (e) => {
        // console.log({ tar: e.target, item: item._id, type: item.screenType });
        resizeWindowWithDeviceOrientation2(item.screenType, initialScreenChangeState);
      });
      _divMainWrapper.appendChild(_divMainItem);
    });

    let _divMainSetting = document.createElement("div");
    let _divMainScreenScale = document.createElement("div");

    let _divMainViewWindowSize = document.createElement("div"),
      _divMainViewWindowSizeSpan = document.createElement("div");

    let _divMainScreenScaleZoom = document.createElement("div"),
      _divMainZoomButton = document.createElement("div");
    let _divMainZoomOutButtonSvg = document.createElement("span"),
      _divMainZoomInButtonSvg = document.createElement("span");
    _divMainZoomOutButtonSvg.title = "Zoom Out";
    _divMainZoomInButtonSvg.title = "Zoom In";

    _divMainZoomInButtonSvg.addEventListener("click", (evt) => {
      evt.preventDefault();
      zoomIn();
      // console.log("zoom In",{evt: evt.target});
    });

    _divMainZoomOutButtonSvg.addEventListener("click", (evt) => {
      evt.preventDefault();
      zoomOut();
      // console.log("zoom out",{evt: evt.target});
    });

    _divMainZoomInButtonSvg.classList.add("td-zoom-in"),
      _divMainZoomOutButtonSvg.classList.add("td-zoom-out");

    (_divMainZoomInButtonSvg.innerHTML = generateSvg("zoomBtn")),
      (_divMainZoomOutButtonSvg.innerHTML = generateSvg("zoomOut"));
    let _divMainZoomContainer = document.createElement("div"),
      _divMainZoomTextSpan = document.createElement("span"),
      _divMainZoomMeasurerSpan = document.createElement("span");

    _divMainZoomContainer.appendChild(_divMainZoomTextSpan);
    _divMainZoomContainer.appendChild(_divMainZoomMeasurerSpan);

    // Initialize the currentZoom value to 1 (100%)
    let currentZoom = 1;

    // Function to zoom in
    function zoomIn() {
      currentZoom += 0.1;
      updateZoomDisplay();
      setBrowserZoom(currentZoom);
    }

    // Function to zoom out
    function zoomOut() {
      currentZoom -= 0.1;
      if (currentZoom < 0.1) {
        currentZoom = 0.1;
      }
      updateZoomDisplay();
      setBrowserZoom(currentZoom);
    }

    function updateZoomDisplay() {
      // Update the zoom display
      _divMainZoomTextSpan.textContent = `${Math.round(currentZoom * 100)}`;
    }

    function setBrowserZoom(zoomLevel) {
      // Set the browser zoom level
      // innerDoc.body.style.transform = `scale(${zoomLevel})`;
      innerDoc.body.style.zoom = zoomLevel;
    }
    _divMainZoomTextSpan.textContent = "100";
    _divMainZoomMeasurerSpan.textContent = "%";

    _divMainZoomButton.appendChild(_divMainZoomOutButtonSvg);
    _divMainZoomButton.appendChild(_divMainZoomContainer);
    _divMainZoomButton.appendChild(_divMainZoomInButtonSvg);

    _divMainScreenScaleZoom.classList.add("screen-scale-zoom-container");
    _divMainZoomButton.classList.add("zoom-button");
    _divMainZoomContainer.classList.add("zoom-percentage");
    _divMainScreenScaleZoom.classList.add("screen-scale-zoom-container");

    _divMainViewWindowSize.classList.add("viewWindowSize");
    _divMainViewWindowSizeSpan.classList.add("screen__window-setting-val");
    _divMainViewWindowSize.appendChild(_divMainViewWindowSizeSpan);
    _divMainSetting.appendChild(_divMainViewWindowSize);
    _divMainScreenScaleZoom.appendChild(_divMainZoomButton);
    _divMainScreenScale.appendChild(_divMainScreenScaleZoom);

    _divMainSetting.classList.add("media-screen-viewport");
    _divMainScreenScale.classList.add("screen-scale-zoom");

    //divMainContainer.appendChild(_divMain);
    _divMain.appendChild(_divMainSetting);
    _divMain.appendChild(_divMainScreenScale);

    return _divMain;
  }

  function renderMinisetting(eleSelected = { data: {}, node: HTMLDivElement }) {
    const { data, node } = eleSelected;
    let mainContent;
    let _divMain2 = document.querySelector("#mini-settings-td-container");
    _divMain2.classList.add(
      "mini-settings",
      "image-settings",
      "image-mini-settings",
      "react-draggable"
    );
    _divMain2.setAttribute("draggable", "true");
    _divMain2.innerHTML = ""

    const canvasArea = document.getElementById("site-iframe-next")

    let width = canvasArea.offsetWidth

    canvasArea.contentWindow.addEventListener("resize", function () {
      width = canvasArea.offsetWidth
    });

    switch (node.tagName.toLocaleLowerCase()) {
      case "div":
        mainContent = ``;
        break;
      case "img":
        displayImageOverLayTemplate();
        break;
      default:
        _divMain2.innerHTML = ""
        break;
    }

    function displayOverlayImage(selectedItem) {
      // console.log({ name: selectedItem.tagName });
      if (selectedItem.tagName.toLowerCase() !== "img") {
        return null;
      }

      let mainContainer = document.createElement("div"),
        mainContainerWrapper = document.createElement("div"),
        mainContainerHead = document.createElement("div"),
        mainHeadIcon = document.createElement("div"),
        miniSettingsContent = document.createElement("div");
      let mainContainerHeadTitle = document.createElement("div"),
        mainContainerHeadCloseBtn = document.createElement("div");
      let mainHeadIconWrapper = document.createElement("div");

      let miniSettingsContentWrapper = document.createElement("div"),
        mSettingKit = document.createElement("div"),
        mSettingKitBtn = document.createElement("button"),
        mSettingKitContainer = document.createElement("div"),
        mSettingKitContainer2 = document.createElement("div");

      //dimension
      let fileNameText = document.createElement("div"),
        fileNameDimension = document.createElement("div"),
        fileNameDimensionSvg = document.createElement("div");
      let _spanDM1 = document.createElement("span"),
        _spanDM2 = document.createElement("span"),
        _spanDM3 = document.createElement("span"),
        _spanDM4 = document.createElement("span"),
        _spanDM5 = document.createElement("span");

      fileNameDimensionSvg.innerHTML = generateSvg("img-res");

      _spanDM1.classList.add("width");
      _spanDM2.classList.add("px");
      _spanDM3.classList.add("by");
      _spanDM4.classList.add("height");
      _spanDM5.classList.add("px");

      _spanDM1.textContent = "0";
      _spanDM2.textContent = "px";
      _spanDM3.textContent = "by";
      _spanDM4.textContent = "0";
      _spanDM5.textContent = "px";

      fileNameDimensionSvg.classList.add("--styled-eSOvFx", "td-1dl3ziv");
      fileNameDimensionSvg.style =
        "width: 8px; height: 8px; float: left; margin: 2px 8px 0px 2px; opacity: 0.5;";

      fileNameDimension.appendChild(fileNameDimensionSvg);
      fileNameDimension.appendChild(_spanDM1);
      fileNameDimension.appendChild(_spanDM2);
      fileNameDimension.appendChild(_spanDM3);
      fileNameDimension.appendChild(_spanDM4);
      fileNameDimension.appendChild(_spanDM5);

      //size
      let _divImgSize = document.createElement("div"),
        _divImgSizeSvg = document.createElement("div");
      let _spanSize1 = document.createElement("span");

      _divImgSizeSvg.innerHTML = generateSvg("img-performance");
      _spanSize1.textContent = "unknown";

      _divImgSize.classList.add("size"),
        _divImgSizeSvg.classList.add("--styled-eSOvFx", "td-1dl3ziv");
      _divImgSizeSvg.style =
        "width: 8px; height: 8px; float: left; margin: 2px 8px 0px 2px; opacity: 0.5;";

      _divImgSize.appendChild(_divImgSizeSvg);
      _divImgSize.appendChild(_spanSize1);

      //checkout label
      let _divKitCheckoutLabel = document.createElement("label"),
        _divKitCheckoutLabelAnchor = document.createElement("a"),
        _divKitCheckoutLabelI = document.createElement("i");

      _divKitCheckoutLabel.classList.add("kit-checkbox", "hi-dpi");
      _divKitCheckoutLabelAnchor.classList.add(
        "kit-checkbox-input",
        "kit-input-control"
      );
      _divKitCheckoutLabelI.classList.add("sprite-main");
      _divKitCheckoutLabel.textContent = "Image is HiDPI";

      _divKitCheckoutLabel.appendChild(_divKitCheckoutLabelAnchor);

      _divKitCheckoutLabelAnchor.appendChild(_divKitCheckoutLabelI);

      //body
      let mSettingBtnText = document.createElement("div"),
        mSettingImgMeta = document.createElement("div"),
        mSettingImgDimensions = document.createElement("div"),
        mSettingDivSpan = document.createElement("div");
      mSettingBtnText.classList.add("--styled-lihrRi", "td-1mrza4x"),
        mSettingImgMeta.classList.add("image-metadata"),
        fileNameText.classList.add("file-name", "one-line-text"),
        fileNameDimension.classList.add("dimensions");
      mSettingImgMeta.appendChild(fileNameText),
        mSettingImgMeta.appendChild(fileNameDimension);
      mSettingImgMeta.appendChild(_divImgSize);
      mSettingImgMeta.appendChild(_divKitCheckoutLabel);

      mSettingBtnText.textContent = "Choose Image";
      mainHeadIcon.classList.add("--styled-eLVQBC", "td-l6ya6m");
      mainHeadIconWrapper.classList.add("--styled-eLVQBC", "td-l6ya6m");

      mSettingKit.classList.add("kit-panel"),
        (mSettingKitBtn.style =
          "border-color: rgb(10 18 32); outline: 0px; cursor: default; user-select: none; margin-bottom: 8px; padding: 0px 12px; font-family: inherit; font-size: 12px; position: relative; display: flex; align-items: center; justify-content: center; height: 32px; border-radius: 2px; color: rgb(235, 235, 235); background: rgb(28 41 57); border-width: 1px; border-style: solid; box-sizing: border-box; align-self: center; width: 100%;"),
        mSettingKitContainer.classList.add("--styled-lihrRi", "td-1mrza4x");

      mSettingKitBtn.setAttribute("type", "button"),
        mSettingKitBtn.setAttribute("role", "button"),
        mSettingKitBtn.setAttribute("aria-label", "Choose asset button"),
        mSettingKitBtn.setAttribute("data-focus", false),
        mSettingKitBtn.setAttribute("tabindex", 0),
        miniSettingsContent.classList.add("mini-settings-content"),
        miniSettingsContentWrapper.classList.add(
          "image-settings",
          "image-mini-settings",
          "replace"
        );

      mainContainerHead.setAttribute("data-drag-handle", true),
        (mainContainerHead.style =
          "display: flex; align-items: center; padding: 8px; border-bottom: 1px solid rgb(10 18 32); cursor: move;");
      mainHeadIcon.style =
        "height: 16px; width: 16px; display: flex; align-items: center; justify-content: center;";
      mainHeadIconWrapper.style = "width: 14px; height: 14px;";

      mainContainerHeadTitle.style =
        "color: inherit; padding-left: 4px; padding-right: 8px; font-weight: 700; flex: 1 1 0%; font-size: 12px; font-family: Inter, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, sans-serif; line-height: 16px;";
      mainContainerHeadCloseBtn.style =
        "cursor: default; height: 16px; width: 16px; display: flex; align-items: center; justify-content: center;";

      mainHeadIconWrapper.innerHTML = generateSvg("setting");
      mainContainerHeadTitle.textContent = `Image Settings`;
      mainContainerHeadCloseBtn.innerHTML = generateSvg("close-btn-large");
      mSettingKitContainer.innerHTML = generateSvg("assetManager");

      mainHeadIcon.appendChild(mainHeadIconWrapper);

      mainContainerHead.appendChild(mainHeadIcon);
      mainContainerHead.appendChild(mainContainerHeadTitle);
      mainContainerHead.appendChild(mainContainerHeadCloseBtn);

      mSettingKitBtn.appendChild(mSettingKitContainer);
      mSettingKitBtn.appendChild(mSettingBtnText);
      mSettingKit.appendChild(mSettingKitBtn);
      miniSettingsContentWrapper.appendChild(mSettingKit);
      miniSettingsContentWrapper.appendChild(mSettingImgMeta);

      miniSettingsContent.appendChild(miniSettingsContentWrapper);

      mainContainerWrapper.appendChild(mainContainerHead);
      mainContainerWrapper.appendChild(miniSettingsContent);
      mainContainer.appendChild(mainContainerWrapper);

      // console.log({ mainContainer });

      return mainContainer;
    }

    //let imagesettingOverlay = displayOverlayImage(node);
    function displayImageOverLayTemplate() {
      const currentImage = appState.getValue().assets.images.find(image => image.url == node.src)
      let currentNode = htmlState.getValue().nodes.find(e => e._id == node.id)
      const innerNode3 = `
      <div style="all: unset;">
      <div id="mini-settings-modal" class="image-settings-gen-container" style="height:fit-content;">
      <div class="image-settings-get-container-first"style="width:258px">
        <div  class="image-settings-get-container-first-1" style="display:flex; align-items: center; justify-content:space-between; ">
        <p class="remove-image-margin-p">Image settings</p>
          <svg id="image-settings-instant-bar" style="cursor:pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <mask id="mask0_7428_64703" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_7428_64703)">
              <path d="M6.40156 18.6496L5.35156 17.5996L10.9516 11.9996L5.35156 6.39961L6.40156 5.34961L12.0016 10.9496L17.6016 5.34961L18.6516 6.39961L13.0516 11.9996L18.6516 17.5996L17.6016 18.6496L12.0016 13.0496L6.40156 18.6496Z" fill="white"/>
            </g>
          </svg>
        </div>
        <div class="image-settings-get-container-first-2">
          <div style="display:flex; align-items:center;">
            <img src="${node.src}" alt="" style="border: 2.50px white solid; object-fit:cover; object-position:center;" srcset="">
          </div>
        </div>
        <label for="replace-image-gen-mini" class="image-settings-gen-container-button">
          ${generateSvg('replace')}
          <span class="">Replace Image</span>
          <input style="display: none;" type="file" accept="image/jpeg, image/png, image/jpg"  id="replace-image-gen-mini">
        </label>
      </div>

      <div class="image-settings-set-container-hr"></div>

      <div class="image-settings-gen-container-second"style="width:258px">
        <div class="image-settings-gen-container-second-input">
          <span>Width</span>
          <div>
            <input type="number" value="${node.width}" name="" id="image-setting-width-mini">
            <span>PX</span>
          </div>
        </div>
        <div class="image-settings-gen-container-second-input">
          <span>Height</span>
          <div>
            <input type="number" value="${node.height}" name="" id="image-setting-height-mini">
            <span>PX</span>
          </div>
        </div>
      </div>

      <div class="image-settings-set-container-hr"></div>

      <div class="image-settings-get-container-first-1 image-settings-gen-container-sixth"style="width:258px">
        <p class="remove-image-margin-p">File Details</p>
      </div>

      <div class="image-settings-set-container-hr"></div>

      <div  class="image-settings-gen-container-third"style="width:258px">
        <div class="image-settings-gen-container-third-first">
          <p class="image-settings-set-container-middle-p remove-image-margin-p">Type</p>
          <div class="image-settings-gen-container-third-first">
            <p class="remove-image-margin-p">${currentImage ? currentImage.type : "NotFound"}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <g clip-path="url(#clip0_7428_64835)">
                <path d="M5.83687 7.58299C6.08738 7.9179 6.40699 8.19501 6.77402 8.39553C7.14105 8.59606 7.54691 8.7153 7.96408 8.74518C8.38125 8.77506 8.79996 8.71487 9.19182 8.56869C9.58368 8.42252 9.93952 8.19378 10.2352 7.89799L11.9852 6.14799C12.5165 5.5979 12.8105 4.86114 12.8038 4.0964C12.7972 3.33166 12.4904 2.60012 11.9497 2.05935C11.4089 1.51858 10.6774 1.21183 9.91262 1.20519C9.14788 1.19854 8.41112 1.49253 7.86103 2.02382L6.8577 3.02132M8.1702 6.41632C7.91969 6.08141 7.60008 5.8043 7.23305 5.60377C6.86602 5.40325 6.46016 5.284 6.04299 5.25413C5.62582 5.22425 5.20711 5.28444 4.81525 5.43061C4.42339 5.57679 4.06755 5.80553 3.77187 6.10132L2.02187 7.85132C1.49057 8.40141 1.19659 9.13817 1.20324 9.90291C1.20988 10.6676 1.51662 11.3992 2.0574 11.94C2.59817 12.4807 3.32971 12.7875 4.09445 12.7941C4.85919 12.8008 5.59594 12.5068 6.14603 11.9755L7.14353 10.978" stroke="#98A2B3" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_7428_64835">
                  <rect width="14" height="14" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div class="image-settings-gen-container-third-first">
          <p class="image-settings-set-container-middle-p remove-image-margin-p">Size</p>
          <p class="remove-image-margin-p">${currentImage ? (Number(currentImage.size) / (1024 * 1024)).toFixed(2) : "NotFound"} MB</p>
        </div>
        <div class="image-settings-gen-container-third-first">
          <p class="image-settings-set-container-middle-p remove-image-margin-p" >Resolution</p>
          <p class="remove-image-margin-p">${currentImage ? currentImage.resolution.width : "NotFound"} PX ${currentImage ? currentImage.resolution.height : "NotFound"} PX</p>
        </div>
      </div>

      <div class="image-settings-set-container-hr"></div>
      <div  class="image-settings-gen-container-forth" style="width:258px">
        <div class="image-settings-gen-container-forth-input">
          <span>Alt text</span>
          <textarea name="" id="image-setting-gen-alt-edit-mini" placeholder="A big dinosaur with wings">${node.alt}</textarea>
        </div>
        <div class="image-settings-gen-container-forth-input">
          <span>Image click behaviour</span>
          <select>
            <option value="one">None</option>
          </select>
        </div>
      </div>
    </div>`

      _divMain2.innerHTML = innerNode3;

      renderMiniSettingsControl(node, currentNode)
    }


    function renderMiniSettingsControl(node, nodeObj) {
      const modal = document.getElementById("mini-settings-modal");

      document.getElementById("image-settings-instant-bar").addEventListener("click", () => {
        _divMain2.innerHTML = ""
      })

      node.addEventListener("mouseover", openModal)

      function openModal(e) {
        modal.style.display = "block"
      }

      miniModalsPositioning(node)

      document.getElementById('image-setting-width-mini').addEventListener("input", function (e) {
        let unitCat = 'px'

        if (width < 767) {
          //properties include nodeId, value, property to edit, will be added as default without media queries in stylesheet
          tdStyleToolsInstance.updateStyleMediaRule(node.id, `${e.target.value}${unitCat}`, 'width', 4)
        } else if (width >= 767 && width < 991) {
          //properties include nodeId, value, property to edit, media position in stylesheet
          tdStyleToolsInstance.updateStyleMediaRule(node.id, `${e.target.value}${unitCat}`, 'width', 5)
        } else if (width >= 991 && width < 1280) {
          tdStyleToolsInstance.updateStyleRule(node.id, `${e.target.value}${unitCat}`, 'width');
        } else if (width >= 1280 && width < 1500) {
          tdStyleToolsInstance.updateStyleMediaRule(node.id, `${e.target.value}${unitCat}`, 'width', 2)
        } else if (width >= 1500) {
          tdStyleToolsInstance.updateStyleMediaRule(node.id, `${e.target.value}${unitCat}`, 'width', 1)
        }

      })

      document.getElementById('image-setting-height-mini').addEventListener("input", function (e) {

        let unitCat = 'px'

        if (width < 767) {
          //properties include nodeId, value, property to edit, will be added as default without media queries in stylesheet
          tdStyleToolsInstance.updateStyleMediaRule(node.id, `${e.target.value}${unitCat}`, 'height', 4)
        } else if (width >= 767 && width < 991) {
          //properties include nodeId, value, property to edit, media position in stylesheet
          tdStyleToolsInstance.updateStyleMediaRule(node.id, `${e.target.value}${unitCat}`, 'height', 5)
        } else if (width >= 991 && width < 1280) {
          tdStyleToolsInstance.updateStyleRule(node.id, `${e.target.value}${unitCat}`, 'height');
        } else if (width >= 1280 && width < 1500) {
          tdStyleToolsInstance.updateStyleMediaRule(node.id, `${e.target.value}${unitCat}`, 'height', 2)
        } else if (width >= 1500) {
          tdStyleToolsInstance.updateStyleMediaRule(node.id, `${e.target.value}${unitCat}`, 'height', 1)
        }
      })

      document.getElementById('image-setting-gen-alt-edit-mini').addEventListener("input", function (e) {
        node.alt = e.target.value
        nodeObj.data.alt = e.target.value
      })

      const fileInput = document.getElementById('replace-image-gen-mini');

      fileInput.addEventListener('change', async function (e) {
        const newNode = await utils.uploadFiles(e.target.files)
        //push to stack
        activeStack.getValue().pushUndo({ parent: null, node: node.id, case: "Img Src Changed", nodes: null, position: null, styles: null, text: null, beforeSrc: node.src, afterSrc: newNode[0].url })

        node.src = newNode[0].url
        nodeObj.data.src = newNode[0].url
        _divMain2.innerHTML = ""
      });
    }
  }

  function renderMinisettingLink(eleSelected = { data: {}, node: HTMLDivElement }) {
    const { node } = eleSelected;
    let _divMain2 = document.getElementById("mini-settings-td-container");
    _divMain2.classList.add(
      "mini-settings",
      "image-settings",
      "image-mini-settings",
      "react-draggable"
    );
    _divMain2.setAttribute("draggable", "true");
    _divMain2.innerHTML = ""

    let currentJsonNode = null

    if (node.tagName.toLocaleLowerCase() == "a") {
      currentJsonNode = htmlState.getValue().nodes.find(e => e._id == node.id)
    } else if (node.parentElement.tagName.toLocaleLowerCase() == "a") {
      currentJsonNode = htmlState.getValue().nodes.find(e => e._id == node.parentElement.id)
    }

    const innerHTML3 = `<div class="mini-link-settings">
    <div class="mini-link-first">
      <span>Link Settings</span>
      <span id="mini-link-settings-close">${generateSvg("close-btn-large")}</span>
    </div>
    <div class="hr"></div>
    <div class="mini-link-second">
      <span id="mini-link-tab-noLink" class="mini-link-tab">${generateSvg("mini-noLink-settings")}</span>
      <span id="mini-link-tab-url" class="mini-link-tab">${generateSvg("external-link")}</span>
      <span id="mini-link-tab-page" class="mini-link-tab">${generateSvg("internal-link")}</span>
      <span id="mini-link-tab-section" class="mini-link-tab">${generateSvg("section-link")}</span>
      <span id="mini-link-tab-email" class="mini-link-tab">${generateSvg("mail-link")}</span>
      <span id="mini-link-tab-phone" class="mini-link-tab">${generateSvg("phone-link")}</span>
    </div>
    <div class="hr"></div>
    <div class="mini-link-settings-cont">
      <div class=" mini-link-tab-noLink">
        <div class="mini-link-settings-four">
          <p class="mini-link-title">No link</p>
        </div>
      </div>
      <div class=" mini-link-tab-url">
        <div class="mini-link-settings-four">
          <p class="mini-link-title">Web Address</p>
          <div class="mini-link-settings-four-input">
            <span>URL</span>
            <input type="text"  id="mini-link-external-url" placeholder="Paste Web Address URL Link here">
          </div>
        </div>
        <div class="hr"></div>
        <div class="mini-link-settings-four">
          <span>Link click behaviour</span>
          <select   id="mini-link-external-url-window" class="mini-link-select-window">
            <option value="">Current window</option>
            <option value="blank">New window</option>
          </select>
        </div>
      </div>
      <div class=" mini-link-tab-page">
          <div class="mini-link-settings-four ">
        <p class="mini-link-title">Page</p>
        <div class="mini-link-settings-four-input">
          <span>Which page?</span>
          <select id="mini-link-page-url">
            <option value="#">Choose a page</option>
          </select>      
        </div>
      </div>
      <div class="hr"></div>
      <div class="mini-link-settings-four">
        <span>Link click behaviour</span>
        <select  id="mini-link-page-url-window" class="mini-link-page-window">
          <option value="">Current window</option>
          <option value="blank">New window</option>
        </select>
      </div>
      </div>
      <div class="mini-link-tab-section">
        <div class="mini-link-settings-four ">
          <p class="mini-link-title">Section</p>
          <div class="mini-link-settings-four-input">
            <span>Page section</span>
            <select id="mini-link-page-input">
              <option value="one">Choose a section</option>
            </select>      
          </div>
        </div>
      </div>
      <div class="mini-link-tab-email">
        <div class="mini-link-settings-four">
          <p class="mini-link-title">Email</p>
          <div class="mini-link-settings-four-input">
            <span>Email address</span>
            <input type="text" name="" id="mini-link-email-input" placeholder="e.g kiki@gmail.com">
          </div>
        </div>
        <div class="mini-link-settings-four">
          <div class="mini-link-settings-four-input">
            <span>Subject</span>
            <input type="text" name="" id="mini-link-subject-input" placeholder="e.g Balance Sheet Request">
          </div>
        </div>
      </div>
      <div class="mini-link-tab-phone">
      <div class="mini-link-settings-four">
        <p class="mini-link-title">Phone number</p>
        <div class="mini-link-settings-four-input">
          <span>Your number</span>
          <input type="text" name="" id="mini-link-phone-input" placeholder="e.g +2349034452323">
          </div>
        </div>
        <div class="mini-link-settings-four">
          <p class="mini-link-title">Phone links work only on devices that can make phone calls</p>
        </div>
      </div>
      </div>
      
    </div>`


    _divMain2.innerHTML = innerHTML3;

    const internalUrlPage = document.getElementById("mini-link-page-url")

    appState.getValue().pages.forEach(page => {
      internalUrlPage.innerHTML += `<option value=${page.route} >${page.name}</option>`
    })


    displayLink22(node)


    function displayLink22(selectedLinkNode) {

      let linkNode = selectedLinkNode
      const noLink = document.getElementById("mini-link-tab-noLink")
      const noLinkdiv = document.querySelector(".mini-link-tab-noLink")
      const url = document.getElementById("mini-link-tab-url")
      const close = document.getElementById("mini-link-settings-close")
      const page = document.getElementById("mini-link-tab-page")
      const section = document.getElementById("mini-link-tab-section")
      const email = document.getElementById("mini-link-tab-email")
      const phone = document.getElementById("mini-link-tab-phone")
      const urldiv = document.querySelector(".mini-link-tab-url")
      const pagediv = document.querySelector(".mini-link-tab-page")
      const sectiondiv = document.querySelector(".mini-link-tab-section")
      const emaildiv = document.querySelector(".mini-link-tab-email")
      const phonediv = document.querySelector(".mini-link-tab-phone")
      const container = document.getElementById("mini-link-settings")
      const externalUrlInput = document.getElementById("mini-link-external-url")
      const externalUrlWindow = document.getElementById("mini-link-external-url-window")
      const windowUrlSelect = document.querySelector(".mini-link-select-window")
      const internalUrlInput = document.getElementById("mini-link-page-url")
      const internalUrlWindow = document.getElementById("mini-link-page-url-window")
      const windowUrlSelectInternal = document.querySelector(".mini-link-page-window")
      const emailInput = document.getElementById("mini-link-email-input")
      const subjectInput = document.getElementById("mini-link-subject-input")
      const phoneInput = document.getElementById("mini-link-phone-input")
      let mailtoEmail = ""
      let mailtoSubject = ""

      miniModalsPositioning(selectedLinkNode)



      let tabs = [{ ele: noLink, container: noLinkdiv }, { ele: url, container: urldiv }, { ele: page, container: pagediv }, { ele: section, container: sectiondiv }, { ele: email, container: emaildiv }, { ele: phone, container: phonediv }]


      //close Modal
      close.addEventListener("click", (e) => {
        _divMain2.innerHTML = ""
      })


      //set Initial tab 
      if (currentJsonNode == null) {
        noLink.style.backgroundColor = "#4B5563"
        noLinkdiv.style.display = "block"
      } else {
        url.style.backgroundColor = "#4B5563"
        urldiv.style.display = "block"
        // set Initial url after state

        if (currentJsonNode.data && currentJsonNode.data.href.startsWith("https://")) {
          externalUrlInput.value = currentJsonNode.data.href.split("//")[1]
          // console.log(currentJsonNode);
        }
      }



      function externalUrlInputEvent({ currentJsonNode, linkNode }) {
        //external url event
        externalUrlInput.addEventListener("input", (e) => {
          const value = `${e.target.value.startsWith("https://") ? `${e.target.value}` : `https://${e.target.value}`}`
          linkNode.setAttribute("href", value)
          currentJsonNode.data["href"] = value
        })

        windowUrlSelect.addEventListener("change", (e) => {
          linkNode.setAttribute("target", e.target.value)
          currentJsonNode.data["target"] = e.target.value
        })
      }

      function internalUrlInputEvent({ currentJsonNode, linkNode }) {
        //internal url
        internalUrlInput.addEventListener("change", (e) => {
          linkNode.setAttribute("href", e.target.value)
          currentJsonNode.data["href"] = e.target.value
        })

        windowUrlSelectInternal.addEventListener("change", (e) => {
          linkNode.setAttribute("target", e.target.value)
          currentJsonNode.data["target"] = e.target.value
        })
      }


      function emailClientInputEvent({ currentJsonNode, linkNode }) {
        //email client
        emailInput.addEventListener("input", (e) => {
          mailtoEmail = e.target.value
          let value = `${mailtoEmail == "" ? "" : `mailto:${mailtoEmail}`}` + `${mailtoSubject == "" ? "" : `subject:${mailtoSubject}`}`
          linkNode.setAttribute("href", value)
          currentJsonNode.data["href"] = value
        })

        subjectInput.addEventListener("input", (e) => {
          if (mailtoEmail == "") {
            notify("Enter email before you can change the subject")
            subjectInput.value = ""
          } else {
            mailtoSubject = e.target.value
            const value = `${mailtoEmail == "" ? "" : `mailto:${mailtoEmail}`}` + `${mailtoSubject == "" ? "" : `?subject=${mailtoSubject}`}`
            linkNode.setAttribute("href", value)
            currentJsonNode.data["href"] = value
          }

        })

      }

      function phoneInputEvent({ currentJsonNode, linkNode }) {
        //phone contact
        phoneInput.addEventListener("input", (e) => {
          linkNode.setAttribute("href", `tel:${e.target.value}`)
          currentJsonNode.data["href"] = `tel:${e.target.value}`
        })
      }


      //click for tabs
      tabs.forEach(tab => {

        tab.ele.addEventListener("click", (e) => {
          tabs.forEach(tabI => {
            tabI.ele.style.backgroundColor = ""
            tabI.container.style.display = "none"
          });



          // deactivate choose section color
          if (tab.ele.id !== section.id) {
            tab.ele.style.backgroundColor = `#374151`;
          }

          switch (tab.ele.id) {
            case noLink.id:
              tab.container.style.display = "block"
              revertManipulationJSON(selectedLinkNode)
              break;
            case url.id:
              tab.container.style.display = "block"
              handleCase(urlCase, externalUrlInputEvent);
              break;
            case page.id:
              tab.container.style.display = "block"
              handleCase(pageCase, internalUrlInputEvent)
              break;
            case section.id:
              tab.container.style.display = "block"
              // revertManipulationJSON(selectedLinkNode)
              break;
            case email.id:
              tab.container.style.display = "block"
              handleCase(emailCase, emailClientInputEvent)
              break;
            case phone.id:
              tab.container.style.display = "block"
              handleCase(phoneCase, phoneInputEvent)
              break;
            default:
              //do nothing
              break;
          }

          function handleCase(caseFunction, callback) {
            if (selectedLinkNode.tagName.toLowerCase() === "a") {
              // Do nothing
              callback({ currentJsonNode, linkNode: selectedLinkNode })
            } else if (selectedLinkNode.parentElement.tagName.toLowerCase() === "a") {
              callback({ currentJsonNode, linkNode: selectedLinkNode.parentElement })
            } else {
              const nodes = manipulateJSON(selectedLinkNode);
              callback(nodes);
            }

            caseFunction()
          }


          function pageCase() {
            //set internal Url Value
            if (currentJsonNode.data && (currentJsonNode.data.href.startsWith("./") || currentJsonNode.data.href.startsWith("/"))) {
              for (var i = 0; i < internalUrlInput.options.length; i++) {
                const linkArr = currentJsonNode.data.href.split("/")
                if (internalUrlInput.options[i].value.split("/")[1] === linkArr[linkArr.length - 1]) {
                  internalUrlInput.options[i].selected = true;
                  break;
                }
              }
              // console.log(currentJsonNode);
            }

            //set target 
            if (linkNode.target) {
              for (var i = 0; i < externalUrlWindow.options.length; i++) {
                if (externalUrlWindow.options[i].value === linkNode.target) {
                  externalUrlWindow.options[i].selected = true;
                  internalUrlWindow.options[i].selected = true;
                  break;
                }
              }
            }
          }

          function urlCase() {
            //set Value for External Url
            if (currentJsonNode.data && currentJsonNode.data.href.startsWith("https://")) {
              externalUrlInput.value = currentJsonNode.data.href.split("//")[1]
              // console.log(currentJsonNode);
            }

            //set target 
            if (linkNode.target) {
              for (var i = 0; i < externalUrlWindow.options.length; i++) {
                if (externalUrlWindow.options[i].value === linkNode.target) {
                  externalUrlWindow.options[i].selected = true;
                  internalUrlWindow.options[i].selected = true;
                  break;
                }
              }
            }
          }

          function emailCase() {
            //set mailto value
            if (currentJsonNode.data && currentJsonNode.data.href.startsWith("mailto")) {
              mailtoEmail = currentJsonNode.data.href.split(":")[1].split("?")[0]
              emailInput.value = currentJsonNode.data.href.split(":")[1].split("?")[0]
              // console.log(currentJsonNode);
            }

            if (currentJsonNode.data && currentJsonNode.data.href.startsWith("mailto") && currentJsonNode.data.href.split("?subject=")[1] != undefined) {
              mailtoSubject = currentJsonNode.data.href.split("?subject=")[1]
              subjectInput.value = currentJsonNode.data.href.split("?subject=")[1]
              // console.log(currentJsonNode);
            }
          }

          function phoneCase() {
            //set phone Input value
            if (currentJsonNode.data && currentJsonNode.data.href.startsWith("tel")) {
              phoneInput.value = currentJsonNode.data.href.split(":")[1]
              // console.log(currentJsonNode);
            }
          }
        })
      })

    }


    function manipulateJSON(selectedNode) {
      // MANIPULATE jSON
      const parentJsonNode = htmlState.getValue().nodes.find(e => e._id === selectedNode.parentElement.id)

      const positionInParent = parentJsonNode.children.findIndex(e => e === selectedNode.id)
      const newLikeId = fUtils.generateId.getVal()
      const linkNode = {
        "_id": newLikeId,
        "tag": "a",
        "classes": [],
        "type": "Link",
        "data": {
          "href": "#"
        },
        "children": [selectedNode.id]
      };


      htmlState.getValue().nodes.push(linkNode)

      //Remove from children
      parentJsonNode.children.splice(positionInParent, 1);
      //add to children
      parentJsonNode.children.splice(positionInParent, 0, newLikeId);

      currentJsonNode = htmlState.getValue().nodes.find(e => e._id == newLikeId)

      // console.log(currentJsonNode);


      //MANIPULATE DOM
      const linkNodeDom = document.createElement('a');
      linkNodeDom.setAttribute('id', newLikeId);
      linkNodeDom.setAttribute('href', "");
      selectedNode.parentNode.replaceChild(linkNodeDom, selectedNode);
      linkNodeDom.appendChild(selectedNode)


      return { currentJsonNode: linkNode, linkNode: linkNodeDom }
    }

    function revertManipulationJSON(selectedNode) {
      if (selectedNode.parentElement.tagName.toLocaleLowerCase() === "a") {
        const linkNodeIndex = htmlState.getValue().nodes.findIndex(e => e._id === selectedNode.parentElement.id);
        if (linkNodeIndex !== -1) {
          //MANIPULATE JSON
          const linkNode = htmlState.getValue().nodes[linkNodeIndex];
          const parentJsonNode = htmlState.getValue().nodes.find(e => e._id === selectedNode.parentElement.parentElement.id);
          const positionInParent = parentJsonNode.children.findIndex(e => e === linkNode._id);

          // Remove the link node from the HTML state nodes
          htmlState.getValue().nodes.splice(linkNodeIndex, 1);

          // Remove the link node from parent's children
          parentJsonNode.children.splice(positionInParent, 1);

          // Add the selected node back to parent's children
          parentJsonNode.children.splice(positionInParent, 0, selectedNode.id);

          //MANIPULATE DOM
          selectedNode.parentNode.parentNode.replaceChild(selectedNode, selectedNode.parentElement);
        }
      } else if (selectedNode.tagName.toLocaleLowerCase() === "a") {
        const linkNode = htmlState.getValue().nodes.find(e => e._id === selectedNode.id);
        linkNode.data["href"] = "#"
        selectedNode.href = "#"
      }
    }



  }

  function miniModalsPositioning(target) {
    let _divMain2 = document.getElementById("mini-settings-td-container");
    const iframeElement = document.getElementById("site-iframe-next");
    const _divMain2Rect = _divMain2.getBoundingClientRect()
    const iframeDocument = iframeElement.contentDocument

    const iframeRect = iframeElement.getBoundingClientRect();

    // Find the position of the element within the iframe
    const elementInIframe = iframeDocument.getElementById(target.id);

    if (elementInIframe) {
      const elementRect = elementInIframe.getBoundingClientRect();

      // Calculate the position of the element relative to the iframe
      const elementXRelativeToIframe = elementRect.left;
      const elementYRelativeToIframe = elementRect.top;

      const toptoTopOfIframe = elementYRelativeToIframe
      const leftDistanceToIframe = elementXRelativeToIframe;

      // Calculate the right distance of the element relative to the iframe
      const rightDistanceToIframe = iframeRect.width - (elementXRelativeToIframe + elementRect.width);

      const distanceFromTopToBottom = iframeRect.height - (elementYRelativeToIframe + elementRect.height);

      const toMeasureHeight = _divMain2Rect.height

      if (_divMain2 && (rightDistanceToIframe < 180)) {
        _divMain2.style.right = "0"
        _divMain2.style.left = "auto"
      }

      if (_divMain2 && (distanceFromTopToBottom < toMeasureHeight)) {
        if (toptoTopOfIframe < (_divMain2Rect.height + 55)) {
          return
        } else {
          // console.log((65 + toMeasureHeight));
          _divMain2.style.top = `-${(65 + toMeasureHeight)}px`
        }

      }
    }
  }

  function renderLeftSideContent(
    status,
    activeElement,
    selector = "sidebar-right-setting-link"
  ) {
    const { node } = activeElement;
    let tab = document.querySelector(`[data-auto-id="${selector}"]`);
    let innerContentWrapper = document.querySelector(
      `.sidebar__tab-pane .sidebar__tab-heading`
    );
    let innerContent = document.querySelector(`#sidebar__tab-style-props`);

    const getStyleBg = status && "#101828";
    tab.classList.add = "active";
    tab.style.background = getStyleBg;

    //set new value
    let outViewHeading = ``;
    let outView = ``;

    outViewHeading += `
                    <div>
                        <p>${node.tagName}</p>
                        <div>
                            <label>Font size: <input type="number"  name="fontSize" id="style__font-size" value='${node.style.fontSize}' /></span>
                        </div>
                        <div>
                            <label>Color: <input type="color" id="color-picker" name="color" value="${node.style.color}"/></span>
                        </div>
                        <div>
                            <label>Background: <input type="color" id="bgcolor-picker" name="backgroundColor" value=${node.style.backgroundColor} /></span>
                        </div>
                    </div>
                    `;

    const styleView = [
      {
        name: "Typograghy",
        data: {
          "font-size": { val: 15, label: "size" },
          "font-family": { val: "Arial, sans-serif", label: "font" },
          "font-weight": { val: 400, label: "Weight" },
          "font-style": { val: "italicize", label: "style" },
          "align-items": { val: "center", label: "align-items" },
          "line-height": { val: 100, label: "height" },
        },
      },
      {
        name: "Size",
        data: {
          width: { val: 15, label: "width" },
          height: 100,
          label: "height",
        },
        "max-height": { val: 400, label: "Max-H" },
        "max-width": { val: 400, label: "Max-W" },
      },
      {
        name: "Backgrounds",
        data: {
          "background-color": { val: "#fff000", label: "color" },
          "background-image": { val: "test.png", label: "image" },
        },
      },
    ];
    for (let i = 0; i < styleView.length; i++) {
      const ele = styleView[i];
      outView += `
                <div data-auto-id="typogragphy" class="sidebar__style-props">
                        <div data-auto-id="header" tab-index="0" class="header">
                            <div style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start;">
                                <div style="margin-right: 4px;">${ele.name}</div>
                            </div>
                        </div>
                        <div>
                            <div style="align-items: center;box-sizing: border-box;display: grid;gap: 8px;grid-template-columns: 44px 1fr 44px 1fr;padding: 8px;">
                                <div name="fontFamily" style="background: rgba(248, 89, 0, 0.15);">${ele.data["background-color"]}</div>
                                <div style="grid-column: 2 / -1;">
                                    <div>Arial</div>
                                </div>
                                <div name="fontSize" style="cursor: default; user-select: none; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; font-family: Inter, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, sans-serif; font-weight: 400; line-height: 12px; letter-spacing: -0.2px; display: inline-flex; color: rgb(255, 171, 102); background: rgba(248, 89, 0, 0.15); padding: 2px; margin-left: -2px; border-radius: 2px; max-width: 100%; box-sizing: content-box; justify-self: start; position: relative; opacity: 1;">Size</div>
                                <div style="grid-column: 2 / -1;">
                                    <div>${node.style.fontSize}</div>
                                </div>
                            </div>
                        </div>
                </div>
                `;
    }

    innerContentWrapper.innerHTML = outViewHeading;
  }

  return {
    renderMainAndTop,
    renderRightSideViewStyle,
    renderLeftSideView,
    renderLeftSideContent,
    renderMinisetting,
    renderRightSideViewImageSettings,
    renderMinisettingLink,
  };
}

function editorReactMount(doc) {
  let divContainer = document.getElementById("editor-react-mount");
  if (!divContainer) {
    divContainer = document.createElement("div");
    divContainer.id = "editor-react-mount";
  }

  const newDiv = document.createElement("div");
  const newDivNotify = document.createElement("div");
  const newDivToastify = document.createElement("div");
  newDivNotify.classList.add("td-tarq3n");
  newDivToastify.classList.add("Toastify");
  newDiv.appendChild(newDivNotify);
  newDiv.appendChild(newDivToastify);
  divContainer.appendChild(newDiv);
  function handleRightClick(target) {
    // console.log("right click on ", target);
  }

  function handleDoubleClick(target, action) {
    // console.log("dobulbe click on ", target, action);
  }

  //clone
  // params: target, the target node
  // params: deep, are you cloning just the element or with it children
  function duplicateNode(target, deep = true) {
    let result = target.cloneNode(true);
    return result;
  }

  return {
    duplicateNode,
    handleRightClick,
    handleDoubleClick,
  };
}


function leftOverlayView(htmlState) {
  window.addEventListener("load", () => {
    alert("Loading")
    let all = document.querySelectorAll(".collase ul")

    for (let i of all) {
      let tog = document.createElement('div')
      tog.innerHTML = i.previousSibling.textContent
      tog.className = "toggle"
      tog.onclick = () => tog.classList.toggle("show")
      i.parentElement.removeChild(i.previousSibling)
      i.parentElement, insertBefore(tog, i)
    }
  })
  function handleHeadPane(props) {
    const output = `<div>
                        <span>${props.label} </span>
                    </div>
                    <div>
                    <div>
                        <button class="nc-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_961_17404" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_961_17404)">
                                <path d="M6.4001 18.6496L5.3501 17.5996L10.9501 11.9996L5.3501 6.39961L6.4001 5.34961L12.0001 10.9496L17.6001 5.34961L18.6501 6.39961L13.0501 11.9996L18.6501 17.5996L17.6001 18.6496L12.0001 13.0496L6.4001 18.6496Z" fill="white"/>
                                </g>
                            </svg>
                        </button>
                    </div>`;
    return output;
  }

  function displayNodeEle(data) {
    let tempDiv = ``;
    data.map((ele, i) => {
      tempDiv += `<div id="ele${i}" class="list-text-heading-btn" data-auto-id="add-tab-${ele.type}" data-td-type="${ele.type}" data-td-element="${ele.tag}" data-td-id="${ele._id}">
                            <div>
                                <div>${ele.label}</div>
                                <div>
                                    <svg data-icon="index" aria-hidden="true" focusable="false" width="40" height="16" viewBox="0 0 59 16" class="bem-Svg" style="display: block;"><path opacity=".4" d="M0 0v16h29v-4h29V8h-1V4h2V0H0zm1 7h55H1zm57-4H1h57z"></path><path fill="currentColor" d="M1 1v2h57V1H1zm55 4H1v2h55V5zM1 11h56V9H1v2zm0 4h27v-2H1v2z"></path></svg>
                                </div>
                            </div>
                            <div><span>${ele.label}</span></div>
                        </div>`;
    });

    //tempDiv +
    return tempDiv;
  }
  function displayLayout(data) {
    let tempDiv = ``;
    tempDiv += `
            <div>`;
    data.map((ele, i) => {
      tempDiv += ` 
                <div data-auto-id=layout-${i}" tabIndex=${i}>
                    <div class="node-element-head">
                        <div>
                            <div class="first-child">${generateSvg(ele.icon)}</div>
                            <span>${ele.label}</span>
                        </div>
                        <div>
                            ${generateSvg("arrow-up")}
                        </div>
                        <div class="node-element-head-cover"></div>
                    </div>
                    <div class="node-pane-body" id="add-pane-${ele.type}"  role="tabpanel" style="display:grid"></div>
                </div>`;
    });
    tempDiv += `</div>`;

    return tempDiv;
  }

  function displayPages(htmlState) {
    const data = htmlState.getValue().pages
    const currentHome = htmlState.getValue().pages.find(e => e.route.includes("/index") || e.route === "/")
    let tempDiv = ``;
    tempDiv += `<div>`;

    tempDiv += ` 
    <div data-auto-id=layout-${0} tabIndex=${0}>
        <div class="node-element-head"  data-map-page-id="new-page-id-to-be-used-and-changed">
            <div>
                <div class="node-element-head-gchild">Add Page</div>
                
            </div>
            <div>
                ${generateSvg("addPage-plus")}
            </div>
            <div class="node-element-head-cover"></div>
        </div>
        <div class="node-pane-body" id="add-pane-addPage"  role="tabpanel" style="display:grid"></div>
    </div>`;


    data.map((page, i) => {
      tempDiv += ` 
                <div data-auto-id=layout-${i + 1} tabIndex=${i + 1}>
                    <div class="node-element-head" data-map-page-id=${page.page_id}>
                        <div style={display:flex; align-items:center; gap:4px;}>
                          ${currentHome && currentHome.page_id == page.page_id ? generateSvg("addPage-home") : generateSvg("addPage-page")}
                          <div class="node-element-head-gchild">${page.name}</div> 
                        </div>
                        <div>
                            ${generateSvg("setting2")}
                        </div>
                        <div class="node-element-head-cover"></div>
                    </div>
                    <div class="node-pane-body" id="add-pane-addPage"  role="tabpanel" style="display:grid"></div>
                </div>`;
    });


    tempDiv += `</div>`;

    return tempDiv;
  }

  function displayElement(data) {
    let tempDiv = ``;
    tempDiv += `
            <div>`;
    data.map((ele, i) => {
      tempDiv += ` 
                <div data-auto-id=layout-${i}" tabIndex=${i}>
                    <div class="node-element-head">
                        <div>
                            <div class="node-element-head-gchild">${ele.label}</div>
                            
                        </div>
                        <div>
                            ${generateSvg("arrow-up")}
                        </div>
                        <div class="node-element-head-cover"></div>
                    </div>
                    <div class="node-pane-body" id="add-pane-${ele.type}"  role="tabpanel" style="display:grid"></div>
                </div>`;
    });
    tempDiv += `</div>`;

    return tempDiv;
  }


  const canvasWindow = document.querySelector('iframe').contentWindow
  const doc = canvasWindow.document


  function addImages() {
    let tempDiv = ``
    const newElement = `
    <div>
      <div class="add-img-ctn">
        <div class="img-menu">
          <span>All assets</span>
          <svg xmlns="http://wwwa.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
          <path d="M4.00104 5.03314L0.234375 1.2498L0.934375 0.549805L4.00104 3.61647L7.06771 0.549805L7.76771 1.2498L4.00104 5.03314Z" fill="white"/>
          </svg>
        </div>

        <label class="upload" for="input-file">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6 12L9 9M9 9L12 12M9 9V15.75M15 12.5571C15.9161 11.8005 16.5 10.656 16.5 9.375C16.5 7.09683 14.6532 5.25 12.375 5.25C12.2111 5.25 12.0578 5.1645 11.9746 5.0233C10.9965 3.36363 9.19082 2.25 7.125 2.25C4.0184 2.25 1.5 4.7684 1.5 7.875C1.5 9.42458 2.12659 10.8278 3.14021 11.8451" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Upload</span>
        <label/>  
        
        <div class="images-layout">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6.3 2.25H3.45C3.02996 2.25 2.81994 2.25 2.65951 2.33175C2.51839 2.40365 2.40365 2.51839 2.33175 2.65951C2.25 2.81994 2.25 3.02996 2.25 3.45V6.3C2.25 6.72004 2.25 6.93006 2.33175 7.09049C2.40365 7.23161 2.51839 7.34635 2.65951 7.41825C2.81994 7.5 3.02996 7.5 3.45 7.5H6.3C6.72004 7.5 6.93006 7.5 7.09049 7.41825C7.23161 7.34635 7.34635 7.23161 7.41825 7.09049C7.5 6.93006 7.5 6.72004 7.5 6.3V3.45C7.5 3.02996 7.5 2.81994 7.41825 2.65951C7.34635 2.51839 7.23161 2.40365 7.09049 2.33175C6.93006 2.25 6.72004 2.25 6.3 2.25Z" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.55 2.25H11.7C11.28 2.25 11.0699 2.25 10.9095 2.33175C10.7684 2.40365 10.6537 2.51839 10.5817 2.65951C10.5 2.81994 10.5 3.02996 10.5 3.45V6.3C10.5 6.72004 10.5 6.93006 10.5817 7.09049C10.6537 7.23161 10.7684 7.34635 10.9095 7.41825C11.0699 7.5 11.28 7.5 11.7 7.5H14.55C14.97 7.5 15.1801 7.5 15.3405 7.41825C15.4816 7.34635 15.5963 7.23161 15.6683 7.09049C15.75 6.93006 15.75 6.72004 15.75 6.3V3.45C15.75 3.02996 15.75 2.81994 15.6683 2.65951C15.5963 2.51839 15.4816 2.40365 15.3405 2.33175C15.1801 2.25 14.97 2.25 14.55 2.25Z" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.55 10.5H11.7C11.28 10.5 11.0699 10.5 10.9095 10.5817C10.7684 10.6537 10.6537 10.7684 10.5817 10.9095C10.5 11.0699 10.5 11.28 10.5 11.7V14.55C10.5 14.97 10.5 15.1801 10.5817 15.3405C10.6537 15.4816 10.7684 15.5963 10.9095 15.6683C11.0699 15.75 11.28 15.75 11.7 15.75H14.55C14.97 15.75 15.1801 15.75 15.3405 15.6683C15.4816 15.5963 15.5963 15.4816 15.6683 15.3405C15.75 15.1801 15.75 14.97 15.75 14.55V11.7C15.75 11.28 15.75 11.0699 15.6683 10.9095C15.5963 10.7684 15.4816 10.6537 15.3405 10.5817C15.1801 10.5 14.97 10.5 14.55 10.5Z" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.3 10.5H3.45C3.02996 10.5 2.81994 10.5 2.65951 10.5817C2.51839 10.6537 2.40365 10.7684 2.33175 10.9095C2.25 11.0699 2.25 11.28 2.25 11.7V14.55C2.25 14.97 2.25 15.1801 2.33175 15.3405C2.40365 15.4816 2.51839 15.5963 2.65951 15.6683C2.81994 15.75 3.02996 15.75 3.45 15.75H6.3C6.72004 15.75 6.93006 15.75 7.09049 15.6683C7.23161 15.5963 7.34635 15.4816 7.41825 15.3405C7.5 15.1801 7.5 14.97 7.5 14.55V11.7C7.5 11.28 7.5 11.0699 7.41825 10.9095C7.34635 10.7684 7.23161 10.6537 7.09049 10.5817C6.93006 10.5 6.72004 10.5 6.3 10.5Z" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <input style="display: none;" type="file" accept="image/jpeg, image/png, image/jpg" id="input-file" multiple >
      <div id="image-container" class="image-container" role="tabpanel"></div>
    </div>
    `

    tempDiv += newElement


    return tempDiv

  }

  function addLayers() {
    let tempDiv = ``
    const newElement = `
    <section class"layer">
      <div class="layer-cta-ctn">
        <p class="layer-cta-content">To check layers, add blocks or sections to your work area</p>
        <button class="layer-cta" id="addNodeButton">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
            <path d="M5.1665 12.3337V7.33366H0.166504V5.66699H5.1665V0.666992H6.83317V5.66699H11.8332V7.33366H6.83317V12.3337H5.1665Z" fill="white"/>
          </svg>
          <span>Add Section</span>
        </button>
      </div>
    </section>
   `
    tempDiv += newElement

    const data = htmlState.getValue().nodes

    const mainTracker = data[0].children

    const filteredData = data.filter(item => mainTracker.includes(item._id))

    function createCollapsibleList(dataArray, level = 0) {
      let listHTML = '';

      dataArray.forEach(item => {
        const childrenArray = item.children || [];

        const childDataArray = childrenArray.map(childId =>
          data.find(dataItem => dataItem && dataItem._id === childId)
        ).filter(Boolean);

        const listItemHTML = `
          <li class="layer-list"  data-map-id="${item._id}" style="padding-left: ${level * 15}px;">
            ${(item.type !== "text" && item.type !== "img" && item.type !== "hr") ?
            `<svg style="transform: rotate(0deg);" class="layout-dropdown-collapse-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_5838_107655" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect y="24" width="24" height="24" transform="rotate(-90 0 24)" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_5838_107655)">
                  <path d="M15.0502 12.0004L9.3752 17.6504L8.3252 16.6004L12.9252 12.0004L8.32519 7.40039L9.3752 6.35039L15.0502 12.0004Z" fill="white"/>
                </g>
              </svg>`
            : ''
          }
            <span style="display: inline;" class="">${item.type}</span>
          </li>
        `;

        listHTML += listItemHTML;

        if (childDataArray.length) {
          const childListHTML = createCollapsibleList(childDataArray, level + 1);
          listHTML += `
          <ul class="layer-list-item" style="display:none;">
            ${childListHTML}
          </ul>
          `;
        }
      });

      return listHTML;
    }

    const containerHTML = `
      <div class="layers-overflow-container">
        <ul class="list-container collapse">
        ${createCollapsibleList(filteredData)}
        </ul>
      </div>
    `;

    if (mainTracker.length > 0) {
      return containerHTML;
    } else {
      return tempDiv;
    }

    // return tempDiv;

  }

  function displaySetting() {
    let tempDiv = `<div class="tab-interface">
        <div role="tablist" aria-label="Sample Tabs">
          <span
            role="tab"
            aria-selected="true"
            aria-controls="panel-1"
            id="tab-1"
            tabindex="0">
            First Tab
          </span>
          <span
            role="tab"
            aria-selected="false"
            aria-controls="panel-2"
            id="tab-2"
            tabindex="-1">
            Second Tab
          </span>
          <span
            role="tab"
            aria-selected="false"
            aria-controls="panel-3"
            id="tab-3"
            tabindex="-1">
            Third Tab
          </span>
        </div>
        <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
          <p>Content for the first panel</p>
        </div>
        <div
          id="panel-2"
          role="tabpanel"
          tabindex="0"
          aria-labelledby="tab-2"
          class="display-none">
          <p>Content for the second panel</p>
        </div>
        <div
          id="panel-3"
          role="tabpanel"
          tabindex="0"
          aria-labelledby="tab-3"
          class="display-none">
          <p>Content for the third panel</p>
        </div>
      </div>`;
    return tempDiv;
  }

  function displayListOptions(params) {
    let pan = document.querySelector(".pane-body-container")
    let _newContainer = document.createElement("div")
    let _containerHeader = document.createElement("div")
    let _containerBody = document.createElement("div")
    let _containerHeaderLabel = document.createElement("h5")
    let _containerHeaderIcon = document.createElement("div")




    _newContainer.classList.add("pane-body-content-2")
    _containerBody.classList.add("pane-body-content-2-body")


    _containerHeader.appendChild(_containerHeaderLabel)
    _containerHeader.appendChild(_containerHeaderIcon)

    if (params == "ADD_LAYOUT") {
      _newContainer.appendChild(_containerHeader)
    }
    _newContainer.appendChild(_containerBody)
    pan.appendChild(_newContainer);
  }

  async function viewLeftOverlayAddNode(data) {
    let mainOverlay = document.createElement("div");
    let paneWrapperOverlay = document.createElement("div");
    paneWrapperOverlay.classList.add("nc-panel");
    mainOverlay.classList.add("nc-overlay-panel-layer-container");
    let headPane = document.createElement("div");
    headPane.classList.add("panel-head");
    headPane.innerHTML = handleHeadPane({ label: "Add" });

    let bodyPane = document.createElement("div");
    let bodyWrapperPane = document.createElement("div");
    bodyPane.classList.add("pane-body");
    bodyWrapperPane.classList.add("pane-body-container");

    paneWrapperOverlay.appendChild(headPane);
    paneWrapperOverlay.appendChild(bodyPane);
    let listNew = await displayNodeEle(siteComponentsState.getValue().addElement.list);
    bodyWrapperPane.innerHTML = listNew;
    bodyPane.appendChild(bodyWrapperPane);
    paneWrapperOverlay.appendChild(headPane);
    paneWrapperOverlay.appendChild(bodyPane);
    //mainOverlay.innerHTML = paneWrapperOverlay;
    mainOverlay.appendChild(paneWrapperOverlay);
    return mainOverlay;
  }

  async function viewLeftOverlayAddPage(data) {
    let mainOverlay = document.createElement("div");
    let paneWrapperOverlay = document.createElement("div");
    paneWrapperOverlay.classList.add("nc-panel");
    mainOverlay.classList.add("nc-overlay-panel-layer-container");
    let headPane = document.createElement("div");
    headPane.classList.add("panel-head");
    headPane.innerHTML = handleHeadPane({ label: data.label });

    let bodyPane = document.createElement("div");
    let bodyWrapperPane = document.createElement("div");
    bodyPane.classList.add("pane-body");
    bodyWrapperPane.classList.add("pane-body-container");
    bodyPane.appendChild(bodyWrapperPane);
    let listNew = await displayPages(htmlState);
    bodyWrapperPane.innerHTML = listNew;
    paneWrapperOverlay.appendChild(headPane);
    paneWrapperOverlay.appendChild(bodyPane);
    mainOverlay.appendChild(paneWrapperOverlay);
    return mainOverlay;
  }

  async function viewLeftOverlayAddLayout(data) {
    let mainOverlay = document.createElement("div");
    let paneWrapperOverlay = document.createElement("div");
    paneWrapperOverlay.classList.add("nc-panel");
    mainOverlay.classList.add("nc-overlay-panel-layer-container");
    let headPane = document.createElement("div");
    headPane.classList.add("panel-head");
    headPane.innerHTML = handleHeadPane({ label: data.label });

    let bodyPane = document.createElement("div");
    let bodyWrapperPane = document.createElement("div");
    bodyPane.classList.add("pane-body");
    bodyWrapperPane.classList.add("pane-body-container");
    bodyPane.appendChild(bodyWrapperPane);
    let listNew = await displayLayout(data.list);
    bodyWrapperPane.innerHTML = listNew;
    paneWrapperOverlay.appendChild(headPane);
    paneWrapperOverlay.appendChild(bodyPane);
    mainOverlay.appendChild(paneWrapperOverlay);

    return mainOverlay;
  }
  async function viewLeftOverlayAddElement(data) {
    let mainOverlay = document.createElement("div");
    let paneWrapperOverlay = document.createElement("div");
    paneWrapperOverlay.classList.add("nc-panel");
    mainOverlay.classList.add("nc-overlay-panel-layer-container");
    let headPane = document.createElement("div");
    headPane.classList.add("panel-head");
    headPane.innerHTML = handleHeadPane({ label: data.label });

    let bodyPane = document.createElement("div");
    let bodyWrapperPane = document.createElement("div");
    bodyPane.classList.add("pane-body");
    bodyWrapperPane.classList.add("pane-body-container");
    bodyPane.appendChild(bodyWrapperPane);
    let listNew = await displayElement(data.list);
    bodyWrapperPane.innerHTML = listNew;
    paneWrapperOverlay.appendChild(headPane);
    paneWrapperOverlay.appendChild(bodyPane);
    mainOverlay.appendChild(paneWrapperOverlay);
    addImages(data.list)

    return mainOverlay;
  }

  async function viewLeftOverlayAddLayoutMedia(data) {
    let mainOverlay = document.createElement("div");
    let paneWrapperOverlay = document.createElement("div");
    paneWrapperOverlay.classList.add("nc-panel");
    mainOverlay.classList.add("nc-overlay-panel-layer-container");
    let headPane = document.createElement("div");
    headPane.classList.add("panel-head");
    headPane.innerHTML = handleHeadPane({ label: data.label });

    let bodyPane = document.createElement("div");
    let bodyWrapperPane = document.createElement("div");
    bodyPane.classList.add("pane-body");
    bodyWrapperPane.classList.add("pane-body-container");
    bodyPane.appendChild(bodyWrapperPane);
    let listNew = await addImages()
    bodyWrapperPane.innerHTML = listNew;

    paneWrapperOverlay.appendChild(headPane);
    paneWrapperOverlay.appendChild(bodyPane);
    mainOverlay.appendChild(paneWrapperOverlay);
    return mainOverlay;
  }

  async function viewLeftOverlayAddLayoutLayer(data) {
    let mainOverlay = document.createElement("div");
    let paneWrapperOverlay = document.createElement("div");
    paneWrapperOverlay.classList.add("nc-panel");
    mainOverlay.classList.add("nc-overlay-panel-container");
    let headPane = document.createElement("div");
    headPane.classList.add("panel-head");
    // console.log({ data });
    headPane.innerHTML = handleHeadPane({ label: data.label });

    let bodyPane = document.createElement("div");
    let bodyWrapperPane = document.createElement("div");
    bodyPane.classList.add("pane-body");
    bodyWrapperPane.classList.add("pane-body-container");
    bodyPane.appendChild(bodyWrapperPane);
    let listNew = await addLayers()
    bodyWrapperPane.innerHTML = listNew;

    paneWrapperOverlay.appendChild(headPane);
    paneWrapperOverlay.appendChild(bodyPane);
    mainOverlay.appendChild(paneWrapperOverlay);



    return mainOverlay;
  }


  async function viewLeftOverlaySetting(data) {
    let mainOverlay = document.createElement("div");
    let paneWrapperOverlay = document.createElement("div");
    paneWrapperOverlay.classList.add("nc-panel");
    mainOverlay.classList.add("nc-overlay-panel-layer-container");
    let headPane = document.createElement("div");
    headPane.classList.add("panel-head");
    headPane.innerHTML = handleHeadPane({ label: "Layout" });

    let bodyPane = document.createElement("div");
    let bodyWrapperPane = document.createElement("div");
    bodyPane.classList.add("pane-body");
    bodyWrapperPane.classList.add("pane-body-container");
    bodyPane.appendChild(bodyWrapperPane);
    let listNew = await displaySetting(siteComponentsState.getValue().component.list);
    bodyWrapperPane.innerHTML = listNew;
    paneWrapperOverlay.appendChild(headPane);
    paneWrapperOverlay.appendChild(bodyPane);
    mainOverlay.appendChild(paneWrapperOverlay);

    return mainOverlay;
  }

  return {
    viewLeftOverlayAddNode,
    viewLeftOverlayAddLayout,
    viewLeftOverlayAddElement,
    viewLeftOverlayAddLayoutMedia,
    viewLeftOverlayAddLayoutLayer,
    viewLeftOverlayAddPage,
    viewLeftOverlaySetting,
    displayListOptions,
    addLayers,
  };
}

function tdUtils(
  doc,
  nodeMainManager,
  htmlState,
  cssStyleInstance,
  activeStack,
  appState,
  previewForGuest
) {
  function getNodeIfFound(virtualTag) {
    //console.log({all: doc.all})
    for (const child of doc.all) {
      //doc.all including head tags
      if (child.getAttribute("data-t-id") == virtualTag._id) {
        // console.log("Got a match... exit: ", child);
        return child;
      }
    }

    return doc.body; // or null
  }

  function processAccordionMedia() {
    //first display the fetched images 
    const imagesFetched = appState.getValue().assets.images
    displayImages(imagesFetched)

    const fileInput = document.getElementById('input-file');

    // console.log(fileInput);
    fileInput.addEventListener('change', async function () {
      uploadFiles(this.files)
    });

  }

  async function uploadFiles(files) {
    const siteId = appState.getValue()._id
    let newImages;

    let loading = true
    //loader
    try {

      const formData = new FormData

      for (const file of files) {
        formData.append("files", file)
      }

      formData.append("siteId", siteId)

      loading = false

      newImages = await tdApiRequestInstance.uploadSiteImages(formData);

      if (newImages.statusCode == 200) {
        notify("Upload Successfull", "green")
      }

      const updatedSite = await tdApiRequestInstance.getSite(siteId)

      appState.setValue(updatedSite)

      loading = false
      displayImages(newImages.data)
    } catch (error) {
      loading = false
      notify("Something went wrong")

    }

    return newImages.data
  }

  function displayImages(files) {
    const imageContainer = document.getElementById("image-container")
    // Loop through selected files and create image elements
    for (const file of files) {

      const imgUrl = file.url

      const imageId = fUtils.generateId.getVal()
      const imageContainerInnerId = fUtils.generateId.getVal()
      const imageContainerOutterId = fUtils.generateId.getVal()

      let imageHtmlObject = workingObject(file.url, imageId, '', imageContainerOutterId, imageContainerInnerId)

      // Create an image element
      const imageElement = document.createElement('img');
      imageElement.src = imgUrl;
      imageElement.alt = "";
      imageElement.style.width = "100%";
      imageElement.style.height = "70px";
      imageElement.style.objectFit = "cover";
      imageElement.style.objectPosition = "center";
      imageElement.style.backgroundColor = "gray";

      const imageElementContainer = document.createElement('div');
      imageElement.style.width = "70px";
      imageElement.style.height = "70px";

      let fileName = file.url
      const newf = fileName.split('/')
      const imageDescription = document.createElement('p')
      imageDescription.innerText = newf[newf.length - 1]
      imageDescription.style.textOverflow = "ellipsis"
      imageDescription.style.width = "100%"
      imageDescription.style.overflow = "hidden"
      imageDescription.style.whiteSpace = "nowrap"

      //create over icons
      const icons_container = document.createElement('div')
      icons_container.classList.add('image-icons-container')

      const check = document.createElement('div')
      check.innerHTML = `${generateSvg('fade-check')}`
      check.classList.add('image-icons')
      check.addEventListener("click", function () {
        nodeMainManager.addComponent(imageHtmlObject)
      })
      const settings = document.createElement('div')
      settings.innerHTML = `${generateSvg('fade-settings')}`
      settings.classList.add('image-icons')
      settings.addEventListener("click", function () {
        imageModalSelect(imageHtmlObject, file, imageItem);
        openDeployModal()
      })

      // Create a container for the image with a class for styling
      const imageItem = document.createElement('div');
      imageItem.style.position = 'relative'
      imageItem.classList.add('image-item');
      imageElementContainer.appendChild(imageElement)
      imageItem.appendChild(imageElementContainer);
      imageItem.appendChild(imageDescription)
      icons_container.appendChild(check)
      icons_container.appendChild(settings)
      imageItem.appendChild(icons_container)

      // Append the image container to the DOM
      if (imageContainer) {
        imageContainer.appendChild(imageItem);
      }


    }

  }

  function imageModalSelect(arrObj, file, containerNode) {
    const siteId = appState.getValue()._id
    const modal = document.querySelector(".custom-form");

    const deployHtml = `<div class="addPageBackdrop" id="addPageBackdrop"></div>
            <!-- deploySiteModal Form -->
            <div class="imageModal" id="imageModal">
            <div>
            <div class="image-settings-set-container">
                <div class="image-settings-set-container-head">
                  <p id="image-settings-container-cancel" class="remove-image-margin-p">Asset Details</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1.40156 13.6496L0.351562 12.5996L5.95156 6.99961L0.351562 1.39961L1.40156 0.349609L7.00156 5.94961L12.6016 0.349609L13.6516 1.39961L8.05156 6.99961L13.6516 12.5996L12.6016 13.6496L7.00156 8.04961L1.40156 13.6496Z" fill="white"/>
                  </svg>
                </div>
                <div class="image-settings-set-container-hr"></div>
                <div  class="image-settings-set-container-middle">
                  <div class="image-settings-set-container-middle-first">
                    <p class="image-settings-set-container-middle-p remove-image-margin-p">Type</p>
                    <div class="image-settings-set-container-middle-first">
                      <p class="remove-image-margin-p">${file.type}</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <g clip-path="url(#clip0_7428_64835)">
                          <path d="M5.83687 7.58299C6.08738 7.9179 6.40699 8.19501 6.77402 8.39553C7.14105 8.59606 7.54691 8.7153 7.96408 8.74518C8.38125 8.77506 8.79996 8.71487 9.19182 8.56869C9.58368 8.42252 9.93952 8.19378 10.2352 7.89799L11.9852 6.14799C12.5165 5.5979 12.8105 4.86114 12.8038 4.0964C12.7972 3.33166 12.4904 2.60012 11.9497 2.05935C11.4089 1.51858 10.6774 1.21183 9.91262 1.20519C9.14788 1.19854 8.41112 1.49253 7.86103 2.02382L6.8577 3.02132M8.1702 6.41632C7.91969 6.08141 7.60008 5.8043 7.23305 5.60377C6.86602 5.40325 6.46016 5.284 6.04299 5.25413C5.62582 5.22425 5.20711 5.28444 4.81525 5.43061C4.42339 5.57679 4.06755 5.80553 3.77187 6.10132L2.02187 7.85132C1.49057 8.40141 1.19659 9.13817 1.20324 9.90291C1.20988 10.6676 1.51662 11.3992 2.0574 11.94C2.59817 12.4807 3.32971 12.7875 4.09445 12.7941C4.85919 12.8008 5.59594 12.5068 6.14603 11.9755L7.14353 10.978" stroke="#98A2B3" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_7428_64835">
                            <rect width="14" height="14" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div class="image-settings-set-container-middle-first">
                    <p class="image-settings-set-container-middle-p remove-image-margin-p">Size</p>
                    <p class="remove-image-margin-p">${(Number(file.size) / (1024 * 1024)).toFixed(2)}MB</p>
                  </div>
                  <div class="image-settings-set-container-middle-first">
                    <p class="image-settings-set-container-middle-p remove-image-margin-p" >Resolution</p>
                    <p class="remove-image-margin-p">${file.resolution.width} Px ${file.resolution.height} PX</p>
                  </div>
                </div>
                <div class="image-settings-set-container-hr"></div>
                <div class="image-settings-set-container-bottom">
                  <div class="image-settings-set-container-bottom-first">
                    <label for="image-alt-text">Alt</label>
                    <textarea id="image-alt-text" cols="10" placeholder="A big dinosaur with wings" rows="3"></textarea>
                  </div>
                  <div class="image-settings-set-container-bottom-button">
                    ${generateSvg('delete')}
                    <p id="remove-image-margin-p" class="remove-image-margin-p">Delete Asset</p>
                  </div>
                </div>
              </div>
            </div>
            </div>`;

    modal.innerHTML = deployHtml;

    document.getElementById("addPageBackdrop").addEventListener("click", function (e) {
      if (e.target === document.getElementById("addPageBackdrop")) {
        closeDeployModal();
      }
    });

    document.getElementById("image-alt-text").addEventListener("input", function (e) {
      const text = this.value;
      arrObj.node[2].data.alt = text
    })

    document.getElementById("remove-image-margin-p").parentElement.addEventListener("click", async function (e) {
      modal.innerHTML = ""

      const data = {
        siteId,
        imgId: file.id
      }

      const deleteRes = await tdApiRequestInstance.deleteImage(data)

      if (deleteRes.statusCode == 200) {
        notify("Image deleted", "green")

        const updatedList = await tdApiRequestInstance.getSite(siteId)

        appState.setValue(updatedList)
        // console.log(updatedList.assets.images);
      } else {
        notify("Try again later")
      }


      containerNode.style.display = "none"
    })

    let cancelsibling = document.getElementById("image-settings-container-cancel")
    cancelsibling.nextElementSibling.addEventListener("click", () => closeDeployModal())
  }

  function openDeployModal() {
    document.getElementById("addPageBackdrop").style.display = "block";
    document.getElementById("imageModal").style.display = "block";
  }


  // Function to close the addPageModal
  function closeDeployModal() {
    document.getElementById("addPageBackdrop").style.display = "none";
    document.getElementById("imageModal").style.display = "none";
  }

  function workingObject(url, id, name, divId, divInnerId) {
    const data = {
      node: [
        {
          _id: divId, type: "Section", tag: "div",
          children: [divInnerId],
          classes: ["Image-container"],
          data: { grid: { type: "section" }, tag: "div" }
        },
        {
          _id: divInnerId, type: "Section", tag: "div",
          children: [id],
          classes: ["Hero-image-inner"],
          data: { grid: { type: "section" }, tag: "div" }
        },
        {
          _id: id, num: 9, type: "list", tag: "img", children: [], classes: ["Hero-image"], data: {
            href: "default_img2", loading: "lazy",
            src: url,
            alt: "",
          }
        },
      ],
      styles: {
        data: {},
        style: [
          {
            style_id: divId,
            data: {
              comb: "", affects: { "63bd5deeb0d2be0101f4dc8f": 1 },
              children: [], name: "Image-container", sel: ".Image-container",
              styleLess: "display:flex; justify-content:center;  padding-top: 50px; padding-bottom: 50px;",
              type: "class",
              variants: { small: { sel: ".Image-container", styleLess: "" } }
            }
          },
          {
            style_id: id,
            data: {
              comb: "", affects: { "63bd5deeb0d2be0101f4dc8f": 1 },
              children: [], name: "Hero-image-inner", sel: ".Hero-image-inner",
              styleLess: " min-width: 200px; max-height: 400px;",
              type: "class",
              variants: { small: { sel: ".Hero-image-inner a", styleLess: "" } }
            }
          },
          {
            style_id: divInnerId,
            data: {
              comb: "", affects: { "63bd5deeb0d2be0101f4dc8f": 1 },
              children: [], name: "Hero-main", sel: ".Hero-image",
              styleLess: " width: fit-content; height:fit-content;",
              type: "class",
              variants: { small: { sel: ".Hero-main a", styleLess: "" } }
            }
          }
        ]
      }
    }
    return data
  }



  function processAccordion({ tabSel, listTabSel }, data, callback) {
    //console.log("DOMContentLoaded in...",listTabSel);
    const { item, dataRepo } = data;
    const tabs = document.querySelectorAll(tabSel);
    const tabList = document.querySelector(listTabSel);

    //console.log({tabs});
    // Add a click event handler to each tab
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();

        //unselect other tabs
        tabs.forEach(function (node) {
          node.style.backgroundColor = "transparent";
        })


        if (!callback) {
          changeOnClick(e, dataRepo.list[i], listTabSel);
        } else {
          callback();
        }
        e.target.parentNode.style.backgroundColor = "#101828"
      });
    });

    // Enable arrow navigation between tabs in the tab list
    let tabFocus = 0;

    tabList.addEventListener("keydown", (e) => {
      // Move right
      if (e.varient === "ArrowRight" || e.varient === "ArrowLeft") {
        tabs[tabFocus].setAttribute("tabindex", -1);
        if (e.varient === "ArrowRight") {
          tabFocus++;
          // If we're at the end, go to the start
          if (tabFocus >= tabs.length) {
            tabFocus = 0;
          }
          // Move left
        } else if (e.varient === "ArrowLeft") {
          tabFocus--;
          // If we're at the start, move to the end
          if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
          }
        }

        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
      }
    });
  }

  async function changeOnClick(e, dataList, listTabSel) {
    const target = e.target;
    const parent = target.parentNode;
    const grandparent = parent.parentNode;
    const ggparent = grandparent.parentNode;

    // Remove all current selected tabs
    parent
      .querySelectorAll('[aria-selected="true"]')
      .forEach((t) => t.setAttribute("aria-selected", false));
    // grandparent
    //   .querySelectorAll('[aria-selected="true"]')
    //   .forEach((t) => t.setAttribute("aria-selected", false));

    // // Set this tab as selected
    // target.setAttribute("aria-selected", true);

    // // Hide all tab panels
    parent
      .querySelectorAll('[role="tabpanel"]')
      .forEach((nodel) => nodel.setAttribute("hidden", true));

    const tabBody = document.querySelector(listTabSel);
    let newDivVal = await leftListMenu(dataList.data.options, 4);

    if (tabBody) {
      tabBody.replaceChildren(newDivVal);
    }
  }

  async function leftListMenu(eleArr, parentDivId, callback) {
    let _tdDivWrapper = document.createElement("div");
    (_tdDivWrapper.id = `leftoverlay-content-${parentDivId}`),
      _tdDivWrapper.classList.add("leftSide-component-list");

    // console.log({ eleArr, parentDivId, callback });
    //_tdDivWrapper.cloneNode
    for (var i = 0; i < eleArr.length; i++) {
      //for(ele of eleArr){
      let ele = eleArr[i];
      //console.log({i});
      let _tdDivEle = document.createElement("div");
      let _tdDivElePreview = document.createElement("div");
      let _tdDivEleLabel = document.createElement("div");
      let _tdDivEleImg = document.createElement("img");
      let _tdDivEleImgPreview = document.createElement("img");
      let _tdDivEleImgWrapper = document.createElement("div");
      _tdDivEle.setAttribute("data-auto-id", ele.id),
        _tdDivEle.setAttribute("data-td-id", `item-${ele.id}`),
        _tdDivEle.classList.add("leftSide-component-item"),
        _tdDivEle.setAttribute("varient", ele.id),
        (_tdDivEle.id = `item-${ele.id}`);
      // _tdDivEleLabel.textContent = ele.label;
      (_tdDivEleImg.src = ele.img_url),
        (_tdDivEleImgPreview.src = ele.img_url),
        _tdDivEleImg.setAttribute("alt", `${ele.label}-image`),
        _tdDivEleImg.classList.add("leftside-image-item");

      _tdDivEleImgWrapper.classList.add("td-leftside-leftimg-wrapper");
      _tdDivEleImgWrapper.appendChild(_tdDivEleImg);

      _tdDivElePreview.appendChild(_tdDivEleImgPreview);

      _tdDivEle.style.position = "relative";


      _tdDivElePreview.classList.add("td-leftside-prveiw")



      _tdDivEle.appendChild(_tdDivEleLabel);
      _tdDivEle.appendChild(_tdDivEleImgWrapper);
      _tdDivEle.appendChild(_tdDivElePreview);

      if (ele.type == "media") {
        break;
      }


      await _tdDivEle.addEventListener("click", (e) => {
        e.preventDefault();
        //trigger add element object
        callback ? callback([]) : nodeMainManager.addComponent(ele);
      });


      _tdDivWrapper.appendChild(_tdDivEle);
    }
    return _tdDivWrapper;
  }

  function processAccordionAddPage({ tabSel, listTabSel }, data, callback) {
    // utils.processAccordion(
    //   { tabSel: ".node-element-head", listTabSel: ".pane-body-content-2-body" },
    //   { item: props.data, dataRepo: data }
    // )
    //console.log("DOMContentLoaded in...",listTabSel);
    const { item, dataRepo } = data;
    const tabs = document.querySelectorAll(tabSel);
    const tabList = document.querySelector(listTabSel);

    //console.log({tabs});
    // Add a click event handler to each tab
    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();

        //unselect other tabs
        tabs.forEach(function (node) {
          node.style.backgroundColor = "transparent";
        })

        let pageArray = [...htmlState.getValue().pages]
        pageArray.push(dataRepo.list[0].data.options[0])

        if (!callback) {
          changeSelectPageClick(e, pageArray, listTabSel);
        } else {
          callback();
        }
        e.target.parentNode.style.backgroundColor = "#101828"
      });
    });

    // Enable arrow navigation between tabs in the tab list
    let tabFocus = 0;

    // tabList.addEventListener("keydown", (e) => {
    //   // Move right
    //   if (e.varient === "ArrowRight" || e.varient === "ArrowLeft") {
    //     tabs[tabFocus].setAttribute("tabindex", -1);
    //     if (e.varient === "ArrowRight") {
    //       tabFocus++;
    //       // If we're at the end, go to the start
    //       if (tabFocus >= tabs.length) {
    //         tabFocus = 0;
    //       }
    //       // Move left
    //     } else if (e.varient === "ArrowLeft") {
    //       tabFocus--;
    //       // If we're at the start, move to the end
    //       if (tabFocus < 0) {
    //         tabFocus = tabs.length - 1;
    //       }
    //     }

    //     tabs[tabFocus].setAttribute("tabindex", 0);
    //     tabs[tabFocus].focus();
    //   }
    // });
  }

  async function changeSelectPageClick(e, dataList, listTabSel) {
    const target = e.target;
    const parent = target.parentNode;
    const grandparent = parent.parentNode;
    const ggparent = grandparent.parentNode;

    // Remove all current selected tabs
    parent
      .querySelectorAll('[aria-selected="true"]')
      .forEach((t) => t.setAttribute("aria-selected", false));

    // // Hide all tab panels
    parent
      .querySelectorAll('[role="tabpanel"]')
      .forEach((nodel) => nodel.setAttribute("hidden", true));

    const tabBody = document.querySelector(listTabSel);
    let newDivVal = await leftDisplayPageDetails(parent, dataList);

    if (tabBody) {
      tabBody.replaceChildren(newDivVal);
    }
  }

  async function leftDisplayPageDetails(parent, dataList) {
    let newPage;
    let formData = {}
    const pageId = parent.getAttribute('data-map-page-id')
    const currentSelectedPage = await dataList.find(e => e.page_id == pageId)
    if (currentSelectedPage.name == "Untitled Page") {
      newPage = true
    }
    const oldHome = htmlState.getValue().pages.find(e => e.route.includes("/index") || e.route === "/")
    const divSideContainer = document.createElement("div");
    divSideContainer.classList.add("addpage-sideContainer");


    // Page Head Settings Section===================================================================
    const divFirstContainer = document.createElement("div");
    divFirstContainer.classList.add("addpage-firstContainer");

    const divHeadTitleCont = document.createElement("div");
    divHeadTitleCont.classList.add("addpage-headTittle-cont");

    const h5HomeSettings = document.createElement("h5");
    h5HomeSettings.classList.add("addpage-head-h5");
    h5HomeSettings.textContent = newPage ? currentSelectedPage.name : `${currentSelectedPage.name} Settings`;

    const divImg1Container = document.createElement("div");
    const img1 = `${generateSvg("infoIcon")}`


    divImg1Container.innerHTML = img1
    divImg1Container.title = 'You can edit the page properties such as the title, meta description, and more using the input available and clicking the "save" button to save your changes'
    divHeadTitleCont.appendChild(h5HomeSettings);
    divHeadTitleCont.appendChild(divImg1Container);

    const divHeadSaveCont = document.createElement("div");
    divHeadSaveCont.classList.add("addpage-headSave-cont");

    const divSaveDelete = document.createElement("div");
    divSaveDelete.classList.add("addpage-saveDelete");

    const deleteIcon = `${generateSvg("delete")}`

    const divImg2Container = document.createElement("div");
    const img2 = document.createElement("img");
    img2.src = "./file.svg";
    img2.alt = "";

    const spanSaveEdit = document.createElement("span");
    spanSaveEdit.id = "addpage-saveEdit";
    spanSaveEdit.classList.add("addpage-saveEdit");
    spanSaveEdit.textContent = "Save";

    divSaveDelete.innerHTML = deleteIcon;
    divImg2Container.appendChild(img2);
    divHeadSaveCont.appendChild(divSaveDelete);
    divHeadSaveCont.appendChild(divImg2Container);
    divHeadSaveCont.appendChild(spanSaveEdit);

    divFirstContainer.appendChild(divHeadTitleCont);
    divFirstContainer.appendChild(divHeadSaveCont);



    // General Section======================================================================================
    const divGeneralContainer = document.createElement("div");
    divGeneralContainer.classList.add("addpage-nthContainer");

    const divGeneralHeader = document.createElement("div");

    const h5General = document.createElement("h5");
    h5General.classList.add("addpage-secHead-h5");
    h5General.textContent = "General";

    const spanSetupPage = document.createElement("span");
    spanSetupPage.classList.add("addpage-nspan");
    spanSetupPage.textContent = "Setup your page";

    divGeneralHeader.appendChild(h5General);
    divGeneralHeader.appendChild(spanSetupPage);

    const divPageNameContainer = document.createElement("div");
    divPageNameContainer.classList.add("addpage-input-container");

    const labelPageName = document.createElement("label");
    labelPageName.classList.add("addpage-input-label");
    labelPageName.textContent = "Page Name";

    const inputPageName = document.createElement("input");
    inputPageName.id = "addpage-input-input-name";
    inputPageName.name = "name";
    inputPageName.value = newPage ? "" : currentSelectedPage.name;
    inputPageName.classList.add("addpage-input-input");
    inputPageName.type = "text";
    inputPageName.placeholder = "New page";

    const spanNameError = document.createElement("span");
    spanNameError.classList.add("addpage-nspan", "addpage-spanError");
    spanNameError.textContent = "Name is required";

    divPageNameContainer.appendChild(labelPageName);
    divPageNameContainer.appendChild(inputPageName);
    divPageNameContainer.appendChild(spanNameError);

    const divSlugContainer = document.createElement("div");
    divSlugContainer.classList.add("addpage-input-container");

    const labelSlug = document.createElement("label");
    labelSlug.classList.add("addpage-input-label");
    labelSlug.textContent = "Slug";

    const inputSlug = document.createElement("input");
    inputSlug.id = "addpage-input-input-slug";
    inputSlug.name = "slug";
    inputSlug.value = currentSelectedPage.slug;
    inputSlug.classList.add("addpage-input-input");
    inputSlug.type = "text";
    inputSlug.placeholder = "newpage";

    const spanSlugHint = document.createElement("span");
    spanSlugHint.classList.add("addpage-nspan");
    spanSlugHint.textContent = "tailordom.com/newpage";

    const spanSlugError = document.createElement("span");
    spanSlugError.classList.add("addpage-nspan", "addpage-spanError");
    spanSlugError.textContent = "Slug cannot include special characters other than hyphens (-). It cannot include spaces, start or end with a hyphen, or have consecutive hyphens.";

    divSlugContainer.appendChild(labelSlug);
    divSlugContainer.appendChild(inputSlug);
    divSlugContainer.appendChild(spanSlugHint);
    divSlugContainer.appendChild(spanSlugError);

    const divHomePageContainer = document.createElement("div");

    const h5HomePage = document.createElement("h5");
    h5HomePage.classList.add("addpage-input-label");
    h5HomePage.textContent = "Homepage";

    const pCurrentHomePage = document.createElement("p");
    pCurrentHomePage.classList.add("addpage-nspan");
    pCurrentHomePage.textContent = "The current homepage is ";

    const spanCurrentHomePage = document.createElement("span");
    spanCurrentHomePage.classList.add("addpage-nspan-under");
    spanCurrentHomePage.textContent = oldHome ? oldHome.name : "No home page";

    pCurrentHomePage.appendChild(spanCurrentHomePage);

    const divSetHomeBtn = document.createElement("div");
    divSetHomeBtn.id = "addpage-setHome-btn";
    divSetHomeBtn.classList.add("addpage-setHome-btn");

    const divImg3Container = document.createElement("div");
    const img3 = `${generateSvg("addPage-home")}`

    const spanSetHome = document.createElement("span");
    spanSetHome.textContent = "Make \"New page\" your Homepage";

    divImg3Container.innerHTML = img3;
    divSetHomeBtn.appendChild(divImg3Container);
    divSetHomeBtn.appendChild(spanSetHome);

    divHomePageContainer.appendChild(h5HomePage);
    divHomePageContainer.appendChild(pCurrentHomePage);
    divHomePageContainer.appendChild(divSetHomeBtn);

    divGeneralContainer.appendChild(divGeneralHeader);
    divGeneralContainer.appendChild(divPageNameContainer);
    divGeneralContainer.appendChild(divSlugContainer);
    divGeneralContainer.appendChild(divHomePageContainer);



    // Access Control Section===================================================================================
    const divAccessControlContainer = document.createElement("div");
    divAccessControlContainer.classList.add("addpage-nthContainer");

    const divAccessControlHeader = document.createElement("div");

    const h5AccessControl = document.createElement("h5");
    h5AccessControl.classList.add("addpage-secHead-h5");
    h5AccessControl.textContent = "Access Control";

    const spanManageAccess = document.createElement("span");
    spanManageAccess.classList.add("addpage-nspan");
    spanManageAccess.textContent = "Manage who can access the page when its published";

    divAccessControlHeader.appendChild(h5AccessControl);
    divAccessControlHeader.appendChild(spanManageAccess);

    const divAccessPage = document.createElement("div");
    divAccessPage.classList.add("addpage-accesspage");

    const divAccessBtnEveryone = document.createElement("div");
    divAccessBtnEveryone.classList.add("addpage-access-btn");
    divAccessBtnEveryone.textContent = "Everyone";

    const divAccessBtnFew = document.createElement("div");
    divAccessBtnFew.classList.add("addpage-access-btn");
    divAccessBtnFew.textContent = "change";

    const divAccessBtnNone = document.createElement("div");
    divAccessBtnNone.classList.add("addpage-access-btn");
    divAccessBtnNone.textContent = "Specific ...";

    const spanAccessHint = document.createElement("span");
    spanAccessHint.classList.add("addpage-nspan");
    spanAccessHint.textContent = "Anyone on the internet can view this page";

    divAccessPage.appendChild(divAccessBtnEveryone);
    divAccessPage.appendChild(divAccessBtnFew);
    divAccessPage.appendChild(divAccessBtnNone);

    divAccessControlContainer.appendChild(divAccessControlHeader);
    divAccessControlContainer.appendChild(divAccessPage);
    divAccessControlContainer.appendChild(spanAccessHint);


    // SEO Basics Section======================================================================================
    const divSeoBasicsContainer = document.createElement("div");
    divSeoBasicsContainer.classList.add("addpage-nthContainer");

    const divSeoBasicsHeader = document.createElement("div");

    const h5SeoBasics = document.createElement("h5");
    h5SeoBasics.classList.add("addpage-secHead-h5");
    h5SeoBasics.textContent = "SEO Basics";

    const spanSeoDescription = document.createElement("span");
    spanSeoDescription.classList.add("addpage-nspan");
    spanSeoDescription.textContent = "Specify your page title and description. You can see how it will look in the search engine in the preview below";

    divSeoBasicsHeader.appendChild(h5SeoBasics);
    divSeoBasicsHeader.appendChild(spanSeoDescription);

    const divSeoPreview = document.createElement("div");
    divSeoPreview.classList.add("addpage-secHead-preview");

    const h5NewPage = document.createElement("h5");
    h5NewPage.classList.add("addpage-secHead-h5");
    h5NewPage.textContent = "New Page";

    const spanPreviewUrl = document.createElement("span");
    spanPreviewUrl.classList.add("addpage-preview-span");
    spanPreviewUrl.textContent = "www.tailordom.com/newpage";

    const pMetaDescriptionLabel = document.createElement("p");
    pMetaDescriptionLabel.classList.add("addpage-input-label");
    pMetaDescriptionLabel.textContent = "Meta description";

    divSeoPreview.appendChild(h5NewPage);
    divSeoPreview.appendChild(spanPreviewUrl);
    divSeoPreview.appendChild(pMetaDescriptionLabel);

    const _divA = document.createElement("div")
    const _divB = document.createElement("div")

    const divSeoTitleContainer = document.createElement("div");
    divSeoTitleContainer.classList.add("addpage-seo-btw");

    const labelTitleTag = document.createElement("label");
    labelTitleTag.classList.add("addpage-input-label");
    labelTitleTag.textContent = "Title Tag";

    const divImg4Container = document.createElement("div");
    const img4 = `${generateSvg("infoIcon")}`

    const inputTitleTag = document.createElement("input");
    inputTitleTag.id = "addpage-input-input-title";
    inputTitleTag.name = "title";
    inputTitleTag.value = newPage ? "" : currentSelectedPage.head.title;
    inputTitleTag.classList.add("addpage-input-input");
    inputTitleTag.type = "text";
    inputTitleTag.placeholder = "New page";

    const spanTitleError = document.createElement("span");
    spanTitleError.classList.add("addpage-nspan", "addpage-spanError");
    spanTitleError.textContent = "Title cannot include special characters other than spaces, hyphens (-), underscores (_), periods (.), and commas (,). It cannot be empty or exceed 20 characters.";

    divImg4Container.innerHTML = img4;
    divImg4Container.title = "The title tag sets the title of your page, which shows up in browser tabs and search engine results. It is crucial for SEO and helps users quickly understand the content of your page."
    divSeoTitleContainer.appendChild(labelTitleTag);
    divSeoTitleContainer.appendChild(divImg4Container);
    _divA.appendChild(divSeoTitleContainer)
    _divA.appendChild(inputTitleTag)
    _divA.appendChild(spanTitleError)

    const divSeoMetaContainer = document.createElement("div");
    divSeoMetaContainer.classList.add("addpage-seo-btw");

    const labelMetaDescription = document.createElement("label");
    labelMetaDescription.classList.add("addpage-input-label");
    labelMetaDescription.textContent = "Meta Description";

    const divImg5Container = document.createElement("div");
    const img5 = `${generateSvg("infoIcon")}`

    const inputMetaDescription = document.createElement("input");
    inputMetaDescription.id = "addpage-input-input-description";
    inputMetaDescription.name = "description";
    inputMetaDescription.value = newPage ? "" : currentSelectedPage.head.description;
    inputMetaDescription.classList.add("addpage-input-input");
    inputMetaDescription.type = "text";

    const spanDescriptionError = document.createElement("span");
    spanDescriptionError.classList.add("addpage-nspan", "addpage-spanError");
    spanDescriptionError.textContent = "Description is required";

    divImg5Container.innerHTML = img5;
    divImg5Container.title = "The meta description provides a brief summary of your page content. It appears in search engine results and helps users understand what your page is about."
    divSeoMetaContainer.appendChild(labelMetaDescription);
    divSeoMetaContainer.appendChild(divImg5Container);
    _divB.appendChild(divSeoMetaContainer)
    _divB.appendChild(inputMetaDescription)
    _divB.appendChild(spanDescriptionError)

    divSeoBasicsContainer.appendChild(divSeoBasicsHeader);
    divSeoBasicsContainer.appendChild(divSeoPreview);
    divSeoBasicsContainer.appendChild(_divA);
    divSeoBasicsContainer.appendChild(_divB);






    // Search Engine Indexing Section
    const divIndexingContainer = document.createElement("div");
    divIndexingContainer.classList.add("addpage-nthContainer");

    const divIndexingContent = document.createElement("div");
    divIndexingContent.classList.add("addpage-indexing-cont");

    const divIndexingHeader = document.createElement("div");

    const h5Indexing = document.createElement("h5");
    h5Indexing.classList.add("addpage-secHead-h5");
    h5Indexing.textContent = "Search Engine Indexing";

    const spanIndexingDescription = document.createElement("span");
    spanIndexingDescription.classList.add("addpage-nspan");
    spanIndexingDescription.textContent = "Let site engines index this page";

    divIndexingHeader.appendChild(h5Indexing);
    divIndexingHeader.appendChild(spanIndexingDescription);

    const divSwitchContainer = document.createElement("div");
    divSwitchContainer.classList.add("addpage-switchContainer");

    const labelSwitch = document.createElement("label");
    labelSwitch.classList.add("addpage-switch");

    const inputToggle = document.createElement("input");
    inputToggle.type = "checkbox";
    inputToggle.id = "addpage-toggle";

    const spanSlider = document.createElement("span");
    spanSlider.classList.add("addpage-slider", "addpage-round");

    labelSwitch.appendChild(inputToggle);
    labelSwitch.appendChild(spanSlider);
    divSwitchContainer.appendChild(labelSwitch);

    divIndexingContent.appendChild(divIndexingHeader);
    divIndexingContent.appendChild(divSwitchContainer);

    divIndexingContainer.appendChild(divIndexingContent);


    //append all sections 
    divSideContainer.appendChild(divFirstContainer);
    divSideContainer.appendChild(divGeneralContainer);
    // divSideContainer.appendChild(divAccessControlContainer);
    divSideContainer.appendChild(divSeoBasicsContainer);
    // divSideContainer.appendChild(divIndexingContainer);


    const setHomeModalContent = `<div>
    <div style="border-bottom: 1px solid #D0D5DD; padding: 16px
    20px; display:flex; justify-content:space-between; align-items:center;">
      <span style="fontSize: 18px; ">Confirm</span>
      <span id="setHome-cancel">${generateSvg('close-btn-large')}</span>
    </div>
    <p class="addpage-confirm-p" style="padding: 
    20px 20px 8px 20px;">Are you sure you want this page as the homepage?</p>
    <div style="display:flex; justify-content:flex-end;  gap: 10px;margin-top:15px; padding: 
    8px 20px 20px 20px;">
      <span id="setAddPageHome-false">Cancel</span>
      <span id="setAddPageHome-true">Make Homepage</span>
    </div>
  </div>`;
    const updateLinksModalContent = `<div style="padding: 16px 
  20px;">
    <p class="addpage-confirm-p" style="padding: 
    0 0 8px 0;" >This page has been set as the home page. Its URL is now the "home url". The previous  URL  "/example.html" is no longer valid or may not point to any page. Please update any links or references accordingly.</p>
    <div style="display:flex; justify-content:flex-end;  gap: 10px; margin-top:15px;">
      <span id="updateLinks-No" >Ok</span>
    </div>
  </div>`



    // Set home modal 
    const form = document.querySelector(".custom-form");
    const formHtml = `<div class="addPageBackdrop" id="addPageBackdrop"></div>
      <!-- addPageModal Form -->
      <div class="addPageModalHome" id="addPageModal">
          ${setHomeModalContent}
      </div>`;

    form.innerHTML += formHtml;

    function openaddPageModal() {
      document.getElementById("addPageBackdrop").style.display = "block";
      document.getElementById("addPageModal").style.display = "block";

      // Replace the modal content with updateLinksModalContent
      document.getElementById("addPageModal").innerHTML = setHomeModalContent;

      // Add event listeners for the first set of buttons
      document.getElementById("setAddPageHome-false").addEventListener("click", () => {
        formData["setHome"] = false;
        closeaddPageModal()
      });
      document.getElementById("setHome-cancel").addEventListener("click", () => {
        formData["setHome"] = false;
        closeaddPageModal()
      });
      document.getElementById("setAddPageHome-true").addEventListener("click", () => {
        formData["setHome"] = true;
        displayUpdateLinksModal()
      });
    }
    // Function to close the addPageModal
    function closeaddPageModal() {
      document.getElementById("addPageBackdrop").style.display = "none";
      document.getElementById("addPageModal").style.display = "none";
    }


    function displayUpdateLinksModal() {
      // Replace the modal content with updateLinksModalContent
      document.getElementById("addPageModal").innerHTML = updateLinksModalContent;

      // Add event listeners for the second set of buttons
      document.getElementById("updateLinks-No").addEventListener("click", () => {
        formData["updateLinks"] = false
        closeaddPageModal()
      });
      // document.getElementById("updateLinks-Yes").addEventListener("click", function() {
      //   console.log("clicked");
      //   formData["updateLinks"] = true
      //   closeaddPageModal();
      // });
    }




    //Validate form data
    const list = [{ node: inputPageName, error: spanNameError, regex: /^.+$/ }, { node: inputSlug, error: spanSlugError, regex: /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/ }, { node: inputTitleTag, error: spanTitleError, regex: /^[a-zA-Z0-9\s\-\_\.\,]{1,20}$/ },]
    //for decription
    //  {node:inputMetaDescription,error:spanDescriptionError}
    list.forEach((input, i) => {
      input.node.addEventListener("input", (e) => {
        // console.log(e);
        formData[e.target.name] = e.target.value
      })
    })

    //toggle index
    inputToggle.addEventListener("change", () => {

      if (inputToggle.checked) {
        formData["index"] = true
      } else {
        formData["index"] = false
      }
    })

    divSetHomeBtn.addEventListener("click", () => {
      if ((currentSelectedPage.route.includes("/index") || currentSelectedPage.route === "/")) {
        // do nothing
      } else {
        openaddPageModal()
      }
    })

    //save info
    spanSaveEdit.addEventListener("click", () => {
      let count = 0
      list.forEach(node => {
        if (!node.regex.test(node.node.value)) {
          node.error.style.display = "block"
          // console.log(node.error);
        } else {
          count++
        }
      })
      if (count > 2) {
        switch (currentSelectedPage.name) {
          case "Untitled Page":
            createPage({ formData, page: currentSelectedPage, siteId: appState.getValue()._id, saveBtn: spanSaveEdit })
            break;
          default:
            updatePage({ formData, siteId: appState.getValue()._id, pageId: currentSelectedPage._id, currentSelectedPage, saveBtn: spanSaveEdit })
            break;
        }
      }

    })


    //delete page
    divSaveDelete.addEventListener("click", async () => {
      try {
        spanSaveEdit.textContent = "Deleting..."
        await tdApiRequestInstance.deletePage({ pageId: currentSelectedPage._id, siteId: appState.getValue()._id })

        //get remaining pages state
        const restOfThePages = htmlState.getValue().pages.filter(e => e.page_id !== currentSelectedPage.page_id)


        if (htmlState.getValue().title === currentSelectedPage.name) {
          //navigate to another page, set state and display first available page
          htmlState.setValue({
            pages: restOfThePages,
            initial_node: restOfThePages[0].nodes[0],
            nodes: restOfThePages[0].nodes,
            styles: restOfThePages[0].styles,
            id: restOfThePages[0].page_id,
            title: restOfThePages[0].name,
          })

          tailordom.render(htmlState.getValue, cssStyleInstance)

        } else {
          //setState
          htmlState.getValue().pages = restOfThePages
        }

        //close sidebar
        let overlayPanel = document.querySelector(".nc-overlay-panel-layer-left");
        overlayPanel.style.display = "none";

      } catch (error) {
        spanSaveEdit.textContent = "save"
        notify("failed to delete page", "red")
      }
    })
    return divSideContainer
  }

  async function createPage({ formData, page, siteId, saveBtn }) {
    saveBtn.textContent = "Saving..."
    let newpage = { ...page }

    newpage.name = formData.name
    newpage.slug = formData.slug
    newpage.head.title = formData.title
    newpage.head.description = formData.description
    newpage.page_id = `${fUtils.generateId.getVal()}`
    newpage.route = `/${formData.slug}.html`

    if (formData.setHome) {
      //set new to home page
      newpage.route = "/index.html"
    }


    //create new page
    try {
      const { data } = await tdApiRequestInstance.createSitePage(appState.getValue()._id, newpage)
      notify("page created successfully", "green")
      //proceed to add the page to the htmlState
      htmlState.getValue().pages.push(data)
      //add new page to state
      const page = htmlState.getValue().pages.find(e => e.page_id == newpage.page_id)

      htmlState.setValue({
        pages: htmlState.getValue().pages,
        initial_node: page.nodes[0],
        nodes: page.nodes,
        styles: page.styles,
        id: page.page_id,
        title: page.name,
      });

      // console.log(htmlState.getValue());

      tailordom.render(htmlState.getValue(), cssStyleInstance);

      // set current displayed page text
      const currentDisplayPageText = document.querySelector('.page-menu-contentList > span')
      currentDisplayPageText.textContent = page.name;


      //create undo-redo stack for it
      const stack = new Stack({ htmlState, cssStyleInstance, previewForGuest, id: page.page_id })

      SITE_STACKS.push({ id: page.page_id, stack })

      PAGES_CHANGED.push({ id: page.page_id, changed: false })

      const newActiveStack = SITE_STACKS.find((e) => e.id == page.page_id)
      activeStack.setValue(newActiveStack.stack)

      activeStack.getValue().setUndoIcon()
      activeStack.getValue().setRedoIcon()


      //close sidebar
      let overlayPanel = document.querySelector(".nc-overlay-panel-layer-left");
      overlayPanel.style.display = "none";

    } catch (error) {
      saveBtn.textContent = "save"
      notify("failed to create page", "red")
    }

    if (formData.setHome) {
      // find all the prevoius page with home route and unset it
      htmlState.getValue().pages.forEach(async e => {
        if ((e.route.includes("/index") || e.route === "/")) {
          const oldHomeNewRoute = `/${e.slug}.html`
          e.route = oldHomeNewRoute

          // //update backend
          try {
            const res = await tdApiRequestInstance.upDateSite({ siteId, pageId: e._id, page: { route: oldHomeNewRoute } });
          } catch (error) {
            saveBtn.textContent = "save"
            notify("failed to update page", "red");
          }
        }
      })
    }

  }

  async function updatePage({ formData, siteId, pageId, currentSelectedPage, saveBtn }) {
    saveBtn.textContent = "Saving..."
    let updatObject = {}
    const listoTCheck = ["name", "title", "description", "slug"]

    listoTCheck.forEach(e => {
      if (formData.hasOwnProperty(e)) {
        if (e === "title" || e === "description") {
          updatObject.head = updatObject.head || {};
          updatObject["head"][e] = formData[e]
        } else {
          updatObject[e] = formData[e]
        }
      }
    })

    //update the links and route property in all the pages if the slug is change
    if (updatObject.slug) {

      updatObject.route = `/${updatObject.slug}.html`

      //Update state links which will be saved during preiodic updates
      htmlState.getValue().pages.forEach(page => {
        // console.log(page.name, "=======================================================");
        function changeLink(node) {
          if (node.tag.toLowerCase() == "a" && node.data["href"] == currentSelectedPage.route) {
            // console.log('Current', node);
            node.data["href"] = updatObject.route
          }


          if (node.children != []) {
            node.children.forEach(childId => {
              const takeInNode = page.nodes.find(e => e._id == childId)
              if (takeInNode && takeInNode.tag) {
                changeLink(takeInNode)
              }
            })
          }
        }

        changeLink(page.nodes[0])
      })


    }

    if (formData.setHome) {
      // find all the prevoius page with home route and unset it
      htmlState.getValue().pages.forEach(async e => {
        if ((e.route.includes("/index") || e.route === "/")) {
          const oldHomeNewRoute = `/${e.slug}.html`
          e.route = oldHomeNewRoute

          // //update backend
          try {
            await tdApiRequestInstance.upDateSite({ siteId, pageId: e._id, page: { route: oldHomeNewRoute } });
            // console.log(3, res);
          } catch (error) {
            saveBtn.textContent = "save"
            notify("failed to update page", "red");
          }
        }
      })

      //set new to home page
      updatObject.route = "/index.html"
    }






    // //update backend
    try {
      const { data } = await tdApiRequestInstance.upDateSite({ siteId, pageId, page: updatObject });
      // update State
      htmlState.getValue().pages = data

      // console.log(4, listoTCheck, data);

      //re-render page
      tailordom.render(htmlState.getValue(), cssStyleInstance)

      //close sidebar
      let overlayPanel = document.querySelector(".nc-overlay-panel-layer-left");
      overlayPanel.style.display = "none";

    } catch (error) {
      saveBtn.textContent = "save"
      notify("failed to update page", "red");
    }

  }


  return {
    getNodeIfFound,
    processAccordion,
    processAccordionMedia,
    uploadFiles,
    processAccordionAddPage,
  };
}

function isMobileDevice() {
  const mobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 600;
  console.log("mobile device is " + mobileDevice)
  return mobileDevice
}

function showMobileRestrictionMessage() {
  const htmlElement = document.documentElement;
  const body = document.body;
  const marginLeft = document.querySelector('.sidebar-ignore-left')
  const marginRight = document.querySelector('.sidebar-ignore-right')
  const restrictedPage = `
    <div class="restrictedWrapper" style="background-image: url(${editorBg})">
        <div class="restrictedWrapperChild">
            <p class="firstPara">Your screen size is too small. Switch to your desktop or a larger screen size to access this page.</p>
            <div class="second_row">
                <div class="devices_ctn">
                    <div class="mobile_ctn">
                        <img src=${mobileImg} alt="" />
                    </div>
                    <div class="pointer_ctn">
                        <img src=${pointer} alt="" />   
                    </div>
                    <div class="desktop_ctn">
                        <img src=${desktopImg} alt="" />   
                    </div>
                </div>
                <h3>Your screen size is too small!</h3>
                <p>Please access Tailordom from your desktop device</p>
            </div>
        </div>
    </div>
  `;
  body.innerHTML = restrictedPage


  body.style.overflow = 'none';
  body.style.marginTop = 0;
  marginLeft.style.marginLeft = 0;
  marginRight.style.marginRight = 0;

}



//load this first
async function initView(isLoading) {
  //nc-4768932-builder
  //td-root
  // console.log(
  //   "----------------------- initView =-----------------------------"
  // );

  let count = { bottomBar: 0, rightSidebar: 0, leftSidebar: 0 };

  // console.log("loading main view... load state? ", isLoading.getValue());
  const _divRoot = document.getElementById("td-root");
  const _divsRootWrapper = document.createElement("div");
  const _divsRootBottomWrapper = document.createElement("div");
  const _divsRootRightSideWrapper = document.createElement("div");
  const _divLoader = document.createElement("div");
  _divsRootWrapper.classList.add("nc-4768932-builder", "root-container");
  // _divLoader.innerText;
  _divLoader.id = "tdMainLoader";

  _divLoader.innerHTML = fComponent.loaderWrapper();

  let workspaceWrapper = workspaceWrapperTd();
  let _divbottomBar = bottomViewSelectedNodeBreadcrumb();
  let _divRightsideBar = sidebarviewRight();
  let leftSidebar = sidebarviewLeft();
  let mainOuter = mainOuterContainer();

  _divsRootBottomWrapper.appendChild(_divbottomBar);
  _divsRootRightSideWrapper.appendChild(_divRightsideBar);

  // _divsRootWrapper.appendChild(_divRightsideBar);
  // _divsRootWrapper.appendChild(_divbottomBar);

  _divsRootWrapper.appendChild(mainOuter);
  _divsRootWrapper.appendChild(leftSidebar);
  _divsRootWrapper.appendChild(_divsRootRightSideWrapper);
  _divsRootWrapper.appendChild(_divsRootBottomWrapper);
  _divRoot.appendChild(_divLoader);
  mainLoader(isLoading);

  // console.log(
  //   "---------------------- initView End =-----------------------------"
  // );

  function mainLoader(isLoading) {
    const _divLoaderState = document.getElementById("tdMainLoader");
    // console.log(isLoading.getValue());
    try {
      if (isLoading.getValue()) {
        _divLoaderState.classList.add("loader_modal");
      } else {
        _divLoaderState.className = "loader_closed";
        _divRoot.appendChild(workspaceWrapper);
        _divRoot.appendChild(_divsRootWrapper);
      }

    } catch (error) {
      isLoading.setValue(false);
      // console.log({ error })
    } finally {
      _divLoaderState.classList.remove("loader_modal");
      // _divLoaderState.style.backgroundColor = 'red';
      _divLoaderState.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:30px; padding: 60px;">
          <h3>404</h3>
          <div>
            <h1 style="font-size:40px;">Page not found</h1>
            <p style="font-size:15px; color:black;">The page you're looking for does not exist or has been moved.</p>
          </div>
        </div>`;

    }
  }

  function sidebarviewRight(isloading) {
    count.rightSidebar += 1;
    const _divsidebarRightMain = document.createElement("div");
    const _divsidebarRightMainWrapper = document.createElement("div");
    const _divsidebarRightMainTabs = document.createElement("div");
    const _divsidebarRightMainContent = document.createElement("div");
    (_divsidebarRightMain.id = "sidebar-right"),
      _divsidebarRightMain.classList.add("sidebar-right");
    _divsidebarRightMainWrapper.classList.add("sidebar-right_wrapper");

    _divsidebarRightMainTabs.classList.add("sidebar__tabs"),
      _divsidebarRightMainContent.classList.add("sidebar__tabs-inner"),
      _divsidebarRightMainWrapper.appendChild(_divsidebarRightMainTabs);
    _divsidebarRightMainWrapper.appendChild(_divsidebarRightMainContent);
    _divsidebarRightMain.appendChild(_divsidebarRightMainWrapper);

    let arrTabs = [
      {
        _id: 1,
        category: "style",
        label: "Design",
        icon: "&backprime;",
        active: true,
      },
      {
        _id: 2,
        category: "setting",
        label: "Settings",
        icon: "&amp;",
        active: false,
      },
      {
        _id: 3,
        category: "animate",
        label: "Animation",
        icon: "&amacr;",
        active: false,
      },
    ];

    arrTabs.map((tab) => {
      let _createDiv = document.createElement("div");
      let _createSpan = document.createElement("span");
      _createDiv.classList.add("tab", `${tab.category}-tab`),
        _createDiv.setAttribute(
          "data-auto-id",
          `sidebar-right-${tab.category}-${tab._id}`
        );

      if (tab.active) {
        _createDiv.classList.add("active");
      }

      _createDiv.setAttribute("label", tab.category);
      _createSpan.innerHTML = `<i>&backprime;</i> ${tab.label}`;

      _createDiv.appendChild(_createSpan);
      _divsidebarRightMainTabs.appendChild(_createDiv);

      //add event listener
      // _createDiv.addEventListener("click", function (e) {

      // })

    });
    let tabPanelBodyWrapper = document.createElement("div");
    let tabPanelBodyHead = document.createElement("div");
    let tabPanelBodyother = document.createElement("div"),
      tabPanelBodyotherWrapper = document.createElement("div");
    tabPanelBodyWrapper.classList.add("sidebar__tab-pane");
    tabPanelBodyHead.classList.add("sidebar__tab-heading"),
      tabPanelBodyother.classList.add("sidebar__tab-pane");
    tabPanelBodyother.style =
      "position: relative; overflow: hidden; height: 100%;";
    (tabPanelBodyotherWrapper.id = "sidebar__tab-style-props"),
      (tabPanelBodyotherWrapper.style =
        "transform: translate3d(0px, 0px, 0px);");
    tabPanelBodyother.appendChild(tabPanelBodyotherWrapper);
    tabPanelBodyWrapper.appendChild(tabPanelBodyHead);
    tabPanelBodyWrapper.appendChild(tabPanelBodyother);
    _divsidebarRightMainContent.appendChild(tabPanelBodyWrapper);
    // console.log("right side bar: ", count.rightSidebar);
    if (count.rightSidebar > 1) {
      // console.log("count visit: ", count.rightSidebar);
      _divsRootRightSideWrapper.appendChild(_divsidebarRightMain);
    }

    let contentViewHead = `
    <div>
        <h3>Layer</h3>
        <div data-automation-id="style-rule-token-wrapper" style="cursor: text; user-select: none; padding: 1.5em 1em; display:flex; align-items: center; justify-content: start; box-sizing: border-box; min-width: 26px; max-width: 90%; width: 100%; border: 2px solid #475467; border-radius: 2px; height: 24px; margin-bottom: 2em; position: relative; font-size: 11px; text-shadow: none; box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px; overflow: hidden; color: rgb(255, 255, 255);">
              <span data-automation-id="style-rule-token-text" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: normal; opacity: 1; font-family: inherit; font-size: 1.2em; color: inherit; font-weight: inherit; outline: none;">None</span>
        </div>
        <div class="touch" style="width: 90%; height: 226px; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 10px; background-color: #344054; text-align: center; font-size: 22px; padding: 0px 16px; border: 2px dotted #101828; border-radius: 4px;">
        <div class="touch__icon-ctn" style="width: 100px" >
          ${generateSvg("touch")}
        </div>
        <p class="touch__text" style="line-height: 1.2em; color: #98A2B3; font-size: 16px; ">Select an element on canvas to activate properties on this panel.</p>
        </div>
    </div>
            `;

    tabPanelBodyHead.innerHTML = contentViewHead

    return _divsidebarRightMain;
  }
  function mainOuterContainer(isloading) {
    count.leftSidebar += 1;
    const _divtMain = document.createElement("div");
    const _divMainWrapper = document.createElement("div");
    const _divMainTopper = document.createElement("div");
    const _divMainTopperWrapper = document.createElement("div");
    _divtMain.classList.add("nc-4768932-builder");
    _divMainTopperWrapper.classList.add("topBar-main"),
      _divMainTopper.classList.add("topBar");
    _divMainTopper.appendChild(_divMainTopperWrapper);
    //_divtMain.appendChild(_divMainWrapper);

    let _createDiv1 = document.createElement("div");
    _createDiv1.classList.add("topBar-main-group", "topBar-group-left");
    let _createDiv2 = document.createElement("div");
    _createDiv2.classList.add("topBar-main-group", "topBar-group-middle");
    let _createDiv3 = document.createElement("div");
    _createDiv3.classList.add("topBar-main-group", "topBar-group-right");

    _divMainTopperWrapper.appendChild(_createDiv1);
    _divMainTopperWrapper.appendChild(_createDiv2);
    _divMainTopperWrapper.appendChild(_createDiv3);

    _divMainWrapper.appendChild(_divMainTopper);
    let overlayview = overlayViews();
    _divtMain.appendChild(_divMainWrapper);
    _divtMain.appendChild(overlayview);

    return _divtMain;
  }


  function sidebarviewLeft(isloading) {
    count.leftSidebar += 1;
    const _divsidebarLeftMain = document.createElement("div");
    (_divsidebarLeftMain.id = "td-main-sidebar-left"),
      _divsidebarLeftMain.classList.add("nc-sidebar", "sidebar-left");

    return _divsidebarLeftMain;
  }

  function bottomViewSelectedNodeBreadcrumb(nodeTree) {
    count.bottomBar = count.bottomBar + 1;

    const selectedNodeBreadcrumb = document.createElement("div");
    const selectedNodeBreadcrumbWrapper = document.createElement("div");
    const bottomBarBreadcrumb = document.createElement("div");

    selectedNodeBreadcrumbWrapper.classList.add("bottomBar-wrapper");
    selectedNodeBreadcrumb.id = "td-bottomBar";
    selectedNodeBreadcrumb.classList.add("selectedNodeBreadcrumb", "bottomBar");

    bottomBarBreadcrumb.classList.add("bottomBar-breadcrumb");

    selectedNodeBreadcrumbWrapper.appendChild(bottomBarBreadcrumb);
    selectedNodeBreadcrumb.appendChild(selectedNodeBreadcrumbWrapper);

    let breadcrumbArr = [];

    function iterateNodeTree(node, counter) {
      let parentEle = node.parentNode;
      //console.log({res: parentEle.tagName != "BODY"});
      counter += 1;
      if (parentEle) {
        breadcrumbArr.push({
          id: counter,
          tag: parentEle.tagName,
          class: parentEle.classList,
        });
      }

      if (parentEle && parentEle.tagName != "body".toUpperCase()) {
        iterateNodeTree(parentEle, counter);
      }
    }

    function resolveAndRederList() {
      let _divNewList = document.createElement("div");
      _divNewList.classList.add("tdBreadcrumbList");

      for (let index = breadcrumbArr.length - 1; index >= 0; index--) {
        const element = breadcrumbArr[index];
        let _divNewListItem = document.createElement("div");
        _divNewListItem.classList.add("tdBreadcrumbListItem", "nc-grid123");
        let _divNewListItemIcon = document.createElement("div");
        _divNewListItemIcon.classList.add("breadcrumb-item-wrapper");
        let _divNewListItemSvg = document.createElement("span");
        // console.log({ element });
        _divNewListItemIcon.innerHTML = `${generateSvg(
          "ele-icon-small"
        )} <div class="label">${element.class &&
        (
          element.class.length > 0 ? element.class[0] : element.tag.toLowerCase()
        )
          } </div>`;
        _divNewListItemSvg.innerHTML = generateSvg("footer-breadcrumb-divider");

        _divNewListItem.appendChild(_divNewListItemIcon);
        _divNewListItem.appendChild(_divNewListItemSvg);
        _divNewList.appendChild(_divNewListItem);
      }

      return _divNewList;
    }
    let renderBreadcrumbList;

    //console.log({selectedNodeBreadcrumb});
    if (nodeTree) {
      breadcrumbArr.push({
        id: 0,
        tag: nodeTree.tagName,
        class: nodeTree.classList,
      });
      iterateNodeTree(nodeTree, 0);
      renderBreadcrumbList = resolveAndRederList();
      //selectedNodeBreadcrumb.appendChild(renderBreadcrumbList);
      bottomBarBreadcrumb.appendChild(renderBreadcrumbList);
    } else {
      renderBreadcrumbList = `<span>No Element Selected.</span>`;
      // selectedNodeBreadcrumb.innerHTML = renderBreadcrumbList;
      bottomBarBreadcrumb.innerHTML = renderBreadcrumbList;
    }

    // console.log("before ... replaceChildren(selectedNodeBreadcrumb ",isLoading);
    //console.log("count outside visit: ", count.rightSidebar);
    if (count.rightSidebar) {
      //console.log("count visit: ", count.rightSidebar);
    }

    if (count.bottomBar > 1) {
      _divsRootBottomWrapper.replaceChildren(selectedNodeBreadcrumb);
    } else {
      _divsRootBottomWrapper.replaceChildren(selectedNodeBreadcrumb);
    }
    return selectedNodeBreadcrumb;
  }

  function workspaceWrapperTd() {
    const _divMainContainer = document.createElement("div");
    const _divMainContainerWrapper = document.createElement("div");
    const _divMediaMain = document.createElement("div");
    const _divMainWebCanvasArea = document.createElement("div");
    const _divMainTool = document.createElement("div");
    const _divMainIframeWrapper = document.createElement("div");

    _divMainContainer.classList.add("nc-workspace", "td-workspace");
    _divMainContainerWrapper.classList.add(
      "nc-workspace-wrapper",
      "td-workspace-wrapper"
    );
    _divMediaMain.classList.add("media", "media-main");
    _divMainWebCanvasArea.classList.add("web-canvas-area");
    // _divMainWebCanvasArea.style.width = "991px"
    _divMainTool.classList.add("nc-tools");
    _divMainIframeWrapper.classList.add("page-ifram-wrapper");

    _divMainTool.innerHTML = `<div class="--style-nc-tool td__style-tool">
      </div>
      <div class="canvas-side-handler" style='display:none'>
          <div class="handler handle-right">
              <div class="handle-bar"></div>
              <div class="grip-handle"></div>
          </div>
          <div class="handler handle-left">
              <div class="handle-bar"></div>
              <div class="grip-handle"></div>
          </div>
      </div>
      <div class="media-screen-label">
          <div><span>Affects 99px and below</span></div>
          <div><span>Laptop</span></div>
      </div>`;

    _divMainIframeWrapper.innerHTML = `<div style="overflow: hidden;">
      <iframe id="site-iframe-next" class="" style="width: 100%; height: calc(100vh - 85px); transform-origin: 0px 0px; display: inline; min-height: 100%; max-height: 100%; border: 0px; position: relative; overflow: hidden; transform-style: preserve-3d; transform: scale(1); pointer-events: auto;"></iframe>
  </div>`;

    _divMainWebCanvasArea.appendChild(_divMainTool);
    _divMainWebCanvasArea.appendChild(_divMainIframeWrapper);
    _divMediaMain.appendChild(_divMainWebCanvasArea);
    _divMainContainerWrapper.appendChild(_divMediaMain);
    _divMainContainer.appendChild(_divMainContainerWrapper);

    return _divMainContainer;
  }

  function overlayViews() {
    const _divNewOverlay = document.createElement("div");
    const _divNewNotificationList = document.createElement("div");
    const _divNewNotificationContainer = document.createElement("div");
    const _divNewOverlayLeft = document.createElement("div");

    _divNewNotificationList.classList.add(
      "nc-overlay-notificationList",
      "td-overlay-notificationList"
    );
    _divNewNotificationContainer.classList.add(
      "nc-notification-layer-container",
      "td-notification-layer-container"
    );
    _divNewOverlayLeft.classList.add(
      "nc-overlay-panel-layer-left",
      "td-overlay-panel-layer-left"
    ),
      (_divNewOverlayLeft.id = "td-overlay-panel-layer-left");

    _divNewNotificationList.appendChild(_divNewNotificationContainer);

    //_divNewNotificationList.appendChild(_divNewNotificationList);
    _divNewOverlay.appendChild(_divNewOverlayLeft);

    _divNewOverlay.appendChild(_divNewNotificationList);

    return _divNewOverlay;
    // <div class="nc-overlay-notificationList">
    //         <div class="nc-notification-layer-container">

    //         </div>
    //     </div>
    //     <div id="td-overlay-panel-layer-left" class="nc-overlay-panel-layer-left">
    //         <!--  -->
    //     </div>
  }

  return {
    bottomViewSelectedNodeBreadcrumb,
    sidebarviewRight,
    mainLoader,
  };
}

function tdManageState(htmlState, stack) {
  let defVal = htmlState.getValue();


  function getData(id) {
    return defVal.map((el) => el._id == id);
  }

  // @return update data
  function addData({ node, styles }) {
    let page = htmlState.getValue().nodes;

    const newN = [];

    //push a new array of objects instead instead of a refference
    for (const n of node) {
      let newObject = Object.assign({}, n);
      const child = Object.assign([], n.children);
      newObject.children = child;
      newN.push(newObject);
    }

    page[0].children.push(newN[0]._id);

    //console.log({bol: !Array.isArray(newN)}," data type: ", typeof newN)

    if (styles) {
      addStyles(styles.style);
    }

    if (Array.isArray(newN)) {
      page.push(...newN);

      //add to stack
      stack
        .getValue()
        .pushUndo({
          parent: page[0]._id,
          node: newN[0]._id,
          case: "Added",
          nodes: newN,
          position: page[0].children.length - 1,
          styles: styles && styles.style ? styles.style : null,
        });
    } else {
      page = page.concat(node);
    }

    // console.log({ page, newN });
    return page;
  }

  function addStyles(newStyles) {
    let page = htmlState.getValue().styles.style;
    //console.log({bol: !Array.isArray(newVal)}," data type: ", typeof newVal)
    if (Array.isArray(newStyles)) {
      page.push(...newStyles);
    } else {
      page = page.concat(newStyles);
    }
    // console.log({ page, newStyles });
    return page;
  }

  function getAllData() {
    return htmlState.getValue().nodes;
  }

  async function removeData(id) {
    // console.log("removing the an element");
    // let newDefault = await defVal.map(el => el._id == id);
    // return newDefault;
  }

  return {
    getData,
    addData,
    getAllData,
    removeData,
    addStyles,
  };
}

function domToArrTree(doc) {
  let newJsonArr = [];
  let j = 0;

  (async function iterateDom(docEle, docIndex, i) {
    let newObj = {};
    if (!isEmpty(docEle)) {
    }

    let extractedObj = await extractDocAtrr(docEle);

    newJsonArr.push(extractedObj);

    // let newDoc = docEle && docEle.children;
    if (docEle.children) {
      j = 0;

      //console.log({index: docEle.children[j]});

      for (let index = 0; index < docEle.children.length; index++) {
        const element = docEle.children[index];
        //console.log({element, index})

        iterateDom(element, element, index);
      }

      // docEle.children.forEach(e => {
      //     //let childEleDetail = arr.find(ele => ele._id == e);
      //     console.log({e})
      //     //console.log({tar: e, j})
      //    // iterateDom(e, e, j++)
      // });
    }
  })(doc, doc, 0);

  async function extractDocAtrr(docEle) {
    let objOutput = {};
    const getAtrr = docEle.getAttribute("class");
    for (item in docEle) {
      //console.log("before: ",{item, val: docEle[item]});
      if (!docEle[item] || typeof docEle[item] == "function") {
        continue;
      }

      switch (item) {
        case "tagName":
          objOutput["tag"] = docEle[item];
          break;

        case "classList":
          objOutput["classList"] = docEle[item];
          break;

        default:
          //objOutput[item] = docEle[item];
          break;
      }
    }

    //console.log({objOutput});
    return objOutput;
  }

  return newJsonArr;
}

//todo:
// minify HTML, CSS and JS

function traverseAndCollectIds(element) {
  // Initialize an array to store the collected ids
  const idsArray = [];

  // Check if the element has an id attribute, and if so, add it to the array
  if (element.id) {
    idsArray.push(element.id);
  }

  // Check if the element has children
  if (element.children.length > 0) {
    // Iterate through the children and recursively call the function
    for (let i = 0; i < element.children.length; i++) {
      const childIds = traverseAndCollectIds(element.children[i]);
      idsArray.push(...childIds);
    }
  }

  return idsArray;
}

function replaceIds(data) {
  const idsObject = {};

  // First, generate new _id values for each node in the 'node' array
  data.node.forEach((node) => {
    const oldId = node._id;
    const newId = `${fUtils.generateId.getVal()}`; // You can replace 'new' with your preferred prefix
    idsObject[oldId] = newId;

    // Replace _id in the node object
    node._id = newId;
  });

  // Recursively replace _id values within the node object, including children and classes
  for (let i = 0; i < data.node.length; i++) {
    replaceIdsRecursively(data.node[i], idsObject);
  }

  function replaceIdsRecursively(obj, idsObject) {
    for (const varient in obj) {
      if (varient == "children") {
        // console.log(varient);
        replaceArrayIds(obj[varient], idsObject);
      }
    }
  }

  function replaceArrayIds(arr, idsObject) {
    // console.log(arr,idsObject);
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        // console.log(item, idsObject[item], idsObject);
        if (idsObject[item]) {
          arr[i] = idsObject[item];
          // console.log('found');
        }
      }
    }
  }
  return data;
}

function tdApiStateManager(htmlState, appState, tdLoaderState, previewStateForGuest) {

  if (previewStateForGuest.getValue()) {
    return
  }

  async function upDateSite() {


    setInterval(async () => {
      let appData = appState.getValue();
      const pagesData = htmlState.getValue()

      const afterMutation = pagesData.pages

      let count = 0

      PAGES_CHANGED.forEach(async (status) => {
        afterMutation.forEach(async (obj) => {

          // send request to update
          if (status.id === obj.page_id && status.changed) {
            await tdApiRequestInstance.upDateSite({ siteId: appData._id, pageId: obj._id, page: obj });
            // console.log(obj);
            count++
          }
        })
        status.changed = false
      });

      // console.log(PAGES_CHANGED);

      if (count > 0) {
        updateSiteThumbnail()
      }



    }, Number(process.env.API_SYNC_INTERVAL));


    const updateSiteThumbnail = () => {

      const canvasArea = document.getElementById("site-iframe-next");

      let width = canvasArea.offsetWidth

      if ((width > 990 && width <= 1281) && (htmlState.getValue().id == appState.getValue().pages[0].page_id)) {
        // console.log(htmlState.getValue().id == appState.getValue().pages[0].page_id);

        //take screenShot
        const originalNode = document.querySelector("iframe").contentDocument.body;

        takeScreenShot(originalNode, appState.getValue()._id)
      }

    }

    // get initial screenshot
    setTimeout(() => {
      updateSiteThumbnail()
    }, 5000);

  }


  function deployFunc() {
    const publish = document.querySelector(".design-publish-site-button")
    publish.addEventListener("click", async () => {
      //loader
      tdLoaderState.setValue(true);

      //const deployInstance = deploymentModal()
      const deployInstance = fComponent.tdModal(tdLoaderState);


      deployInstance.renderModal()
      deployInstance.openDeployModal()
      deployInstance.deployStatus()

      const sitePages = htmlState.getValue().pages



      function removeCommentsInCssString(cssContent) {
        // Regular expression to match CSS comments
        const commentRegex = /\/\*[\s\S]*?\*\//g;

        // Remove comments from the CSS content
        const cssString = cssContent.replace(commentRegex, '');

        return cssString;
      }

      const result = removeCommentsInCssString(siteCss2);


      const appData = {
        name: appState.getValue().title,
        // defaultCss: result
      }

      let isHome = false;
      let count = 0

      sitePages.map((page) => {

        //change css to text that can be sent to backend

        let cssString = ""

        let tinyStyle = ''
        let smallStyle = ''
        let mediumStyle = ''
        let largeStyle = ''
        let xxlStyle = ''

        for (const style in page.styles.style) {
          if (Object.hasOwnProperty.call(page.styles.style, style)) {
            const element = page.styles.style[style]
            //default
            cssString += `${element.data.sel}{${element.data.styleLess}} `
            //varients
            const elementVarients = page.styles.style[style].data.variants
            // console.log(elementVarients);
            for (const variants in elementVarients) {
              if (Object.hasOwnProperty.call(elementVarients, variants)) {
                applyVarient(variants, elementVarients)
              }
            }
          }
        }

        function applyVarient(varient, elementVarients) {

          switch (varient) {
            case "tiny":
              let tiny = elementVarients[varient];
              tinyStyle += `${tiny.sel}{${tiny.styleLess}} `
              break;

            case "small":
              let small = elementVarients[varient];
              smallStyle += `${small.sel}{${small.styleLess}} `
              // console.log(smallStyle);
              break;

            // case "main":
            //   console.log(varient);
            //   break;

            case "medium":
              let mdm = elementVarients[varient];
              mediumStyle += `${mdm.sel}{${mdm.styleLess}} `
              // console.log(mediumStyle);
              break;

            case "large":
              let large = elementVarients[varient];
              largeStyle += `${large.sel}{${large.styleLess}} `
              // console.log(largeStyle);
              break;

            case "xxl":
              let xxl = elementVarients[varient];
              xxlStyle += `${xxl.sel}{${xxl.styleLess}} `
              // console.log(xxlStyle);
              break;


            default:
              break;
          }
        }



        let tiny = `@media (max-width: 470px) {${tinyStyle}}`
        let small = `@media (max-width: 767px) {${smallStyle}}`
        let medium = `@media (max-width: 990px) {${mediumStyle}}`
        let large = `@media (min-width: 1280px) {${largeStyle}}`
        let xxl = `@media (min-width: 1600px) {${xxlStyle}}`

        cssString += medium
        cssString += small
        cssString += tiny
        cssString += large
        cssString += xxl


        // console.log(cssString);
        // tree to doc

        let htmlDoc = tranformTreeToDoc(page)
        let doc = document.implementation.createHTMLDocument("tailordom");
        try {
          //head
          const head = doc.head;
          const body = doc.body;
          const meta1 = doc.createElement("meta");
          const meta2 = doc.createElement("meta");
          const linkDefaultGfont = doc.createElement("link");

          const createLink1 = doc.createElement("link");
          const styleEl = doc.createElement("style");
          const jsStript = doc.createElement("sript");
          meta1.setAttribute("name", "utf-8");
          meta2.setAttribute("charset", "viewport");
          meta2.setAttribute("content", "width=device-width, initial-scale=1");
          linkDefaultGfont.setAttribute("type", "text/css");
          linkDefaultGfont.setAttribute("rel", "stylesheet");
          linkDefaultGfont.setAttribute("href", "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

          //css styling 
          styleEl.innerText += cssString;
          //Default styling
          // styleEl.innerText += result;
          //Title
          doc.title = page.head.title
          //For linking css file when created
          // const siteStylesheet = `/${page.head.title}`;
          // createLink1.setAttribute("rel", "stylesheet");
          // createLink1.setAttribute("type", "text/css");
          // createLink1.setAttribute("href", siteStylesheet);

          //for js script
          jsStript.innerText = ""

          head.appendChild(meta1);
          head.appendChild(meta2);
          head.appendChild(styleEl);

          head.appendChild(linkDefaultGfont);
          // head.appendChild(createLink1);

          body.appendChild(htmlDoc);
          body.appendChild(jsStript)

        } catch (e) {
          // console.log(e);
        }

        // data[doc.title.toLocaleLowerCase()] = {html:new XMLSerializer().serializeToString(doc)}
        if ((page.route.includes("/index") || page.route === "/")) {
          appData["home"] = { html: '<!DOCTYPE html>' + doc.documentElement.outerHTML }
        } else {
          appData[page.slug] = { html: '<!DOCTYPE html>' + doc.documentElement.outerHTML }
        }

        //determine if home page is present
        if (page.route.includes("index.html") || page.route == "/") {
          isHome = true;
          count++
        }


        return null
      })

      // console.log(appData);
      // api      
      if (!isHome || count > 1) {
        deployInstance.closeDeployModal()
        notify("Home page needed to publish.")
      } else {
        const { data } = await tdApiRequestInstance.deploySite(getSiteId(), appData);
        tdLoaderState.setValue(false);
        deployInstance.deployStatus(data);
      }
      // console.log(res);
    })
  }


  return {
    upDateSite,
    deployFunc
  };
}