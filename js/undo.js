import { PAGES_CHANGED, SITE_STACKS } from '../api/dataaccess'
import { tailordom } from './main'


class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}


//undo and redo stack with Linked lists
export class Stack {
  constructor({ htmlState, cssStyleInstance, previewForGuest, id }) {
    this.document = null
    this.undoTop = null;
    this.redoTop = null
    this.undoBottom = null;
    this.redoBottom = null;
    this.undoLength = 0;
    this.redoLength = 0;
    this.state = htmlState;
    this.cssSI = cssStyleInstance ? cssStyleInstance : null
    this.isGuest = previewForGuest.getValue()
    this.id = id
  }


  pageStatus(){
    const page = PAGES_CHANGED.find(e => e.id == this.id)
    page.changed = true
  }


  undoPeek() {
    return this.undoTop
  }
  redoPeek() {
    return this.redoTop
  }

  getStyleInstance(value) {
    return this.cssSI = value
  }

  setRedoIcon() {
    this.redoButtons(this.redoLength)
  }

  setUndoIcon() {
    this.undoButtons(this.undoLength)
  }

  clearRedoStack() {
    this.redoTop = null
    this.redoBottom = null;
    this.redoLength = 0
  }

  undoButtons(length) {
    if (this.isGuest == false) {
      let back = document.querySelector('.button-back')
      back.style.cursor = "pointer"
      // console.log(length);
      if (length != 0) {
        back.childNodes[1].setAttribute('stroke', "#fff")
      } else {
        back.childNodes[1].setAttribute('stroke', null)
      }
    }

  }

  redoButtons(length) {
    if (this.isGuest == false) {
      let forward = document.querySelector('.button-forward')
      forward.style.cursor = "pointer"
      // console.log(length);
      if (length <= 0) {
        forward.childNodes[1].setAttribute('stroke', null)
      } else {
        forward.childNodes[1].setAttribute('stroke', "#fff")
      }
    }
  }


  //push to stack from dom
  pushUndo(value, inner) {
    // console.log(" ----pushUndo ----",{value, inner})


    const newNode = new Node(value);
    if (this.undoLength == 0) {
      this.undoBottom = newNode
    }
    const hPointer = this.undoTop
    this.undoTop = newNode
    this.undoTop.next = hPointer
    this.undoLength++
    //set active state
    this.undoButtons(this.undoLength)
    // console.log(this, this.redo);
    // console.log(this.redoLength, inner);
    if (!inner) {
      this.clearRedoStack()
      this.undoButtons(this.undoLength)
      this.redoButtons(this.redoLength)
    }

    //record the page change
    this.pageStatus()

    return this
  }

  pushRedo(value) {
    const newNode = new Node(value);
    if (this.redoLength == 0) {
      this.redoBottom = newNode
    }
    const hPointer = this.redoTop
    this.redoTop = newNode
    this.redoTop.next = hPointer
    this.redoLength++
    //set active state
    // console.log(this,this.redo);
    this.redoButtons(this.redoLength)
    return this
  }

