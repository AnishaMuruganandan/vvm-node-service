var registraionServiceDeclaration = {

  generateandSendOTPService: function(data) {

    const AJAX_INPUT_OBJ = {
      "METHOD": "POST",
      "data": data,
      "URL": "http://localhost:3000/registration/generatingandSendingOTP",
    };

    var response =  registraionServiceDeclaration.ajaxService(obj);
    return response;
  },

  saveAllDetailsService: function(data) {

    const AJAX_INPUT_OBJ = {
      "METHOD": "POST",
      "data": data,
      "URL": "http://localhost:3000/registration/saveAllDetails",
    };

    var response =  registraionServiceDeclaration.ajaxService(obj);
    return response;
  },
  ajaxService: function(obj) {
    $.ajax({
      type: obj.METHOD,
      data: JSON.stringify(obj.data),
      contentType: "application/json",
      url: obj.URL,
      success: function(data) {
        return data;
      }

    });

  }
};
