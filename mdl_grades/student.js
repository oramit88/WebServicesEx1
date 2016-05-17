 var mongoose=require('mongoose');
 var schema=mongoose.Schema;
 var studentSchema=new schema({
    name: String,
     studentId:{type:Number,unique:true}, 
     year:Number,
     courses:[{courseName:String,grade:Number}]
 }, {collection:'students'});

 var studentModel=mongoose.model('studentModel',studentSchema);
 module.exports=studentModel;