  popUndo() {
    // const leftPanelWrapper = document.querySelector(`#td-overlay-panel-layer-left`);
    if (!this.undoTop) {
      return null
    }
    //  push to redo before deleting
    this.pushRedo(this.undoTop.value)
      ;
    // console.log(this.undoTop,this.state.getValue().nodes);

    let current = this.undoTop.value
    let state = this.state.getValue()
    let nodeToChange;
    const canvasIframe = document.querySelector("iframe").contentWindow;
    const canvasDoc = canvasIframe.document;
    let docNode;


    switch (this.undoTop.value.case) {
      case "Added":
        //opposite of add
        const parent = state.nodes.find(e => e._id === current.parent)
        parent.children.splice(current.position, 1)

        for (const node of current.nodes) {
          let indexofnode = state.nodes.indexOf(node)
          state.nodes.splice(indexofnode, 1)
        }
        tailordom.render(state, this.cssSI)
        break;
      case "Removed":
        //add elements back
        current = this.undoTop.value
        state = this.state.getValue()
        const parentNode = this.state.getValue().nodes.find(e => e._id === current.parent)
        parentNode.children.splice(current.position, 0, current.node)
        this.state.getValue().nodes.push(...current.nodes)


        // console.log(state);
        tailordom.render(this.state.getValue(), this.cssSI)

        break;
      case "StyleChange":
        // console.log(this.undoTop.next.value.styles, this.undoTop,this.state.getValue().styles.style);
        current = this.undoTop.value
        state = this.state.getValue()
        nodeToChange = state.styles.style.find(e => e.style_id == current.node)

        switch (current.position) {
          case "default":
            nodeToChange.data.styleLess = current.styles
            nodeToChange.data.variants["main"] = {
              sel: `#${current.node}`,
              styleLess: current.styles
            }
            break;
          case "470":
            nodeToChange.data.variants["tiny"] = {
              sel: `#${current.node}`,
              styleLess: current.styles
            }
            break;
          case 4:
            nodeToChange.data.variants["small"] = {
              sel: `#${current.node}`,
              styleLess: current.styles
            }
            break;
          case 5:
            nodeToChange.data.variants["medium"] = {
              sel: `#${current.node}`,
              styleLess: current.styles
            }
            break;
          case 2:
            nodeToChange.data.variants["large"] = {
              sel: `#${current.node}`,
              styleLess: current.styles
            }
            break;
          case 1:
            nodeToChange.data.variants["xxl"] = {
              sel: `#${current.node}`,
              styleLess: current.styles
            }
            break;

          default:
            break;
        }
        tailordom.render(state, this.cssSI)
        break;
      case "TextChange":
        //undo in  html odject
        current = this.undoTop.value
        nodeToChange = state.nodes.find(e => e._id === current.node)
        nodeToChange.v = current.text

        //redo in  html doc
        const textParent = state.nodes.find(e => e.children && e.children[0] === current.node)
        // console.log(textParent);
        docNode = canvasDoc.getElementById(textParent._id)
        // console.log(docNode);

        docNode.innerText = current.text
        break;

      case "Img Src Changed":
        //undo in  html odject
        current = this.undoTop.value
        nodeToChange = state.nodes.find(e => e._id === current.node)

        //remove current src and insert the prev src
        docNode = canvasDoc.getElementById(current.node)
        // change on dom
        docNode.src = current.beforeSrc
        // change on htmlState
        nodeToChange.data.src = current.beforeSrc
        break
      default:
        break;
    }

    this.undoTop = this.undoTop.next
    this.undoLength--;
    if (this.undoLength == 0) {
      this.undoBottom = null
    }
    // undoButtons(this.undoLength,this.redoLength)
    this.undoButtons(this.undoLength)
    // console.log(this.undoTop,this.undoBottom);
  }

