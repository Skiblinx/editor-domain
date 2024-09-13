const currentWindow = window.window;

const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync("p { color: green; }");
extraSheet.replaceSync("body { background-color: green; }");

// Combine the existing sheets and new one
document.adoptedStyleSheets = [extraSheet];

const x = document.querySelector("iframe").contentWindow;
//x = window.frames[0];
x.document.querySelector("body").style.backgroundColor = "#f2f4f8";

var style = x.document.createElement('style');
x.document.head.appendChild(style);
// WebKit hack :(
style.appendChild(x.document.createTextNode(''));
addCSSRule(style.sheet, 'body', "background-color: #f664;", 0);






function addCSSRule(sheet, selector, rules, index) {
    // console.log({sheet});
    if ("insertRule" in sheet) {
        sheet.insertRule(selector + "{" + rules + "}", index);
    } else if ("addRule" in sheet) {
        sheet.addRule(selector, rules, index);
    }
}

// const log = document.querySelector(".event-log-contents");
// const reload = document.querySelector("#reload");

// reload.addEventListener("click", () => {
//   log.textContent = "";
//   setTimeout(() => {
//     window.location.reload(true);
//   }, 200);
// });

// window.addEventListener("load", (event) => {
//   log.textContent += "load\n";
// });

// document.addEventListener("readystatechange", (event) => {
//   log.textContent += `readystate: ${document.readyState}\n`;
// });

// document.addEventListener("DOMContentLoaded", (event) => {
//   log.textContent += `DOMContentLoaded\n`;
// });