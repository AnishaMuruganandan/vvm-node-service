var profileQueryConst = {

  saveBasicDetailsQuery: "INSERT INTO profile_basic_details (name, dob, height, city_id, education_id, profession_id, religion_id, caste_id, profile_picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
  saveProfileDetailsQuery: "INSERT INTO profile_details (gender, salary_id, complexion, address, physical_disablity, language_known) VALUES (?, ?, ?, ?, ?, ?)",
  getProfileDetailsQuery: "select * from profile_details where profile_id=?",
  getProfileBasicDetailsQuery: "select * from profile_basic_details",
  getProfileBasicDetailsByProfileIdQuery: "select * from profile_basic_details where profile_basic_id=?",
  getTenProfileBasicDetailsQuery: "select * from profile_basic_details LIMIT 10",
  updateProfileBasicDetailsByIdQuery: "UPDATE profile_basic_details SET profile_id = ?, city_id = ?, education_id= ?, profession_id=? WHERE profile_basic_id = ?",
  saveProfilePicQuery: "UPDATE profile_basic_details SET profile_picture = ? WHERE profile_basic_id = ?"
};

module.exports = profileQueryConst;
