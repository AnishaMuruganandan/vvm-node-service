let securityJS = (function() {

  let init = function() {
    $logoutAct = $('#logoutAct');
  };

  let complete = function() {

    $logoutAct.click(function() {
      removeCookie("LOGIN_SALT");
      removeCookie("PROFILE_BASIC_ID");
      window.location.href = "/";

    });
  }

  let validateLogin = function() {

    let loginSalt = getCookie('LOGIN_SALT');
    let profileBasicId = getCookie('PROFILE_BASIC_ID');
    let profileId = getCookie('PROFILE_ID');

    let path = window.location.pathname;

    if (loginSalt) {
      if (path != '/profile.html') {}
      //   location.replace('/profile.html');
    } else {
      if (path != '/index.html' && path != '/') {
        location.replace('/index.html');
      }
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
    init: init,
    complete: complete,
    validateLogin: validateLogin,
    addCookie: addCookie,
    removeCookie: removeCookie,
    getCookie: getCookie


  };

})();
