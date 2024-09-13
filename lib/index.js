// data structure
const tailordom = (function () {
    let _val;
    return {
        useState(initialValue) {
            _val = initialValue;// _val = _val || initialValue; // assign anew every run
            async function setState(newVal) {
                // console.log({newVal, beforeVal: _val})
                _val = await newVal;
                //console.log({newVal, afterVal: _val})
            }
            return [_val, setState];
        },
        useEffect(effecfCallback, deps) {
            let renderState = false
            // console.log("init useEffect...",renderState)
            if (!deps || (Array.isArray(deps) && deps.length < 1)) {
                //re-render at default
                // console.log("init useEffect...re-render")
            }
            effecfCallback();
            // console.log("after bind.")

        },
        render2(app) {
            app.innerHTML = htmlNode;
        },
        async render(rawData, cssStyleInstance) {
            const { styles } = rawData;
            console.time("PARSE_DOM");
            console.time("LOAD_DOM");
            const htmlDoc = await tranformTreeToDoc(rawData);
            console.timeEnd("PARSE_DOM");
            let frame = document.getElementById("site-iframe-next");
            let doc = document.implementation.createHTMLDocument("New Document lib");
            //frame.contentDocument.designMode = "on"; //and off

            //const canvasIframe = document.querySelector("iframe").contentWindow;
            //const canvasDoc = canvasIframe.document;
            //const styleInstance = stylesheetRule(canvasDoc);
            try {
                //head
                setUpHeadTag(doc);
                //console.log({type: typeof htmlDoc, htmlDoc, typeRaw: typeof rawData, rawData});
                doc.body.appendChild(htmlDoc);
                //console.log("render Iframe HTML");
            } catch (e) {
                // console.log(e);
            }
            const destDocument = frame.contentDocument;

            const srcNode = doc.documentElement;

            const newNode = destDocument.importNode(srcNode, true);

            destDocument.replaceChild(newNode, destDocument.documentElement);

            //addStylesheetRule(canvasDoc, styles.blocks);
            if (styles.blocks) {
                cssStyleInstance.addCssRule(styles.blocks);
            }


            console.timeEnd("LOAD_DOM");

        }
    };
})();

window.addEventListener("load", async (event) => {
    try {
        // console.log("the page is fully load ");
        const [htmlNode, setHtmlNode] = tailordom.useState({
            initial_node: SITE_PAYLOAD.siteContent.nodes[0],
            nodes: SITE_PAYLOAD.siteContent.nodes,
            styles: SITE_PAYLOAD.siteContent.styles
        });
        const [cssStyle, setCssStyle] = tailordom.useState([]);
        const [jsNode, setJsNode] = tailordom.useState({
            js: SITE_PAYLOAD.siteContent.js
        });

        const [activeSection, setActiveSection] = tailordom.useState(SITE_PAYLOAD.siteContent.nodes[0]);
        const [activeNode, setActiveNode] = tailordom.useState();

        const nodeInstances = tdManageState(SITE_PAYLOAD.siteContent.nodes);
        const activeNodeInstances = tdManageState(SITE_PAYLOAD.siteContent.nodes[0]);
        const styleInstances = tdManageState(SITE_PAYLOAD.siteContent.styles);


        let newInitView;


        tailordom.useEffect(async () => {
            // console.log("=========== logging useEffect ==========");
            const acNode = document.createElement("div");
            //let isloading = true;
            setActiveNode(acNode);
            rootViewContainer(mainViewEntry);

            //newInitView = await initView(isloading);
        });


        function rootViewContainer(callback) {
            let isLoading = true;
            setTimeout(() => {
                isLoading = false;
                // console.log("Loaded successfully....",isLoading);
                //loaded data from an api endpoint
                let data = {};//await api.template({header, query})
                Object.assign({}, { isLoading }, data);

                // console.log({data});
                callback(data);
            }, 3000);


        }

        async function mainViewEntry(data) {
            const { isLoading } = data;

            //Init Iframe window
            const canvasWindow = document.querySelector("iframe").contentWindow;
            //styleInstance
            const cssStyleInstance = stylesheetRule(canvasWindow.document);
            //Init
            let newInitView = await initView(isLoading);
            const htmlElementInstance = htmlElement(canvasWindow);
            const nodeManagerInstance = nodeMainManager(canvasWindow, { node: nodeInstances, style: styleInstances, activeNode: activeNodeInstances }, cssStyleInstance);
            const appUtils = await tdUtils(canvasWindow.document, nodeManagerInstance);


            const viewInstance = await veiwSection(document, { dataRepo: { payload: SITE_PAYLOAD.siteContent, content: SITE_CONTENT } }, { nodeManager: nodeManagerInstance }, appUtils);
            const reactModelMount = editorReactMount(canvasWindow.document);
            //const viewIndicatorInstance = 
            viewIndicator(canvasWindow, { view: viewInstance, reactModelMount, initView: newInitView }, { node: nodeInstances, style: styleInstances, activeNode: activeNodeInstances });
            fscroll(canvasWindow.document, canvasWindow);

            //init objects

            //convert doc to arr
            // const testDoc = document.querySelector(".topBar-group-middle-container");
            // domToArrTree(testDoc);



            // }

            //const appUtils = await tdUtils(canvasWindow.document, nodeInstance);
            // canvasWindow.addEventListener("load", async (event) => {
            //     editorReactMount(canvasWindow.document);
            // })


            const canvasInstance = fCanvasArea(".web-canvas-area");
            canvasInstance.resizeWindowWithbarHandle(".web-canvas-area");

            // await setHtmlNode(SITE_PAYLOAD.siteContent.nodes);

            //console.log("after: ",{htmlNode, nodes:  SITE_PAYLOAD.siteContent.nodes});

            //re-render these section after every state change
            tailordom.render(htmlNode, cssStyleInstance);



            // console.log("after render");
        }

    } catch (error) {
        console.error({ error });
    }
});




