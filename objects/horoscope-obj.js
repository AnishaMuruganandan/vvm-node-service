var horoscopeObj = {

  saveHoroscopeDetailsObj: function(profileId, jathagamSoftCopy, tob, pob, zodiac, star, lagna) {
    this.profileId = profileId || '';
    this.jathagamSoftCopy = jathagamSoftCopy || '';
    this.tob = tob || '';
    this.pob = pob || '';
    this.zodiac = zodiac || '';
    this.star = star || '';
    this.lagna = lagna || '';
  }

}

module.exports = horoscopeObj;
