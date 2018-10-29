var searchViewFunc = (function() {

  let init = function() {


  };

  let construct = async function() {
    let queryParam = getUrlVars();
    let data = await profileServiceDeclaration.getProfileFullInfoById(queryParam.q);

    profileUtils.populateDOM(data);

    $('.js-example-basic-single').select2();

  };

  let complete = function() {




  };

  let finalise = function() {

    $fieldbox = $('.profileTabContent input ,.profileTabContent select');
    $fieldbox.attr('disabled', true);

  };


  getUrlVars = function() {
    var vars = [],
      hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  }


  return {
    init: init,
    construct: construct,
    complete: complete,
    finalise: finalise,
  }

});

var seachViewObj = {

  /*
   * METHOD_NAME : init
   * AUTHOR : AV
   * DESCRIPTION : Initiating
   */
  _init: function() {

    seachViewJS = new searchViewFunc();
    seachViewJS.init();

  },

  /*
   * METHOD_NAME : construct
   * AUTHOR : AV
   * DESCRIPTION : Constructing
   */
  _construct: function() {
    seachViewJS.construct();
  },

  /*
   * METHOD_NAME : _complete
   * AUTHOR : AV
   * DESCRIPTION : Complete
   */
  _complete: function() {
    seachViewJS.complete();
  },

  /*
   * METHOD_NAME : _finalise
   * AUTHOR : AV
   * DESCRIPTION : Finalize
   */
  _finalise: function() {

    seachViewJS.finalise();
    securityJS.validateLogin();
    $('#loader').fadeOut();


  }

};

/* Document on ready */

$(function() {

  seachViewObj._init();
  seachViewObj._construct();
  seachViewObj._complete();
  seachViewObj._finalise();

});
