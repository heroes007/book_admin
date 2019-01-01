var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
// var adminUserModel = require('../model/adminUser')
// var newsModel = require('../model/news')
// var cert = require('../untils/auth')

router.use("/book",require("../controller/book"))
router.use("/category",require("../controller/category"))


// router.post('/demo/login', async (req, res, next) => {
//   try {
//       const {username, password} = req.body
//       const user = await adminUserModel.findOne({username})
//       if(user){
//         if(password == user.password){
//             var token = jwt.sign({ userId: user._id }, cert, { expiresIn: 60*60*6});
//             res.json({
//                 code:200,
//                 token,
//                 data:user,
//                 msg:'登陆成功'
//             })
//         }else{
//           res.json({
//               code:403,
//               msg:'密码错误'
//           })
//         }
//       }else{
//         res.json({
//             code:403,
//             msg:'用户不存在'
//         })
//       }
//   }catch (err) {
//       next(err)
//   }
// })
//
// router.get('/demo/getNews1', async (req, res, next) => {
//   try {
//      const newsData = await newsModel.find()
//       res.json({
//           code:200,
//           data:newsData,
//           msg:'success'
//       })
//   }catch (err) {
//       next(err)
//   }
// })
//
// router.get('/demo/getNews2',async (req, res, next) => {
//     let {token} = req.headers
//     if(token){
//         jwt.verify(token, cert, function (err, decoded) {
//             if(err){
//               res.json({
//                   code:401,
//                   msg:'登陆状态失效'
//               })
//               return
//             }
//             console.log(decoded)
//             adminUserModel.findById({_id:decoded.userId}).then(user => {
//               res.json({
//                   code:200,
//                   data:user,
//                   mas:'success'
//               })
//             })
//         });
//     }else{
//       res.json({
//           code:403,
//           msg:'缺少token'
//       })
//     }
// })

module.exports = router;
