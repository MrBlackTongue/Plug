var express = require('express');
var router = express.Router();

const cors = require('cors');
router.use(cors());


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/unnd/docs', function (req, res) {
  res.json({
    "id": 0,
    "kind": "string",
    "name": "string",
    "tdClass": {
      "children": [
        null
      ],
      "code": "string",
      "desc": "string",
      "id": 0,
      "numLev": 0,
      "parentId": 0
    },
    "tdFileId": 0,
    "tdType": {
      "code": "string",
      "desc": "string",
      "id": 0
    },
    "type": "string",
    "unndBlock": {
      "code": "string",
      "id": 0,
      "name": "string",
      "type": "string",
      "unndPlantId": 0
    },
    "unndPlant": {
      "code": "string",
      "id": 0,
      "name": "string"
    }
  });
});

module.exports = router;
