queries.getZodiacMasterTable(function(err, rows) {
    if (err) {
        res.json(err);
    } else {
      var output={};
      output.zodiacId = rows[0].zodiac_id;
      output.zodiacName = rows[0].zodiac_name;
        res.json(output);
    }
});
