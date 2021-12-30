import express from 'express'
import { PrismaClient } from '@prisma/client'
import res from 'express/lib/response'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

//Creates a category
app.post(`/Category`, async(req, res) =>{
  const result = await prisma.category.create({
      data:{
          name: req.body.name,        
      },
  })
  res.json(result)
})


//Creates an image
app.post(`/Image`, async(req, res) =>{
  const result = await prisma.image.create({
      data:{
          name: req.body.name,  
          name_big: req.body.name_big,
          alt_text: req.body.alt_text      
      },
  })
  res.json(result)
})

//Creates a product
app.post(`/Product`, async(req, res) =>{
    const result = await prisma.product.create({
        data:{
            name: req.body.name,
            category_id: req.body.category_id,
            stock: req.body.stock,
            on_sale: req.body.on_sale,
            img_id: req.body.img_id,
            price: req.body.price
        },
    })
    res.json(result)
})

//Gets a specific product by id
app.get(`/Product`, async(req, res) =>{
    const {id} = req.params 
    const product = await prisma.product.findUnique({
        where: {
            id: Number(id),
        },     
    })
    res.json(product)
})

/* //Searches for a specific product by search string
app.get(`/Product`, async(req, res) =>{
    const {searchString} = req.query
    const products = await prisma.product.findMany({
        where: {
            OR: [
              {
                id: {
                  contains: searchString,
                },
              },
              {
                name: {
                  contains: searchString,
                },
              },
            ],
          },
        })
        res.send(products)
}) */

export default {
  path: '/api', // specifies the route for where the middleware will be accessible 
  handler: app // specifies the function executed when invoked
}