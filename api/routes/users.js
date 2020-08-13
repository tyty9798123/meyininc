const { Router } = require('express')

const router = Router()

const mysql = require('../connections/mysql');
// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

router.post('/login', function(req, res, next) {
  let { account , password  } = req.body;

  if (account && password) {
    mysql.query(`SELECT * FROM users WHERE userAccount = ? and userPassword = ?`,
    [account, password], 
    (err, result, field) => {
      if (err){
        res.json({
          success: false,
          message: '資料庫連接錯誤'
        })
      }
      else{
        if (result[0]){
          let { userID } = result[0];
          req.session.uid = userID;
          res.json({
            success: true,
          })
        }
        else{
          res.json({
            success: false,
            message: '帳號或密碼錯誤'
          })
        }
      }
    })
  }
  else{
    res.json({
      success: false,
      message: '參數錯誤'
    })
  }
})

router.post('/is_login', function(req, res, next) {
  if (req.session.uid) {
    return res.json({
      is_login: true,
      uid: req.session.uid
    })
  }
  return res.json({
    is_login: false,
  })
})

module.exports = router
