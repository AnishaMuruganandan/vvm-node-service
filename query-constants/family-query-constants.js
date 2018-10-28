var familyQueryConst = {

  saveFamilyDetailsQuery: "INSERT INTO famiy_details (profile_id, father_name, mother_name, no_of_siblings, native_place, mother_tongue_id) VALUES (?, ?, ?, ?, ?, ?)",
  getFamilyDetailsByProfileIdQuery: "select * from famiy_details where profile_id=?",
};

module.exports = familyQueryConst;