  popRedo() {
    if (!this.redoTop) {
      return null
    }
    //  push to redo before deleting
    const pushToUndoFromInsideTheClass = true

    this.pushUndo(this.redoTop.value, pushToUndoFromInsideTheClass)
    // console.log(this.redoTop);
    let current = this.redoTop.value
    let state = this.state.getValue()
    let nodeToChange;
    const canvasIframe = document.querySelector("iframe").contentWindow;
    const canvasDoc = canvasIframe.document;
    let docNode;

    switch (this.redoTop.value.case) {
      case "Added":

        //add element back
        current = this.redoTop.value
        const parent = state.nodes.find(e => e._id === current.parent)
        parent.children.splice(current.position, 0, current.node)
        state.nodes.push(...current.nodes)

        tailordom.render(state, this.cssSI)
        break;

      case "Removed":

        //remove element back 
        current = this.redoTop.value
        state = this.state.getValue()
        const parentR = this.state.getValue().nodes.find(e => e._id === current.parent)
        parentR.children.splice(current.position, 1)

        for (const node of current.nodes) {
          let indexofnode = state.nodes.indexOf(node)
          // console.log(indexofnode,'two');
          state.nodes.splice(indexofnode, 1)
        }

        tailordom.render(state, this.cssSI)
        break;

      case "StyleChange":

        current = this.redoTop.value
        state = this.state.getValue()
        nodeToChange = state.styles.style.find(e => e.style_id == current.node)

        switch (current.position) {
          case "default":
            nodeToChange.data.styleLess = current.styles
            nodeToChange.data.variants["main"] = {
              sel: `#${current.node}`,
              styleLess: current.styles
            }
            break;
          case "470":
            nodeToChange.data.variants["tiny"] = {
              sel: `#${current.node}`,
              styleLess: current.styles
            }
            break;
          case 4:
            nodeToChange.data.variants["small"] = {
              sel: `#${current.node}`,
              styleLess: current.styles
            }
            break;
          case 5:
            nodeToChange.data.variants["medium"] = {
              sel: `#${current.node}`,
              styleLess: current.styles
            }
            break;
          case 2:
            nodeToChange.data.variants["large"] = {
              sel: `#${current.node}`,
              styleLess: current.styles
            }
            break;
          case 1:
            nodeToChange.data.variants["xxl"] = {
              sel: `#${current.node}`,
              styleLess: current.styles
            }
            break;

          default:
            break;
        }
        tailordom.render(state, this.cssSI)
        break;
      case "TextChange":
        //redo in  html odject
        current = this.redoTop.value
        nodeToChange = state.nodes.find(e => e._id === current.node)
        nodeToChange.v = current.text

        //redo in html doc
        const textParent = state.nodes.find(e => e.children && e.children[0] === current.node)
        docNode = canvasDoc.getElementById(textParent._id)

        docNode.innerText = current.text
        break;
      case "Img Src Changed":
          //undo in  html odject
          current = this.undoTop.value
          nodeToChange = state.nodes.find(e => e._id === current.node)
          //remove current src and insert the prev src
          docNode = canvasDoc.getElementById(current.node)
          // change on dom
          docNode.src = current.afterSrc
          // change on htmlState
          nodeToChange.data.src = current.afterSrc
          break
      default:
        break;
    }

    this.redoTop = this.redoTop.next
    this.redoLength--;
    if (this.redoLength == 0) {
      this.redoBottom = null
    }
    this.redoButtons(this.redoLength)
  }

  deleteUndo() {
    if (!this.undoTop) {
      return null
    }
    this.undoTop = this.undoTop.next
    this.undoLength--;
    if (this.undoLength == 0) {
      this.undoBottom = null
    }
    // console.log(this);
  }

  deleteRedo() {
    if (!this.redoTop) {
      return null
    }
    this.redoTop = this.redoTop.next
    this.redoLength--;
    if (this.redoLength == 0) {
      this.redoBottom = null
    }
    // console.log(this);
  }
}







export function undo(htmlState, previewForGuest) {
  //setup the redo and undo stacks


  const newStacks = htmlState.getValue().pages.map((e) => {


    const stack = new Stack({ htmlState, cssStyleInstance: null, previewForGuest, id:e.page_id })

    PAGES_CHANGED.push({id:e.page_id, changed: false})

    return { id: e.page_id, stack }
  })

  SITE_STACKS.push(...newStacks)

  let initialStack = newStacks[0]

  // console.log(newStacks);

  return { stackProperties: initialStack }

}

export function addDomListener(stack) {
  document.querySelector('.button-back').addEventListener("click", () => {
    // for undo
    stack.getValue().popUndo()
    // console.log("clicked undo");
  });

  //dom listener for redo
  document.querySelector('.button-forward').addEventListener("click", () => {
    //for redo   
    stack.getValue().popRedo()
    // console.log("clicked redo");
  })

  // document.addEventListener("keydown", e => {
  //   e.preventDefault()

  //   if ((e.ctrlKey || e.metaKey) && e.key === "z") {
  //     stack.getValue().popUndo()
  //     console.log("undone")
  //   } else if ((e.ctrlKey || e.metaKey) && e.key === "y") {
  //     stack.getValue().popRedo()
  //     console.log("redo");
  //   }
  // })

}


