const {Router} = require("express");
const router = Router();
const bookModel = require("../model/book")

router.get("/", async(req, res, next) => {
    try {
        const {category} = req.query
        if(category){
            const data = await bookModel.find({category})
            res.json({
                code: 200,
                data,
                msg: '查询成功'
            })
        }else{
            const data = await bookModel.find()
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
        let { title, author, image, category } = req.body
        const data = await bookModel.create({ title, author, image, category })
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
        let { _id } = req.body
        if(_id){
            const data = await bookModel.deleteOne({ _id })
            res.json({
                code: 200,
                data,
                msg: '删除成功'
            })
        }
    }catch (e) {
        next(e)
    }
})

module.exports = router;