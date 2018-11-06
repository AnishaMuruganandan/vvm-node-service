var familyBackgroundQueryConst = {

  saveFamilyBackgroundDetailsQuery: "INSERT INTO family_background_details (profile_id, relative_type_id, age, marital_status) VALUES (?, ?, ?, ?)",
  getFamilyDetailsByProfileIdQuery: "select * from family_background_details where profile_id=?",
};

module.exports = familyBackgroundQueryConst;
