//media Queries to use for 991 to 1280 to be set as default

//  OPTION 1. if you can write you templates with this queries please proceed else
// @media (max-width:470px) {}
// @media (max-width:767px) {}
// @media (max-width:990px) {}
// write normal styles 991 to 1280px
// @media (min-width:1281px) {}
// @media (min-width:1600px) {}

// OPTION 2 you  should you these other set of queries to write your templates
// write default style form 0px
// @media (min-width:470px) {}
// @media (min-width:767px) {}
// @media (min-width:990px) {}
// @media (min-width:1281px) {}
// @media (min-width:1600px) {}


// EDITOR STYLING OPERTION USES OPTION 1, SO IF YOU CAN USE OPTION TO WRITE YOUR CSS STYLES

function generateRandId() {
  let _output = "";
  var captchaStr = "";
  let alphaNums = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  function generateTdId() {
    //let emptyArr = [];
    let emptyStr = "";
    let emptyArr = Array.from({ length: 5 }, (e) => []);

    for (let i = 1; i <= 8; i++) {
      emptyArr[0].push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
      //emptyStr = emptyStr.concat(" ", alphaNums[Math.floor(Math.random() * alphaNums.length)])
    }
    captchaStr = captchaStr.concat("", emptyArr[0].join(""));
    for (let i = 1; i <= 4; i++) {
      emptyArr[1].push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
      //emptyStr = emptyStr.concat(" ", alphaNums[Math.floor(Math.random() * alphaNums.length)])
    }
    captchaStr = captchaStr.concat("-", emptyArr[1].join(""));
    for (let i = 1; i <= 4; i++) {
      emptyArr[2].push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
      //emptyStr = emptyStr.concat(" ", alphaNums[Math.floor(Math.random() * alphaNums.length)])
    }
    captchaStr = captchaStr.concat("-", emptyArr[2].join(""));
    for (let i = 1; i <= 4; i++) {
      emptyArr[3].push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
      //emptyStr = emptyStr.concat(" ", alphaNums[Math.floor(Math.random() * alphaNums.length)])
    }
    captchaStr = captchaStr.concat("-", emptyArr[3].join(""));
    for (let i = 1; i <= 12; i++) {
      emptyArr[4].push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
      //emptyStr = emptyStr.concat(" ", alphaNums[Math.floor(Math.random() * alphaNums.length)])
    }

    captchaStr = captchaStr.concat("-", emptyArr[4].join(""));

    // ctx.clearRect(0, 0, captchaText.width, captchaText.height);
    // ctx.fillText(captchaStr, captchaText.width/4, captchaText.height/2);

    //return emptyArr;
    return {
      emptyArr,
      captchaStr,
      // emptyStr
    };
  }

  const resl = generateTdId();
  //_output = resl[0.join('')],
  //console.log({resl})
  _output = resl.captchaStr;

  return `id${_output}`;
}

function htmlElementToJson(elementId) {
    const element = document.getElementById(elementId);
  
    if (!element) {
      console.error(`Element with ID ${elementId} not found.`);
      return null;
    }
  
    const nodes = [];
  
    function parseNode(node) {
      const result = {
        _id: generateRandId(),
        tag: node.tagName.toLowerCase(),
        classes: Array.from(node.classList),
        data: {},
        type: node.tagName.toLowerCase(),
        children: [],
      };
  
      // Extract attributes
      Array.from(node.attributes).forEach((attr) => {
        if (attr.name !== 'class' && attr.name !== 'id' && attr.name !== "data-type") {
            result.data[attr.name] = attr.value;
          }
      });
  
      // Process child nodes
      Array.from(node.childNodes).forEach((childNode) => {
        if (childNode.nodeType === Node.ELEMENT_NODE) {
          const childResult = parseNode(childNode);
          result.children.push(childResult._id);
          nodes.push(childResult);
        } else if (childNode.nodeType === Node.TEXT_NODE) {
          const textContent = childNode.textContent.trim();
          if (textContent !== '') {
            const textNode = {
              _id: generateRandId(),
              text: true,
              type:"text",
              v: textContent,
            };
            result.children.push(textNode._id);
            nodes.push(textNode);
          }
        }
      });
  
      return result;
    }
  
    const rootNode = parseNode(element);
    nodes.push(rootNode);
  
    // Move the root node to the beginning of the array
    nodes.unshift(nodes.pop());
    return nodes;
}


