const express=require('express');
const passport=require('passport');
const multer=require('multer');
const Product=require('../models/Product');

const router=express.Router();


const storage=multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, './uploads/users')	
	},
	filename: function(req, file, cb){
		cb(null, Date.now() + file.originalname)
	}
})

const fileFilter=(req, file, cb)=>{
	if(file.mimetype==='image/jpeg' || file.mimetype==='image/png'){
		cb(null, true)
	}else{
		cb(null, false)
	}
}

const upload=multer({
	storage:storage,
	limits:{
		fileSize:1024*1024*5
	},
	fileFilter:fileFilter
})


router.post('/newProduct', upload.single("logo"), passport.authenticate('jwt', {session:false}), (req, res)=>{
  const newProduct= new Product({
      title:req.body.title,
      description:req.body.description,
      log:req.body.logo,
      liveLink:req.body.liveLink,
      features:req.body.features
  })
  newProduct.save()
  .then(product=> res.json(product))
  .catch(err=> res.json(err));
})

router.get('/allProduct', (req, res)=>{
  Product.find()
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
})

router.get('/edit/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  Product.findById(id)
  .then(data=> res.json(data))
  .catch(err=> res.json(err));
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  Product.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
    res.json(data)
  }).catch((err)=>{
    console.log(err);
  })
});

router.get('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  Product.findByIdAndRemove({_id:req.params.id})
    .then(data=> console.log('data delete succesfully'))
    .catch(err=> console.log(err));
})


module.exports=router;