var registrationServiceDeclaration = {

  generateandSendOTPService: async function(data) {

      const AJAX_INPUT_OBJ = {
        "METHOD": "POST",
        "data": data,
        "URL": "/registration/send-otp"
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
          "URL": "/registration/registration-details"
        };

        var response = await this.ajaxService(AJAX_INPUT_OBJ);
        console.log(JSON.stringify(response) + "save response");
        loadProfileJS.showProfileList();

        if (response.code == 'ER_DUP_ENTRY') {
          alert('User Already registered with this Phone Number or Email ID. Please Call us for Assistance');
        } else {
          alert('Successfully Registered');
        }
        return response;

      },
      ajaxService: function(obj) {
        return new Promise((resolve, reject) => {
          console.log("he am in reg ajax");
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
