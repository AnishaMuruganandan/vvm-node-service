var queryconst = {
findByEmailIdQuery : "select * from login_details where email_id=?",

findByPhoneNoQuery : "select * from login_details where phone_no=?",

saveAllQuery : "INSERT INTO login_details (email_id, phone_no, otp, username, password) VALUES (?, ?, ?, ?, ?)",

updatePasswordByEmailIdQuery : "update login_details set password=? where email_id=?"
}
module.exports = queryconst;
