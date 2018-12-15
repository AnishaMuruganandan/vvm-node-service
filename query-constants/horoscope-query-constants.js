var horoscopeQueryConst = {

  saveHoroscopeDetailsQuery: "INSERT INTO horoscope_details (profile_id, time_of_birth, place_of_birth, zodiac_id, star_id, lagna_id, paagam, horoscope_soft_copy) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
  getHoroscopeDetailsByProfileIdQuery: "select * from horoscope_details where profile_id=?",
};

module.exports = horoscopeQueryConst;
