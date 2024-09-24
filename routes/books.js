// books.js 
// Importing express module 
const express=require("express") 
const router=express.Router() 

const db = require("../configs/db")
const Books = db.books

// Handling request using router 
router.get("/", async (req,res,next)=>{
    const allBooks = await Books.findAll()
    
    res.json({
        result: allBooks
    }) 
})

router.post("/", async (req,res,next)=>{ 
    const newBook = {
        name: req.body.name,
        description: req.body.description
    }

    const result = await Books.create(newBook)
    res.json(result)
})

router.patch("/:booksId", async (req,res,next)=>{ 
    const result = await Books.update(req.body, {where: {id: req.params.booksId}})
    res.json(result)
})

router.delete("/:booksId", async (req,res,next)=>{ 
    const result = await Books.destroy({where: {id: req.params.booksId}})
    res.json(result)
})



// Importing the router 
module.exports=router
