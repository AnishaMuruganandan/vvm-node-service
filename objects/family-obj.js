var familyObj = {

  saveFamilyDetailsObj: function(profileId, fatherName, motherName, siblingCount, motherTongue, nativePalce) {
    this.profileId = profileId || '';
    this.fatherName = fatherName || '';
    this.motherName = motherName || '';
    this.siblingCount = siblingCount || '';
    this.motherTongue = motherTongue || '';
    this.nativePalce = nativePalce || '';
  }

}

module.exports = familyObj;
