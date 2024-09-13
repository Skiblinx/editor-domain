
function processAccordion({ tabSel, listTabSel }, data, callback) {
  // console.log("DOMContentLoaded in...", listTabSel);
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
    });
  });

  // Enable arrow navigation between tabs in the tab list
  let tabFocus = 0;

  tabList.addEventListener("keydown", (e) => {
    // Move right
    //console.log(keydown, { keydown });
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

  async function changeTabs(e, data) {
    const target = e.target;
    const parent = target.parentNode;
    const grandparent = parent.parentNode;
    const testList = data.content.component.list[4];

    //console.log({ target, parent, grandparent, data });

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
    // console.log({ list: data.content.component.list[4].data });
    let newDiv = `<div class="leftSide-component-list" id="leftoverlay-content-${4}">`;
    (await testList) &
      testList.data.options.forEach((ele, i) => {
        newDiv += `<div varient="${i}" data-auto-id="list-${i}" data-td-id="${ele.id}">
                  <div>${ele.label}</div>
                  <img src="" alt="${ele.label}-image" />
              </div>`;
      });
    newDiv += `</div>`;

    // console.log({ newDiv, tabBody, tabBody2, parent });
    newDiv = await domParser(newDiv);

    //tabBody.replaceChildren(newDiv);
    tabBody2.replaceChildren(newDiv);

    tabBody2.toggleAttribute("hidden");

    // Add a click event handler to each options
    let tabInner = document.querySelectorAll(".leftSide-component-list");
    // console.log({ tabInner });
    tabInner.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();
        //trigger add element object
        // console.log("send the payload...", {
        tar: e.target,
          testObj: testList.data.options[0],
          });
      nodeMainManager.addComponent(testList.data.options[0]);
    });
  });
}
  }

function domParser(domStr, type = "text/html") {
  const parser = new DOMParser();

  const doc = parser.parseFromString(domStr, type);
  //const errorNode = doc.querySelector("parsererror");

  // console.log({ doc, doc1: doc.documentElement, first: doc.body.firstChild });

  if (!doc) {
    // parsing failed
    throw new Error("Encountered error while parser dom");
  } else {
    // parsing succeeded
    return doc.body.firstChild; //doc.documentElement;
  }
}




function viewLeftOverlayAddNode2(data) {
  const addElementArr = document.getElementById("add-node-element-body");
  const fragment = document.createDocumentFragment();
  let newItemView = document.createElement("div");
  let tempHtml = document.createElement("div");
  let tempDiv = ``;
  siteComponentsState.getValue().addElement.list.map((ele, i) => {
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

  // console.log({ tempDiv });

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