// Example usage
const elementId = "btn6"; // Replace with the actual ID of your HTML element
const nodesArray = htmlElementToJson(elementId);

if (nodesArray) {
   console.log(nodesArray, 'NULL');
}

//  ========================C O N V E R T ======== C S S ==================

function transformCssToJson(cssString) {
  const jsonResult = [];
  const VarientArr = [];
  const mediaTurnedNormalRule = [];

  const addMediaRuleAsNormalRule = (cssRule) => {
    const { cssText, conditionText } = cssRule;
    const cssTextForstyleForMedia = cssText.split(conditionText)[1];
    const mainCssText = cssTextForstyleForMedia.length > 6 ? cssTextForstyleForMedia.substring(3, cssTextForstyleForMedia.length - 3) : cssTextForstyleForMedia = "";
    const selectorForStyle = "@media " + conditionText;
    // console.log(selectorForStyle);
    // console.log(mainCssText);

    const id = generateRandomId();

    const jsonItem = {
      style_id: id,
      data: {
        comb: "",
        affects: {},
        children: [],
        name: "MediaRuleTurnedNormal",
        sel: selectorForStyle,
        styleLess: mainCssText,
        type: "class",
        variants: {},
      },
    };
    mediaTurnedNormalRule.push(jsonItem);
  };

  const parseCssRules = (cssRules) => {
    for (const cssRule of cssRules) {
      const { selectorText, style } = cssRule;
      const [className, ...variants] = selectorText.split(".");
      // console.log(cssRule,variants);
      if (cssRule.parentRule != null) {
        VarientArr.push(cssRule);
      } else {
        const id = generateRandomId();

        const jsonItem = {
          style_id: id,
          data: {
            comb: "",
            affects: {},
            children: [],
            name: className,
            sel: selectorText,
            styleLess: style.cssText,
            type: "class",
            variants: {},
          },
        };
        jsonResult.push(jsonItem);
      }
    }
  };

  const generateRandomId = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };

  // Parse the CSS string
  const styleElement = document.createElement("style");
  styleElement.textContent = cssString;
  document.head.appendChild(styleElement);

  const styleSheet = styleElement.sheet;

  // Handle media queries
  for (const cssRule of styleSheet.cssRules) {
    if (cssRule.type === CSSRule.MEDIA_RULE) {
      if (
        cssRule.conditionText == "(min-width: 470px)" ||
        cssRule.conditionText == "(min-width: 767px)" ||
        cssRule.conditionText == "(min-width: 991px)"
      ) {
        //because we are switching form min-width to max-width for
        addMediaRuleAsNormalRule(cssRule);
      } else {
        parseCssRules(cssRule.cssRules);
      }
    //   console.log(cssRule, "media");
    } else if (cssRule.type === CSSRule.STYLE_RULE) {
      parseCssRules([cssRule]);
    //   console.log(cssRule, "normal");
    }
  }

  //Add final varients to created array of styles
  function addVrients() {
    for (const rule in VarientArr) {
      const vSelectorText = VarientArr[rule].selectorText;
      const parent = jsonResult.find((e) => e.data.sel == vSelectorText);

      const mediaQueryString = VarientArr[rule].parentRule.conditionText;

      // Use a regular expression to extract the pixel value
      const pixelValueMatch = mediaQueryString.match(/\d+/);

      // Check if a match is found
      let pixel;
      if (pixelValueMatch) {
        const pixelValue = parseInt(pixelValueMatch[0]);
        pixel = pixelValue;
      } else {
        // console.log("No pixel value found");
      }

      let jsonItem;

      if (!parent) {
        const id = generateRandomId();
        jsonItem = {
          style_id: id,
          data: {
            comb: "",
            affects: {},
            children: [],
            name: vSelectorText,
            sel: vSelectorText,
            styleLess: "",
            type: "class",
            variants: {},
          },
        };
      }

      switch (pixel) {
        case 470:
          if (!parent) {
            jsonItem.data.variants["tiny"] = {
              sel: vSelectorText,
              styleLess: VarientArr[rule].style.cssText,
            };
          } else {
            parent.data.variants["tiny"] = {
              sel: vSelectorText,
              styleLess: VarientArr[rule].style.cssText,
            };
          }
          break;
        case 767:
          if (!parent) {
            jsonItem.data.variants["small"] = {
              sel: vSelectorText,
              styleLess: VarientArr[rule].style.cssText,
            };
          } else {
            parent.data.variants["small"] = {
              sel: vSelectorText,
              styleLess: VarientArr[rule].style.cssText,
            };
          }
          break;
        case 990:
          if (!parent) {
            jsonItem.data.variants["medium"] = {
              sel: vSelectorText,
              styleLess: VarientArr[rule].style.cssText,
            };
          } else {
            parent.data.variants["medium"] = {
              sel: vSelectorText,
              styleLess: VarientArr[rule].style.cssText,
            };
          }
          break;
        case 1280:
          if (!parent) {
            jsonItem.data.variants["large"] = {
              sel: vSelectorText,
              styleLess: VarientArr[rule].style.cssText,
            };
          } else {
            parent.data.variants["large"] = {
              sel: vSelectorText,
              styleLess: VarientArr[rule].style.cssText,
            };
          }
          break;
        default:
          break;
      }

      if (jsonItem) {
        jsonResult.push(jsonItem);
      }
    }
  }

  addVrients();
  jsonResult.push(...mediaTurnedNormalRule);
  return jsonResult;
}

