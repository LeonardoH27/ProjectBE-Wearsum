const port = 4000;
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken"); // Tokens 
const multer = require("multer"); // Framework nodeJS
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

//  MongoDB
mongoose.connect(
  "mongodb+srv://leonardohorta2705:12345678910@cluster0.hhhqnbx.mongodb.net/wearsum"
);

//API

app.get("/", (req, res) => {
  res.send("Hello World");
});

//UPLOAD IMAGE
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//DETAILS PRODUCT
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// ADD PRODUCT
app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    old_price: req.body.old_price,
    new_price: req.body.new_price,
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//USER 

const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  cartData: {
    type:Object,
  }
});

//REGISTER

app.post("/signup", async(req, res)=>{

  let check = await Users.findOne({email:req.body.email});
  if(check){
    return res.status(400).json({success: false, errors: "There is an existing user"})
  }
  let cart = {};
  for (let i = 0; i < 300 ; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password:  req.body.password,
    cartData: cart,
  })

  await user.save();

  const data ={
    user:{
      id: user.id
    }
  }

  const token = jwt.sign(data, "secret");
  res.json({
    success: true,token
  });
})

//REMOVE PRODUCT
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//ALL PRODUCT
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("Search completed");
  res.send(products);

  });


app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port" + port);
  } else {
    console.log("Fatal erro:" + error);
  }
});
