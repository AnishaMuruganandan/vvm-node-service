var profileObj = {

  saveBasicProfileDetailsObj: function(name, dateOfBirth, height, cityId, educationId, professionId, religionId, casteId, profilePicture) {
    this.name = name || '';
    this.dateOfBirth = dateOfBirth || '';
    this.height = height || '';
    this.cityId = cityId || '';
    this.educationId = educationId || '';
    this.professionId = professionId || '';
    this.religionId = religionId || '';
    this.casteId = casteId || '';
    this.profilePicture = profilePicture || '';
  },

  updateProfileBasicDetailsObj: function(profileBasicId, profileId, educationId, professionId, cityId, name, dateOfBirth, height, religionId, casteId) {
    this.profileBasicId = profileBasicId;
    this.profileId = profileId;
    this.educationId = educationId;
    this.professionId = professionId
    this.cityId = cityId;
    this.name = name || '';
    this.dateOfBirth = dateOfBirth || '';
    this.height = height || '';
    this.religionId = religionId || '';
    this.casteId = casteId || '';
  },

  // updateProfileDetailsObj: function(profileId, gender, salary, complexion, address, physicallyDisabled, languageKnown) {
  //   this.profileBasicId = profileBasicId;
  //   this.profileId = profileId;
  //   this.gender = gender || '';
  //   this.salary = salary || '';
  //   this.complexion = complexion || '';
  //   this.address = address || '';
  //   this.physicallyDisabled = physicallyDisabled || '';
  //   this.languageKnown = languageKnown || '';
  // },

  saveProfileDetailsObj: function(gender, salary, complexion, address, physicallyDisabled, languageKnown,aboutMe,expectations,dummy,alternatephone1,alternatephone2) {
    this.gender = gender || '';
    this.salary = salary || '';
    this.complexion = complexion || '';
    this.address = address || '';
    this.physicallyDisabled = physicallyDisabled || '';
    this.languageKnown = languageKnown || '';
    this.aboutMe = aboutMe || '';
    this.expectations = expectations || '';
    this.dummy = dummy || '';
    this.alternatephone1 = alternatephone1 || '';
    this.alternatephone2 = alternatephone2 || '';

  },

  saveProfilePicObj: function(picURL, profileBasicId) {
    this.picURL = picURL;
    this.profileBasicId = profileBasicId;
  }
}

module.exports = profileObj;
