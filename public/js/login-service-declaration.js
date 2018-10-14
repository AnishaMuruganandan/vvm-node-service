var loginServiceDeclaration = {

verifyLoginDetailsService: async function(data) {

  const AJAX_INPUT_OBJ = {
    "METHOD": "GET",
    "data": data,
    "URL": URL_Domain+"login/login-check?phoneNo=" + data.loginPhoneNo + "&password="+ data.loginPassword
  };

  var response =  await this.ajaxService(AJAX_INPUT_OBJ);
  console.log(JSON.stringify(response)+"save response");
  return response;
},


  ajaxService: function(obj) {
    return new Promise((resolve, reject) => {
    $.ajax({
      type: obj.METHOD,
      data: JSON.stringify(obj.data),
      contentType: "application/json",
      url: obj.URL,
      success: function(data) {
        console.log("success");
        var session = JSON.stringify(data);
        console.log(session + "fe data");
        resolve(data);
      }

    });
});
  }
};
