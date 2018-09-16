var loginQueryConst = {

  findByPhoneNoAndPasswordQuery: "select * from login_details where phone_no=? and password=?",

  updateLoginTimeByLoginIdQuery: "update login_details set recent_login_time=? where login_id=?"

}
module.exports = loginQueryConst;
