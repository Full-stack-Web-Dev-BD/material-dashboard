const express=require('express');
const passport=require('passport');
const Project=require('../models/Project');

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

router.post('/newProject', upload.single("logo"), passport.authenticate('jwt', {session:false}), (req, res)=>{
  const newProject= new Project({
      title:req.body.title,
      description:req.body.description,
      log:req.body.logo,
      liveLink:req.body.liveLink,
      features:req.body.features
  })
  newProject.save()
  .then(project=> res.json(project))
  .catch(err=> res.json(err));
})

router.get('/allProject', (req, res)=>{
  Project.find()
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
})

router.get('/edit/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  Project.findById(id)
  .then(data=> res.json(data))
  .catch(err=> res.json(err));
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  Project.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
    res.json(data)
  }).catch((err)=>{
    console.log(err);
  })
});

router.get('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  Project.findByIdAndRemove({_id:req.params.id})
    .then(data=> console.log('data delete succesfully'))
    .catch(err=> console.log(err));
})


module.exports=router;