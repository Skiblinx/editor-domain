function ErrorMain() {
  return Object.assign({}, {
    handleError: (error) => {
      if (error) {
        //Do something
        console.error("inside error", { error });
        errorView(error);
      }
    },
    errorView(errorMsg) {
      const getMainRoot = document.getElementById("td-root");
      const createDiv = document.createElement("div");
      // createDiv.style = {position: "fixed", top: "0px", bottom: "0px",
      //   right: "0px",left: "0px", "zIndex": 9999, "backgroundColor": rgba(0, 0, 0, 0.183),
      //   "fontSize": "40px", color: "black", "textAlign": "center","verticalAlign": "middle"}
      createDiv.classList.add("errorWrapper")
      createDiv.style = { "backgroundColor": "rgba(0, 0, 0, 0.183)" };
      createDiv.style.position = "fixed";
      const errTemplate = `<div class="errorView">
          <h1>Opps! error</h1>
          <p style="font-size: 20px;color: #b60c0c;">Encountered ${JSON.stringify(errorMsg)} while running script, please contact admin.</p>
      </div>
      `;
      createDiv.innerHTML = errTemplate;
      getMainRoot.appendChild(createDiv);

      return errTemplate;

    },
    notify(message, color) {
      const topBar = document.querySelector('#td-root')
      const notifyDiv = document.createElement('div')
      const notifyP = document.createElement('p')
      notifyDiv.classList.add('notificationDiv')
      notifyP.classList.add('notificationP')
      notifyDiv.appendChild(notifyP)
      notifyDiv.style = { backgroundColor: color && color, "z-index": 99 }
      //notifyDiv.style.backgroundColor = color && color
      notifyP.innerText = message
      topBar.appendChild(notifyDiv)


      setTimeout(() => {
        document.querySelector('.notificationDiv').remove()
      }, 15000)

    }
  })
}

const errorInstance = ErrorMain();

export const handleError = (error) => {
  if (error) {
    //Do something
    // console.log("outside jil: ",{error, msg: error.message});
    errorInstance.errorView(error.data.message.message);
    //errorInstance.notify(error.data.message.message, "red");
  }
}
