import jwtDecode from 'jwt-decode';
import Cookie from 'js-cookie';
import auth0 from 'auth0-js';

var webAuth = new auth0.WebAuth(require('../auth0.config.json'));

const getQueryParams = () => {
  const params = {}
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3
  })
  return params
};

export const extractInfoFromHash = () => {
  if (!process.browser) {
    return undefined
  }
  const { id_token, state } = getQueryParams();
  console.log(getQueryParams());
  return { token: id_token, secret: state }
};

export const setToken = (token) => {
  if (!process.browser) {
    return
  }
  Cookie.set('user', jwtDecode(token))
  Cookie.set('jwt', token)
};

export const unsetToken = () => {
  if (!process.browser) {
    return
  };
  Cookie.remove('jwt');
  Cookie.remove('user');
  Cookie.remove('secret');

  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now());
};

export const getUserFromServerCookie = (req) => {
  if (!req.headers.cookie) {
    return undefined;
  };
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
  if (!jwtCookie) {
    return undefined;
  };
  const jwt = jwtCookie.split('=')[1]
  return jwtDecode(jwt);
};

export const getUserFromLocalCookie = () => {
  return Cookie.getJSON('user');
};

export const setSecret = (secret) => Cookie.set('secret', secret);

export const checkSecret = (secret) => Cookie.get('secret') === secret;


// 


export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

export function getUserInfo(cb) {
  let accessToken = getAccessToken();
  auth.client.userInfo(accessToken, (error, user) => {
    return cb(user);
  });
}

export function isLoggedInUser(cb, error) {
  const idToken = getIdToken();
  const access_token = getAccessToken();
  if (!!idToken && !isTokenExpired(idToken)) {

    auth.client.userInfo(access_token, (error, user) => {
      return cb(user);
    });
  } else {
    return error();
  }
}