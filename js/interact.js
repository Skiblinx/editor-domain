export const main_database = {
    toolMenu: {
        addElement: {
                typography: [
                    {id: 1, name: "heading", tag: "h1", classes: [], classlist: ["bg"]},
                    {id: 2, name: "link", tag: "a", classes: [], classlist: ["bg"]},
                    {id: 3, name: "text", tag: "p", classes: [], classlist: ["bg"]},
                    {id: 4, name: "quote", tag: "p", classes: [], classlist: ["bg"]},
                    {id: 5, name: "paragraph", tag: "p", classes: [], classlist: ["bg"]},
                    {id: 6, name: "button", tag: "button", classes: [], classlist: ["bg"]},
                ]
            }
    }
};

export const startUp = (function startUp(props){
    const elementContent = props.toolMenu.addElement.typography;
    //States
    let ACTIVE_CONTAINER_ELE_ID = "body123456";
    let SELECTED_ELE_ID = null;

    //ACTION Handlers

    const updateContainer= (id) => ducument.getElementById(id);


    //Other unordered methods

    function showElement(eleData, parentElemId = "body") {
        //get the paraent 
        // from the activeContainer
        //create new with data and styling
        const newElement = document.createElement(eleData.tag);
        //console.log({newElement})
        newElement.classList.add("golf")//eleData.classlist[0]);
        newElement.style.padding = "20px";
        newElement.style.backgroundColor = "yellow";
        // then append to parent
        //document.getElementById(parentElemId).appendChild(newElement);
        document.querySelector(parentElemId).appendChild(newElement);

        //update the current container
        ACTIVE_CONTAINER_ELE_ID = eleData.id;
    }
      
    function setupElement() {
      for (let i = 0; i < elementContent.length; i++) {
          const item = elementContent[i];
          //base display
          showElement(item);
          //document.getElementById(`${item.id}`).onclick = showElement(item);
          // document.getElementById(`${item.id}`).onclick = () => {
          //   showElement(item);
          // };
      }
    }
      
    //  setupElement();
})(main_database)