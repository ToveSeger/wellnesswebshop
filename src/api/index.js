import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

//GET

//PRODUCTS

//Gets a specific product by id
app.get('/product/:id', async(req, res) =>{
  const {id} = req.params
  const product = await prisma.product.findUnique({         
    where:{
      id: Number(id)
    }
  })
  res.json(product)
}) 

//Gets a specific product by name
app.get('/filterProducts/:query', async(req, res) =>{
  const {query} = req.params
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
      }
    },
  })
  res.json(products)
}) 

//Gets all products 
app.get('/allproducts', async(req, res) =>{
  const products = await prisma.product.findMany()
  res.json(products)
})

//Gets all products that are on sale 
app.get('/outlet', async(req, res) =>{
  const products = await prisma.product.findMany({
    where: {
      on_sale: true
    },
  })
  res.json(products)
}) 

//Gets all products in a specific category
app.get('/productbycategory/:id', async(req, res) =>{
  const {id} = req.params
  const products = await prisma.product.findMany({
    where: {
      category_id: Number(id)
    },
  })
  res.json(products)
}) 

//CATEGORIES

//Gets all categories 
app.get('/category/all', async(req, res) =>{
  const categories = await prisma.category.findMany()
  res.json(categories)
})

//Gets a specific category by id
app.get('/category/:id', async(req, res) =>{
  const {id} = req.params
  const category = await prisma.category.findUnique({         
    where:{
      id: Number(id) 
    }
  })
  res.json(category)
})

//IMAGES

//Gets a specific image by id
app.get('/image/:id', async(req, res) =>{
  const {id} = req.params
  const image = await prisma.image.findUnique({         
    where:{
      id: Number(id) 
    }
  })
  res.json(image)
})

//Gets all images - doesnt work
app.get('/image/all', async(req, res) =>{
  const images = await prisma.image.findMany()
  res.json(images)
})

// CREATE 

//Creates a category
app.post('/category', async(req, res) =>{
  const result = await prisma.category.create({
      data:{
          name: req.body.name,        
      },
  })
  res.json(result)
})


//Creates an image
app.post('/image', async(req, res) =>{
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
app.post('/postproduct', async(req, res) =>{
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

//creates a customer
app.post('/postcustomer', async(req, res) =>{
  const result = await prisma.customer.create({
      data:{
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          phone: req.body.phone,
          email: req.body.email,
          road: req.body.road,
          zip_code: req.body.zip_code,
          city: req.body.city
      },
  })
  res.json(result)
})

//creates an order
app.post('/postorder', async(req, res) =>{
  const result = await prisma.order.create({
      data:{
          customer_id: req.body.customer_id,       
          order_sum: req.body.order_sum
      },
  })
  res.json(result)
})

//UPDATE **DELETE UPDATE SECTION IF NOT USED
//Updates a product
app.put('/updateproduct/:productId', async(req, res) =>{
  const {productId} = req.params
  const result = await prisma.product.update({
  where:{
    id:parseInt(productId)
  },
      data:{
          order_id:req.body.order_id
      },
  })
  res.json(result)
})


//Updates an order
app.put('/updateorder/:orderId', async(req, res) =>{
  const {orderId} = req.params
  const result = await prisma.order.update({
  where:{
    id:parseInt(orderId)
  },
      data:{
          products: req.body.products
      },
  })
  res.json(result)
})

export default {
  path: '/api', // specifies the route for where the middleware will be accessible 
  handler: app // specifies the function executed when invoked
}