var dbconnection = require('../dbconnection');
var queries = {
    addLoginDetails: function(loginDetails, callback) {
        return dbconnection.query("INSERT INTO login_details (email_id, phone_no, otp, username) VALUES (?, ?, ?, ?)", [loginDetails.emailId, loginDetails.phoneNo, loginDetails.otp, loginDetails.userName], callback);
    }
};
module.exports = queries;
