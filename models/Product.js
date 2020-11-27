const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const productSchema=new Schema({
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

module.exports=Product=mongoose.model('projects', productSchema);