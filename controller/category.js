const {Router} = require("express");
const router = Router();
const categoryModel = require("../model/category")
const bookModel = require("../model/book")

router.get("/", async(req, res, next) => {
    try {
        if(req.query._id){
            let {_id} = req.query
            let data = await categoryModel.find({_id})
            res.json({
                code: 200,
                data,
                msg: '查询成功'
            })
        }else{
            let data = await categoryModel.find()
            let number = ''
            for (let i=0; i<data.length; i++){
                number = await bookModel.find({category: data[i]._id})
                data[i].number = Object.keys(number).length
            }
            res.json({
                code: 200,
                data,
                msg: '查询成功'
            })
        }
    } catch (e) {
        next(e)
    }
})

router.post("/add", async(req, res, next) => {
    try{
        let { title, image } = req.body
        const data = await categoryModel.create({ title, image })
        res.json({
            code: 200,
            data,
            msg: '添加成功'
        })
    }catch (e) {
        next(e)
    }
})

router.delete("/", async(req, res, next) => {
    try{
        let _id = req.body
        const data = await categoryModel.deleteOne({_id})
        res.json({
            code: 200,
            data,
            msg: '删除成功'
        })
    }catch (e) {
        next(e)
    }
})


module.exports = router;