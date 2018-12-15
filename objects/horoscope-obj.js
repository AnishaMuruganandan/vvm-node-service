var horoscopeObj = {

  saveHoroscopeDetailsObj: function(profileId, jathagamSoftCopy, tob, pob, zodiac, star, lagna, paagam) {
    this.profileId = profileId || '';
    this.jathagamSoftCopy = jathagamSoftCopy || '';
    this.tob = tob || '';
    this.pob = pob || '';
    this.zodiac = zodiac || '';
    this.star = star || '';
    this.lagna = lagna || '';
    this.paagam = paagam || '';
  }

}

module.exports = horoscopeObj;
