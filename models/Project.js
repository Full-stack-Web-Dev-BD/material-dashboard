const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const projectSchema=new Schema({
	title:{
		type:String,
		require:true
	},
	description:{
		type:String,
		require:true
	},
	logo:{
		type:String,
		require:true
	},
	liveLink:{
		type:String,
		require:true
    },
    features:{
		type:Array
	},
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=Project=mongoose.model('projects', projectSchema);