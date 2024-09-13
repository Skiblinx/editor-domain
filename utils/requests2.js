import { axios } from './axios'

function tdApiRequest() {

  const handleError = (error) => {
    if (error) {
      //Do something
    }
  }


  const getUser = async () => {
    let user
    try {
      const res = await axios.get(`/auth/current`)
      user = res.data
      return user
    } catch (error) {
      handleError(error);
    }
  }

  const getSite = async (id) => {
    let site;
    try {
      const res = await axios.get(`/site/subdomain/${id}`)
      site = res.data.data
      return site
    } catch (error) {
      handleError(error);
    }
  }

  const getAllSite = async () => {
    let site;
    try {
      const res = await axios.get(`/site/user`)
      site = res.data.data
      return site
    } catch (error) {
      handleError(error);
    }
  }

  const upDateSite = async (data) => {
    let update;
    try {
      const res = await axios.patch(`/site/${data.siteId}/page/${data.pageId}`, data.page)
      update = res.data
      return update
    } catch (error) {
      handleError(error);
    }
  }

  const deleteImage = async ({ siteId, imgId }) => {
    let update;
    try {
      const res = await axios.delete(`/site/${siteId}/site-image/delete/${imgId}`)
      update = res.data
      return update
    } catch (error) {
      handleError(error);
    }
  }

  const uploadSiteImages = async (data) => {
    let update;

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      const res = await axios.post(`/site/site-image/multiple`, data, config)
      update = res.data
      return update
    } catch (error) {
      handleError(error);
    }
  }

  const uploadSiteThumbnail = async (data) => {
    let update;

    const config = {
      headers: {
        'Accept': 'application/json',
      },
    };

    try {
      const res = await axios.put(`/site/thumbnail/${data.siteId}`, data.formData, config)
      update = res.data
      return update
    } catch (error) {
      handleError(error);
    }
  }

  const createEditorCompononet = async (data) => {
    let components;
    try {
      const res = await axios.post(`/site-content/create`, data)
      components = res.data
      return components
    } catch (error) {
      handleError(error);
    }
  }

  const getEditorComponents = async () => {
    let components;
    try {
      const res = await axios.get(`/site-content`)
      components = res.data.find(e => e._id == "655228db2ff8b103cacd87b8")
      return components
    } catch (error) {
      handleError(error);
    }
  }

  const deploySite = async (id, data) => {
    let response;
    try {
      const res = await axios.post(`/site/generate-files/${id}`, data)
      response = res.data
      return response
    } catch (error) {
      handleError(error);
      return error.data

    }
  }


  const createSitePage = async (id, data) => {
    let response;
    try {
      const res = await axios.post(`/site/${id}/add/page`, data)
      response = res.data
      return response
    } catch (error) {
      handleError(error);
      return error.data

    }
  }

  const deletePage = async ({ siteId, pageId }) => {
    let response;
    try {
      const res = await axios.delete(`/site/${siteId}/page/${pageId}`)
      response = res.data
      return response
    } catch (error) {
      handleError(error);
    }
  }






  return {
    getSite,
    getUser,
    upDateSite,
    getEditorComponents,
    createEditorCompononet,
    deploySite,
    uploadSiteImages,
    deleteImage,
    createSitePage,
    getAllSite,
    uploadSiteThumbnail,
    deletePage,
  }

}

const tdApiRequestInstance = tdApiRequest()



export { tdApiRequestInstance }