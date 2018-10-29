var profileServiceDeclaration = {

  saveAllProfileDetailsService: async function(data) {

      const AJAX_INPUT_OBJ = {
        "METHOD": "POST",
        "data": data,
        "URL": URL_Domain + "profile/profile-details"
      };

      var response = await this.ajaxService(AJAX_INPUT_OBJ);
      console.log(JSON.stringify(response) + "save response");
      return response;
    },

    saveProfilePictureService: async function(data) {

        const AJAX_INPUT_OBJ = {
          "METHOD": "POST",
          "data": data,
          "URL": URL_Domain + "profile/profile-picture"
        };

        var response = await this.ajaxService(AJAX_INPUT_OBJ);
        console.log(JSON.stringify(response) + "save response");
        return response;
      },


      getProfileFullInfo: async function() {

          const AJAX_INPUT_OBJ = {
            "METHOD": "get",
            "data": {},
            "URL": URL_Domain + "profile/all-details/" + securityJS.getCookie('PROFILE_BASIC_ID')
          };

          var response = await this.ajaxService(AJAX_INPUT_OBJ);
          console.log(JSON.stringify(response) + "save response");
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
