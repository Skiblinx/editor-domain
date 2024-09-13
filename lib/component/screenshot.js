import html2canvas from 'html2canvas'
import { tdApiRequestInstance } from "../../utils/requests2";
import { notify } from '../../js/add';


export function takeScreenShot(nodeToUse, siteId) {
  // console.log(siteId);


  function cloneNodeWithStylesAndReplaceImages(node, proxyUrl) {
    // Function to copy computed styles from one element to another
    function copyStyles(sourceElement, targetElement) {

      if (sourceElement.nodeType !== Node.TEXT_NODE) { // Check if the node is an element
        const computedStyle = getComputedStyle(sourceElement);
        for (let key of computedStyle) {
          targetElement.style[key] = computedStyle.getPropertyValue(key);
        } // Clone text or comment nodes as-is
      } else {
        // console.log(sourceElement);
      }

    }

    // Recursive function to deep clone the node and its children
    function cloneRecursive(sourceNode) {
      // Clone the node
      const clonedNode = sourceNode.cloneNode(false); // shallow clone

      // Copy styles to the cloned node
      // console.log(sourceNode, clonedNode);
      copyStyles(sourceNode, clonedNode);

      // If the node is an image, replace its source
      if (clonedNode.tagName === 'IMG') {
        // let base64String;
        // clonedNode.src = newImageSrc
        const originalSrc = sourceNode.src;
        clonedNode.src = `${proxyUrl}${encodeURIComponent(originalSrc)}`;

      }

      // Recursively clone and append children
      for (let child of sourceNode.childNodes) {
        clonedNode.appendChild(cloneRecursive(child));
      }

      return clonedNode;
    }

    // Start the cloning process
    return cloneRecursive(node);
  }



  const proxyUrl = 'https://corsproxy.io/?';

  // Add proxy to all images within the root node

  // Remove proxy from all images within the root node

  try {
    // console.log("hhf");
    const clonedNode = cloneNodeWithStylesAndReplaceImages(nodeToUse, proxyUrl);
    // console.log(clonedNode);
    const newFrame = document.createElement("iframe")
    document.body.appendChild(newFrame)
    newFrame.contentDocument.body.appendChild(clonedNode)
    // console.log(newFrame);

    newFrame.style.position = "fixed"
    newFrame.style.zIndex = "-99999999"
    newFrame.style.bottom = "-20000000000px"
    const doc = newFrame.contentDocument.body

    html2canvas(doc, {
      useCORS: true,
    }, { scale: 2 }).then(async function (canvas) {
      // Original dimensions
      var originalWidth = canvas.width;
      var originalHeight = canvas.height;

      // New dimensions
      var newWidth = 350;
      var newHeight = 400;

      // Create a new canvas
      var newCanvas = document.createElement('canvas');
      newCanvas.width = newWidth;
      newCanvas.height = newHeight;
      var ctx = newCanvas.getContext('2d');

      // Calculate scale
      var scale = newWidth / originalWidth;

      // Draw the image scaled to the new width and cropped to the new height
      ctx.drawImage(canvas, 0, 0, originalWidth, newHeight / scale, 0, 0, newWidth, newHeight);

      // Append the new canvas to the body (or do whatever you want with it)
      newCanvas.style.position = "fixed"
      newCanvas.style.zIndex = "99999"
      newCanvas.style.top = "50px"
      newCanvas.style.right = "0"

      document.body.removeChild(newFrame);

      newCanvas.toBlob(async function (blob) {
        var file = new File([blob], "canvasImage.png", { type: "image/png" });
        try {
          const formData = new FormData

          formData.append('file', file);

          // console.log(formData);
          await tdApiRequestInstance.uploadSiteThumbnail({ siteId, formData });

        } catch (error) {

        }
      })


    });
  } catch (error) {

  }


}