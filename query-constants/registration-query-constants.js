var registrationQueryConst = {

  findByEmailIdQuery: "select * from login_details where email_id=?",

  findByPhoneNoQuery: "select * from login_details where phone_no=?",

  saveAllQuery: "INSERT INTO login_details (email_id, phone_no, otp, username, password) VALUES (?, ?, ?, ?, ?)",

  updatePasswordByEmailIdQuery: "update login_details set password=? where email_id=?",

  updateProfileIdByLoginIdQuery: "update login_details set profile_id=? where login_id=?"
};

module.exports = registrationQueryConst;