function fCanvasArea(canvas) {
    const canvasArea = document.querySelector(canvas);
    const canvasDefaultWidth = document.querySelector(".screen__window-setting-val");
    //console.log("get the width value: ",{canvasDefaultWidth})
    (function initDeviceOtAndAddEventListener() {
        document.querySelector(".nc-screen-mobile").addEventListener("click", (evt) => resizeWindowWithDeviceOrientation("MOBILE"));
        document.querySelector(".nc-screen-tablet").addEventListener("click", (evt) => resizeWindowWithDeviceOrientation("TABLET"));
        document.querySelector(".nc-screen-desktop").addEventListener("click", (evt) => resizeWindowWithDeviceOrientation("DESKTOP"));
        // console.log("fCanvasArea.....  DOne")
    })();

    function resizeWindowWithDeviceOrientation(deviceOT) {
        //deviceOT enum("Mobile", "Desktop", "Tablet")
        switch (deviceOT) {
            case "MOBILE":
                canvasArea.style.width = "320px";
                break;
            case "TABLET":
                canvasArea.style.width = "786px";
                break;
            case "DESKTOP":
                canvasArea.style.width = "1200px";
                break;

            default:
                break;
        }
        //console.log({width: canvasArea.style.width, canvasDefaultWidth});
        canvasDefaultWidth.textContent = canvasArea.style.width;
    }
    return {
        resizeWindowWithDeviceOrientation,
        resizeWindowWithbarHandle() {
            // console.log("enter init resize....")
            const resizeHandles = document.querySelectorAll(canvas + " .handler");
            const minSize = 20;
            let originalWidth = 0;
            let originalX = 0;
            let originalMouseX = 0;

            for (let i = 0; i < resizeHandles.length; i++) {
                const currentResizeHandle = resizeHandles[i];
                currentResizeHandle.addEventListener("mousedown", e => {
                    // console.log("doc mousedown logging...",e)
                    e.preventDefault();
                    originalWidth = parseFloat(getComputedStyle(canvasArea, null).getPropertyValue("width").replace("px", ""));
                    originalX = canvasArea.getBoundingClientRect().left;
                    originalMouseX = e.pageX;
                    document.addEventListener("mousemove", resize);
                    document.addEventListener("mouseup", stopResize);
                })

                function resize(e) {

                    // console.log({classList: currentResizeHandle.classList})
                    if (currentResizeHandle.classList.contains("handle-right")) {
                        // console.log("logging...",e);
                        const width = originalWidth + (e.pageX - originalMouseX);
                        if (width > minSize) {
                            canvasArea.style.width = width + "px";
                            canvasDefaultWidth.innerContent = width + "px";
                        } else {
                            // console.log("canvas width can not be less than 20px")
                        }
                    } else {
                        // console.log("else logging...",e);
                        const width = originalWidth - (e.pageX - originalMouseX);
                        if (width > minSize) {
                            canvasArea.style.width = width + "px";
                            canvasDefaultWidth.innerContent = width + "px";
                            //canvasArea.style.left = originalY + (e.pageY - originalMouseY) + "px";
                        } else {
                            // console.log("canvas width can not be less than 20px")
                        }
                    }
                }

                function stopResize() {
                    //window.removeEventListener("mousemove", resize);
                    document.removeEventListener("mousemove", resize);
                }

            }
        }
    }
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
        currentResizeHandle.addEventListener("mousedown", e => {
            // console.log("doc mousedown logging...",e)
            e.preventDefault();
            originalWidth = parseFloat(getComputedStyle(canvasArea, null).getPropertyValue("width").replace("px", ""));
            originalX = canvasArea.getBoundingClientRect().left;
            originalMouseX = e.pageX;
            document.addEventListener("mousemove", resize);
            document.addEventListener("mouseup", stopResize);
        })

        function resize(e) {
            // console.log({classList: currentResizeHandle.classList})
            if (currentResizeHandle.classList.contains("handle-right")) {
                // console.log("logging...",e);
                const width = originalWidth + (e.pageX - originalMouseX);
                if (width > minSize) {
                    canvasArea.style.width = width + "px";
                } else {
                    // console.log("canvas width can not be less than 20px")
                }
            } else {
                // console.log("else logging...",e);
                const width = originalWidth - (e.pageX - originalMouseX);
                if (width > minSize) {
                    canvasArea.style.width = width + "px";
                    //canvasArea.style.left = originalY + (e.pageY - originalMouseY) + "px";
                } else {
                    // console.log("canvas width can not be less than 20px")
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
    // console.log("DOM fully loaded and parsed");

    componentDidMountInsideDom()
});




async function componentDidMountInsideDom() {
    // console.log("render after component has mounted");

    //await renderComponent();
}

//Utils
function genDocument(name, className = null, attr = {}) {
    // console.log({name, className, attr})
    let newEle = document.createElement(name);
    newEle.classList.add(className);
    let attrKeys = Object.keys(attr);
    for (let i = 0; i < attrKeys.length; i++) {
        const akey = attrKeys[i];
        newEle.setAttribute(`data-t-${akey}`, attr[akey])
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
    node.classes && node.classes.forEach(cls => {
        let styleObj = styles.blocks.find(ele => ele._id == cls);
        //@todo - link the id to get the exact phrase value, then append
        //console.log({styleObj})
        //create and add new style rule to doc
        //@example .[sel]{["styleLess"]}
        newEle.classList.add(styleObj?.data.sel.substring(1) || cls);
    })
    //newEle.classList.add(node.classes[0]);
    let newAttr = Object.assign({}, attr, { id: node._id })
    let attrKeys = Object.keys(newAttr);
    let eleAttrKeys = node.data && Object.keys(node.data);

    //Element attribute/props
    if (eleAttrKeys && Array.isArray(eleAttrKeys)) {
        for (let i = 0; i < eleAttrKeys.length; i++) {
            const akey = eleAttrKeys[i];
            if (akey.tag || akey.type) return;
            newEle.setAttribute(`${akey}`, node.data[akey])
        }
    }
    //data attributes
    for (let i = 0; i < attrKeys.length; i++) {
        const akey = attrKeys[i];
        newEle.setAttribute(`data-t-${akey}`, newAttr[akey])
        newEle.setAttribute(`${akey}`, newAttr[akey])
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
    let gridCol;// = document.createElement("div");
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
            indexEle.children.forEach(e => {
                let childEleDetail = arr.find(ele => ele._id == e);
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
        // console.log("data should not be empty or less that three props")
        return;
    }
    const indexElement = data.nodes[0], cssStyle = data.styles;
    return (function renderArrTotree(indexEle, arr, styles, j, parent) {
        //console.log("recursion...",{indexEle, arr, styles, j, parent})
        let newEle = genEleDocument(indexEle, styles);
        if (indexEle.children) {
            indexEle.children.forEach(e => {
                let childEleDetail = arr.find(ele => ele._id == e);
                renderArrTotree(childEleDetail, arr, styles, j + 1, newEle);
            });
        }
        if (!parent || parent == undefined || typeof parent == undefined) {
            return newEle;
        }
        parent && parent.appendChild(newEle);

    })(indexElement, data.nodes, cssStyle, 0, undefined)
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
    const createLink1 = doc.createElement("link");
    const styleEl = doc.createElement("style");
    meta1.setAttribute("name", "utf-8");
    meta2.setAttribute("charset", "viewport");
    meta2.setAttribute("content", "width=device-width, initial-scale=1");

    const siteStylesheet = `site/site-default.css?v=1678726433554`;
    createLink1.setAttribute("rel", "stylesheet");
    createLink1.setAttribute("type", "text/css");
    createLink1.setAttribute("href", siteStylesheet);

    head.appendChild(meta1);
    head.appendChild(meta2);
    head.appendChild(styleEl);
    head.appendChild(createLink1);



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
    styleEl.setAttribute("type", "text/css")
    styleEl.setAttribute("rel", "stylesheet")
    // Append <style> element to <head>
    doc.head.appendChild(styleEl);

    // console.log("append element to head ", {rules})

    // Grab style element's sheet
    const styleSheet = styleEl.sheet;
    console.time("load styling ", { styleSheet })
    for (let i = 0; i < rules.length; i++) {
        const ele = rules[i];
        // Insert CSS Rule
        await styleSheet.insertRule(
            `${ele.data.sel}{${ele.data.styleLess}}`,
            styleSheet.cssRules.length
        );

    }
    //console.log({keysl: Object.keys(styleEl), keys2: Object.keys(styleSheet)})
    console.timeEnd("load styling ")
    //console.log({lencssRules: styleSheet.cssRules.length})

}
function stylesheetRule(doc) {

    // const styleEl = doc.createElement("style");
    // styleEl.setAttribute("type", "text/css")
    // styleEl.setAttribute("rel", "stylesheet")
    // // Append <style> element to <head>
    // doc.head.appendChild(styleEl);
    // // Grab style element's sheet
    // const styleSheet = styleEl.sheet;


    async function addCssRule(newRule) {
        const styleEl = doc.createElement("style");
        styleEl.setAttribute("type", "text/css")
        styleEl.setAttribute("rel", "stylesheet")

        doc.head.appendChild(styleEl);
        const styleSheet = styleEl.sheet;

        // console.log({styleEl, styleSheet});
        for (let i = 0; i < newRule.length; i++) {
            const ele = newRule[i];
            // Insert CSS Rule
            await styleSheet.insertRule(
                `${ele.data.sel}{${ele.data.styleLess}}`,
                styleSheet.cssRules.length
            );

        }

        // console.log({styleSheet});

    }

    async function replaceCssRule(textRule) {
        await styleSheet.replaceSync(textRule);
    }

    async function removeCssRule(index) {

        await styleSheet.deleteRule(index);

    }

    return {
        addCssRule,
        replaceCssRule,
        removeCssRule
    }
}
async function compileAndAddEvent(arrTrigger, handler) {
    if (!arrTrigger) return;
    arrTrigger.list.map(async (trigger, i) => {
        let eleNode = document.querySelector(`[data-td-id="${trigger._id}"]`);//selet by attr id
        if (!eleNode) { return; }
        await eleNode.addEventListener("click", function (e) {
            eleNode.dataset.tdType.toUpperCase();
            handler(eleNode)
        });
    })
}

function setupSidebarRight(props) {
    if (Object.keys(props).length > 2) {
        return { message: "No Props of Element is selected" }
    }
    const { activeElement } = props;
    const rightSidebar = document.getElementById("sidebar-right");
    return {
        renderHtml() {
            return {
                getStylesTab() {
                    // console.log("Geting styles props for ",activeElement)
                }
            }
        }
    }
}

function editorTd() {
    function singleClick(ele) {
        ele.preventDefault();
        //hightlight element 
        // add border lin with blue or red color
        // set to active selected state
    }

    function doubleClick(ele) {
        ele.preventDefault()
        // add in-line style
        // add a switch statement to determine the element before assigning behaivor
        // set some attribute e.g. spell check, content-editable
        // style="white-space: pre-wrap;" spellcheck="true" data-gramm_editor="false" contenteditable="true" data-editing-component-property="false"
    }

    return {
        singleClick,
        doubleClick
    }
}

//utility functions
function switchOnOffSideBar(status, target) {
    // console.log({status, target, style: target.style})
    let overlayPanel = document.querySelector(".nc-overlay-panel-layer-left");//td-overlay-panel-layer-left, none
    //const getStatus = status? "block" : "none";
    const getStyleBg = status ? "#101828" : "none";
    overlayPanel.style.display = overlayPanel.style.display == "none" ? "block" : "none";
    target.style.background = getStyleBg;

    //extra

    // let closeBtn = document.querySelector(".nc-button");
    // closeBtn.addEventListener("click", (e) => {
    //     overlayPanel.style.display = "none";
    // })
}

function viewIndicator(canvasWindow, useCase, store) {
    const doc = canvasWindow.document;

    // console.log({useCase});
    //init and create the element
    initIndicatorViews();

    //function highlightNode(wraperDiv, color = "red"){
    function highlightNode(wraperDiv, color = "#980") {

        doc.addEventListener("mouseover", function (event) {
            //event.preventDefault();
            let selectedEle = event.target;

            //console.log("mouseover event... ",selectedEle)
            setOutlineStyle(selectedEle, wraperDiv, color);

            //set new active element
            //setActiveTab(true, {node: selectedEle});

        }, false);


        // doc.addEventListener("mouseout", function(event){
        //     //event.preventDefault();
        //     let selectedEle = event.target;

        //     console.log("mouseout event... ",selectedEle);

        //     removeOutlineStyle(selectedEle, wraperDiv)


        // }, false);

        // doc.addEventListener("mouseup", function(event){
        //     //event.preventDefault();
        //     let selectedEle = event.target;

        //     console.log("mouseup event... ",selectedEle);


        // }, false);

        doc.addEventListener("mousedown", function (event) {

            let selectedEle = event.target;
            let log;

            // console.log("mousedown event... ",{clickType: event.button, tar: selectedEle});

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

            // console.log(`a btn was pressed: `,log)

            //useCase.reactModelMount.handleDoubleClick(action);
            // if(event.button == 2){
            //     event.preventDefault();
            //     //display custom modal
            //     useCase.reactModelMount.handleRightClick();

            // }


        }, false);

        // doc.addEventListener("mousemove", function(event){
        //     //event.preventDefault();
        //     let selectedEle = event.target;

        //    // console.log("mousemove event... ",selectedEle)
        //     setOutlineStyle(selectedEle, wraperDiv);


        // }, false);


    }

    function initIndicatorViews() {
        const _getToolContainer = document.getElementsByClassName("td__style-tool")[0];
        const _sectionWrapper = document.createElement("div");
        _sectionWrapper.style.position = "absolute";
        _sectionWrapper.style.height = "100%";
        //_sectionWrapper.style.width = "100%";
        _sectionWrapper.style.left = "0px";

        const _hoverDiv = document.createElement("div");
        _hoverDiv.classList.add("bem-OutlineHoveredNode", "hovered-outline", "td-outline", "active");
        _hoverDiv.setAttribute("data-auto-id", "outline-hovered-node");

        const _selectedDiv = document.createElement("div");
        _selectedDiv.classList.add("tool-OutlineSelectedNode", "td-outline", "active");
        _selectedDiv.setAttribute("data-auto-id", "outline-selected-node");

        _sectionWrapper.appendChild(_hoverDiv);
        _sectionWrapper.appendChild(_selectedDiv);

        highlightNode(_hoverDiv, "green");
        selectedNode(_selectedDiv, "#456");

        selectedPopupModal(_getToolContainer, _selectedDiv);

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
        _newDiv.style["height"] = "100%", _newDiv.style["width"] = "100%";
        _newDiv2.style["position"] = "absolute", _newDiv2.style.left = "0px", _newDiv2.style.touchAction = "none";

        doc.addEventListener("click", async function (event) {
            event.preventDefault();
            let selectedEle = event.target;
            let newPopUpDiv = await setOutlineStylePopUp2(selectedEle, _newDiv2, "red");
            //addClientRectsOverlay(selectedEle, wraperDiv);
            //<div class="mini-settings image-settings image-mini-settings react-draggable" data-auto-id="mini-settings-container" style="touch-action: none; left: 30px; top: 506px; transform: translate(0px, 0px);">

            //set and render new active element
            //useCase.viewInstance.renderLeftSideContent(true, {node: selectedEle});
            //useCase.view.renderRightSideView({status: true, node: selectedEle});
            // console.log({style: newPopUpDiv.style,newPopUpDiv})
            _newDiv.appendChild(newPopUpDiv);

        });



        //_newDiv.appendChild(_newDiv2);
        parnetNode.appendChild(_newDiv);
    }

    function selectedNode(wraperDiv, color = "red") {
        doc.addEventListener("click", function (event) {
            event.preventDefault();
            let selectedEle = event.target;
            setOutlineStyle(selectedEle, wraperDiv, color);

            //set and render new active element
            useCase.view.renderRightSideView({ status: true, node: selectedEle });
            useCase.initView.bottomViewSelectedNodeBreadcrumb(selectedEle);

            handleKeyboardevent(selectedEle);

            // canvasWindow.addEventListener(
            //     "keydown",
            //     (event) => {
            //       if (event.defaultPrevented) {
            //         return; // Do nothing if the event was already processed
            //       }

            //       console.log({key: event.key, tar: event.target, selectedEle});

            //       if(event.key == ""){
            //         removeNodeOutlineStyle(event.target);
            //       }

            //       // Cancel the default action to avoid it being handled twice
            //        event.preventDefault();
            //     },
            //     true
            // );


        });

        doc.addEventListener("dblclick", (e) => {
            e.preventDefault();
            let targetNode = e.target;
            // console.log({tar: e.target, nodeType: targetNode.nodeType, nodeTypeFChild: targetNode.firstChild.nodeType});
            if (targetNode.firstChild.nodeType === Node.TEXT_NODE) { // true
                targetNode.setAttribute("contenteditable", true);
                let tdtext = targetNode.textContent;

                // console.log({newText: tdtext})
            }
            targetNode.classList.toggle("large");
        });


    }


    function handleKeyboardevent(selectedNode) {
        // console.log({keyboardNode: selectedNode});
        let slk = selectedNode;
        try {
            doc.addEventListener(
                "keydown",
                (event) => {
                    // console.log({slk});
                    // if (event.defaultPrevented) {
                    //     return; // Do nothing if the event was already processed
                    // }

                    // console.log({key: event.key, tar: event.target, slk});

                    switch (event.key) {
                        case "ArrowDown":
                            // Do something for "down arrow" key press.
                            break;
                        case "ArrowUp":
                            // Do something for "up arrow" key press.
                            break;
                        case "ArrowLeft":
                            // Do something for "left arrow" key press.
                            break;
                        case "ArrowRight":
                            // Do something for "right arrow" key press.
                            break;
                        case "Enter":
                            // Do something for "enter" or "return" key press.
                            break;
                        case "Backspace":
                            // Do something for "enter" or "return" key press.
                            removeNodeOutlineStyle(event.target, selectedNode);
                            break;
                        case "Escape":
                            // Do something for "esc" key press.
                            break;
                        default:
                            return; // Quit when this doesn't handle the key event.
                    }

                    // Cancel the default action to avoid it being handled twice
                    event.preventDefault();
                },
                true,
            );

        } catch (error) {
            console.error({ error })
        }

    }

    async function setOutlineStyle(target, wraperDiv, color) {
        const { offsetHeight, offsetWidth, offsetParent } = target;
        const { left, top } = target.getClientRects()[0];
        wraperDiv.style.display = "inline-block";
        wraperDiv.style.outline = `1px solid ${color}`;
        wraperDiv.style.position = "absolute";
        wraperDiv.style.width = `${offsetWidth}px`;
        wraperDiv.style.height = `${offsetHeight}px`;
        wraperDiv.style.transform = `translate(${left}px, ${top + canvasWindow.scrollY}px)`;
        const result = await findRecordByIndex(target.dataset.tId);

        let newObj = Object.assign({}, { arrObj: result }, { node: target });
        let selectedNodeIndicator = renderSelectedNodeIndicator(newObj);
        wraperDiv.replaceChildren(selectedNodeIndicator);

    }

    async function setOutlineStylePopUp2(target, wraperDiv, color) {
        const { offsetHeight, offsetWidth, offsetParent } = target;
        const { left, top } = target.getClientRects()[0];
        wraperDiv.style.display = "inline-block";
        // wraperDiv.style.outline = `1px solid ${color}`;
        wraperDiv.style.position = "absolute";
        // wraperDiv.style.width = `${offsetWidth}px`;
        // wraperDiv.style.height = `${offsetHeight}px`;
        wraperDiv.style.transform = `translate(${left}px, ${top + canvasWindow.scrollY}px)`;
        wraperDiv.style.zIndex = 99;
        //wraperDiv.style.top = `${top + canvasWindow.scrollY}px`;
        //const result = await findRecordByIndex(target.dataset.tId);

        //let newObj = Object.assign({}, {arrObj: result}, {node: target});
        // let selectedNodeIndicator = renderSelectedNodeIndicator(newObj);
        // wraperDiv.replaceChildren(selectedNodeIndicator);

        return wraperDiv;

    }
    async function removeNodeOutlineStyle(parentNode, target) {
        // console.log("mouse out.... remove element",{parentNode, target});
        if (target.parentNode) {
            target.parentNode.removeChild(target);
        }

        //return;
    }

    function renderSelectedNodeIndicator(eleObj) {
        //console.log(eleObj);
        let { arrObj, node } = eleObj;
        const _newDivMain = document.createElement("div");
        const _newDivMainInner = document.createElement("div");
        const _newDivCrumbs = document.createElement("div");

        _newDivMain.classList.add("breadcrumbs");
        _newDivMainInner.classList.add("inner");
        _newDivCrumbs.classList.add("crumbs", "clearfix");

        _newDivMainInner.appendChild(_newDivCrumbs);

        const nodeArr = [{ _id: "01", class: ["crumb"], active: false }, { _id: "02", class: ["crumb"], active: true, data: {} }];
        nodeArr.map(item => {
            let _newDiv = document.createElement("div");
            _newDiv.classList.add("crumb");
            if (item.active) {
                _newDiv.classList.add("current");
                let _newDivInner2 = document.createElement("div");
                _newDivInner2.classList.add("inner", "indicator", "has-mini-settings");

                let _newDivIcon = document.createElement("div");
                let _newDivLabel = document.createElement("div");
                let _newDivIconSetting = document.createElement("div");
                _newDivIcon.classList.add("icon")
                _newDivLabel.classList.add("label")
                _newDivIconSetting.classList.add("element", "setting", "mini-element-setting");
                _newDivIconSetting.setAttribute("data-auto-id", "outline-breadcrumbs-mini-settings");
                _newDivIconSetting.innerHTML = `<span>${generateSvg("setting")}</span>`;

                _newDivIcon.innerHTML = `<span>&angmsdaa;</span>`;
                _newDivLabel.innerHTML = `<span>${arrObj.type || "H1 heading"}</span>`;


                _newDivIconSetting.addEventListener("click", (e) => {
                    //do somthing
                    // console.log({_newDivIconSetting, eleObj});
                    useCase.view.renderMinisetting(eleObj);
                })


                _newDivInner2.appendChild(_newDivIcon);
                _newDivInner2.appendChild(_newDivLabel);
                _newDivInner2.appendChild(_newDivIconSetting);
                _newDiv.appendChild(_newDivInner2);

            }
            _newDivCrumbs.appendChild(_newDiv);
        })


        _newDivMain.replaceChildren(_newDivMainInner);

        return _newDivMain;

        // return `
        //     <div class="breadcrumbs">
        //         <div class="inner">
        //             <div class="crumbs clearfix">
        //                 <div class="crumb"></div>
        //                 <div class="crumb current">
        //                     <div class="inner indicator has-mini-settings">
        //                         <div class="icon"><span>&angmsdaa;</span></div>
        //                         <div class="label"><span>${eleObj.type || "H1 heading"}</span></div>
        //                         <div class="element setting" data-auto-id="outline-breadcrumbs-mini-settings" style="width: 18px; height: 18px; padding: 1px 2px 1px 3px; display: flex; align-items: center; justify-content: center; background-color: inherit; border-left: 1px solid rgb(138, 194, 255);">
        //                             <span>${generateSvg("setting")}</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // `;
    }

    async function findRecordByIndex(id) {
        let arr = store.node.getAllData();//SITE_PAYLOAD.siteContent.nodes;
        for (let i = 0; i < arr.length; i++) {
            const ele = arr[i];
            if (ele._id == id || ele.id == id) {
                //console.log(`${ele._id} == ${id}`)
                return ele;
            }

        }
        return null;//not found
    }

    return {
        highlightNode,
        selectedNode
    }

}

// function tdHighlight(wraperDiv, color = "red"){
//     console.log("initiating II...");
//     const canvasWindow = document.querySelector("iframe").contentWindow;
//     canvasWindow.document.addEventListener("click", function(event){
//         event.preventDefault();
//         let selectedEle = event.target;
//         setElementBorderHighlight(selectedEle, wraperDiv);

//         //set new active element
//         setActiveTab(true, {node: selectedEle});

//         viewInstance

//     });
//     canvasWindow.document.addEventListener("focus", function(event){
//         event.preventDefault();
//         console.log("............FOCUS...........");
//     });

//     async function setElementBorderHighlight(target, wraperDiv, color = "red"){
//         const {offsetTop, offsetLeft, offsetHeight, offsetWidth, offsetParent} = target;
//         const {left, top} = target.getClientRects()[0];
//         //console.log({bounding: target.getBoundingClientRect()})
//        console.log({target, winScrollY: canvasWindow.scrollY})
//        //console.log({parent: {offsetTop: offsetParent.offsetTop, offsetLeft: offsetParent.offsetLeft, offsetHeight: offsetParent.offsetHeight, offsetWidth: offsetParent.offsetWidth}})

//         //wraperDiv.style = {offsetTop, offsetLeft, offsetHeight, offsetWidth};
//         wraperDiv.style.outline = "1px solid #00f";
//         wraperDiv.style.position = "relative";
//         //wraperDiv.style.offsetLeft = offsetLeft;
//         wraperDiv.style.width = `${offsetWidth}px`;
//         wraperDiv.style.height = `${offsetHeight}px`;
//         // wraperDiv.style.top = `${offsetTop}px`;
//         // wraperDiv.style.left = `${offsetLeft}px`;
//         wraperDiv.style.transform = `translate(${left}px, ${top + canvasWindow.scrollY}px)`;

//         //get the vertual record 
//         const rowId = target.dataset.tId;
//         const result = await findRecordByIndex(rowId);

//         wraperDiv.innerHTML = `
//             <div class="icon"><span>⦨</span></div>
//             <div class="label"><span>${result.type}</span></div>
//             <div class="other-icon"><span>à</span></div>
//         `;
//         console.log({result, rowId, column: target.dataset});


//     }

//     async function findRecordByIndex(id){
//         let arr = SITE_PAYLOAD.siteContent.nodes;
//         for (let i = 0; i < arr.length; i++) {
//             const ele = arr[i];
//             if(ele._id == id){
//                 console.log(`${ele._id} == ${id}`)
//                 return ele;
//             }

//         }
//         return null;//not found
//     }

//     return {
//         setElementBorderHighlight,
//         findRecordByIndex

//     }
// }

// function setActiveTab(status, activeElement, selector="sidebar-right-setting-link"){
//     const {node} = activeElement;
//     let tab = document.querySelector(`[data-auto-id="${selector}"]`);
//     let innerContentWrapper = document.querySelector(`.sidebar__tab-pane .sidebar__tab-heading`);
//     let innerContent = document.querySelector(`#sidebar__tab-style-props`);

//     const getStyleBg = status && "#101828";
//     // console.log({tab, activeElement, style: node.style});
//     // console.log({bg: node.style.fontSize})
//     tab.classList.add = "active";
//     tab.style.background= getStyleBg;

//     //set new value
//    // const newContainer = document.createElement("div");
//    // newContainer.setAttribute("style", "position: relative; overflow: hidden;height: 100%;");
//    // newContainer.classList.add = selector;
//    let outViewHeading = ``;
//    let outView = ``;

//     outViewHeading += `
//                 <div>
//                     <p>${node.tagName}</p>
//                     <div>
//                         <label>Font size: <input type="number"  name="fontSize" id="style__font-size" value='${node.style.fontSize}' /></span>
//                     </div>
//                     <div>
//                         <label>Color: <input type="color" id="color-picker" name="color" value="${node.style.color}"/></span>
//                     </div>
//                     <div>
//                         <label>Background: <input type="color" id="bgcolor-picker" name="backgroundColor" value=${node.style.backgroundColor} /></span>
//                     </div>
//                 </div>
//                 `;

//    const styleView = [
//         {name: "Typograghy", data: {
//                 "font-size": {val: 15, label: "size"}, 
//                 "font-family": {val: "Arial, sans-serif", label: "font"}, 
//                 "font-weight": {val: 400, label: "Weight"}, 
//                 "font-style": {val: "italicize", label: "style"}, 
//                 "align-items": {val: "center", label: "align-items"}, 
//                 "line-height": {val: 100, label: "height"}
//             }
//         },
//         {name: "Size", data: {"width": {val: 15, label: "width"}, "height": 100, label: "height"}, "max-height": {val: 400, label: "Max-H"}, "max-width": {val: 400, label: "Max-W"}},
//         {name: "Backgrounds", data: {"background-color": {val: "#fff000", label: "color"}, "background-image": {val: "test.png", label: "image"}}},
//     ];
//     for (let i = 0; i < styleView.length; i++) {
//         const ele = styleView[i];
//         outView += `
//             <div data-auto-id="typogragphy" class="sidebar__style-props">
//                     <div data-auto-id="header" tab-index="0" class="header">
//                         <div style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start;">
//                             <div style="margin-right: 4px;">${ele.name}</div>
//                         </div>
//                     </div>
//                     <div>
//                         <div style="align-items: center;box-sizing: border-box;display: grid;gap: 8px;grid-template-columns: 44px 1fr 44px 1fr;padding: 8px;">
//                             <div name="fontFamily" style="background: rgba(248, 89, 0, 0.15);">${ele.data["background-color"]}</div>
//                             <div style="grid-column: 2 / -1;">
//                                 <div>Arial</div>
//                             </div>
//                             <div name="fontSize" style="cursor: default; user-select: none; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; font-family: Inter, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, sans-serif; font-weight: 400; line-height: 12px; letter-spacing: -0.2px; display: inline-flex; color: rgb(255, 171, 102); background: rgba(248, 89, 0, 0.15); padding: 2px; margin-left: -2px; border-radius: 2px; max-width: 100%; box-sizing: content-box; justify-self: start; position: relative; opacity: 1;">Size</div>
//                             <div style="grid-column: 2 / -1;">
//                                 <div>${node.style.fontSize}</div>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//             `;

//     }
//     const htmlView = `
//         <div style="position: relative; overflow: hidden; height: 100%;">
//             <div style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);">
//                 ${outView}
//             </div>
//             <div></div>
//         </div>
//     `;

//     //newContainer.innerHTML = outView;

//     const out = innerContent;
//     const elementStyle = activeElement.node.style;

//     // We loop through all styles (for…of doesn't work with CSStyleDeclaration)
//     let outNow = ``;
//     //console.log({lenKey: Object.keys(elementStyle)})
//     outNow += `<div>`;
//     for (const prop in elementStyle) {
//         if (Object.hasOwn(elementStyle, prop)) {
//             out.textContent += `${
//                 elementStyle[prop]
//             } = '${elementStyle.getPropertyValue(elementStyle[prop])}'\n`;
//             outNow += `${elementStyle[prop]} = '${elementStyle.getPropertyValue(elementStyle[prop])}'\n`;
//            // console.log(elementStyle[prop],": " ,elementStyle.getPropertyValue(elementStyle[prop]));
//         }
//     }
//     outNow += `</div>`;
//     //console.log({outNow});
//     innerContentWrapper.innerHTML= outViewHeading;
//     innerContent.innerHTML = outNow;//htmlView

//     //temp
//     //sidebarStartup(activeElement);

// }


function fscroll(doc, canvasWindow) {
    const canvasWindow2 = document.querySelector("iframe").contentWindow;
    let lastKnownScrollPosition = 0;
    let ticking = false;
    //console.log("Init..... ScrollEvent",{doc, canvasWindow2})
    canvasWindow2.document.addEventListener("scroll", async (evt) => {
        //console.log(".....",evt.target)
        await handleScrollEventII()
    });
    function fmousemovement() {
        canvasWindow2.document.addEventListener("mouseenter", async (evt) => {
            // console.log(".....mouseenter: ",evt.target)
            //await handleScrollEventII()
        })
        canvasWindow2.document.addEventListener("mouseover", async (evt) => {
            // console.log(".....mouseover: ",evt.target)
            //await handleScrollEventII()
        })
    }


    function doSomething(scrollPos) {
        // Do something with the scroll position
        //console.log("logging scroll position...",{scrollPos});
        const docNodeHoverPos = document.querySelectorAll(`.--style-nc-tool > div`);
        //Array.isArray(docNodeHoverPos) && 
        //console.log("before..........",{docNodeHoverPos})
        docNodeHoverPos.forEach(item => {
            //console.log("handling scroll.....",{item});
            item.style.position = `absolute`;
            item.style.top = `${scrollPos * -1}px`;
        })
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
        handleScrollEvent
    }
}

function fstyle() {
    function font() {
        return {
            size(event, node, unitCat = "px") {
                node.style.fontSize = `${event.target.value}${unitCat}`;
            },
            color(event, node) {
                // console.log({event, node});
                node.style.color = event.target.value;
            },
            lineHeight(event, node) {
                node.style.lineHeight = event.target.value;
            },
            fontFamily(event, node) {
                node.style.fontFamily = event.target.value;
            },
            weight(event, node) {
                node.style.weight = event.target.value;
            },
            align(event, node) {
                node.style.textAlign = event.target.value;
            },
            fontStyle(event, node) {
                node.style.fontStyle = event.target.value;
            },
            decoration(event, node) {
                node.style.textDecoration = event.target.value;
            },
            wordWrap(event, node) {
                node.style.wordWrap = event.target.value;
            }
        }
    }
    function background() {
        return {
            color(event, node) {
                // console.log({event, node});
                node.style.backgroundColor = event.target.value;
                //update the virtaul dom
            }
        }
    }
    return {
        font: font(),
        background: background(),
        border: {
            color(event, node) {
                node.style.borderColor = event.target.value;
            },
            width(event, node) {
                node.style.borderWidth = event.target.value;
            },
            style(event, node) {
                node.style.borderStyle = event.target.value;
            },
            radius(event, node) {
                // console.log({node, v: event.target.value})
                node.style.borderRadius = event.target.value;
            },
        },
        size: {
            width(event, node) {
                node.style.width = event.target.value;
            },
            height(event, node) {
                node.style.height = event.target.value;
            },
            minWidth(event, node) {
                node.style.minWidth = event.target.value;
            },
            minHeight(event, node) {
                node.style.minHeight = event.target.value;
            },
            maxWidth(event, node) {
                node.style.maxWidth = event.target.value;
            },
            maxHeight(event, node) {
                node.style.maxHeight = event.target.value;
            },
        },
        spacing: {
            padding(event, node) {
                node.style.padding = event.target.value;
            },
            margin(event, node) {
                node.style.margin = event.target.value;
            },
        },
        layout: {
            display(event, node) {
                //console.log({node, tar: event.target.value, dis: node.style.display})
                node.style.display = event.target.value;
            }
        },
        position: {
            position(event, node) {
                // console.log({node, tar: event.target.value, dis: node.style.display})
                node.style.position = event.target.value;
            }
        }
    }
}



// //add element
// function proccessElement(doc){
//     async function addComponent(arrTree, parentTagSelector="0a3cc0d1-866a-6dc2-09ac-034856d1bcad"){
//         console.log("inside method: ...",{parentTagSelector, arrTree, doc})
//         const pTagDoc = doc.querySelector(`[data-t-id="${parentTagSelector}"]`);
//         if(!pTagDoc) throw new Error("Tag not found ",pTagDoc);
//         const newlyCreatedComponent = await createComponent(arrTree);
//         console.log({pTagDoc, newlyCreatedComponent})
//         //add and return the newly created node
//         //pTagDoc.appendChild(newlyCreatedComponent);
//         doc.body.appendChild(newlyCreatedComponent);
//         return newlyCreatedComponent;
//     }

//     async function createComponent(data){
//         //iteration
//         console.log("processing the raw data now...",{data: data.node})
//         const htmlDoc = await tranformTreeToDoc(data.node);
//         //add styles also
//         return htmlDoc;//.textContent = "God is love";
//     }

//     function tranformTreeToDoc(data){
//         console.log("recursion:...",data);
//         if(!Array.isArray(data)) return;
//         const indexElement = data[0], cssStyle = [];//data.styles;
//         return (function renderArrTotree(indexEle, arr, styles, j, parent){
//                 //console.log("recursion...",{indexEle, arr, styles, j, parent})
//                 let newEle = genEleDocument(indexEle)//, styles);
//                 if(indexEle.children){
//                     indexEle.children.forEach(e => {
//                         let childEleDetail = arr.find(ele => ele._id == e);
//                         renderArrTotree(childEleDetail, arr, styles, j + 1, newEle);
//                     });
//                 }
//                 if(!parent || parent == undefined || typeof parent == undefined){
//                     return newEle;
//                 }
//                 parent && parent.appendChild(newEle);

//         })(indexElement, data, cssStyle, 0, undefined)
//     }

//     return {
//         addComponent
//     }
// }


function nodeMainManager(canvasWindow, store, cssStyleInstance) {
    let doc = canvasWindow.document;
    async function addComponent(arrTree, parentTagSelector = "0a3cc0d1-866a-6dc2-09ac-034856d1bcad") {
        let mainWrapper;
        const leftPanelWrapper = document.querySelector(`#td-overlay-panel-layer-left`);
        // console.log("inside method: ...",{parentTagSelector, arrTree})
        // console.log({type: typeof parentTagSelector})
        if (typeof parentTagSelector == "string") mainWrapper = doc.querySelector(`[data-t-id="${parentTagSelector}"]`);
        mainWrapper = doc.querySelector("main");

        if (!arrTree) throw new Error("arrTree not found ", arrTree);
        if (!mainWrapper) {
            mainWrapper = document.createElement("main");
            // console.log({mainWrapper});
            doc.body.appendChild(mainWrapper);
            //throw new Error("Tag not found ",mainWrapper);
        }
        const newlyCreatedComponent = await createComponent(arrTree);
        newlyCreatedComponent.draggable = true;
        // console.log({newlyCreatedComponent});
        mainWrapper.appendChild(newlyCreatedComponent);

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
        // console.log("remove this node: ",nodehtml);
    }

    async function createComponent(data) {
        let { node, styles } = data
        let newl = store.node.addData(node);
        //console.log({incomingData: data.node.length, len2: newl.length, data});
        //iteration
        const htmlDoc = await tranformTreeToDoc(data.node);
        //await addStylesheetRule(doc, styles.blocks);
        if (styles) {
            await cssStyleInstance.addCssRule(styles.blocks);
        }
        return htmlDoc;//.textContent = "God is love";
    }

    function tranformTreeToDoc(data) {
        //console.log("recursion:...",data[0]);
        if (!Array.isArray(data)) return;
        const indexElement = data[0], cssStyle = [];//data.styles;
        return (function renderArrTotree(indexEle, arr, styles, j, parent) {
            //console.log("recursion...",{indexEle, arr, styles, j, parent})
            let newEle = genEleDocument(indexEle)//, styles);
            if (indexEle.children) {
                indexEle.children.forEach(e => {
                    let childEleDetail = arr.find(ele => ele._id == e);
                    renderArrTotree(childEleDetail, arr, styles, j + 1, newEle);
                });
            }
            if (!parent || parent == undefined || typeof parent == undefined) {
                return newEle;
            }
            parent && parent.appendChild(newEle);

        })(indexElement, data, cssStyle, 0, undefined)
    }

    //private methid
    function genEleDocument(node, styles, attr = {}) {
        if (!node) return;
        if (node.text == true) {
            const textNode = document.createTextNode(node.v);
            return textNode;
        }
        let newEle = document.createElement(node.tag);
        node.classes && node.classes.forEach(cls => {
            if (!styles) {
                newEle.classList.add(cls);
            } else {
                let styleObj = styles.blocks.find(ele => ele._id == cls);
                //@todo - link the id to get the exact phrase value, then append
                //console.log({styleObj})
                //create and add new style rule to doc
                //@example .[sel]{["styleLess"]}
                newEle.classList.add(styleObj?.data.sel.substring(1) || cls);
            }
        })
        //newEle.classList.add(node.classes[0]);
        let newAttr = Object.assign({}, attr, { id: node._id })
        let attrKeys = Object.keys(newAttr);
        let eleAttrKeys = node.data && Object.keys(node.data);

        //Element attribute/props
        if (eleAttrKeys && Array.isArray(eleAttrKeys)) {
            for (let i = 0; i < eleAttrKeys.length; i++) {
                const akey = eleAttrKeys[i];
                if (akey.tag || akey.type) return;
                newEle.setAttribute(`${akey}`, node.data[akey])
            }
        }
        //data attributes
        for (let i = 0; i < attrKeys.length; i++) {
            const akey = attrKeys[i];
            newEle.setAttribute(`data-t-${akey}`, newAttr[akey])
            newEle.setAttribute(`${akey}`, newAttr[akey])
        }
        return newEle;
    }

    return {
        addComponent,
        removeNode
    }
}


async function veiwSection(outDoc, data, event, utils) {
    const { nodeMainManager } = event;
    //display this at the initate level
    const leftView = renderLeftSideView(data.dataRepo);
    leftView.leftMostpaneView(outDoc, data.dataRepo);

    //init styles
    const tdStyleInstance = fstyle();




    async function renderRightSideView(props) {
        let { node } = props;
        let innerContentWrapper = document.querySelector(`.sidebar__tab-pane .sidebar__tab-heading`);
        let sidebarMainSetting = document.querySelector(`#sidebar__tab-style-props`);
        let contentViewHead = `
        <div class="--styled-kmCKeR td-1t8of0w"><div class="--styled-hLTsLu td-d1ftl3">
            <div class="--styled-iLjIIP td-646mdz"><div><div style="display: grid; justify-content: start; align-items: center; gap: 6px; grid-template: 12px / repeat(2, auto);">
            <div class="--styled-gaVOrX td-1gjlfqs"><div data-automation-id="Icon_Basic_Image"><div class="--styled-eLVQBC td-l6ya6m" style="width: 12px; height: 12px; display: block; transform: translate(0px, 0px);"><svg data-td-icon="ElementImageIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.4 2H3.6C2.72 2 2 2.72 2 3.6V20.4C2 21.28 2.72 22 3.6 22H20.4C21.28 22 22 21.28 22 20.4V3.6C22 2.72 21.28 2 20.4 2ZM9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6ZM4 20L15.168 12L20 20H4Z" fill="currentColor"></path></svg></div></div></div>
            <div class="--styled-lihrRi td-1mrza4x">${props.node.tagName} ${props.node.classList[0]} Styles</div></div></div><div class="--styled-hNYccF td-1xn3udb"><button type="button" role="button" id="popover-36-root" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-36-content" data-focus="false" tabindex="0" style="border-color: transparent; outline: 0px; cursor: default; user-select: none; border-width: 0px; padding: 1px; margin: -1px; text-align: unset; display: flex; height: 100%; font-family: inherit; font-size: inherit; position: relative; align-items: center; justify-content: center; border-radius: 2px; color: rgb(235, 235, 235); background: transparent; border-style: solid; box-sizing: border-box; box-shadow: none; align-self: center;"><div class="--styled-lihrRi td-1mrza4x">
            <div class="--styled-eLVQBC td-l6ya6m" style="width: 12px; height: 12px;"><svg data-td-icon="MoreIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9C3.82843 9 4.5 8.32843 4.5 7.5C4.5 6.67157 3.82843 6 3 6C2.17157 6 1.5 6.67157 1.5 7.5C1.5 8.32843 2.17157 9 3 9Z" fill="currentColor"></path><path d="M8 9C8.82843 9 9.5 8.32843 9.5 7.5C9.5 6.67157 8.82843 6 8 6C7.17157 6 6.5 6.67157 6.5 7.5C6.5 8.32843 7.17157 9 8 9Z" fill="currentColor"></path><path d="M14.5 7.5C14.5 8.32843 13.8284 9 13 9C12.1716 9 11.5 8.32843 11.5 7.5C11.5 6.67157 12.1716 6 13 6C13.8284 6 14.5 6.67157 14.5 7.5Z" fill="currentColor"></path></svg></div></div></button><div data-focus-return="popover-36-root" style="display: none;"></div></div></div><button data-auto-id="create-component-button" class="create__component-button" type="button" role="button" data-focus="false" tabindex="0" style="border-color: rgb(16 24 40);
            background: rgb(30 40 56);outline: 0px;cursor: default;user-select: none;width: 100%;gap: 4px;padding: 0px 8px;font-family: inherit;font-size: 11px;position: relative;display: flex;align-items: center;justify-content: center;height: 24px;border-radius: 2px;color: rgb(235, 235, 235);border-width: 1px;border-style: solid;box-sizing: border-box;align-self: center;"><div class="--styled-lihrRi td-1mrza4x">
            <svg data-icon="SymbolSolid12" aria-hidden="true" focusable="false" width="13" height="12" viewBox="0 0 13 12" class="bem-Svg" style="display: block;"><path d="M1.764 3.211a.25.25 0 010-.457L6.398.694a.25.25 0 01.204 0l4.634 2.06a.25.25 0 010 .457l-4.634 2.06a.25.25 0 01-.204 0L1.764 3.21zm-.376 6.257a.25.25 0 01-.138-.223V4.532a.25.25 0 01.35-.23l4.167 1.823c.09.04.15.13.15.23v4.973a.25.25 0 01-.362.224L1.388 9.468zM11.4 4.303a.25.25 0 01.35.229v4.713a.25.25 0 01-.138.223l-4.167 2.084a.25.25 0 01-.362-.224V6.355c0-.1.06-.19.15-.23L11.4 4.304z" fill="currentColor"></path></svg>
            </div>
            <div class="--styled-lihrRi td-1mrza4x">Create component</div></button></div><div class="--styled-jfatmM td-dlc8u5"></div><div class="--styled-jvWaHC td-11jqwiv"><div><div class="--styled-hsKRQV td-kbcgda"><div style="cursor: default; user-select: none; font-size: 11px; font-family: Inter, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, sans-serif; font-weight: 400; line-height: 12px; letter-spacing: -0.2px; color: rgb(235, 235, 235); justify-self: start;"><span>Style selector</span>
            </div><span class="--styled-eIddUL td-1uwq58d">Inheriting&nbsp;<button tabindex="0" data-automation-id="inheritance-selector" data-prevent-global-event-handlers="true" style="align-self: center; appearance: none; background: transparent; border: none; border-radius: 2px; color: rgb(255, 171, 102); display: inline-flex; line-height: 12px; margin: -2px; padding: 2px; cursor: default;">
            ${node.classList.length} selectors</button></span></div><div data-automation-id="selector-widget" style="background: rgb(43, 43, 43); border-color: rgb(33, 33, 33); border-radius: 2px; border-style: solid; border-width: 1px; display: flex; flex-wrap: wrap; margin-top: 4px; min-height: 32px; position: relative;"><div style="display: flex; flex: 1 1 calc(100% - 30px); flex-wrap: wrap; line-height: 1; max-width: calc(100% - 30px);"><div style="display: flex; flex: 1 1 100%; align-items: stretch; width: 100%; flex-wrap: wrap; padding: 1px;"><div style="margin: 2px; position: relative; max-width: calc(100% - 4px); pointer-events: auto;"><div data-automation-id="style-rule-token-wrapper" style="cursor: inherit; user-select: none; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; min-width: 0px; max-width: 100%; padding-left: 0px; padding-right: 0px; border-radius: 2px; height: 24px; background: rgb(94, 94, 94); position: relative; font-size: 11px; text-shadow: none; box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px; overflow: hidden; color: rgb(255, 255, 255);"><span data-automation-id="style-rule-token-text" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: normal; opacity: 1; font-family: inherit; font-size: inherit; color: inherit; font-weight: inherit; outline: none;"><div style="display: flex; justify-content: center; align-items: center; width: 30px;"><svg data-icon="DeviceLaptop16" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" class="bem-Svg" style="display: block;"><path d="M10 4a2 2 0 114 0 2 2 0 11-4 0z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 7v4H4V4h5c0-.35.06-.687.17-1H4a1 1 0 00-1 1v7H2v1a1 1 0 001 1h10a1 1 0 001-1v-1h-1V6.83c-.313.11-.65.17-1 .17zm-1.732-4H12a1 1 0 011 1v1.732A1.99 1.99 0 0112 6V4h-2c0-.364.097-.706.268-1z" fill="currentColor"></path><path opacity=".6" fill-rule="evenodd" clip-rule="evenodd" d="M9.17 5H5v5h6V6.83A3.008 3.008 0 019.17 5zm1.098 0c.175.304.428.557.732.732V5h-.732z" fill="currentColor"></path></svg>
            </div></span></div></div>
            <div style="margin: 2px; position: relative; max-width: calc(100% - 4px); pointer-events: auto;">
        `;
        await props.node.classList.forEach(ele => {
            contentViewHead += `<div data-automation-id="style-rule-token-wrapper" style="cursor: text; user-select: none; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; min-width: 26px; max-width: 100%; padding-left: 6px; padding-right: 6px; border-radius: 2px; height: 24px; background: rgb(0, 115, 230); position: relative; font-size: 11px; text-shadow: none; box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px; overflow: hidden; color: rgb(255, 255, 255);">
            <span data-automation-id="style-rule-token-text" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: normal; opacity: 1; font-family: inherit; font-size: inherit; color: inherit; font-weight: inherit; outline: none;">${ele}</span>
            </div>
        `;
        })

        contentViewHead += `</div></div><input autocomplete="off" autocorrect="off" spellcheck="false" data-automation-id="css-token-input" value="" style="background: transparent; border: none; color: inherit; flex: 0 0 0px; line-height: 28px; margin-left: 0px; min-width: 0px; outline: none; padding: 0px; width: 0px;"></div><div tabindex="-1"></div></div><div data-automation-id="selector-state-menu-button" data-prevent-global-event-handlers="true" tabindex="0" class="--styled-bHjHRy td-ozm0f3"><div class="--styled-eLVQBC td-l6ya6m" style="width: 18px; height: 18px; border-radius: 2px; color: inherit; max-height: 18px;"><svg data-td-icon="CaretSmallDownIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L7 6.01H9L12 6L8 10L4 6Z" fill="currentColor"></path></svg></div></div></div></div><div class="--styled-fZkKlQ td-1nm1a1b"><a class="target-toggle affecting"><span>2 on this page</span></a></div>
        </div></div>`;
        innerContentWrapper.innerHTML = contentViewHead;

        let listWrapper = [
            {
                id: 1, label: "Layout", type: "layout", data: {},
                list: [
                    {
                        _id: 1, label: "Display", name: "display", type: "dropDown", //type: "radioGroup", 
                        data: { type: "display", name: "display", class: "input", category: "layout", placeholder: "search or set a color" },
                        options: [
                            { id: "dp-23001", icon: "block", label: "block" },
                            { id: "dp-23002", icon: "flex", label: "flex" },
                            { id: "dp-23003", icon: "grid", label: "grid" },
                            { id: "dp-23004", icon: "inline-block", label: "inline-block" },
                            { id: "dp-23005", icon: "inline", label: "inline" },
                            { id: "dp-23006", icon: "none", label: "none" },
                        ]
                    },
                    {
                        _id: 2, label: "Direction", name: "flexDirection", type: "radioGroup",
                        options: [
                            { id: "dp-23001", icon: "block", label: "block" },
                            { id: "dp-23001", icon: "block", label: "block" },
                        ]
                    },
                    {
                        _id: 3, label: "Align", name: "alignItems", type: "radioGroup",
                        options: [
                            { id: "dp-23001", icon: "block", label: "block" },
                            { id: "dp-23001", icon: "block", label: "block" },
                        ]
                    },
                    {
                        _id: 4, label: "Justify", name: "justifyContent", type: "radioGroup",
                        options: [
                            { id: "dp-23001", icon: "block", label: "block" },
                            { id: "dp-23002", icon: "flex", label: "flex" },
                            { id: "dp-23003", icon: "grid", label: "grid" },
                            { id: "dp-23004", icon: "inline-block", label: "in-block" },
                        ]
                    },
                    {
                        _id: 5, label: "Gap", name: "gap", type: "textInput",
                        options: [
                            { id: "dp-23001", icon: "block", label: "block" },
                        ]
                    }
                ]
            },
            {
                id: 2, label: "Size", type: "size", list: [
                    { _id: 1, label: "Width", name: "width", type: "textInput", options: [{ id: "dp-23001", icon: "block", label: "Google font" }, { id: "dp-23001", icon: "block", label: "Web font" }] },
                    { _id: 2, label: "Height", name: "height", type: "textInput", options: [{ id: "dp-23001", icon: "block", label: "Google font" }, { id: "dp-23001", icon: "block", label: "Web font" }] },
                    { _id: 3, label: "Min W", name: "minWidth", type: "textInput", options: [{ id: "dp-23001", icon: "block", label: "Google font" }] },
                    { _id: 4, label: "Min H", name: "maxHeight", type: "textInput", options: [{ id: "dp-23001", icon: "block", label: "Google font" }] },
                    { _id: 5, label: "Max W", name: "maxWidth", type: "textInput", options: [{ id: "dp-23001", icon: "block", label: "Google font" }] },
                    { _id: 6, label: "Max H", name: "maxHeight", type: "textInput", options: [{ id: "dp-23001", icon: "block", label: "Google font" }] },
                ]
            },
            {
                id: 3, label: "Typography", type: "typograghpy", list: [
                    { _id: 1, label: "Font", name: "fontFamily", type: "dropDown", data: { type: "fontFamily", name: "fontFamily", class: "input", category: "font", placeholder: "search or set a fontFamily" }, options: [{ id: "dp-23001", icon: "block", label: "Google font" }, { id: "dp-23001", icon: "block", label: "Web font" }, { id: "dp-23001", icon: "block", label: "Custom font" }] },
                    { _id: 2, label: "Weight", name: "fontWeight", type: "dropDown", data: { type: "weight", name: "weight", class: "input", category: "font", placeholder: "search or set a weight" }, options: [{ id: "dp-23001", icon: "block", label: "400 - Normal" }, { id: "dp-23002", icon: "block", label: "500 - Medium" }, { id: "dp-23003", icon: "block", label: "600 - Semi Bold", v: 600 }, { id: "dp-23004", icon: "block", label: "700 - Bold", v: 700 }] },
                    { _id: 3, label: "Size", name: "fontSize", type: "textInput", data: { type: "size", name: "size", class: "input", category: "font", placeholder: "search or set a size" }, options: [{ id: "dp-23001", icon: "block", label: "400 - Normal" }] },
                    { _id: 4, label: "Height", name: "lineHeight", type: "textInput", data: { type: "lineHeight", name: "lineHeight", class: "input", category: "font", placeholder: "search or set a line height" }, options: [{ id: "dp-23001", icon: "block", label: "400 - Normal" }] },
                    { _id: 5, label: "Color", name: "color", type: "textInputAndColor", data: { type: "color", name: "color", category: "font", class: "input", placeholder: "search or set a color" }, options: [{ id: "dp-23011", icon: "block", label: "color", data: { type: "color", name: "color", category: "font", class: "input", placeholder: "search or set a color" } }] },
                    { _id: 6, label: "Align", name: "textAlign", type: "dropDown", data: { type: "align", name: "align", category: "font", class: "input", placeholder: "search or set a align" }, options: [{ id: "dp-23001", icon: "block", label: "unset" }, { id: "dp-23002", icon: "block", label: "start" }, { id: "dp-23002", icon: "block", label: "end" }, { id: "dp-23003", icon: "block", label: "center" }, { id: "dp-23004", icon: "block", label: "justify" }] },
                    { _id: 7, label: "Style", name: "fontStyle", type: "dropDown", data: { type: "fontStyle", name: "fontStyle", class: "input", category: "font", placeholder: "search or set a color" }, options: [{ id: "dp-23001", icon: "block", label: "normal" }, { id: "dp-23002", icon: "block", label: "italic" }, { id: "dp-23002", icon: "block", label: "oblique" }] },
                    { _id: 8, label: "Decoration", name: "textDecoration", type: "dropDown", data: { type: "decoration", name: "textDecoration", class: "input", category: "font", placeholder: "search or set a decoration" }, options: [{ id: "dp-23001", icon: "block", label: "None" }, { id: "dp-23002", icon: "block", label: "underline" }, { id: "dp-23002", icon: "block", label: "line-through" }, { id: "dp-23003", icon: "block", label: "line-through" }, { id: "dp-23004", icon: "block", label: "overline" }] },

                ]
            },
            {
                id: 4, label: "Position", type: "position", list: [{
                    _id: 20, label: "Position", type: "dropDown",
                    data: { type: "position", name: "position", class: "input", category: "position", placeholder: "search" },
                    options: [
                        { id: "dp-23001", icon: "block", label: "relative" },
                        { id: "dp-23002", icon: "block", label: "absolute" },
                        { id: "dp-23003", icon: "block", label: "fixed" },
                        { id: "dp-23003", icon: "block", label: "static" },
                        { id: "dp-23003", icon: "block", label: "staicky" }
                    ]
                }]
            },
            {
                id: 5, label: "Spacing", type: "spacing", list: [
                    { _id: 20, label: "Padding", name: "borderRadius", type: "textInputList", options: [{ id: "dp-23001", icon: "block", label: "top" }, { id: "dp-23002", icon: "block", label: "right" }, { id: "dp-23003", icon: "block", label: "bottom" }, { id: "dp-23004", icon: "block", label: "left" }] },
                    { _id: 21, label: "Margin", name: "borderStyle", type: "textInputList", options: [{ id: "dp-23001", icon: "block", label: "top" }, { id: "dp-23002", icon: "block", label: "right" }, { id: "dp-23003", icon: "block", label: "bottom" }, { id: "dp-23004", icon: "block", label: "left" }] },]
            },
            {
                id: 6, label: "Backgrounds", name: "background", type: "textInputAndColor", list: [
                    {
                        _id: 20, label: "color", name: "backgroundColor", type: "textInputAndColor", data: { type: "color", name: "backgroundColor", class: "input", category: "background", placeholder: "search or set a color" },
                        options: [{ id: "dp-23001", icon: "block", label: "color", data: { type: "color", name: "backgroundColor", class: "input", category: "background", placeholder: "search or set a color" } }]
                    }]
            }, //, {id: "dp-23001", icon: "block", label: "color", data: {type: "text", name: "backgroundColor", class: "input", placeholder: "auto"}}
            {
                id: 7, label: "Borders", name: "Borders", type: "textInputAndPicker", list: [
                    {
                        _id: 20, label: "radius", name: "borderRadius", type: "textInput",//type: "textInputAndProgress", 
                        data: { type: "radius", name: "radius", class: "input", category: "border", placeholder: "search or set a size" }, options: [{ id: "dp-23001", icon: "block", label: "color" }]
                    },
                    { _id: 21, label: "style", name: "borderStyle", type: "textInput", data: { type: "style", name: "style", class: "input", category: "border", placeholder: "search or set a size" }, options: [{ id: "dp-23001", icon: "block", label: "color" }, { id: "dp-23001", icon: "block", label: "color" }] },
                    { _id: 22, label: "width", name: "borderWidth", type: "textInput", data: { type: "width", name: "width", class: "input", category: "border", placeholder: "search or set a size" }, options: [{ id: "dp-23001", icon: "block", label: "color" }] },
                    { _id: 23, label: "color", name: "borderColor", type: "textInputAndColor", data: { type: "color", name: "color", class: "input", category: "border", placeholder: "search or set a size" }, options: [{ id: "dp-23001", icon: "block", label: "color", data: { type: "color", name: "backgroundColor", class: "input", category: "border", placeholder: "search or set a color" } }] },]
            },
            {
                id: 8, label: "Effects", name: "effect", type: "textInputAndPicker", list: [
                    { _id: 20, label: "opacity", name: "opacity", type: "textInputAndPicker", options: [{ id: "dp-23001", icon: "block", label: "color" }] },
                    { _id: 20, label: "outline", name: "outline", type: "radio", options: [{ id: "dp-23001", icon: "block", label: "none" }, { id: "dp-23001", icon: "block", label: "dash" }] },
                    { _id: 20, label: "Box shadow", name: "boxShadow", type: "textInputAndPicker", options: [{ id: "dp-23001", icon: "block", label: "color" }] },
                    { _id: 20, label: "cursor", name: "cursor", type: "textInputAndPicker", options: [{ id: "dp-23001", icon: "block", label: "default" }] }]
            },
        ];

        let newArrData = Object.assign({}, { styleViewArr: listWrapper, selectedDoc: props });//...props});

        let divResult = await renderRightList(newArrData);

        //sidebarMainSetting.appendChild(divResult);


        sidebarMainSetting.replaceChildren(divResult);
        //temp
        //sidebarStartup(props.node);
        return contentViewHead;
    }

    async function renderRightList(dataArr) {
        let { styleViewArr, selectedDoc } = dataArr;
        const newDivMain = document.createElement("div");
        const divWrapper = document.createElement("div");
        newDivMain.id = "sidebar__tab-style-props";
        newDivMain.classList.add("sidebar__tab-style-props-2");

        //console.log({styleViewArr, selectedDoc});
        for (let index = 0; index < styleViewArr.length; index++) {
            const element = styleViewArr[index];

            let newContentDiv = await renderRightListItem2(element, selectedDoc);
            divWrapper.appendChild(newContentDiv);

        }
        newDivMain.replaceChildren(divWrapper);
        return newDivMain;
    }

    function renderRightListItem2(data, selectedDoc) {
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
                    <div class="accord-icon"></div>
                    </div>
                <div class="">${data.label}</div>
        </div>`
        //newDivBody.textContent = `body - ${data.label}`


        divWrapper.appendChild(newDivHead);
        divWrapper.appendChild(newDivBody);

        //add event
        newDivHead.addEventListener("click", async () => {
            // console.log("toggle head")
            //newDivBody.style.display = "block";
            __bodyContent = await insertRightSideBodyContent({ itemData: data, selectedDoc });
            newDivBody.replaceChildren(__bodyContent);

            // const item = document.querySelector(`[data-id=${e.target.id}]`);
            // item.toggleAttribute("hidden");
            newDivBody.toggleAttribute("hidden");
            // console.log({newDivBody});
        })
        return divWrapper

    }

    async function insertRightSideBodyContent(data) {
        let { itemData, selectedDoc } = data;
        // console.log({itemData});
        const evtInstance = tdstyleAction();
        const _newDivMain = document.createElement("div");
        const _newDivWrapper = document.createElement("div");
        _newDivWrapper.classList.add("--pick-body-wrappern");
        for (let index = 0; index < itemData.list.length; index++) {
            const element = itemData.list[index];
            // console.log({element});
            const _newDivList = document.createElement("div");
            _newDivList.classList.add("--pick-body-list");
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
            // console.log({type: element.type, element});

            const _newDivMainItem = document.createElement("div");

            _newDivMainItem.classList.add(element.type ? element.type : "no-type")

            _newDivMainItem.id = `layout-${element.label}-options`;
            _newDivMainItem.setAttribute("aria-checked", false);
            _newDivMainItem.setAttribute("cursor", "default");
            // console.log({type: element.type, element, itemTYpe: element.type, element});
            switch (element.type) {
                case "textInput":
                    // console.log("textInput....");
                    await evtInstance.handleOnChange(_newDivMainItem, element, selectedDoc);
                    break;
                case "textInputAndColor":
                    //do somthing
                    // console.log("textInputAndColor.........");
                    await evtInstance.handleColor(_newDivMainItem, element, selectedDoc);
                    break;
                case "dropDown":
                    //do somthing
                    // console.log("dropDown.........");
                    await evtInstance.handleSelectOption(_newDivMainItem, element, selectedDoc);
                    break;
                default:
                    // console.log("default..........");
                    _newDivMainItem.classList.add("--pick-body-option-svg");
                    _newDivMainItem.innerHTML = generateSvg("display-block");
                    await evtInstance.handleOnClick(_newDivMainItem, element, selectedDoc);
                    break;
            }

            _devListItemWrapper.appendChild(_newDivMainItem);

            // await element.options.map( async (item) => {
            //     const _newDivMainItem = document.createElement("div");

            //     _newDivMainItem.classList.add(item.type? item.type : "no-type")

            //     _newDivMainItem.id = `layout-${item.label}-options`;
            //     _newDivMainItem.setAttribute("aria-checked", false);
            //     _newDivMainItem.setAttribute("cursor", "default");
            //     console.log({type: element.type, element, itemTYpe: item.type, item});
            //     switch (element.type) {
            //         case "textInput":
            //             console.log("textInput....");
            //             _newDivMainItem.innerHTML = `<div><div class="kit-unit-box kit-text-input"><input class="input" type="text" name="${item.label}" /><span class="unit">px</span></div>`;
            //             await evtInstance.handleOnChange(_newDivMainItem, item, selectedDoc);
            //             break;
            //         case "textInputAndColor":
            //             //do somthing
            //             console.log("textInputAndColor.........");
            //             await evtInstance.handleColor(_newDivMainItem, item, selectedDoc);
            //             break;
            //         case "dropDown":
            //             //do somthing
            //             console.log("dropDown.........");
            //             await evtInstance.handleSelectOption(_newDivMainItem, item, selectedDoc);
            //             break;
            //         default:
            //             console.log("default..........");
            //             _newDivMainItem.classList.add("--pick-body-option-svg");
            //             _newDivMainItem.innerHTML = generateSvg("display-block");
            //             await evtInstance.handleOnClick(_newDivMainItem, item, selectedDoc);
            //             break;
            //     }

            //     _devListItemWrapper.appendChild(_newDivMainItem);


            // });

            _newDivList.appendChild(_devListItemWrapper);
            _newDivWrapper.appendChild(_newDivList);

        }



        _newDivMain.appendChild(_newDivWrapper);
        return _newDivMain;
    }

    // function renderRightListItem(data){
    //     const itemWrapper = `<div data-automation-id="Size" style="display: flex; flex-direction: column; flex: 0 1 auto;">
    //     <div data-automation-id="Header" class="--pick-YUVtW" tabindex="0" style="outline: 0px; cursor: default; user-select: none; position: relative; background: rgb(43, 43, 43); border-bottom: 1px solid rgb(33, 33, 33); height: 28px; color: rgb(235, 235, 235); padding-left: 4px; padding-top: 4px; padding-bottom: 4px; box-sizing: border-box; overflow: visible; display: flex; align-items: center; flex: 0 1 auto;"><div class="--pick-cLGsJB --styled-eAJYJG wf-nqdtit">

    //     return itemWrapper;
    // }

    function tdstyleAction() {
        //console.log({})


        async function handleOnChange2(ele, item, selDoc) {
            // console.log({ele, item, selDoc})
            //let {node, style, docArr} = selectedDoc;
            if (!item) {
                return;
            }
            await ele.addEventListener("change", (e) => {
                e.preventDefault();
                // console.log(item,"--- onChange -----",ele);
                tdStyleInstance.background.color(e, selDoc.node);

            }, false)
        }
        async function handleOnClick(ele, item) {
            if (!item) {
                return;
            }
            //console.log(item,"--- onClick -----",ele);
            await ele.addEventListener("click", (e) => {
                e.preventDefault();
                // console.log(item,"--- onChange -----",ele);

            })
        }
        // async function handleColor(parentNode, item, selectedDocument){

        // }


        async function handleOnChange(parentNode, item, selectedDocument) {
            // console.log("handleColor..................");
            // console.log({parentNode, item, selectedDocument});
            let textInputContainer = document.createElement("div");
            let textInputWrapper = document.createElement("div");
            textInputWrapper.classList.add("kit-unit-box", "kit-text-input");
            let inputWrapper = document.createElement("input");
            let inputDeciText = document.createElement("span");
            inputWrapper.classList.add("input"), inputWrapper.type = "text", inputWrapper.placeholder = item.data.placeholder, inputWrapper.name = item.data.name;
            inputDeciText.classList.add("unit"), inputDeciText.textContent = "px";



            textInputWrapper.appendChild(inputWrapper);
            textInputWrapper.appendChild(inputDeciText);

            textInputContainer.appendChild(textInputWrapper);

            parentNode.appendChild(textInputContainer);

            inputWrapper.addEventListener("input", (e) => { tdStyleInstance[item.data.category][item.data.name](e, selectedDocument.node) }, false);//font.fontSize(e, node)}, false);
        }

        async function handleColor(parentNode, item, selectedDocument) {
            // console.log("handleColor..................");
            // console.log({parentNode, item, selectedDocument});
            let colorPickerWrapper = document.createElement("div");
            colorPickerWrapper.classList.add("colorPickerWrapper", "kit-text-input");
            let colorPicker = document.createElement("input");
            let colorPickerText = document.createElement("input");
            colorPicker.classList.add("input", "input-color"), colorPicker.type = "color";
            colorPickerText.classList.add("input", "input-colorText"), colorPickerText.type = "text", colorPickerText.placeholder = item.data.placeholder;


            colorPickerWrapper.appendChild(colorPicker);
            colorPickerWrapper.appendChild(colorPickerText);

            parentNode.appendChild(colorPickerWrapper);

            colorPicker.addEventListener("input", (e) => { tdStyleInstance[item.data.category].color(e, selectedDocument.node) }, false);
            colorPickerText.addEventListener("input", (e) => { tdStyleInstance[item.data.category][item.data.type](e, selectedDocument.node) }, false);//font.fontSize(e, node)}, false);
        }

        function handleSelectOption(parentNode, item, selectedDocument) {
            // console.log("handleColor..................");
            // console.log({parentNode, item, selectedDocument});
            let selectOptionWrapper = document.createElement("div");
            selectOptionWrapper.classList.add("inputSelecteOption", "kit-text-input");

            let selectOption = document.createElement("select");
            let optionWrapper = document.createElement("option");

            selectOption.setAttribute("name", `${item.label.toLowerCase()}`), selectOption.setAttribute("id", "12");
            optionWrapper.setAttribute("value", ""), optionWrapper.setAttribute("class", "option");

            optionWrapper.textContent = `Select ${item.label}`;
            selectOption.appendChild(optionWrapper);

            item.options && item.options.map(item => {

                let _optionWrapper = document.createElement("option");
                _optionWrapper.setAttribute("value", item.label), _optionWrapper.setAttribute("class", "option");
                _optionWrapper.textContent = `${item.label}`;

                selectOption.appendChild(_optionWrapper);

            });


            // let colorPicker  = document.createElement("input");
            // let colorPickerText  = document.createElement("input");
            // colorPicker.classList.add("input", "input-color"), colorPicker.type = "color";
            // colorPickerText.classList.add("input", "input-colorText"), colorPickerText.type = "text", colorPickerText.placeholder = item.data.placeholder;



            //selectOptionWrapper.appendChild(colorPicker);
            selectOptionWrapper.appendChild(selectOption);

            parentNode.appendChild(selectOptionWrapper);

            // console.log({cat: item.data.category, type: item.data.type});
            //selectOption.addEventListener("input", (e) => {tdStyleInstance[item.data.category].color(e, selectedDocument.node)}, false);
            selectOption.addEventListener("input", (e) => { tdStyleInstance[item.data.category][item.data.type](e, selectedDocument.node) }, false);//font.fontSize(e, node)}, false);
        }

        async function handleInputText(parentNode, item, selectedDocument) {
            // console.log("handleColor..................");
            // console.log({parentNode, item, selectedDocument});
            let inputTextWrapper = document.createElement("div");
            inputTextWrapper.classList.add("inputTextWrapper", "kit-text-input");
            //let colorPicker  = document.createElement("input");
            let _inputText = document.createElement("input");
            //colorPicker.classList.add("input", "input-color"), colorPicker.type = "color";
            _inputText.classList.add("input", "input-text"), colorPickerText.type = item.data.inputType || "text", colorPickerText.placeholder = item.data.placeholder;


            //colorPickerWrapper.appendChild(colorPicker);
            inputTextWrapper.appendChild(_inputText);

            //colorPicker.addEventListener("input", (e) => {tdStyleInstance[item.data.category].color(e, selectedDocument.node)}, false);
            _inputText.addEventListener("input", (e) => { tdStyleInstance[item.data.category][item.data.type](e, selectedDocument.node) }, false);//font.fontSize(e, node)}, false);
        }
        return {
            handleOnChange,
            handleColor,
            handleSelectOption,
            handleOnClick
        }
    }
    function renderLeftSideView(props) {
        const mainWrapper = document.getElementById("td-main-sidebar-left");
        const mainOverlayWrapper = document.getElementById("td-overlay-panel-layer-left");

        const leftOverlayInstance = leftOverlayView();
        async function leftMostpaneView(doc, dataRepo) {
            let { content } = dataRepo;
            let newData = [{ id: "001", type: "ADD_NODE", slug: "addElement", data: { class: "nc-add-nodenc-navigator", icon: "addElement" } },
            { id: "002", type: "ADD_LAYOUT", slug: "component", data: { class: "nc-add-layout", icon: "layout" } },
            { id: "003", type: "SHOW_NAVIGATOR", slug: "component", data: { class: "nc-navigator", icon: "navigator" } },
            { id: "004", type: "ADD_PAGES", slug: "addPage", data: { class: "pages", icon: "forms" } },
            { id: "005", type: "ADD_MEDIA", slug: "addMedia", data: { class: "media", icon: "media-plus" } },
            { id: "006", type: "ADD_SETTINGS", slug: "settingTd", data: { class: "settings", icon: "setting2" } }]
            let _newContainer = document.createElement("div");
            _newContainer.classList.add("sidebar-container", "sidebar-left-container");
            newData.map(item => {
                //await content.component.list.map(item => {
                let _newDivTemp = document.createElement("div");
                _newDivTemp.id = `td-${item.id}`;
                _newDivTemp.classList.add("nc-btn-overlay", item.data.class);
                _newDivTemp.innerHTML = generateSvg(item.data.icon)
                _newDivTemp.onclick = (e) => {
                    //console.log("click... please add active class...",{item, tar: e.target});
                    switchOnOffSideBar(true, e.target);
                    activePaneView(item, dataRepo.content[item.slug])
                };


                _newContainer.appendChild(_newDivTemp);
            });




            mainWrapper.appendChild(_newContainer);
            //mainWrapper.innerHTML = _newContainer;

            //nc-tools
            await compileAndAddEvent(SITE_CONTENT.addElement, function (e) {
                elementHandler(e, activeSection);

                // //open active pane
                // let btnClose = document.querySelector(".nc-button");
                // let menuLeftIconOpen = document.querySelector(".nc-add-node");

                // btnClose.addEventListener("click", (e) => {
                //     switchOnOffSideBar(false, e.target);
                // });

                // menuLeftIconOpen.addEventListener("click", (e) => {
                //     switchOnOffSideBar(true, e.target);
                // });
            });

        }

        async function activePaneView(props, data) {
            let leftOverLay;
            switch (props.type) {
                case "ADD_NODE":
                    // leftOverLay = await leftOverlayInstance.viewLeftOverlayAddNode();
                    leftOverLay = await leftOverlayInstance.viewLeftOverlayAddLayout(data);
                    break;
                case "ADD_COMPONENT":
                    leftOverLay = await leftOverlayInstance.viewLeftOverlayAddComponent();
                    break;
                case "ADD_LAYOUT":
                    leftOverLay = await leftOverlayInstance.viewLeftOverlayAddLayout(data);
                    break;
                case "ADD_FORMS":
                    leftOverLay = await leftOverlayInstance.viewLeftOverlayAddLayout(data);
                    break;
                case "SHOW_NAVIGATOR":
                    leftOverLay = await leftOverlayInstance.viewLeftOverlayAddLayout(data);//viewLeftOverlayNavigator();
                    break;
                case "ADD_PAGES":
                    leftOverLay = await leftOverlayInstance.viewLeftOverlayAddLayout(data);
                    break;
                case "ADD_MEDIA":
                    leftOverLay = await leftOverlayInstance.viewLeftOverlayAddLayout(data);
                    break;
                default:
                    leftOverLay = await leftOverlayInstance.viewLeftOverlayAddLayout(data);
                    break;
            }

            mainOverlayWrapper.replaceChildren(leftOverLay);

            await utils.processAccordion({ tabSel: ".node-element-head", listTabSel: ".node-pane-body" }, { item: props.data, dataRepo: data });

            // await processAccordion({tabSel: ".node-element-head", listTabSel: ".node-pane-body"}, {item: props.data, dataRepo: dataAccess});
            //mainOverlayWrapper.innerHTML = leftOverLay;
            leftOverLay = null;
        }

        return {
            leftMostpaneView
        }
    }

    function renderMinisetting(eleSelected = { data: {}, node: HTMLDivElement }) {
        const { data, node } = eleSelected;
        let mainContent;
        // let _divMain = document.createElement("div");
        let _divMain2 = document.querySelector("#td-mini-setting");
        _divMain2.classList.add("mini-settings", "image-settings", "image-mini-settings", "react-draggable");
        let _divHeadContainer = document.createElement("div"), _divHeadWrapper = document.createElement("div"), _divHeadIconLabel = document.createElement("div"), _divHeadTextSection = document.createElement("div"), _divHeadCloseBtn = document.createElement("div");
        _divHeadContainer.setAttribute("data-drag-handle", "true"), _divHeadContainer.style = `display: flex; align-items: center; padding: 8px; border-bottom: 1px solid rgb(10 18 32); cursor: move;`;
        _divHeadWrapper.style = `style="height: 16px; width: 16px; display: flex; align-items: center; justify-content: center;`;
        _divHeadTextSection.style = `color: inherit; padding-left: 4px; padding-right: 8px; font-weight: 700; flex: 1 1 0%; font-size: 12px; font-family: Inter, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, sans-serif; line-height: 16px;`;
        _divHeadCloseBtn.classList.add("close-mini-settings-button");

        let _divLabelWrapper = document.createElement("div");
        _divLabelWrapper.classList.add("--styled-eLVQBC", "td-l6ya6m")
        _divLabelWrapper.innHTML = `${generateSvg("setting")}`;

        _divHeadTextSection.textContent = `Image Settings`;

        _divHeadContainer.appendChild(_divLabelWrapper);
        _divHeadContainer.appendChild(_divHeadTextSection);
        _divHeadContainer.appendChild(_divHeadCloseBtn);



        // console.log({eleSelected});
        switch (node.tagName) {
            case "div":
                mainContent = ``;
                break;

            default:
                break;
        }

        const innerNode2 = `<div data-drag-handle="true" style="display: flex; align-items: center; padding: 8px; border-bottom: 1px solid rgb(10 18 32); cursor: move;">
                <div style="height: 16px; width: 16px; display: flex; align-items: center; justify-content: center;">
                        <div class="--styled-eLVQBC td-l6ya6m" style="width: 14px; height: 14px;">
                            ${generateSvg("setting")}
                            </div></div>
                            <div style="color: inherit; padding-left: 4px; padding-right: 8px; font-weight: 700; flex: 1 1 0%; font-size: 12px; font-family: Inter, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, sans-serif; line-height: 16px;">Image Settings</div>
                            <div data-auto-id="close-mini-settings-button" style="cursor: default; height: 16px; width: 16px; display: flex; align-items: center; justify-content: center;">
                            <svg data-icon="CrossLarge" aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 13 13" class="bem-Svg" style="display: block;"><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" d="M2 11l9-9M2 2l9 9"></path>
                            </svg></div></div>
                            <div class="mini-settings-content">
                                <div class="image-settings image-mini-settings replace">
                                    <div class="kit-panel">
                                        <button type="button" role="button" aria-label="Choose asset button" data-focus="false" tabindex="0" style="border-color: rgb(10 18 32); outline: 0px; cursor: default; user-select: none; margin-bottom: 8px; padding: 0px 12px; font-family: inherit; font-size: 12px; position: relative; display: flex; align-items: center; justify-content: center; height: 32px; border-radius: 2px; color: rgb(235, 235, 235); background: rgb(28 41 57); border-width: 1px; border-style: solid; box-sizing: border-box; align-self: center; width: 100%;"><div class="--styled-lihrRi td-1mrza4x">
                                        <svg data-icon="AssetManager" aria-hidden="true" focusable="false" width="21" height="16" viewBox="0 0 21 16" class="bem-Svg" style="display: block; margin-right: 8px;"><path fill="currentColor" d="M19 6H9c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm-8 4.4A1.403 1.403 0 019.6 9 1.403 1.403 0 0111 7.6 1.403 1.403 0 0112.4 9a1.403 1.403 0 01-1.4 1.4zm7 2.6h-6l4.2-4.2 1.8 1.8V13z"></path><path fill="currentColor" d="M6 6.8C6 5.256 7.256 4 8.8 4h4.682l-.767-2.34c-.17-.523-.74-.81-1.262-.64L1.95 4.137c-.522.172-.81.74-.638 1.262l2.18 6.65c.172.523.74.81 1.263.64L6 12.28V6.8z"></path>
                                        </svg>
                                        </div><div class="--styled-lihrRi td-1mrza4x">Choose Image</div></button><div><div class="image-metadata"><div class="file-name one-line-text"></div><div class="dimensions"><i class="lead-icon sprite-main"></i><span class="width">0</span><span class="px">px</span><span class="by">x</span><span class="height">0</span><span class="px">px</span></div><div class="size"><i class="lead-icon sprite-main"></i><span>Unknown</span></div><label class="kit-checkbox hi-dpi">
                                        <a class="kit-checkbox-input kit-input-control"><i class="sprite-main"></i></a>Image is HiDPI</label></div></div><div class="kit-divider"></div><div class="column-2"><div class="kit-field width"><div class="kit-label"><div class="link"><i></i><span>Width<span class="colon"></span></span></div></div><div class="bem-UnitBox ">
                                        <div class="kit-unit-box kit-text-input"><input type="text" class="input" tabindex="1" placeholder="Auto" autocomplete="off" value="auto">
                                        <span class="unit">px</span><div class="right-control ticks"><div class="tick sprite-mid up"><i></i></div><span class="sep"></span>
                                        <div class="tick sprite-mid down"><i></i></div></div></div></div></div><div class="kit-field height">
                                        <div class="kit-label"><div class="link"><i></i><span>Height<span class="colon"></span></span></div></div>
                                            <div class="bem-UnitBox "><div class="kit-unit-box kit-text-input"><input type="text" class="input" tabindex="1" placeholder="Auto" autocomplete="off" value="auto"><span class="unit">px</span><div class="right-control ticks"><div class="tick sprite-mid up"><i></i></div><span class="sep"></span><div class="tick sprite-mid down"><i></i></div></div></div></div></div></div><div class="kit-divider"></div><div data-auto-id="image-settings-alt-section"><div style="display: grid; grid-template-columns: 44px auto; gap: 8px; align-items: center; margin-bottom: 4px;"><div style="color: rgb(235, 235, 235); font-size: 11px; font-family: Inter, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, sans-serif; line-height: 16px; font-weight: 400;">Alt Text</div>
                                            <div id="image-mini-settings-select-alt" data-prevent-global-event-handlers="true" origin="[object Object]" aria-expanded="false" aria-haspopup="listbox" data-focus="false" tabindex="0" style="border-color: rgb(10 18 32); outline: 0px; cursor: default; user-select: none; display: grid; grid-template-columns: auto 16px; grid-auto-flow: column; justify-content: unset; width: 100%; flex-grow: unset; padding: 0px 4px 0px 8px; box-sizing: border-box; font-family: inherit; font-size: inherit; position: relative; align-items: center; height: 24px; border-radius: 2px; color: rgb(235, 235, 235); background: rgb(28 41 57); border-width: 1px; border-style: solid; align-self: center;"><div class="--styled-lihrRi td-1mrza4x" style="justify-self: start; width: 100%;">Use alt text from asset
                                        </div>
                                        <svg data-icon="CaretBothSmall" aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 12 12" class="bem-Svg" style="display: block; justify-self: end;"><path d="M3 7l2.25.007h1.5L9 7l-3 3-3-3zm0-2l2.25-.007h1.5L9 5 6 2 3 5z" fill="currentColor"></path>
                                        </svg></div></div></div>
                                        <div class="alt-binding"></div>
                                        <div style="display: grid; grid-template-columns: 44px auto; gap: 8px; align-items: center; margin-bottom: 4px;"><div style="color: rgb(235, 235, 235); font-size: 11px; font-family: Inter, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, sans-serif; line-height: 16px; font-weight: 400;">Load</div>
                                        <div id="image-mini-settings-select-loading" data-prevent-global-event-handlers="true" origin="[object Object]" aria-expanded="false" aria-haspopup="listbox" data-focus="false" tabindex="0" style="border-color: rgb(10 18 32); outline: 0px; cursor: default; user-select: none; display: grid; grid-template-columns: auto 16px; grid-auto-flow: column; justify-content: unset; width: 100%; flex-grow: unset; padding: 0px 4px 0px 8px; box-sizing: border-box; font-family: inherit; font-size: inherit; position: relative; align-items: center; height: 24px; border-radius: 2px; color: rgb(235, 235, 235); background: rgb(28 41 57); border-width: 1px; border-style: solid; align-self: center;"><div class="--styled-lihrRi td-1mrza4x" style="justify-self: start; width: 100%;">Lazy: loads on scroll</div>
                                        <svg data-icon="CaretBothSmall" aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 12 12" class="bem-Svg" style="display: block; justify-self: end;"><path d="M3 7l2.25.007h1.5L9 7l-3 3-3-3zm0-2l2.25-.007h1.5L9 5 6 2 3 5z" fill="currentColor"></path></svg></div></div></div></div></div><div class="--styled-hKRBXr td-1a37olm">
                                        <div data-auto-id="show-all-settings-button" style="height: 20px; display: flex; align-items: center; justify-content: center; border-radius: 2px; font-weight: 400; background-color: rgb(10 18 32);"><div style="font-size: 11px; line-height: 16px; font-weight: 400; cursor: default; color: rgb(235, 235, 235); font-family: Inter, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, sans-serif;">Show All Settings</div><div style="height: 16px; width: 16px; display: flex; align-items: center; justify-content: center; margin-left: 4px;">
                                        <svg data-icon="ArrowStrokeRightSmallThin" aria-hidden="true" focusable="false" width="11" height="11" viewBox="0 0 11 11" class="bem-Svg" style="display: block;"><path fill="currentColor" d="M1 6h6.277L4.645 8.648l.71.704L9.185 5.5l-3.83-3.852-.71.704L7.277 5H1z"></path></svg>
                                    </div>
                            </div>
                        </div>`;
        // const eleTemp = outDoc.querySelector(`[data-auto-id="td-mini-setting"]`);
        //_divMain.setAttribute("data-auto-id", "td-mini-setting");
        //_divMain.innerHTML = innerNode2;
        _divMain2.innerHTML = innerNode2;
        //eleTemp.innerHTML = innerNode;

        //return _divMain;//innerNode;
    }

    function renderLeftSideContent(status, activeElement, selector = "sidebar-right-setting-link") {
        const { node } = activeElement;
        let tab = document.querySelector(`[data-auto-id="${selector}"]`);
        let innerContentWrapper = document.querySelector(`.sidebar__tab-pane .sidebar__tab-heading`);
        let innerContent = document.querySelector(`#sidebar__tab-style-props`);

        const getStyleBg = status && "#101828";
        tab.classList.add = "active";
        tab.style.background = getStyleBg;

        //set new value
        // const newContainer = document.createElement("div");
        // newContainer.setAttribute("style", "position: relative; overflow: hidden;height: 100%;");
        // newContainer.classList.add = selector;
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
                name: "Typograghy", data: {
                    "font-size": { val: 15, label: "size" },
                    "font-family": { val: "Arial, sans-serif", label: "font" },
                    "font-weight": { val: 400, label: "Weight" },
                    "font-style": { val: "italicize", label: "style" },
                    "align-items": { val: "center", label: "align-items" },
                    "line-height": { val: 100, label: "height" }
                }
            },
            { name: "Size", data: { "width": { val: 15, label: "width" }, "height": 100, label: "height" }, "max-height": { val: 400, label: "Max-H" }, "max-width": { val: 400, label: "Max-W" } },
            { name: "Backgrounds", data: { "background-color": { val: "#fff000", label: "color" }, "background-image": { val: "test.png", label: "image" } } },
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
        const htmlView = `
            <div style="position: relative; overflow: hidden; height: 100%;">
                <div style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);">
                    ${outView}
                </div>
                <div></div>
            </div>
        `;

        //newContainer.innerHTML = outView;

        const out = innerContent;
        const elementStyle = activeElement.node.style;

        // We loop through all styles (for…of doesn't work with CSStyleDeclaration)
        // let outNow = ``;
        // //console.log({lenKey: Object.keys(elementStyle)})
        // outNow += `<div>`;
        // for (const prop in elementStyle) {
        //     if (Object.hasOwn(elementStyle, prop)) {
        //         out.textContent += `${
        //             elementStyle[prop]
        //         } = '${elementStyle.getPropertyValue(elementStyle[prop])}'\n`;
        //         outNow += `${elementStyle[prop]} = '${elementStyle.getPropertyValue(elementStyle[prop])}'\n`;
        //        // console.log(elementStyle[prop],": " ,elementStyle.getPropertyValue(elementStyle[prop]));
        //     }
        // }
        // outNow += `</div>`;
        //console.log({outNow});
        innerContentWrapper.innerHTML = outViewHeading;
        //innerContent.innerHTML = outNow;//htmlView

        //temp
        //sidebarStartup(activeElement);

    }

    // function sidebarStartup(activeElement) {
    //     const {node} = activeElement;
    //     const tdStyle = fstyle();
    //     let colorPicker;
    //     const defaultColor = "#0000ff";
    //     console.log({side_activeNode: activeElement, bg: node.backgroundColor});
    //     //selector
    //     colorPicker = document.querySelector("#color-picker");
    //     bgcolorPicker = document.querySelector("#bgcolor-picker");
    //     fontSizePicker = document.querySelector("#style__font-size");

    //     //handlers
    //     colorPicker.value = defaultColor;
    //     colorPicker.addEventListener("input", (e) => {tdStyle.font.fontColor(e, node)}, false);
    //     //colorPicker.addEventListener("change", updateAll, false);
    //     colorPicker.select();

    //     bgcolorPicker.value = defaultColor;
    //     bgcolorPicker.addEventListener("input", (e) => {tdStyle.background.color(e, node)}, false);
    //     fontSizePicker.addEventListener("input", (e) => {tdStyle.font.fontSize(e, node)}, false);
    //     bgcolorPicker.select();

    // }

    return {
        renderRightSideView,
        renderLeftSideView,
        renderLeftSideContent,
        renderMinisetting
    }

}



function editorReactMount(doc) {

    const divContainer = document.getElementById("editor-react-mount");
    const newDiv = document.createElement("div");
    const newDivNotify = document.createElement("div");
    const newDivToastify = document.createElement("div");
    newDivNotify.classList.add("td-tarq3n");
    newDivToastify.classList.add("Toastify");
    newDiv.appendChild(newDivNotify);
    newDiv.appendChild(newDivToastify);
    divContainer.appendChild(newDiv);
    // divContainer.appendChild(newDivNotify);


    // doc.addEventListener("mouseup", (e) => {
    //     console.log({clickType: e.button, tar: e.target, })
    //     if(e.button == 2){
    //         handleRightClick(e.target);
    //     }
    //     return;
    // switch (e.button) {
    //   case 0:
    //     //log.textContent = "Left button clicked.";
    //     break;
    //   case 1:
    //     log.textContent = "Middle button clicked.";
    //     break;
    //   case 2:
    //     log.textContent = "Right button clicked.";
    //     handleRightClick(target)
    //     break;
    //   default:
    //     log.textContent = `Unknown button code: ${e.button}`;
    // }
    //});

    function handleRightClick(target) {
        // console.log("right click on ",target)

    }

    function handleDoubleClick(target, action) {

        // console.log("dobulbe click on ",target, action)

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
        handleDoubleClick
    }


}


function tdDraw(doc) {
    // When true, moving the mouse draws on the canvas
    let isDrawing = false;
    let x = 0;
    let y = 0;

    const myPics = doc.getElementById("myPics");
    const context = myPics.getContext("2d");

    // event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

    // Add the event listeners for mousedown, mousemove, and mouseup
    myPics.addEventListener("mousedown", (e) => {
        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
    });

    myPics.addEventListener("mousemove", (e) => {
        if (isDrawing) {
            drawLine(context, x, y, e.offsetX, e.offsetY);
            x = e.offsetX;
            y = e.offsetY;
        }
    });

    window.addEventListener("mouseup", (e) => {
        if (isDrawing) {
            drawLine(context, x, y, e.offsetX, e.offsetY);
            x = 0;
            y = 0;
            isDrawing = false;
        }
    });

    function drawLine(context, x1, y1, x2, y2) {
        context.beginPath();
        context.strokeStyle = "black";
        context.lineWidth = 1;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();
    }
}
function leftOverlayView() {
    function handleHeadPane(props) {
        const output = `<div>
                        <span>${props.label} </span>
                    </div>
                    <div>
                        <form class="">
                            <input type="text" name="search" placeholder="Search" />
                        </form>
                    </div>
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
        tempDiv = ``;
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
        tempDiv = ``;
        tempDiv += `
            <div>`;
        data.map((ele, i) => {
            tempDiv += ` 
                <div data-auto-id=layout-${i}" tabIndex=${i}>
                    <div class="node-element-head">
                        <div>
                            <span>${ele.label}</span>
                        </div>
                        <div>
                            ${generateSvg("arrow-up")}
                        </div>
                    </div>
                    <div class="node-pane-body" id="add-pane-${ele.type}"  role="tabpanel" style="display:grid"></div>
                </div>`;
        });
        tempDiv += `</div>`;
        return tempDiv;
    }

    function displaySetting() {
        tempDiv = `<div class="tab-interface">
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
        let listNew = await displayNodeEle(SITE_CONTENT.addElement.list);
        bodyWrapperPane.innerHTML = listNew;
        bodyPane.appendChild(bodyWrapperPane);
        paneWrapperOverlay.appendChild(headPane);
        paneWrapperOverlay.appendChild(bodyPane);
        //mainOverlay.innerHTML = paneWrapperOverlay;
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
        // console.log({data})
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

    // function viewLeftOverlayNavigator(){

    // }



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
        bodyPane.appendChild(bodyWrapperPane)
        let listNew = await displaySetting(SITE_CONTENT.component.list);
        bodyWrapperPane.innerHTML = listNew;

        paneWrapperOverlay.appendChild(headPane);
        paneWrapperOverlay.appendChild(bodyPane);
        mainOverlay.appendChild(paneWrapperOverlay);
        return mainOverlay;

    }

    return {
        viewLeftOverlayAddNode,
        viewLeftOverlayAddLayout,
        viewLeftOverlaySetting
    }
}

function tdUtils(doc, nodeMainManager) {

    function getNodeIfFound(virtualTag) {
        //console.log({all: doc.all})
        for (const child of doc.all) {//doc.all including head tags
            if (child.getAttribute("data-t-id") == virtualTag._id) {
                // console.log("Got a match... exit: ",child)
                return child;
            }
        }

        return doc.body;// or null
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
                if (!callback) {
                    changeOnClick(e, dataRepo.list[i], listTabSel);
                } else {
                    callback();
                }


            }
            );

        });

        // Enable arrow navigation between tabs in the tab list
        let tabFocus = 0;

        tabList.addEventListener("keydown", (e) => {
            // Move right
            // console.log(keydown,{keydown})
            if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                tabs[tabFocus].setAttribute("tabindex", -1);
                if (e.key === "ArrowRight") {
                    tabFocus++;
                    // If we're at the end, go to the start
                    if (tabFocus >= tabs.length) {
                        tabFocus = 0;
                    }
                    // Move left
                } else if (e.key === "ArrowLeft") {
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

        // console.log({target, parent, grandparent, ggparent, dataList})

        // Remove all current selected tabs
        parent
            .querySelectorAll('[aria-selected="true"]')
            .forEach((t) => t.setAttribute("aria-selected", false));
        grandparent
            .querySelectorAll('[aria-selected="true"]')
            .forEach((t) => t.setAttribute("aria-selected", false));

        // Set this tab as selected
        target.setAttribute("aria-selected", true);

        // Hide all tab panels
        grandparent
            .querySelectorAll('[role="tabpanel"]')
            .forEach((nodel) => nodel.setAttribute("hidden", true));

        const tabBody = parent.querySelector(listTabSel);
        // let newDiv = `<div class="leftSide-component-list" id="leftoverlay-content-${4}">`;
        // await testList & testList.data.options.forEach((ele, i) => {
        //     newDiv += `<div key="${i}" data-auto-id="list-${i}" data-td-id="${ele.id}">
        //             <div>${ele.label}</div>
        //             <img src="${ele.img_url}" alt="${ele.label}-image" class="leftside-image-item" />
        //         </div>`;

        // });
        // newDiv += `</div>`;


        //newDiv = await domParser(newDiv);



        let newDivVal = await leftListMenu(dataList.data.options, 4);

        tabBody.replaceChildren(newDivVal);



    }

    async function leftListMenu(eleArr, parentDivId, callback) {
        let _tdDivWrapper = document.createElement("div");
        _tdDivWrapper.id = `leftoverlay-content-${parentDivId}`, _tdDivWrapper.classList.add("leftSide-component-list");

        // console.log({eleArr, parentDivId, callback});
        //_tdDivWrapper.cloneNode 
        for (var i = 0; i < eleArr.length; i++) {
            //for(ele of eleArr){
            let ele = eleArr[i];
            //console.log({i});
            let _tdDivEle = document.createElement("div");
            let _tdDivEleLabel = document.createElement("div");
            let _tdDivEleImg = document.createElement("img");
            let _tdDivEleImgWrapper = document.createElement("div");
            _tdDivEle.setAttribute("data-auto-id", ele.id), _tdDivEle.setAttribute("data-td-id", `item-${ele.id}`), _tdDivEle.classList.add("leftSide-component-item"),
                _tdDivEle.setAttribute("key", ele.id), _tdDivEle.id = `item-${ele.id}`;
            _tdDivEleLabel.textContent = ele.label;
            _tdDivEleImg.src = ele.img_url, _tdDivEleImg.setAttribute("alt", `${ele.label}-image`), _tdDivEleImg.classList.add("leftside-image-item");

            _tdDivEleImgWrapper.classList.add("td-leftside-leftimg-wrapper");
            _tdDivEleImgWrapper.appendChild(_tdDivEleImg);

            _tdDivEle.appendChild(_tdDivEleLabel);
            _tdDivEle.appendChild(_tdDivEleImgWrapper);

            //console.log({_tdDivEle, ele});
            await _tdDivEle.addEventListener("click", (e) => {
                e.preventDefault();
                //trigger add element object
                //console.log("send the payload...",{tar: e.target, id: ele.id})
                callback ? callback([]) : nodeMainManager.addComponent(ele)
            });


            _tdDivWrapper.appendChild(_tdDivEle);
        }
        return _tdDivWrapper;
    }

    return {
        getNodeIfFound,
        processAccordion
    }
}

function processAccordion({ tabSel, listTabSel }, data, callback) {
    // console.log("DOMContentLoaded in...",listTabSel);
    const { item, dataRepo } = data;
    const tabs = document.querySelectorAll(tabSel);
    const tabList = document.querySelector(listTabSel);
    //const tabList = document.querySelector('[role="tablist"]');

    // Add a click event handler to each tab
    tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();
            if (!callback) {
                changeTabs(e, dataRepo);
            } else {
                callback();
            }


        }
        );

    });

    // Enable arrow navigation between tabs in the tab list
    let tabFocus = 0;

    tabList.addEventListener("keydown", (e) => {
        // Move right
        //   console.log(keydown,{keydown})
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            tabs[tabFocus].setAttribute("tabindex", -1);
            if (e.key === "ArrowRight") {
                tabFocus++;
                // If we're at the end, go to the start
                if (tabFocus >= tabs.length) {
                    tabFocus = 0;
                }
                // Move left
            } else if (e.key === "ArrowLeft") {
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

    async function changeTabs(e, data) {
        const target = e.target;
        const parent = target.parentNode;
        const grandparent = parent.parentNode;
        const testList = data.content.component.list[4];

        // console.log({target, parent, grandparent, data})

        // Remove all current selected tabs
        parent
            .querySelectorAll('[aria-selected="true"]')
            .forEach((t) => t.setAttribute("aria-selected", false));
        grandparent
            .querySelectorAll('[aria-selected="true"]')
            .forEach((t) => t.setAttribute("aria-selected", false));

        // Set this tab as selected
        target.setAttribute("aria-selected", true);

        // Hide all tab panels
        grandparent
            .querySelectorAll('[role="tabpanel"]')
            .forEach((nodel) => nodel.setAttribute("hidden", true));

        // Show the selected panel
        // grandparent.parentNode
        //   .querySelector(`#${target.getAttribute("aria-controls")}`)
        //   .removeAttribute("hidden");

        //add the body pane
        const tabBody = document.querySelector(".add-pane-Team");
        const tabBody2 = parent.querySelector(listTabSel);
        // console.log({list: data.content.component.list[4].data})
        let newDiv = `<div class="leftSide-component-list" id="leftoverlay-content-${4}">`;
        await testList & testList.data.options.forEach((ele, i) => {
            newDiv += `<div key="${i}" data-auto-id="list-${i}" data-td-id="${ele.id}">
                <div>${ele.label}</div>
                <img src="" alt="${ele.label}-image" />
            </div>`;
        });
        newDiv += `</div>`;

        // console.log({newDiv, tabBody, tabBody2, parent})
        newDiv = await domParser(newDiv);


        //tabBody.replaceChildren(newDiv);
        tabBody2.replaceChildren(newDiv);

        tabBody2.toggleAttribute("hidden");

        // Add a click event handler to each options
        let tabInner = document.querySelectorAll(".leftSide-component-list");
        // console.log({tabInner})
        tabInner.forEach((tab) => {
            tab.addEventListener("click", (e) => {
                e.preventDefault();
                //trigger add element object
                // console.log("send the payload...",{tar: e.target, testObj: testList.data.options[0]})
                nodeMainManager.addComponent(testList.data.options[0])
            }
            );

        });

    }
}


function domParser(domStr, type = "text/html") {
    const parser = new DOMParser();

    const doc = parser.parseFromString(domStr, type);
    //const errorNode = doc.querySelector("parsererror");

    // console.log({doc, doc1: doc.documentElement, first: doc.body.firstChild});

    if (!doc) {
        // parsing failed
        throw new Error("Encountered error while parser dom")
    } else {
        // parsing succeeded
        return doc.body.firstChild; //doc.documentElement;
    }
}


function viewLeftOverlayAddNode2(data) {
    const addElementArr = document.getElementById("add-node-element-body");
    const fragment = document.createDocumentFragment();
    let newItemView = document.createElement("div")
    let tempHtml = document.createElement("div");
    let tempDiv = ``;
    SITE_CONTENT.addElement.list.map((ele, i) => {
        tempDiv += `<div id="ele${i}" class="list-text-heading-btn" data-auto-id="add-tab-${ele.type}" data-td-type="${ele.type}" data-td-element="${ele.tag}" data-td-id="${ele._id}">
                                                            <div>
                                                                <div>${ele.label}</div>
                                                                <div>
                                                                    <svg data-icon="index" aria-hidden="true" focusable="false" width="59" height="16" viewBox="0 0 59 16" class="bem-Svg" style="display: block;"><path opacity=".4" d="M0 0v16h29v-4h29V8h-1V4h2V0H0zm1 7h55H1zm57-4H1h57z"></path><path fill="currentColor" d="M1 1v2h57V1H1zm55 4H1v2h55V5zM1 11h56V9H1v2zm0 4h27v-2H1v2z"></path></svg>
                                                                </div>
                                                            </div>
                                                            <div><span>${ele.label}</span></div>
                                                        </div>`;
    });

    // console.log({tempDiv});


    newItemView.innerHTML = tempDiv;

    addElementArr && addElementArr.appendChild(newItemView);
    let output = ``;

    output += `<div class="nc-overlay-panel-layer-container">
    <div class="nc-panel">
        <div class="panel-list">
            <div class="panel-head">
                <div>
                    <span>Add </span>
                </div>
                <div>
                    <form class="">
                        <input type="text" name="search" placeholder="Search" />
                    </form>
                </div>
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
                </div>
            </div>
            <div class="panel-body">
                <div class="panel-body-container">
                    <div>
                        <div class="node-element-head">
                                    <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_959_17467" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <rect x="24" width="24" height="24" transform="rotate(90 24 0)" fill="#FCFCFD"/>
                                        </mask>
                                        <g mask="url(#mask0_959_17467)">
                                        <path d="M8.95005 11.9996L14.625 6.34961L15.675 7.39961L11.075 11.9996L15.675 16.5996L14.625 17.6496L8.95005 11.9996Z" fill="white"/>
                                        </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <span>Typography</span>
                                    </div>
                                </div>
                                <div class="node-element-body" id="add-node-element-body" style="display:grid">`;


    output += addElementArr;
    output += `
                                </div>
                            </div>
                        </div>
            </div>
        </div>
        <div class="panel-list" style="display: none"></div>
    </div>
</div>`;

    return output;
}

function htmlElement(canvasWindow) {
    let doc = canvasWindow.document;
    async function elementHandler(ele, activeSection) {
        const actionType = ele.dataset.tdType.toUpperCase();
        const parentNode = appUtils.getNodeIfFound(activeSection);
        //console.log(actionType," entering....2 ",{parentNode, dataSet: ele.dataset, canvasWindow})
        let activeElement;
        switch (actionType) {
            case "HEADING":
                activeElement = await addHeadingElement(ele, parentNode);
                break;
            case "DIVBLOCK":
                activeElement = await addContainerElement(ele, parentNode);
                break;
            case "LINKBLOCK":
                activeElement = await addLinkElement(ele, parentNode);
                break;
            // case "LINBLOCK":
            //     activeElement = await addLinkElement(ele, parentNode);
            //     break;
            default:
                activeElement = addElement(ele, parentNode);
                break;
        }

        // console.log("new node....")
        // console.log({activeElement});
        //hide sidebar
        switchOnOffSideBar(false, activeElement.node); //off
        htmlNode.nodes.concat(activeElement.node);
        setHtmlNode({ nodes: htmlNode.nodes });
        setCssStyle();
        setJsNode();

        //setActiveTab(true, activeElement);
        //viewInstance.renderLeftSideView(true, activeElement);

        view.renderRightSideView({ status: true, activeElement });

        //sidebarStartup(activeElement);



        //move focus to newly add element
        canvasWindow.scrollTo({
            top: activeElement.node.offsetTop,
            left: activeElement.node.offsetLeft,
            behavior: "smooth",
        });
    }

    async function addHeadingElement(ele, parentNode) {
        // console.log("entering....3b : ",ele.dataset);
        const setHtmlObj = [{
            tag: "h1", type: "Heading", _id: "0a3cc0d1-866a-3dd3-09ac-034856d1bcb7", children: ["0a3cc0d1-866a-6dd3-09ac-034856d1bcb7"],
        }, {
            text: true, v: "Heading H1", _id: "0a3cc0d1-866a-6dd3-09ac-034856d1bcb7"
        }];
        let setCssStyleObj = [];

        //way forward
        const createdComp = await nodeInstance.addComponent(setHtmlObj);


        setActiveSection(createdComp);
        // console.log({parentNode, activeSection})
        return { virtualHtml: setHtmlObj, virtualCss: setCssStyleObj, node: createdComp };
    }

    async function addLinkElement(ele, parentNode) {
        const setHtmlObj = [{
            tag: "a", type: "Link", _id: "0a3cc0d1-866a-3dd3-1111-034856d1bcb7", children: ["0a3cc0d1-0000-6dd3-09ac-034856d1bcb7"],
        }, {
            text: true, v: "Welcome back home", _id: "0a3cc0d1-0000-6dd3-09ac-034856d1bcb7"
        }];
        let setCssStyleObj = [];

        const createdComp = nodeInstance.addComponent(setHtmlObj);
        return { virtualHtml: setHtmlObj, virtualCss: setCssStyleObj, node: createdComp };
    };

    async function addContainerElement(ele, parentNode) {
        // console.log({dataset: ele.dataset});
        const setHtmlObj = [{
            tag: "section", type: "Section", _id: "21000133-866a-3dd3-09ac-034856d1bcb7", children: [],
        }];
        let setCssStyleObj = [];

        //way forward
        const createdComp = await nodeInstance.addComponent(setHtmlObj);
        return { virtualHtml: setHtmlObj, virtualCss: setCssStyleObj, node: createdComp };
    }

    function addElement(ele, parentNode) {

        // console.log("adding element.. data-td-id");
        const setHtmlObj = [{
            _id: "fb8d0000-94a0-f31f-fbec-e77e0a73592", type: "div", tag: "div",
            children: ["fb8d0000-866a-6dc2-09ac-034856d1b33d"],
            classes: ["ac43e80a-7a50-03c2-5332-c1494c1b2527"],
            data: { grid: { type: "section" }, tag: "div" }
        }, {
            _id: "fb8d0000-866a-6dc2-09ac-034856d1b33d", text: true, v: "Powered by TailorDom",
        }];

        const setCssStyleObj = [];

        //create element
        const createEle = document.createElement(ele.dataset.tdElement);
        createEle.textContent = `Heading: Welcome back home`;

        //add default styles
        // console.log({createEle, parentNode})
        parentNode.appendChild(createEle);

        // console.log({parentNode, createEle, parentNode});
        return { virtualHtml: setHtmlObj, virtualCss: setCssStyleObj, node: createEle };
    }
}

//load this first
async function initView(isLoading = true) {
    //nc-4768932-builder
    //td-root

    // console.log("loading main view... load state? ",isLoading)

    const _divRoot = document.getElementById("td-root");

    function sidebarviewRight(isloading) {
        const _divsidebarRightMain = document.createElement("div");
        const _divsidebarRightMainWrapper = document.createElement("div");
        const _divsidebarRightMainTabs = document.createElement("div");
        const _divsidebarRightMainContent = document.createElement("div");
        _divsidebarRightMain.id = "sidebar-right", _divsidebarRightMain.classList.add("sidebar-right");
        _divsidebarRightMainWrapper.classList.add("sidebar-right_wrapper")

        _divsidebarRightMainTabs.classList.add("sidebar__tabs"),
            _divsidebarRightMainContent.classList.add("sidebar__tabs-inner"),

            _divsidebarRightMainWrapper.appendChild(_divsidebarRightMainTabs);
        _divsidebarRightMainWrapper.appendChild(_divsidebarRightMainContent);
        _divsidebarRightMain.appendChild(_divsidebarRightMainWrapper);
    }


    function bottomViewSelectedNodeBreadcrumb(nodeTree) {

        const selectedNodeBreadcrumb = document.createElement("div");
        const selectedNodeBreadcrumbWrapper = document.createElement("div");
        const bottomBarBreadcrumb = document.createElement("div");

        selectedNodeBreadcrumbWrapper.classList.add("bottomBar-wrapper");
        selectedNodeBreadcrumb.classList.add("selectedNodeBreadcrumb", "bottomBar");

        bottomBarBreadcrumb.classList.add("bottomBar-breadcrumb");

        selectedNodeBreadcrumbWrapper.appendChild(bottomBarBreadcrumb)
        selectedNodeBreadcrumb.appendChild(selectedNodeBreadcrumbWrapper);

        let breadcrumbArr = [];




        function iterateNodeTree(node, counter) {
            let parentEle = node.parentNode;
            //console.log({res: parentEle.tagName != "BODY"});
            counter += 1;
            breadcrumbArr.push({ id: counter, tag: parentEle.tagName, class: parentEle.classList });
            if (parentEle.tagName != "body".toUpperCase()) {
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
                _divNewListItemIcon.innerHTML = `${generateSvg("ele-icon-small")} <div class="label">${element.class.length > 0 ? element.class[0] : element.tag.toLowerCase()} </div>`;
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
            breadcrumbArr.push({ id: 0, tag: nodeTree.tagName, class: nodeTree.classList });
            iterateNodeTree(nodeTree, 0);
            renderBreadcrumbList = resolveAndRederList();
            //selectedNodeBreadcrumb.appendChild(renderBreadcrumbList);
            bottomBarBreadcrumb.appendChild(renderBreadcrumbList);

        } else {
            renderBreadcrumbList = `<span>No Element Selected.</span>`;
            // selectedNodeBreadcrumb.innerHTML = renderBreadcrumbList;
            bottomBarBreadcrumb.innerHTML = renderBreadcrumbList;
        }


        if (!isLoading) {
            //let bottomView = bottomViewSelectedNodeBreadcrumb();
            _divRoot.replaceChildren(selectedNodeBreadcrumb);
        } else {
            //show loading screen
        }

        return _divRoot;//selectedNodeBreadcrumb;

    }

    if (!isLoading) {
        const _divLoading = document.createElement("div");

        _divLoading.innerHTML = "<p>lorem ipsum loading...</p>";

        // console.log("loading...",{isLoading});
        _divRoot.appendChild(_divLoading);

    } else {
        //     //show loading screen
        bottomViewSelectedNodeBreadcrumb();
        sidebarviewRight();
    }
    // bottomViewSelectedNodeBreadcrumb();
    // if(!isLoading){
    //     let bottomView = bottomViewSelectedNodeBreadcrumb();
    //     _divRoot.appendChild(bottomView);
    // }else{
    //     //show loading screen
    // }


    return {
        bottomViewSelectedNodeBreadcrumb,
        sidebarviewRight
    }

}

function tdManageState(initialValue) {
    let defVal = initialValue;

    function getData(id) {
        return defVal.map(el => el._id == id);
    }

    //@return update data
    function addData(newVal) {
        //console.log({bol: !Array.isArray(newVal)}," data type: ", typeof newVal)
        if (!Array.isArray(newVal)) {
            defVal.push(newVal);
            //console.log({defVal, newVal})
        } else {
            defVal = defVal.concat(newVal);
        }
        // console.log({defVal, newVal})
        return defVal;
    }

    function getAllData() {
        return defVal;
    }

    async function removeData(id) {
        // console.log("removing the an element")
        // let newDefault = await defVal.map(el => el._id == id);
        // return newDefault;
    }


    return {
        getData,
        addData,
        getAllData,
        removeData
    }


}

function domToArrTree(doc) {
    let newJsonArr = [];
    let j = 0;

    (async function iterateDom(docEle, docIndex, i) {
        let newObj = {};
        if (!isEmpty(docEle)) { };


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