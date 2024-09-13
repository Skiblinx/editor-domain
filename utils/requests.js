import { axios } from './axios'
import { tdApiRequestInstance } from './requests2';
import storeReducer from "./../storeReducer";


async function sourceOriginDefault(params) {
  let site, components, user, guest = false;
  let { siteId } = params;

  site = await tdApiRequestInstance.getSite(siteId)
  components = await tdApiRequestInstance.getEditorComponents();

  guest = true

  return { site, components, user, guest };
}

async function sourceOriginOther(source) {
  let { sourceFrom, siteId } = source;
  let site, components, user, guest = false;
  if (!siteId) {
    siteId = getSiteId();
  }

  if (sourceFrom == "figma") {
    site = await storeReducer.figma.getFComponent(siteId);
  }
  return { site, components, user, guest }
}

const initialize = async () => {
  const accessToken = getSession();
  const siteId = getSiteId();
  const type = getType();
  const sourceFrom = getSourceFrom();

  setAxiosDefaultHeaders(accessToken)

  let resl;
  if (sourceFrom && sourceFrom !== null) {
    resl = await sourceOriginOther({ sourceFrom, siteId, accessToken });
  } else {
    resl = await sourceOriginDefault({ siteId, accessToken, type });
  }

  return resl;
};

// ==========================================================

const getSession = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('accessToken');
  }
  return null;
};

const getSiteId = () => {
  if (typeof window !== 'undefined') {

    let subdomain = window.location.host.split('.')[0];
    let siteId = subdomain.includes('localhost') ? null : subdomain;

    if (siteId) {
      return siteId;
    }

    return null;
  }
  return null;
};

const getSourceFrom = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('sourceFrom');
  }
  return;
};

const getType = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('type');
  }
  return null;
};

const isValidToken = (accessToken) => {
  return !!accessToken;
};

const setSession = (params) => {
  if (params.accessToken && params.siteId) {

  } else {
    delete axios.defaults.headers.common.Authorization;
    window.location.replace(process.env.DASHBOARD_REPO_URL);
  }
};

const setAxiosDefaultHeaders = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export { initialize, getSession, getSiteId, setSession }
