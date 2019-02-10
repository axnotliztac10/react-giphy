import 'isomorphic-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }

  if (isJsonResponse(response)) {
    return response.json()
      .then(json => json);
  }

  return response.text();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  error.status = response.status;

  if (isJsonResponse(response)) {
    return response.json()
      .then((data) => {
        if (data.notifications && data.notifications.length > 0) {
          error.code = data.notifications[0].code;
        }

        throw error;
      })
      .catch(() => {
        throw error;
      });
  }

  throw error;
}

function isJsonResponse(response) {
  const contentType = response.headers.get('content-type');

  if (
    contentType &&
    (contentType.includes('application/json') || contentType.includes('application/hal+json'))
  ) {
    return true;
  }

  return false;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}
