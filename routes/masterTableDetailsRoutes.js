var express = require('express');
var router = express.Router();
var queries = require('../models/dbqueries');
var delegate_layer_obj = require('../delegate_layer/master_table_details_delegate');

router.get('/fetchZodiacMasterTable', function(req, res, next) {
delegate_layer_obj.
});

router.get('/fetchStarMasterTable', function(req, res, next) {
    queries.getStarMasterTable(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
          var output={};
          output.starId = rows[0].star_id;
          output.starName = rows[0].star_name;
            res.json(output);
        }
    });
});

router.get('/fetchSalaryRangeMasterTable', function(req, res, next) {
    queries.getSalaryRangeMasterTable(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
          var output={};
          output.salaryId = rows[0].salary_id;
          output.salaryRange = rows[0].salary_range;
            res.json(output);
        }
    });
});

router.get('/fetchReligionsMasterTable', function(req, res, next) {
    queries.getReligionsMasterTable(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
          var output={};
          output.religionId = rows[0].religion_id;
          output.religionName = rows[0].religion_name;
            res.json(output);
        }
    });
});

router.get('/fetchRelativeTypeMasterTable', function(req, res, next) {
    queries.getRelativeTypeMasterTable(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
          var output={};
          output.relativeTypeId = rows[0].relative_type_id;
          output.relativeTypeName = rows[0].relative_type_name;
            res.json(output);
        }
    });
});

router.get('/fetchProfessionDetailsMasterTable', function(req, res, next) {
    queries.getProfessionDetailsMasterTable(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
          var output={};
          output.professionId = rows[0].profession_id;
          output.professionName = rows[0].profession_name;
            res.json(output);
        }
    });
});

router.get('/fetchMotherTongueMasterTable', function(req, res, next) {
    queries.getMotherTongueMasterTable(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
          var output={};
          output.motherTongueId = rows[0].mother_tongue_id;
          output.motherTongueName = rows[0].mother_tongue_name;
            res.json(output);
        }
    });
});

router.get('/fetchLanguagesMasterTable', function(req, res, next) {
    queries.getLanguagesMasterTable(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
          var output={};
          output.languageId = rows[0].language_id;
          output.languageName = rows[0].language_name;
            res.json(output);
        }
    });
});

router.get('/fetchLagnaMasterTable', function(req, res, next) {
    queries.getLagnaMasterTable(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
          var output={};
          output.lagnaId = rows[0].lagna_id;
          output.lagnaName = rows[0].lagna_name;
            res.json(output);
        }
    });
});

router.get('/fetchGothramMasterTable', function(req, res, next) {
    queries.getGothramMasterTable(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
          var output={};
          output.gothramId = rows[0].gothram_id;
          output.gothramName = rows[0].gothram_name;
            res.json(output);
        }
    });
});

router.get('/fetchEducationalQualificationMasterTable', function(req, res, next) {
    queries.getEducationalQualificationMasterTable(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
          var output={};
          output.educationId = rows[0].education_id;
          output.degreeQualified = rows[0].degree_qualified;
            res.json(output);
        }
    });
});

router.get('/fetchCityMasterTable', function(req, res, next) {
    queries.getCityMasterTable(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
          var output={};
          output.cityId = rows[0].city_id;
          output.cityName = rows[0].city_name;
            res.json(output);
        }
    });
});

router.get('/fetchCasteMasterTable', function(req, res, next) {
    queries.getCasteMasterTable(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
          var output={};
          output.casteId = rows[0].caste_id;
          output.casteName = rows[0].caste_name;
            res.json(output);
        }
    });
});

module.exports = router;