// Example usage:
const cssString = `Footer-second{
    display: flex;
    padding: 56.889px 30px 42.667px 30px;
    flex-direction: column;
    gap: 56.889px;
    background: var(--Base-White, #FFF);
  }
  
  .Footer-second-section-first{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 28.444px;
    align-self: stretch;
  }
  
  .Footer-second-section-first-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex: 1 0 0;
  }
  
  .Footer-second-section-first-container2{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14.222px;
  }
  
  .Footer-second-section-first-p2{
    color: var(--Primary-700, #6941C6);
  font-family: Inter;
  font-size: 14.222px;
  font-style: normal;
  font-weight: 500;
  line-height: 21.333px;
  }
  
  .Footer-second-section-first-p{
    max-width: 350px;
    color: var(--Gray-600, #475467);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px; 
  }
  
  .Footer-second-section-first-uls{
    display: flex;
    align-items: flex-start;
    gap: 28.444px;
    justify-content: space-between;
    flex: 1;
    width: 100%;
  }
  
  .Footer-second-section-first-ul{
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 17.333px;
    align-self: stretch;
  }
  
  .Footer-second-section-first-li{
    list-style: none;
    color: var(--Gray-600, #475467);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 13px;
  }
  
  
  .Footer-second-section-first-a{
    cursor: pointer;
    text-decoration: none;
    color: var(--Gray-600, #667085);
    font-size: 14px;
    line-height: 16px;
  }
  
  .Footer-second-section-second{
    display: flex;
    padding-top: 28.444px;
    flex-direction: column;
    align-items: flex-start;
    gap: 28.444px;
    align-self: stretch;
    justify-content: space-between;
    border-top: 0.889px solid var(--Gray-200, #EAECF0);
  }
  
  .Footer-second-section-scecond-p{
    color: var(--Gray-500, #667085);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21.333px;
  }
  
  .Footer-second-section-scecond-img{
    display: flex;
    align-items: center;
    gap: 21.333px;
  }
  
  .Footer-second-section-scecond-img{
    padding: 2px;
    text-decoration: none;
    outline: none;
  }
  
  @media(min-width:470px){
    .Footer-second-section-first{
      flex-direction: row;
    }
  }
  
  @media(min-width:767px){
    .Footer-second-section-second{
      flex-direction: row;
    }
  }
  
  
  
  
  
  @media(min-width:991px){
  
    .Footer-second-section-first-li{
      font-size: 14px;
      line-height: 16.333px;
  
    }
  
    .Footer-second-section-first-a{
      font-size: 16px;
      line-height: 21.333px;
  
    }
    .Footer-second-section-first-p{
      font-size: 16px;
      line-height: 23.333px;
  
    }
  
    .Footer-second-section-scecond-p{
      font-size: 14px;
    }
  }`;

const result = transformCssToJson(cssString);
console.log(result);

// =============components ========================================

