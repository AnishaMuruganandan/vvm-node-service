var profileQueryConst = {

  saveBasicDetailsQuery: "INSERT INTO profile_basic_details (name, dob, height, city_id, education_id, profession_id, religion_id, caste_id, profile_picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
  saveAllQuery: "INSERT INTO profile_details (profile_id, name, date_of_birth, age, religion_id, gender, education_id, profession_id, salary_id, height, complexion, city_id, address, physical_disablity, profile_picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
  getProfileDetailsQuery: "select * from profile_details where profile_id=?"

};

module.exports = profileQueryConst;
