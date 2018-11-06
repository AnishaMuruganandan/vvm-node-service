var familyBackgroundObject = {

  saveFamilyBackgroundDetailsObj: function(profileId, siblingType, siblingAge, siblingMaritalStatus) {
    this.profileId = profileId || '';
    this.siblingType = siblingType || '';
    this.siblingAge = siblingAge || '';
    this.siblingMaritalStatus = siblingMaritalStatus || '';
  }

}

module.exports = familyBackgroundObject;
