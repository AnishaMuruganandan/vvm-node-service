/*
 * FILE_NAME : registration.js
 * FOLDER : public/js/registration
 * DESCRIPTION :
 * AUTHOR : ANN
 * NOTES :
 */
let loginFunc = (function() {
  let FILE_NAME = "registrationJS";

  let $registrationForm;

  let init = function() {

    $emailId = $('#emailId');
    $password = $('#password');
    $registrationForm = $('#registrationForm');
  };

  let construct = function() {

  };

  let complete = function() {


    /*
     * Registraion Form submit listener
     */
    $registrationForm.submit(function(e) {
      let form = this;
      e.preventDefault(e);
      form.submit();
      // let isLoginFormValid = loginObj.validateLoginForm();
      // if (isLoginFormValid) {
      //   utilsJS.toggleLoader(true, messageConstantsJS.LOADING_VALIDATING_CREDENTIALS);
      //   form.submit();
      // }
    });

  //   /*
  //    * Forgot Password Form submit listener
  //    */
  //   $forgotPasswordForm.submit(function(e) {
  //     let form = this;
  //     e.preventDefault(e);
  //     let emailId = $emailId.val().trim().toLowerCase();
  //     let isEmailValid = loginObj.validateEmailId(emailId);
  //     if (isEmailValid) {
  //       utilsJS.toggleLoader(true, messageConstantsJS.LOADING_VALIDATING_EMAIL);
  //       serviceDeclarationJS.ajaxValidateAdminEmailSync(emailId).then(function(isEmailExist) {
  //         if (!isEmailExist) {
  //           $('#emailId_err').html('Email does not exist');
  //           utilsJS.toggleLoader();
  //         } else {
  //           utilsJS.toggleLoader(true, messageConstantsJS.LOADING_SENDING_PASSWORD_RESET_LINK);
  //           form.submit();
  //         }
  //       }).catch(function(err) {
  //         loggerJS.error(configJS.isErrorLogEnabled, "ERROR :: " + err);
  //         utilsJS.toggleLoader();
  //       });
  //     } else {
  //       utilsJS.toggleLoader();
  //     }
  //   });
  //
  // };
  //
  // let finalise = function() {
  //
  // };


  // /*
  //  * METHOD_NAME : validateLoginForm
  //  * AUTHOR :
  //  * DESCRIPTION : Login form validation
  //  * RETURN : Boolean - isFormValid
  //  */
  // let validateLoginForm = function() {
  //   let FUNC_NAME = "validateLoginForm";
  //   loggerJS.debug(configJS.isDebugLogEnabled, "Entering :: " + FILE_NAME + "." + FUNC_NAME);
  //
  //   let isFormValid = true;
  //   try {
  //     if (!this.validateUsername()) {
  //       isFormValid = false;
  //     }
  //     if (!this.validatePassword()) {
  //       isFormValid = false;
  //     }
  //   } catch (e) {
  //     loggerJS.error(configJS.isErrorLogEnabled, "ERROR", e);
  //   }
  //   loggerJS.debug(configJS.isDebugLogEnabled, "Exiting :: " + FILE_NAME + "." + FUNC_NAME);
  //   return isFormValid;
  // };

  /*
   * METHOD_NAME : validateUsername
   * AUTHOR :
   * DESCRIPTION : Login user name validation
   * RETURN : Boolean - isUsernameValid
   */
  // let validateUsername = function() {
  //   let FUNC_NAME = "validateUsername";
  //   loggerJS.debug(configJS.isDebugLogEnabled, "Entering :: " + FILE_NAME + "." + FUNC_NAME);
  //
  //   let isUsernameValid = true;
  //   try {
  //     let userName = $('#username').val().trim();
  //     if (userName == '') {
  //       isUsernameValid = false;
  //       $('#username_err').html(errorMessageJS.EMPTY_EMAIL_LOGIN);
  //     } else if (!utilsJS.isValidateEmail(userName)) {
  //       isUsernameValid = false;
  //       $('#username_err').html(errorMessageJS.INVALID_EMAIL);
  //     } else {
  //       $("#username_err").html('');
  //     }
  //   } catch (e) {
  //     loggerJS.error(configJS.isErrorLogEnabled, "ERROR", e);
  //   }
  //
  //   loggerJS.debug(configJS.isDebugLogEnabled, "Exiting :: " + FILE_NAME + "." + FUNC_NAME);
  //   return isUsernameValid;
  // }

  /*
   * METHOD_NAME : validatePassword
   * AUTHOR :
   * DESCRIPTION : Login password validation
   * RETURN : Boolean - isPasswordValid
  //  */
  // let validatePassword = function() {
  //   let FUNC_NAME = "validatePassword";
  //   loggerJS.debug(configJS.isDebugLogEnabled, "Entering :: " + FILE_NAME + "." + FUNC_NAME);
  //
  //   let isPasswordValid = true;
  //
  //   try {
  //     let password = $('#password').val().trim();
  //
  //     if (password == '') {
  //       isPasswordValid = false;
  //       $('#password_err').html(errorMessageJS.EMPTY_PASSWORD);
  //     } else {
  //       $("#password_err").html('');
  //     }
  //   } catch (e) {
  //     loggerJS.error(configJS.isErrorLogEnabled, "ERROR", e);
  //   }
  //
  //   loggerJS.debug(configJS.isDebugLogEnabled, "Exiting :: " + FILE_NAME + "." + FUNC_NAME);
  //   return isPasswordValid;
  // };


  /*
   * METHOD_NAME : validateEmailId
   * AUTHOR :
   * DESCRIPTION : Validating Email Id. It Includes empty check and regex check
   * RETURN : Boolean - status
   */
  // let validateEmailId = function(emailId) {
  //   let FUNC_NAME = "validateEmailId";
  //   loggerJS.debug(configJS.isDebugLogEnabled, "Entering :: " + FILE_NAME + "." + FUNC_NAME);
  //
  //   let isEmailValid = true;
  //
  //   try {
  //     $('#emailId_err').html("");
  //     if (emailId == '') {
  //       isEmailValid = false;
  //       $('#emailId_err').html(errorMessageJS.EMPTY_EMAIL);
  //     } else if (!utilsJS.isValidateEmail(emailId)) {
  //       isEmailValid = false;
  //       $('#emailId_err').html(errorMessageJS.INVALID_EMAIL);
  //     }
  //   } catch (e) {
  //     loggerJS.error(configJS.isErrorLogEnabled, "ERROR", e);
  //   }
  //   loggerJS.debug(configJS.isDebugLogEnabled, "Exiting :: " + FILE_NAME + "." + FUNC_NAME);
  //   return isEmailValid;
  // };

  /*
   * METHOD_NAME : emailVerificationFlow
   * AUTHOR :
   * DESCRIPTION : Do's sequence of function call for validating email and verfying email if already exist
   * RETURN : Boolean - status
   */
  // let emailVerificationFlow = function() {
  //   let FUNC_NAME = "emailVerificationFlow";
  //   loggerJS.debug(configJS.isDebugLogEnabled, "Entering :: " + FILE_NAME + "." + FUNC_NAME);
  //
  //   let emailId = $('#emailId').val().trim().toLowerCase();
  //   let isEmailValid = this.validateEmailId(emailId);
  //   if (isEmailValid) {
  //     serviceDeclarationJS.ajaxValidateAdminEmailSync(emailId).then(function(isEmailExist) {
  //       if (!isEmailExist) {
  //         $('#emailId_err').html('Email does not exist');
  //       }
  //     }).catch(function(err) {
  //       loggerJS.error(configJS.isErrorLogEnabled, "ERROR :: " + err);
  //     });
  //   }
  //   loggerJS.debug(configJS.isDebugLogEnabled, "Exiting :: " + FILE_NAME + "." + FUNC_NAME);
  // }

  /*
   * METHOD_NAME : navigateToEntityRegistration
   * AUTHOR : SM
   * DESCRIPTION : Navigate to appropriate entity registration page
   * RETURN :
   */
  // let navigateToEntityRegistration = function(entityType) {
  //   let FUNC_NAME = "navigateToEntityRegistration";
  //   loggerJS.debug(configJS.isDebugLogEnabled, "Entering :: " + FILE_NAME + "." + FUNC_NAME);
  //   let url;
  //   switch (entityType) {
  //     case constantsJS.PRODUCER_ENTITY_IDENTIFIER:
  //       url = urlConstantsJS.PRODUCER_REGISTRATION;
  //       break;
  //     case constantsJS.AHO_ENTITY_IDENTIFIER:
  //       url = urlConstantsJS.AHO_REGISTRATION;
  //       break;
  //     case constantsJS.THIRD_PARTY_ENTITY_IDENTIFIER:
  //       url = urlConstantsJS.THIRD_PARTY_REGISTRATION;
  //       break;
  //     default:
  //       url = urlConstantsJS.REGISTRATION;
  //       break;
  //   }
  //   document.location.href = url;
  //   loggerJS.debug(configJS.isDebugLogEnabled, "Exiting :: " + FILE_NAME + "." + FUNC_NAME);
  // };

  return {
    init: init,
    construct: construct,
    complete: complete,
    finalise: finalise,
    validatePassword: validatePassword,
    validateUsername: validateUsername,
    emailVerificationFlow: emailVerificationFlow,
    validateEmailId: validateEmailId,
    validateLoginForm: validateLoginForm,
    navigateToEntityRegistration: navigateToEntityRegistration
  };
});

var loginJS = {

  /*
   * METHOD_NAME : init
   * AUTHOR : AV
   * DESCRIPTION : Initiating
   */
  _init: function() {

    if (typeof loginObj === "undefined" && loginFunc) {
      loginObj = loginFunc();

    }
    loginObj.init();

  },

  /*
   * METHOD_NAME : construct
   * AUTHOR : AV
   * DESCRIPTION : Constructing
   */
  _construct: function() {

  },

  /*
   * METHOD_NAME : _complete
   * AUTHOR : AV
   * DESCRIPTION : Complete
   */
  _complete: function() {
    loginObj.complete();
  },

  /*
   * METHOD_NAME : _finalise
   * AUTHOR : AV
   * DESCRIPTION : Finalize
   */
  _finalise: function() {
    utilsJS.toggleLoader();
  }

};


/*
 *  Document on ready
 */

$(function() {

  loginJS._init();
  loginJS._construct();
  loginJS._complete();
  loginJS._finalise();

});
