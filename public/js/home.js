var homeFunc = (function() {

  let init = function() {


  };

  let construct = function() {};

  let complete = function() {


  };

  let finalise = function() {


    let URL = "profile/basic-details";
    loadProfileJS.showProfileList(URL);

  };

  return {
    init: init,
    construct: construct,
    complete: complete,
    finalise: finalise
  };
});



var homeObj = {

  /*
   * METHOD_NAME : init
   * AUTHOR : AV
   * DESCRIPTION : Initiating
   */
  _init: function() {

    homeJS = new homeFunc();
    homeJS.init();

    loadProfileJS.init();
    securityJS.init();

  },

  /*
   * METHOD_NAME : construct
   * AUTHOR : AV
   * DESCRIPTION : Constructing
   */
  _construct: function() {

    loadProfileJS.construct();
  },

  /*
   * METHOD_NAME : _complete
   * AUTHOR : AV
   * DESCRIPTION : Complete
   */
  _complete: function() {
    homeJS.complete();
    securityJS.complete();
  },

  /*
   * METHOD_NAME : _finalise
   * AUTHOR : AV
   * DESCRIPTION : Finalize
   */
  _finalise: function() {
    homeJS.finalise();
    securityJS.validateLogin();

  }

};


/* Document on ready */

$(function() {

  homeObj._init();
  homeObj._construct();
  homeObj._complete();
  homeObj._finalise();

});
