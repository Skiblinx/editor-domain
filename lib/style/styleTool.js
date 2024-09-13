function fstyleTools(htmlState, activeStack) {
  const canvasArea = document.getElementById("site-iframe-next");
  // console.log("---- fstyleTools ----");

  const styleSheet = canvasArea.contentDocument.styleSheets

  // Function to update styles for an existing rule or add a new one
  async function updateStyleRule(nodeId, newStyles, property, cssText) {
    const sheets = canvasArea.contentDocument.styleSheets
    const keys = Object.keys(sheets)
    const styleSheet = sheets[keys.length - 1]
    console.log(styleSheet);
    // console.log("---- updateStyleRule ----");
    // Find the rule index based on the selector
    let ruleIndex = -1;
    let found = false
    for (let i = 0; i < styleSheet.cssRules.length; i++) {
      if (styleSheet.cssRules[i].selectorText === `#${nodeId}`) {
        ruleIndex = i;
        found = true
        break;
      }
    }

    if (ruleIndex !== -1 && found) {
      // Update the styles for the existing rule
      const existingRule = styleSheet.cssRules[ruleIndex];

      // console.log(existingRule,"kkk");

      if (!cssText) {
        // console.log('changed',existingRule.style.cssText, newStyles);
        // console.log('changed');
        existingRule.style[property] = newStyles;
      } else {
        existingRule.style.cssText = cssText
      }
      //console.log('changed',existingRule.style.cssText, newStyles);
      // console.log('Fount - so saved rule to existing ele --', {nodeId, property, existingRule, newStyles});
      saveStylesToHtmlState(nodeId, existingRule.style.cssText, "default")

    } else {
      //add a new one
      // console.log('notFound');
      if (!cssText) {
        await styleSheet.insertRule(
          `#${nodeId} {${property}: ${newStyles};}`,
          styleSheet.cssRules.length - 5
        )
      } else {
        await styleSheet.insertRule(
          `#${nodeId} {${cssText}}`,
          styleSheet.cssRules.length - 5
        )
      }
      const existingRule = styleSheet.cssRules[styleSheet.cssRules.length - 6]
      // console.log(existingRule);
      createStylesToHtmlState(nodeId, existingRule.style.cssText, "default")
      // console.log('inserted');
    }
  }

  // Update styles for an existing rule media rule or add a new media one
  async function updateStyleMediaRule(nodeId, newStyles, property, media) {
    const sheets = canvasArea.contentDocument.styleSheets
    const keys = Object.keys(sheets)
    const styleSheet = sheets[keys.length - 1]

    console.log(styleSheet);
    if (!nodeId) return;
    // get media rule
    const mediaRules = styleSheet.cssRules[styleSheet.cssRules.length - media];
    // console.log("---- updateStyleRule media ----",{media, mediaRules,newStyles, property });
    // Find the rule index based on the selector
    let ruleIndex = -1;
    let found = false
    for (let i = 0; i < mediaRules.cssRules.length; i++) {
      if (mediaRules.cssRules[i].selectorText === `#${nodeId}`) {
        ruleIndex = i;
        found = true
        break;
      }
    }

    // console.log(' out if --', {ruleIndex, found});
    if (ruleIndex !== -1 && found) {
      // Update the styles for the existing rule
      const existingRule = mediaRules.cssRules[ruleIndex];
      existingRule.style[property] = newStyles;
      // console.log('Fount - so saved rule to existing ele --', {nodeId, property, existingRule, newStyles});
      saveStylesToHtmlState(nodeId, existingRule.style.cssText, media)
    } else {
      //add a new rule
      //  console.log('notFound - so new rule so create new --', {nodeId, mediaRules, property, newStyles});
      await mediaRules.insertRule(
        `#${nodeId} {${property}: ${newStyles};}`,
        mediaRules.cssRules.length
      )
      const existingRule = mediaRules.cssRules[mediaRules.cssRules.length - 1]
      // console.log("--- inside else ----",{existingRule});
      createStylesToHtmlState(nodeId, existingRule.style.cssText, media)
      // console.log('inserted');
    }
  }

  //preserves created rule to html state and undo stacks
  function createStylesToHtmlState(nodeId, cssText, media) {

    let allHtmlStyles = htmlState.getValue().styles.style

    let found = allHtmlStyles.find(e => e.style_id == nodeId);

    let newStyles;

    if (!found) {
      newStyles = {
        style_id: nodeId,
        data: {
          sel: `#${nodeId}`,
          styleLess: "",
          comb: "",
          affects: { "": 1 },
          children: [],
          name: "",
          type: "",
          variants: {},
        }
      }
    } else {
      newStyles = found;
    }

    // console.log(" --- inside create new style rule ----", {newStyles, cssText, media, found, len: allHtmlStyles.length})
    switch (media) {
      case "default":
        newStyles.data.styleLess = cssText
        // newStyles.data.variants["main"] = {
        //   sel: `#${nodeId}`,
        //   styleLess: cssText
        // }
        //newStyles.data.variants["main"] = addNewRules(newStyles.data.variants["main"], cssText, nodeId);
        break;
      case "470":
        //not yet Implemented only small, medium, large and xxl
        //newStyles.data.variants["tiny"] = addNewRules(newStyles.data.variants["tiny"], cssText, nodeId);
        newStyles.data.variants["tiny"] = {
          sel: `#${nodeId}`,
          // styleLess: addNewRules2(newStyles.data.variants["tiny"], cssText)//cssText
          styleSheet: cssText
        }
        break;
      case 4:
        //newStyles.data.variants["small"] = addNewRules(newStyles.data.variants["small"], cssText, nodeId);
        newStyles.data.variants["small"] = {
          sel: `#${nodeId}`,
          // styleLess: addNewRules2(newStyles.data.variants["small"], cssText)//cssText
          styleSheet: cssText
        }
        break;
      case 5:
        //newStyles.data.variants["medium"] = addNewRules(newStyles.data.variants["medium"], cssText, nodeId);
        newStyles.data.variants["medium"] = {
          sel: `#${nodeId}`,
          // styleLess: addNewRules2(newStyles.data.variants["medium"], cssText)//cssText
          styleSheet: cssText
        }
        break;
      case 2:
        newStyles.data.variants["large"] = {
          sel: `#${nodeId}`,
          // styleLess: addNewRules2(newStyles.data.variants["large"], cssText)
          styleSheet: cssText
        }
        break;
      case 1:
        newStyles.data.variants["xxl"] = {
          sel: `#${nodeId}`,
          // styleLess: addNewRules2(newStyles.data.variants["xxl"], cssText)
          styleSheet: cssText
        }
        break;

      default:
        break;
    }

    if (!found) {
      allHtmlStyles.push(newStyles)
    }

    // console.log(" --- done adding style --",{newStyles, found, htmlStylen: allHtmlStyles.length})


    activeStack.getValue().pushUndo({ parent: null, node: nodeId, case: "StyleChange", nodes: null, position: media, styles: "", text: null })
    activeStack.getValue().pushUndo({ parent: null, node: nodeId, case: "StyleChange", nodes: null, position: media, styles: cssText, text: null })
    // console.log(newStyles);
  }

  function addNewRules(cssObj, newRules, nodeId) {
    // console.log("Inside new rule ",{cssObj, newRules, nodeId})
    if (!cssObj) {
      return;
    }
    // Parse the existing CSS rules from the provided object
    const existingRules = cssObj.styleLess ? cssObj.styleLess.split(';').filter(rule => rule.trim() !== '') : [];

    // Initialize an object to store the existing rules
    const existingRulesObj = {};
    existingRules.forEach(rule => {
      const [property, value] = rule.split(':').map(part => part.trim());
      existingRulesObj[property] = value;
    });

    // Split the new rules string into an array of individual rule strings
    const newRuleStrings = newRules.split(';').filter(rule => rule.trim() !== '');

    // Convert the new rules array into an object
    const newRulesObj = {};
    newRuleStrings.forEach(rule => {
      const [property, value] = rule.split(':').map(part => part.trim());
      newRulesObj[property] = value;
    });

    // Merge the existing and new rules objects
    const mergedRulesObj = { ...existingRulesObj, ...newRulesObj };

    // Convert the merged rules object back to a CSS string
    const updatedCss = Object.entries(mergedRulesObj).map(([property, value]) => `${property}: ${value}`).join('; ');



    cssObj = {
      sel: `#${nodeId}`,
      styleLess: updatedCss
    }

    console.log(" --- addnewrule ---",{updatedCss, existingRulesObj, cssObj, newRules});
    return cssObj;//updatedCss;
  }

  function addNewRules2(cssObj = {}, newRules) {
    // console.log("Inside new rule ",{cssObj, newRules})
    // if(!cssObj){
    //     return;
    // }
    // Parse the existing CSS rules from the provided object
    const existingRules = cssObj.styleLess ? cssObj.styleLess.split(';').filter(rule => rule.trim() !== '') : [];
    // console.log({existingRules})
    // Initialize an object to store the existing rules
    const existingRulesObj = {};
    existingRules.forEach(rule => {
      const [property, value] = rule.split(':').map(part => part.trim());
      existingRulesObj[property] = value;
    });

    // Split the new rules string into an array of individual rule strings
    const newRuleStrings = newRules.split(';').filter(rule => rule.trim() !== '');

    // Convert the new rules array into an object
    const newRulesObj = {};
    newRuleStrings.forEach(rule => {
      const [property, value] = rule.split(':').map(part => part.trim());
      newRulesObj[property] = value;
    });

    // Merge the existing and new rules objects
    const mergedRulesObj = { ...existingRulesObj, ...newRulesObj };

    // Convert the merged rules object back to a CSS string
    const updatedCss = Object.entries(mergedRulesObj).map(([property, value]) => `${property}: ${value}`).join('; ');

    console.log(" --- addnewrule ---",{updatedCss, existingRulesObj, newRules});
    return updatedCss;
  }

  //preserves updated rule to html state and undo stacks
  function saveStylesToHtmlState(nodeId, cssText, media) {
    // console.log("---- saveStyle ------",{media, nodeId, cssText})
    let allHtmlStyles = htmlState.getValue().styles.style

    let toEditStyle = allHtmlStyles.find(e => e.style_id == nodeId);

    // console.log({toEditStyle});

    switch (media) {
      case "default":
        toEditStyle.data.styleLess = cssText
        // toEditStyle.data.variants["main"] = {
        //   sel: `#${nodeId}`,
        //   styleLess: cssText
        // }
        break;
      case "470":
        //not yet Implemented only small, medium, large and xxl
        toEditStyle.data.variants["tiny"] = {
          sel: `#${nodeId}`,
          styleLess: cssText
        }
        break;
      case 4:
        toEditStyle.data.variants["small"] = {
          sel: `#${nodeId}`,
          styleLess: cssText
        }
        break;
      case 5:
        toEditStyle.data.variants["medium"] = {
          sel: `#${nodeId}`,
          styleLess: cssText
        }
        break;
      case 2:
        toEditStyle.data.variants["large"] = {
          sel: `#${nodeId}`,
          styleLess: cssText
        }
        break;
      case 1:
        toEditStyle.data.variants["xxl"] = {
          sel: `#${nodeId}`,
          styleLess: cssText
        }
        break;

      default:
        break;
    }

    activeStack.getValue().pushUndo({ parent: null, node: nodeId, case: "StyleChange", nodes: null, position: media, styles: cssText, text: null })

    // console.log(toEditStyle);
  }

  return {
    updateStyleRule,
    updateStyleMediaRule,
  }

}

export default fstyleTools;
