import decode from 'jwt-decode';
import Cookie from 'js-cookie';
import auth0 from 'auth0-js';

// var webAuth = new auth0.WebAuth(require('../auth0.config.json'));

let auth = null;

class Auth {

  localStorage = window.localStorage;

  webAuth = new auth0.WebAuth(require('../auth0.config.json'));
  setAccessToken = () => {
    let accessToken = this.getCookie('access_token');
    localStorage.setItem('access_token', accessToken);
  }

  // Get and store id_token in local storage
  setIdToken = () => {
    let idToken = this.getCookie('id_token');
    localStorage.setItem('id_token', idToken);
  }

  getCookie = (name) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  isLoggedIn = () => {
    const idToken = this.getIdToken();
    return !!idToken && !this.isTokenExpired(idToken);
  }

  getTokenExpirationDate = (encodedToken) => {
    const token = decode(encodedToken);
    if (!token.exp) { return null; }

    const date = new Date(0);
    date.setUTCSeconds(token.exp);

    return date;
  }

  isTokenExpired = (token) => {
    const expirationDate = this.getTokenExpirationDate(token);
    return expirationDate < new Date();
  }

  getUserInfo = (cb) => {
    let accessToken = this.getAccessToken();
    this.webAuth.client.userInfo(accessToken, (error, user) => {
      return cb(user);
    });
  }

  isLoggedInUser = (cb, error) => {
    const idToken = this.getIdToken();
    const access_token = this.getAccessToken();
    if (!!idToken && !this.isTokenExpired(idToken)) {

      this.webAuth.client.userInfo(access_token, (error, user) => {
        return cb(user);
      });
    } else {
      return error();
    }
  }

  getIdToken = () => {
    return localStorage.getItem('id_token');
  }

  getAccessToken = () => {
    return localStorage.getItem('access_token');
  }
}

export default function authIt() {
  if (typeof window === 'undefined') {
    return null;
  } else {
    if (auth === null) {
      auth = new Auth();
    }
    return auth;
  }
}