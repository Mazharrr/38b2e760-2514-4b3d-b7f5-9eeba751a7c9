import {urls} from 'js/config';

const fetchApiData = (appId) => {
  const invocation = new XMLHttpRequest();
  invocation.open('GET', urls.itemInfo(appId), true);
  invocation.send();

  return invocation;
};
/**
* @param {string} appId - API Id or to get info about
*/
export const getApiData = (apiId) => {

    const invocation = fetchApiData(apiId);

    return invocation;
};
