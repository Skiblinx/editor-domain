import {SITE_STACKS} from '../api/dataaccess'
import { tailordom } from './main'
import {Stack} from './undo'
import { tdApiRequestInstance } from '../utils/requests2'
 
export const createLi = (htmlState,cssStyleInstance,activeStack) => {
  const selectTrigger = document.querySelector('.page-open-list-dropdown')
  const selectTriggerTextSpan = document.querySelector('.page-menu-contentList > span')
  const selectOptions = document.querySelector('.select-options')
  const divider = document.createElement("hr")
  const toDashboard  = document.createElement("option")
  toDashboard.innerText = "Go to Dashboard"
  toDashboard.classList.add('select-option');

  function displayOptions() {
    selectOptions.innerHTML = "";
    htmlState.getValue().pages.forEach((optionText) => {
        const option = document.createElement('li');
        option.classList.add('select-option');
        option.textContent = optionText.name;
        selectOptions.appendChild(option);
        option.addEventListener('click', () => {
          // selectTrigger.textContent = optionText.head.title; // Update the displayed option
          selectTriggerTextSpan.textContent = optionText.name; // Update the displayed option
            selectOptions.style.display = 'none'; // Hide the options
            // console.log('Selected option:', optionText.id); // Log the selected option
            const node = htmlState.getValue().pages.find(e => e.page_id == optionText.page_id)
            // console.log(node);
            htmlState.setValue({
                pages: htmlState.getValue().pages,
                initial_node: node.nodes[0], 
                nodes: node.nodes, 
                styles: node.styles,
                id:node.page_id,
                title:node.name,
            });
            // console.log(htmlState.getValue());      
            tailordom.render(htmlState.getValue(), cssStyleInstance);
            // console.log(optionText._id,'jjjjjjjjjjjjjj');
            let newActiveStack = SITE_STACKS.find((e) => e.id == optionText.page_id)
            // console.log(newActiveStack);
            activeStack.setValue(newActiveStack.stack)
            activeStack.getValue().getStyleInstance(cssStyleInstance)
            activeStack.getValue().setUndoIcon()
            activeStack.getValue().setRedoIcon()
        });
    });


    selectOptions.appendChild(divider)
    selectOptions.appendChild(toDashboard)


    toDashboard.addEventListener("click", () => {
      const confirmChoice = confirm("Go to Dashboard")
      if(confirmChoice){
        window.location.replace(process.env.DASHBOARD_REPO_URL)
      }

    })
  }

  displayOptions()
  // Toggle the options display on click
  selectTrigger.addEventListener('click', () => {
      if (selectOptions.style.display === 'block') {
          selectOptions.style.display = 'none';
      } else {
          selectOptions.style.display = 'block';
          displayOptions()
      }
  });
  
  // Close the options when clicking outside the custom select
  document.addEventListener('click', (event) => {
      if (!selectTrigger.contains(event.target)) {
          selectOptions.style.display = 'none';
      }
  });
  // console.log(htmlState.getValue(),activeStack.getValue())
}


export async function newPage({formData, htmlState, cssStyleInstance, activeStack,appState,previewForGuest}) {
  const leftPanelWrapper = document.querySelector(`#td-overlay-panel-layer-left`);
  const selectTrigger = document.querySelector('.page-menu-contentList')
  const {name,route,slug,head,id} = formData
  const Page ={
    route,
    name,
    head,
    slug,           
    page_id:id,
    nodes:[
      {
        num: 1,
        _id: "63bd5deeb0d2be5075f4dc90", 
        type: "Body", 
        tag: "main",
        tdId:"1234", 
        children: [],
        classes: ["main"]
      },
    ],
    styles:{
      data: {
          appliedStylesMap: {},
          breakpoints: {
              main: {maxWidth: 10000}, large: {minWidth: 1280}, xxl: {minWidth: 1920}, medium: {maxWidth: 991}, small: {maxWidth: 767},tiny: {maxWidth: 479}, xxl: {minWidth: 1920}
          }, 
          macros: [], migrations: {stylesNext: true}, swatches: []
      },
      style: [
        {
          style_id: "main",
          data: {
              comb: "", affects: {"63bd5deeb0d2be0101f4dc8f": 1},
              children: [], name: "Main default", sel: ".main",
              styleLess: "width:100%;height:100%",
              type: "class",
              variants : {small: {sel: ".testimonial-column-light", styleLess: "padding: 30px;"}},
          }
        },
      ],
    },
  }

  try {
    const {data} = await tdApiRequestInstance.createSitePage(appState.getValue()._id, Page)
    notify("page created successfully", "green")
    //proceed to add the page to the htmlState
    htmlState.getValue().pages.push(data)
  } catch (error) {
    notify("failed to create page", "red")
  }
  

  const node = htmlState.getValue().pages.find(e => e.page_id == id)

  htmlState.setValue({
      pages:htmlState.getValue().pages,
      initial_node: node.nodes[0], 
      nodes: node.nodes, 
      styles: node.styles,
      id:node.id,
      title:node.head.title,
  });

  // console.log(htmlState.getValue());
  
  tailordom.render(htmlState.getValue(), cssStyleInstance);

  selectTrigger.textContent = node.head.title
  leftPanelWrapper.style.display = "none";
  
  const stack = new Stack({htmlState, cssStyleInstance, previewForGuest}) 

  SITE_STACKS.push({id,stack})

  const newActiveStack = SITE_STACKS.find((e) => e.id == id)
  activeStack.setValue(newActiveStack.stack)

  activeStack.getValue().setUndoIcon()
  activeStack.getValue().setRedoIcon()
}


export function notify(message,color) {
  const topBar = document.querySelector('.topBar')
  const notifyDiv = document.createElement('div')
  const notifyP = document.createElement('p')
  notifyDiv.classList.add('notificationDiv')
  notifyP.classList.add('notificationP')
  notifyDiv.appendChild(notifyP)
  notifyDiv.style.backgroundColor = color && color
  notifyP.innerText = message
  topBar.appendChild(notifyDiv)


  setTimeout(() => {
    document.querySelector('.notificationDiv').remove()
  },5000)
  
}