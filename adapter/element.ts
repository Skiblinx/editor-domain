function ElementAdapter(appUtils, state){
    function htmlElement(canvasWindow: Window, tLayer, nodeInstance) {
        // let doc = canvasWindow.document;
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
      
          // console.log("new node....");
          // console.log({ activeElement });
          //hide sidebar
          switchOnOffSideBar(false, activeElement.node); //off
          state.htmlSate.nodes.concat(activeElement.node);
          state.sethtmlSate({ nodes: state.htmlSate.nodes });
          state.setCssStyle();
          state.setJsNode();
      
          //setActiveTab(true, activeElement);
          //viewInstance.renderLeftSideView(true, activeElement);
      
          tLayer.view.renderRightSideViewStyle({ status: true, activeElement });
      
          //sidebarStartup(activeElement);
      
          //move focus to newly add element
          canvasWindow.scrollTo({
            top: activeElement.node.offsetTop,
            left: activeElement.node.offsetLeft,
            behavior: "smooth",
          });
        }
      
        async function addHeadingElement(ele, parentNode) {
          // console.log("entering....3b : ", ele.dataset);
          const setHtmlObj = [
            {
              tag: "h1",
              type: "Heading",
              _id: "0a3cc0d1-866a-3dd3-09ac-034856d1bcb7",
              children: ["0a3cc0d1-866a-6dd3-09ac-034856d1bcb7"],
            },
            {
              text: true,
              v: "Heading H1",
              _id: "0a3cc0d1-866a-6dd3-09ac-034856d1bcb7",
            },
          ];
          let setCssStyleObj = [];
      
          //way forward
          const createdComp = await nodeInstance.addComponent(setHtmlObj);
      
          state.setActiveSection(createdComp);
          return {
            virtualHtml: setHtmlObj,
            virtualCss: setCssStyleObj,
            node: createdComp,
          };
        }
      
        async function addLinkElement(ele, parentNode) {
          const setHtmlObj = [
            {
              tag: "a",
              type: "Link",
              _id: "0a3cc0d1-866a-3dd3-1111-034856d1bcb7",
              children: ["0a3cc0d1-0000-6dd3-09ac-034856d1bcb7"],
            },
            {
              text: true,
              v: "Welcome back home",
              _id: "0a3cc0d1-0000-6dd3-09ac-034856d1bcb7",
            },
          ];
          let setCssStyleObj = [];
      
          const createdComp = nodeInstance.addComponent(setHtmlObj);
          return {
            virtualHtml: setHtmlObj,
            virtualCss: setCssStyleObj,
            node: createdComp,
          };
        }
      
        async function addContainerElement(ele, parentNode) {
          // console.log({ dataset: ele.dataset });
          const setHtmlObj = [
            {
              tag: "section",
              type: "Section",
              _id: "21000133-866a-3dd3-09ac-034856d1bcb7",
              children: [],
            },
          ];
          let setCssStyleObj = [];
      
          //way forward
          const createdComp = await nodeInstance.addComponent(setHtmlObj);
          return {
            virtualHtml: setHtmlObj,
            virtualCss: setCssStyleObj,
            node: createdComp,
          };
        }
      
        function addElement(ele, parentNode) {
          // console.log("adding element.. data-td-id");
          const setHtmlObj = [
            {
              _id: "fb8d0000-94a0-f31f-fbec-e77e0a73592",
              type: "div",
              tag: "div",
              children: ["fb8d0000-866a-6dc2-09ac-034856d1b33d"],
              classes: ["ac43e80a-7a50-03c2-5332-c1494c1b2527"],
              data: { grid: { type: "section" }, tag: "div" },
            },
            {
              _id: "fb8d0000-866a-6dc2-09ac-034856d1b33d",
              text: true,
              v: "Powered by TailorDom",
            },
          ];
      
          const setCssStyleObj = [];
      
          //create element
          const createEle = document.createElement(ele.dataset.tdElement);
          createEle.textContent = `Heading: Welcome back home`;
      
          //add default styles
          parentNode.appendChild(createEle);
    
          return {
            virtualHtml: setHtmlObj,
            virtualCss: setCssStyleObj,
            node: createEle,
          };
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

    return Object.freeze({
        htmlElement
    })
}

//const ElementAdapterInstance = ElementAdapter();