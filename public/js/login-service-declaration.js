var loginServiceDeclaration = {

verifyLoginDetailsService: function(data) {

  const AJAX_INPUT_OBJ = {
    "METHOD": "POST",
    "data": data,
    "URL": "http://localhost:4200/login/login-check",
  };

  var response =  loginServiceDeclaration.ajaxService(obj);
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
