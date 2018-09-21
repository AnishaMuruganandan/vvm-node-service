var loginServiceDeclaration = {

verifyLoginDetailsService: function(data) {

  const AJAX_INPUT_OBJ = {
    "METHOD": "POST",
    "data": data,
    "URL": "http://localhost:3000/login/verifyLoginDetails",
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
