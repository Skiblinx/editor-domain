import { preloader, spinner } from "../../public/assets/index";
export default function LoaderFactory(bgColor = "red") {
    // let loaderWrapper = `
    //     <div class="progressBarWrappper" style="backgroud-color: ${bgColor};">
    //     <img src=${preloader} alt="progress bar" class="progressBar">
    //     </div>
    // `;
    let loaderWrapper =`
    <div>
        <div class="loader"></div>
    </div>`

    return loaderWrapper;
}