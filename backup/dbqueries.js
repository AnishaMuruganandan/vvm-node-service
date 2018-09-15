var mysqlConnect = require('../dbconnection');



var queries = {

  addLoginDetails: function(loginDetails, callback) {
    var dbconnection = mysqlConnect.connectDatabase();
    var result = dbconnection.query("INSERT INTO login_details (email_id, phone_no, otp, username) VALUES (?, ?, ?, ?)", [
      loginDetails.emailId, loginDetails.phoneNo, loginDetails.otp, loginDetails.userName
    ], callback);
    dbconnection.disconnectDatabase();
    return result;
  },

  getLoginDetailsByEmailId: function(emailId, callback) {
    return dbconnection.query("select * from login_details where email_id=?", [emailId], callback);
  },
  updateCrendential: function(id, loginDetails, callback) {
    return dbconnection.query("update login_details set password=? where login_id=?", [
      loginDetails.password, id
    ], callback);
  },
  updateLoginTime: function(id, loginDetails, callback) {
    return dbconnection.query("update login_details set recent_login_time=? where login_id=?", [
      loginDetails.loginTime, id
    ], callback);
  },
  getLoginDetailsByloginId: function(loginId, callback) {
    return dbconnection.query("select * from login_details where login_id=?", [loginId], callback);
  },
  addProfileDetails: function(profileDetails, callback) {
    return dbconnection.query("INSERT INTO profile_details (name, date_of_birth, age, religion_id, gender, education_id, 	profession_id, salary_id, height, complexion, city_id, address, physical_disablity, profile_picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?,?)", [
      profileDetails.name,
      profileDetails.dob,
      profileDetails.age,
      profileDetails.religionId,
      profileDetails.gender,
      profileDetails.educationId,
      profileDetails.professionId,
      profileDetails.salaryId,
      profileDetails.height,
      profileDetails.complexion,
      profileDetails.cityId,
      profileDetails.address,
      profileDetails.physicalDisablity,
      profileDetails.profilePicture
    ], callback);
  },
  updateProfileId: function(id, profileDetails, callback) {
    return dbconnection.query("update login_details set profile_id=? where login_id=?", [
      profileDetails.profileId, id
    ], callback);
  },
  getZodiacMasterTable: function(callback) {
    return dbconnection.query("select * from zodiac_master_table", callback);
  },
  getStarMasterTable: function(callback) {
    return dbconnection.query("select * from star_master_table", callback);
  },
  getSalaryRangeMasterTable: function(callback) {
    return dbconnection.query("select * from salary_range_master_table", callback);
  },
  getReligionsMasterTable: function(callback) {
    return dbconnection.query("select * from religions_master_table", callback);
  },
  getRelativeTypeMasterTable: function(callback) {
    return dbconnection.query("select * from relative_type_master_table", callback);
  },
  addBookmarkDetails: function(bookmarkDetails, callback) {
    return dbconnection.query("INSERT INTO profile_bookmark_details (profile_id, bookmark_id, bookmarked_profile_id) VALUES (?, ?, ?)", [
      bookmarkDetails.profileId, bookmarkDetails.bookmarkId, bookmarkDetails.bookmarkedProfileId
    ], callback);
  },
  getProfessionDetailsMasterTable: function(callback) {
    return dbconnection.query("select * from profession_details_master_table", callback);
  },
  getMotherTongueMasterTable: function(callback) {
    return dbconnection.query("select * from mother_tongue_master_table", callback);
  },
  getLanguagesMasterTable: function(callback) {
    return dbconnection.query("select * from languages_master_table", callback);
  },
  addLanguageKnownDetails: function(langugageKnownDetails, callback) {
    return dbconnection.query("INSERT INTO languages_known_details (profile_id, languages_known_id, language_id) VALUES (?, ?, ?)", [
      langugageKnownDetails.profileId, langugageKnownDetails.languagesKnownId, langugageKnownDetails.languageId
    ], callback);
  },
  getLagnaMasterTable: function(callback) {
    return dbconnection.query("select * from lagna_master_table", callback);
  },
  addHoroscopeDetails: function(horoscopeDetails, callback) {
    return dbconnection.query("INSERT INTO horoscope_details (profile_id, horoscope_id, time_of_birth, place_of_birth, zodiac_id, star_id, lagna_id, gothram_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [
      horoscopeDetails.profileId,
      horoscopeDetails.horoscopeId,
      horoscopeDetails.timeOfBirth,
      horoscopeDetails.placeOfBirth,
      horoscopeDetails.zodiacId,
      horoscopeDetails.starId,
      horoscopeDetails.lagnaId,
      horoscopeDetails.gothramId
    ], callback);
  },
  getGothramMasterTable: function(callback) {
    return dbconnection.query("select * from gothram_master_table", callback);
  },
  addFamilyDetails: function(familyDetails, callback) {
    return dbconnection.query("INSERT INTO famiy_details (profile_id, family_id, caste_id, native_place, mother_tongue_id) VALUES (?, ?, ?, ?, ?)", [
      familyDetails.profileId, familyDetails.familyId, familyDetails.casteId, familyDetails.nativePlace, familyDetails.motherTongueId
    ], callback);
  },
  getFamilyDetailsByProfileId: function(profileId, callback) {
    return dbconnection.query("select * from famiy_details where profile_id=?", [profileId], callback);
  },
  addFamilyBackgroundDetails: function(familyBackgroundDetails, callback) {
    return dbconnection.query("INSERT INTO family_background_details (family_id, family_background_id, name, relative_type_id, occupation, age, marital_status) VALUES (?, ?, ?, ?, ?, ?, ?)", [
      familyBackgroundDetails.familyId,
      familyBackgroundDetails.familyBackgroundId,
      familyBackgroundDetails.name,
      familyBackgroundDetails.relativeTypeId,
      familyBackgroundDetails.occupation,
      familyBackgroundDetails.age,
      familyBackgroundDetails.marital_status
    ], callback);
  },
  getEducationalQualificationMasterTable: function(callback) {
    return dbconnection.query("select * from educational_qualification_master_table", callback);
  },
  getCityMasterTable: function(callback) {
    return dbconnection.query("select * from city_master_table", callback);
  },
  getCasteMasterTable: function(callback) {
    return dbconnection.query("select * from caste_master_table", callback);
  },
  addPicDetails: function(picDetails, callback) {
    return dbconnection.query("INSERT INTO additional_pic_details (profile_id, picture_id, picture_link) VALUES (?, ?, ?)", [
      picDetails.profileId, picDetails.pictureId, picDetails.pictureLink
    ], callback);
  },
  getProfileDetailsByProfileId: function(profileId, callback) {
    return dbconnection.query("select * from profile_details where profile_id=?", [profileId], callback);
  },
  getBookmarkDetailsByProfileId: function(profileId, callback) {
    return dbconnection.query("select * from profile_bookmark_details where profile_id=?", [profileId], callback);
  },
  getLanguageKnownDetailsByProfileId: function(profileId, callback) {
    return dbconnection.query("select * from languages_known_details where profile_id=?", [profileId], callback);
  },
  getHoroscopeDetailsByProfileId: function(profileId, callback) {
    return dbconnection.query("select * from horoscope_details where profile_id=?", [profileId], callback);
  },
  getfamilyBackgroundDetailsByFamilyId: function(familyId, callback) {
    return dbconnection.query("select * from family_background_details where family_id=?", [familyId], callback);
  },
  getPicDetailsByProfileId: function(profileId, callback) {
    return dbconnection.query("select * from additional_pic_details where profile_id=?", [profileId], callback);
  }
};

module.exports = queries;
mysqlConnect.disconnectDatabase();
