var profileQueryConst = {

  saveAllQuery: "INSERT INTO profile_details (profile_id, name, date_of_birth, age, religion_id, gender, education_id, profession_id, salary_id, height, complexion, city_id, address, physical_disablity, profile_picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",

  getProfileDetailsQuery: "select * from profile_details where profile_id=?", [profileId]


};

module.exports = profileQueryConst;
