import { notify } from "./add";
import { tailordom } from "./main";

export default function mimicActions({selectedEle, event, doc, htmlState, cssStyleInstance}) {
  switch (event) {
    case "click":
      clickAction({selectedEle, htmlState, cssStyleInstance})
      break;
    case "dbClick":

      break
    case "moseover":

      break
    default:
      clickAction({selectedEle, htmlState, cssStyleInstance})
      break;
  }
}

let clickInProgress = false;


function clickAction({selectedEle, htmlState, cssStyleInstance}) {

  function traverseUpwards(node) {
    // termination 
    if(node.tagName.toLowerCase() === "body"){
      return
    }


    // for an a tag
    if(node.tagName.toLowerCase() === "a"){
      // Get the hostname of the current page
      const currentHostname = window.location.hostname;

      const nodeUrl = new URL(node.href);
      
      // check for internal page
      const internalpage = htmlState.getValue().pages.find(e  => nodeUrl.pathname === e.route  && node.hostname === currentHostname )

      if(internalpage){
        // navigate to page
        htmlState.getValue().initial_node =internalpage.nodes[0]
        htmlState.getValue().nodes =internalpage.nodes
        htmlState.getValue().styles =internalpage.styles
        htmlState.getValue().id =internalpage.page_id
        htmlState.getValue().title =internalpage.name

        tailordom.render(htmlState.getValue(), cssStyleInstance)

        // set current displayed page text
        const currentDisplayPageText = document.querySelector('.page-menu-contentList > span')
        currentDisplayPageText.textContent = internalpage.name;
        
      }else if(node.hostname === currentHostname && !internalpage){
        // page or route dose not exist 
        notify("404 page not found", "red")
      }else{
        if (!clickInProgress) {
          clickInProgress = true;
          setTimeout(() => {
            if (window.location.href !== node.href) {
              window.location.href = node.href;
            }
            node.click();
            clickInProgress = false;
          }, 100);
        }
        return;

      }
      return
    }


    traverseUpwards(node.parentElement)
  }

  traverseUpwards(selectedEle)
}


