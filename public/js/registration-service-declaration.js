var registrationServiceDeclaration = {

  generateandSendOTPService: async function(data) {

      const AJAX_INPUT_OBJ = {
        "METHOD": "POST",
        "data": data,
        "URL": URL_Domain+"registration/send-otp"
      };

      var response = await this.ajaxService(AJAX_INPUT_OBJ);
      console.log(JSON.stringify(response) + "response");
      // var res= JSON.stringify(response)
      return response;
    },

    saveAllDetailsService: async function(data) {

      const AJAX_INPUT_OBJ = {
        "METHOD": "POST",
        "data": data,
        "URL": URL_Domain+"registration/registration-details"
      };

      var response = await this.ajaxService(AJAX_INPUT_OBJ);
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
