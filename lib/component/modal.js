import { spinner } from "../../public/assets/index";
export default function ModalFactory(tdLoaderState) {
    const renderModal = () => {
      const modal = document.querySelector(".custom-form");
      const deployHtml = `<div class="addPageBackdrop" id="addPageBackdrop"></div>

            <!-- deploySiteModal Form -->
            <div class="deploySiteModal" id="deploySiteModal">
              <div id="deploy-modal-container" class="deploy-modal-container">
              </div>
              <div id="deployProcess">
              <img src=${spinner} alt="deployment progress bar">
              </div>
            </div>`;

      modal.innerHTML += deployHtml;

      document
        .getElementById("addPageBackdrop")
        .addEventListener("click", function (e) {
          if (e.target === document.getElementById("addPageBackdrop")) {
            closeDeployModal();
          }
        });
    };



    function openDeployModal() {
      document.getElementById("addPageBackdrop").style.display = "block";
      document.getElementById("deploySiteModal").style.display = "block";
    }

    // Function to close the addPageModal
    function closeDeployModal() {
      document.getElementById("addPageBackdrop").style.display = "none";
      document.getElementById("deploySiteModal").style.display = "none";
    }

    function deployStatus(msg) {
      const loading = document.getElementById("deployProcess");
      const deployModalContainer = document.getElementById("deploy-modal-container");
      loading.style.display = "block";
      loading.style.padding = "35px"

      if (tdLoaderState.getValue()) {
        deployModalContainer.style.display = "none";
      } else if (!tdLoaderState.getValue() && msg.success) {
        loading.style.display = "none";
        deployModalContainer.style.display = "block";
        deployModalContainer.innerHTML = `<div>
            <h3 class="deployH3" id="deploy-h3">Congratulations!</h3>
            <p class="deploytext">Congratulations! Your website is currently undergoing the final stages of publishing, getting ready to step into the spotlight. Check your inbox soon for an email containing important details and the direct link to your freshly published site. </p>
            <p class="deploytext"> Prepare for your website to dazzle online!</p>
          </div>`
      } else if (!tdLoaderState.getValue() && !msg.success) {
        loading.style.display = "none";
        deployModalContainer.style.display = "block";
        deployModalContainer.innerHTML = msg.message && msg.message == "Internal server error" ? "<p class='deploytext'>Something went wrong. Please try again later</p>" : msg.message;
      };
    };

    return {
      openDeployModal,
      renderModal,
      deployStatus,
    };
}