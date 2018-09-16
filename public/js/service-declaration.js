var serviceDeclarationJS = {

  loginAjaxService : function(data){

obj ={

  "METHOD" : "PUT",
  "data" : data,
  "URL" : "/login"
}
return ajaxService(obj)

  }


  ajaxService : function(obj){

    url = obj.url,
    data = obj.data,
    type = obj.METHOD
  }
};
