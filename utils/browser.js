function BrowserUtils(params) {

  function removeUrlParam(paramName) {
    const urlParams = new URLSearchParams(window.location.search);
    // if(paramName == "pass"){
    //     tdSessionStoreInstance.set("accessToken", paramName)
    // }
    urlParams.delete(paramName);
    const newUrl = window.location.pathname + '?' + urlParams.toString();
    history.replaceState(null, null, newUrl);
  }

  function getUrlFromKeys(obj) {
    let url = window.location.protocol + '//' + window.location.host;
    let siteId, sourceFrom = "", type = "";
    if (Object.hasOwn(obj, 'siteId') && obj.siteId !== null) {
      siteId = `siteId=${obj["siteId"]}`
    }
    if (Object.hasOwn(obj, 'sourceFrom') && obj.sourceFrom !== null) {
      sourceFrom = `sourceCat=${obj["sourceFrom"]}`
    }

    if (Object.hasOwn(obj, 'type') && obj.type !== null) {
      type = `type=${obj["type"]}`
    }

    url = `${window.location.protocol}//${window.location.host}?${siteId}${sourceFrom && `&${sourceFrom}`}${(type) && `&${type}`}`;
    // console.log({"sourceFrom?": sourceFrom, "type?": type, obj, url})
    return url;
  }

  return Object.freeze({
    removeUrlParam,
    getUrlFromKeys
  })
}

const browserInstance = BrowserUtils();
export default browserInstance;