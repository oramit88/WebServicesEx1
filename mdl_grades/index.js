//var gradesData = require('../data/gradesData.json'); //bring the data from Json file.
var studentModel=require('./student');
var mongoose=require('mongoose');



// console.log("test");
// mongoose.connection.once('open', function (){
//                         console.log("yess");
//                         mongoose.disconnect();
           
//     });

var gradesData;

//console.log("get all student function route");
mongoose.connection.once('open', function (){
                studentModel.find({}, function(err, students) {
                if(err){
                  throw err;  
                } 
                else{
                    console.log(students);
                    gradesData=students;
                    mongoose.disconnect();
                }
             });
    });



//returns the Json as is.
exports.getAllStudents=function(){ 

   return gradesData;
};

//returns the Json with the student details by his id number. 
exports.getStudGradeById=function(id){
    var returnMsg;
    if(isNaN(parseInt(id))){ //if the given argument is illegal- characters. 
        returnMsg={"Error":"not a number"}
    }
    else if(id<0){
         returnMsg={"Error":"negative number"}
     }
    else{
        console.log("getStudGradeById function. searching id:"+id);
        var arrSize = gradesData.students.length; //the amount of student at the json file.
        //console.log("size is:" +arrSize);
        for(var i = 0 ; i < arrSize;i++){
            if(gradesData.students[i].studentId == id){ //searching the student by id.
                returnMsg = gradesData.students[i];
                break;
            }
        }
        if(returnMsg==undefined){  //didnt find.
                returnMsg={"massage":"didnt find any result"}
        }
     
    }
    //console.log("test3:"+returnMsg);
    return returnMsg;
};

//returns list of students (json) from a particular year. 
//he argument "year" must be between 1 to 4. 
//1- is first year students, 2 is second year students, et cetera... 
exports.getStudentsByYear=function(year){
    var returnMsg;
    if(isNaN(parseInt(year))){
        returnMsg={"Error":"not a number"}

    }
    else if(year>4||year<1){
         returnMsg={"Error":"year must be between 1 to 4"}
     }
    else{
        console.log("getStudentsByYear function. searching year:"+year);
        var arrSize = gradesData.students.length;
        returnMsg=[];
        for(var i = 0 ; i < arrSize;i++){
            if(gradesData.students[i].year == year){
                returnMsg.push(gradesData.students[i]); //adding the student to students array.
            }
        }
        if(returnMsg==undefined){
                eturnMsg={"massage":"didnt find any result"}
        }
     
    }
    //console.log("test3:"+returnMsg);
    return returnMsg;
};




