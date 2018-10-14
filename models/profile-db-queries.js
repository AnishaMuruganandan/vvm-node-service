var dbconnectionObj = require('../dbconnection');

var profileQueries = {

saveAll: function(saveAllQuery, saveProfileDetailsObj) {
  return new Promise((resolve, reject) => {
    return dbconnection.query(saveAllQuery, [
      saveProfileDetailsObj.name,
      saveProfileDetailsObj.dateOfBirth,
      saveProfileDetailsObj.age,
      saveProfileDetailsObj.religionId,
      saveProfileDetailsObj.gender,
      saveProfileDetailsObj.educationId,
      saveProfileDetailsObj.professionId,
      saveProfileDetailsObj.salaryId,
      saveProfileDetailsObj.height,
      saveProfileDetailsObj.complexion,
      saveProfileDetailsObj.cityId,
      saveProfileDetailsObj.address,
      saveProfileDetailsObj.physicalDisablity,
      saveProfileDetailsObj.profilePicture
    ], (err, rows) => {
      if (err)
        return reject(err);
      resolve(rows);
    });
  });
}

}

module.exports = profileQueries;
