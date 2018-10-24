let securityJS = (function() {

  let init = function() {

  };

  let validateLogin = function() {

    let loginSalt = getCookie('LOGIN_SALT');

    let path = window.location.pathname;

    if (loginSalt) {
      if (path != '/profile.html')
        location.replace('/profile.html');
    } else {
      if (path != '/index.html')
        location.replace('/index.html');
    }

  };

  let addCookie = function(key, value) {
    Cookies.set(key, value);
  };

  let removeCookie = function(key) {
    Cookies.remove(key);
  };

  let getCookie = function(key) {
    let cookie;
    if (key) {
      cookie = Cookies.get(key);
    } else {
      cookie = Cookies.getJSON();
    }
    return cookie;
  };

  return {

    validateLogin: validateLogin,
    addCookie: addCookie,
    removeCookie: removeCookie,
    getCookie: getCookie


  };

})();
