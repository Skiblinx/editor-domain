import reFormatCamelToOtherCase from "./../../utils/formatStrCase";
function fstyleCat(tdStyleToolsInstance,initialScreenChange) {

  const canvasArea = document.getElementById("site-iframe-next");
  const canvasWindow = canvasArea.contentWindow;

  let width = canvasArea.offsetWidth

  canvasArea.contentWindow.addEventListener("resize", function () {
    width = canvasArea.offsetWidth;
    // console.log("--- browser viewport has adjusted ----",{width});

    // set outlineStyle on resize
    const wrapperDiv = document.querySelector(".tool-OutlineSelectedNode");
    if(wrapperDiv){
      wrapperDiv.style.display= "none"
    }
  });

  function initAndAddRulesToMediaQuery() {
    // Function to apply styles based on the media query results
    // function applyStyleRule(mediaScreen, ruleKey, node, cssRuleVal = "") {
    //   let doc = canvasWindow.document;
    //   let sel = `#${node.id}`;
    //   let ruleKeyUpdate = reFormatCamelToOtherCase(ruleKey);
    //   // console.log({mediaStr: mediaScreen.media, ruleKey, node, cssRule, sel, doc})
    //   // Check if a <style> element with id "custom-style" exists
    //   let styleElement = doc.getElementById('custom-style');

    //   // If it doesn't exist, create a new <style> element
    //   if (!styleElement) {
    //     styleElement = doc.createElement('style');
    //     styleElement.id = 'custom-style';
    //     doc.head.appendChild(styleElement);
    //   }
    //   let cssRule = `${ruleKeyUpdate}: ${cssRuleVal}`;
    //   // Construct the CSS rule with the provided parameters
    //   const cssRuleText = `${sel} { ${cssRule} }`;

    //   styleElement.textContent += `
    //            @media screen and ${mediaScreen.media} {
    //                 ${cssRuleText}
    //             }
    //         `;
    // }

    function applyStyles(mediaQuery, index, item = {}, selectedDocument = {}, val = "") {
      //console.log({mediaQuery, index, selectedDocument, val});
      //applyStyleRule(mediaQuery, item.name, selectedDocument, val);
      if (mediaQuery.matches) {
        // console.log(`INSDIE mediaQuery ${selectedDocument.style[item.name]} = ${val} `, {iname: item.name,media: mediaQuery.media, index});
        // Apply styles for each breakpoint
        //temporary node style update, it will go out after refresh
        //selectedDocument.node.style[item.name] = val || 'value for small screens';
        switch (index) {
          case 0:
            selectedDocument.style[item.name] = val;
            break;
          case 1:
            selectedDocument.style[item.name] = val;
            break;
          case 2:
            selectedDocument.style[item.name] = val;
            break;
          case 3:
            selectedDocument.style[item.name] = val;
            break;
          case 4:
            selectedDocument.style[item.name] = val;
          case 5:
            selectedDocument.style[item.name] = val;
            break;
          case "default":
            selectedDocument.style[item.name] = val;
            break;
        }
      }
    }

    function selectRangeForWidth(ranges, width) {
      for (const item of ranges) {
        const [min, max] = item.range.map(Number);
        if (width >= min && width <= max) {
          return item;
        }
      }
      return null; // Return null if no range is matched
    }

    return { applyStyles, selectRangeForWidth };
  }

  const mediaInstance = initAndAddRulesToMediaQuery();


  function sortMediaStyleSelection(node, evtVal, item, unitCat, ruleKey, media = "default") {
    let ruleKeyUpdate = reFormatCamelToOtherCase(ruleKey);
    let nodeId = node.id;

    //console.log("---- inside ---",{width, evtVal, node, ruleKeyUpdate, evtVal, unitCat});
    const mediaQueries = [
      { obj: window.matchMedia('(max-width: 320px)'), val: "320", range: ["0", "320"], tag: "default", name: "MOBILE" },
      { obj: window.matchMedia('(min-width: 321px) and (max-width: 480px)'), val: "480", range: ["321", "480"], tag: 5, name: "TABLET-SMALL" },
      { obj: window.matchMedia('(min-width: 481px) and (max-width: 768px)'), val: "768", range: ["481", "768"], tag: 4, name: "TABLET-MEDUIM" },
      { obj: window.matchMedia('(min-width: 769px) and (max-width: 1024px)'), val: "1024", range: ["769", "1024"], tag: 3, name: "LAPTOP-MEDIUM" },
      { obj: window.matchMedia('(min-width: 1200px)'), val: "1200", range: ["1025", "1200"], tag: 2, name: "DESKTOP-MEDIUM" },
      { obj: window.matchMedia('(min-width: 1600px)'), val: "1600", range: ["1201", "1600"], tag: 1, name: "DESKTOP-LARGE" },
    ];

    mediaQueries.forEach((mediaQuery, index) => {
      //let resl = mediaInstance.selectRangeForWidth(mediaQueries, width);
      const [min, max] = mediaQuery.range.map(Number);
      //console.log(`inside loop: width : ${mediaQuery.val} == ${width}: ${mediaQuery.val == width}`)
      if (width >= min && width <= max) {
        //if(mediaQuery.val == resl){
          console.log(initialScreenChange.getValue());
          switch (initialScreenChange.getValue()) {
            case true:
              mediaStylesActivated()
              break;
            default:
              mediaInstance.applyStyles(mediaQuery.obj, 4, item, node, evtVal)
              tdStyleToolsInstance.updateStyleRule(nodeId, `${evtVal}${unitCat}`, ruleKeyUpdate);
              break;
          }
      }
    })

    function mediaStylesActivated() {
      if (width < 767) {
        // console.log("---- inside if width < 767 ---",{width})
        tdStyleToolsInstance.updateStyleMediaRule(nodeId, `${evtVal}${unitCat}`, ruleKeyUpdate, 4)
      } else if (width >= 767 && width < 991) {
        // console.log("---- inside if width >= 767 && width < 991 ---",{width})
        tdStyleToolsInstance.updateStyleMediaRule(nodeId, `${evtVal}${unitCat}`, ruleKeyUpdate, 5)

      } else if (width >= 991 && width < 1280) {
        // console.log("---- inside elseif width >= 991 && width < 1280 ---",{width})
        tdStyleToolsInstance.updateStyleRule(nodeId, `${evtVal}${unitCat}`, ruleKeyUpdate);

      } else if (width >= 1280 && width < 1500) {
        // console.log("---- inside elseif width >= 1280 && width < 1500 ---",{width})
        tdStyleToolsInstance.updateStyleMediaRule(nodeId, `${evtVal}${unitCat}`, ruleKeyUpdate, 2)
      } else if (width >= 1500) {
        // console.log("---- inside elseif width >= 1500 ---",{width})
        tdStyleToolsInstance.updateStyleMediaRule(nodeId, `${evtVal}${unitCat}`, ruleKeyUpdate, 1)
      }
    }
  }

  function padding() {
    //console.log("Paddding function triggered resize")
    return {
      paddingTop(event, node, item, unitCat = "px") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'padding-top');
      },
      paddingRight(event, node, item, unitCat = "px") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'padding-right');

      },
      paddingBottom(event, node, item, unitCat = "px") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'padding-bottom');
      },
      paddingLeft(event, node, item, unitCat = "px") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'padding-left');
      },
    }
  }

  function font() {
    return {
      size(event, node, item, unitCat = "px") {
        // console.log({width});
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'font-size');
      },
      color(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'color');
      },
      lineHeight(event, node, item, unitCat = "em") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'line-height');
      },
      fontFamily(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'font-family');
      },
      weight(event, node, item, unitCat = null) {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'font-weight');
      },
      align(event, node, item, unitCat = "") {
        // console.log('---- -align -----', {item, node, evt: event.target});
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'text-align');
      },
      textAlign(event, node, item, unitCat = "") {
        // console.log('---- text-align -----', {item, node, evt: event.target});
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'text-align');
      },
      fontStyle(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'font-style');
      },
      decoration(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'text-decoration');
      },
      letterSpacing(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'letter-spacing');
      },
      textIndent(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'text-indent');
      },
      column(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'columns');
      },
      textTransform(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'text-transform');
      },
      direction(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'direction');
      },
      wordBreak(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'word-break');
      },
      wordWrap(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'word-wrap');
      },
    };
  }
  function position() {
    return {
      async position(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'position');
      },
      async top(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'top');
      },
      async right(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'right');
      },
      async bottom(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'bottom');
      },
      async left(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'left');
      },
    };
  }
  function background() {
    return {
      async color(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'background-color');

      },
    };
  }

  function effects() {
    return {
      opacity(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'opacity');
        //   const opacityValue = event.target.value;
        //   tdStyleToolsInstance.updateStyleRule(node.id, opacityValue, 'opacity');
      },
      blending(event, node) {
        const blendMode = event.target.value;
        tdStyleToolsInstance.updateStyleRule(node.id, blendMode, 'mix-blend-mode');
      },
      outline(event, node) {
        const outlineStyle = event.target.value;
        tdStyleToolsInstance.updateStyleRule(node.id, outlineStyle, 'outline');
      },
      boxShadow(event, node) {
        const boxShadowValue = event.target.value;
        tdStyleToolsInstance.updateStyleRule(node.id, boxShadowValue, 'box-shadow');
      },
      transform(event, node) {
        const transformValue = event.target.value;
        tdStyleToolsInstance.updateStyleRule(node.id, transformValue, 'transform');
      },
      transition(event, node) {
        const transitionValue = event.target.value;
        tdStyleToolsInstance.updateStyleRule(node.id, transitionValue, 'transition');
      },
      filters(event, node) {
        const filterValue = event.target.value;
        tdStyleToolsInstance.updateStyleRule(node.id, filterValue, 'filter');
      },
      backdropFilters(event, node) {
        const backdropFilterValue = event.target.value;
        tdStyleToolsInstance.updateStyleRule(node.id, backdropFilterValue, 'backdrop-filter');
      },
      cursor(event, node) {

        const cursorStyle = event.target.value;
        tdStyleToolsInstance.updateStyleRule(node.id, cursorStyle, 'cursor');
      }
    };
  }

  return {
    padding: padding(),
    font: font(),
    background: background(),
    effects: effects(),
    position: position(),
    border: {
      color(event, node, item, unitCat = "px") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'border-color');
      },
      width(event, node, item, unitCat = "px") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'border-width');
      },
      style(event, node, item, unitCat = "px") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'border-style');
      },
      radius(event, node, item, unitCat = "px") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'border-radius');
      },
    },
    size: {
      width(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'width', 4);
      },
      height(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'height');
      },
      minWidth(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'min-width');
      },
      minHeight(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'min-height');
      },
      maxWidth(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'max-width');
      },
      maxHeight(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'max-height');
      },
    },

    margin: {
      marginTop(event, node, item, unitCat = "px") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'margin-top');
      },
      marginRight(event, node, item, unitCat = "px") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'margin-right');
      },
      marginBottom(event, node, item, unitCat = "px") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'margin-bottom');
      },
      marginLeft(event, node, item, unitCat = "px") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'margin-left');
      },
    },
    layout: {
      display(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'display');
      },
      flexDirection(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'flex-direction');
      },
      alignItems(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'align-items');
      },
      justifyContent(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'justify-content');
      },
      gap(event, node, item, unitCat = "") {
        sortMediaStyleSelection(node, event.target.value, item, unitCat, 'gap');
      }
    },
  };
}
export default fstyleCat;