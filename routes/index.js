const express = require('express');
const router = express.Router({ mergeParams: true });

const cors = require('cors');
const { log } = require("debug");
const connection = require("express");
router.use(cors());

const docs = {
   aliases: [
      {
         columnAlias: "Шифр",
         columnName: "code",
         defaultSorting: true,
         id: 301,
         isActive: true,
         isShow: true,
         num: 101,
         tableCode: "f_problem",
      },
      {
         columnAlias: "Название",
         columnName: "name",
         defaultSorting: true,
         id: 302,
         isActive: true,
         isShow: true,
         num: 102,
         tableCode: "f_problem",
      },
      {
         columnAlias: "Класс",
         columnName: "className",
         defaultSorting: true,
         id: 303,
         isActive: true,
         isShow: true,
         num: 104,
         tableCode: "f_problem",
      },
      {
         columnAlias: "Вид",
         columnName: "type",
         defaultSorting: true,
         id: 305,
         isActive: true,
         isShow: true,
         num: 105,
         tableCode: "f_problem",
      },
      {
         columnAlias: "АЭС",
         columnName: "plantCode",
         defaultSorting: true,
         id: 306,
         isActive: true,
         isShow: true,
         num: 106,
         tableCode: "f_problem",
      },
      {
         columnAlias: "Блок",
         columnName: "blockCode",
         defaultSorting: true,
         id: 307,
         isActive: true,
         isShow: true,
         num: 107,
         tableCode: "f_problem",
      },
      {
         columnAlias: "Действия",
         columnName: "id",
         defaultSorting: true,
         id: 308,
         isActive: true,
         isShow: true,
         num: 108,
         tableCode: "f_problem",
      }
   ],
   data: [
      {
         blockCode: "БАЛ-3",
         className: "1.1.1.01.001",
         code: "СТО-111",
         id: 1,
         name: "СТО по оборудованию 1",
         plantCode: "Балаковская АЭС",
         type: "ООБ",
      },
      {
         blockCode: "БАЛ-4",
         className: "1.1.1.01.002",
         code: "СТО-112",
         id: 2,
         name: "СТО по оборудованию 2",
         plantCode: "Балаковская АЭС",
         type: "ООБ",
      }
   ]
}


/* GET home page. */
router.get('/', function (req, res, next) {
   res.render('index', { title: 'Express' });
});
//
router.get('/td-docs', function (req, res) {
   res.json(docs);
});

//
function compare(id) {
   for (let i = 0; i <= docs.data.length; i++) {
      if (docs.data[i].id === id)
         return docs.data[i]
   }
}

router.get('/td-doc', function (req, res) {
   // res.send('id is set to ' + req.query.id )
   let id = Number(req.query.id);
   let td = compare(id);
   res.send(td)
});

// router.patch('/td-doc', function (req, res) {
//    const query = docs.data
//    const params = [
//       req.body.blockCode,
//       req.body.className,
//       req.body.code,
//       req.body.id,
//       req.body.name,
//       req.body.plantCode,
//       req.body.type,
//    ];
//    connection.query(query, params, (error, result) => {
//       res.send({
//          ok: true,
//       })
//    })
// })

module.exports = router;
