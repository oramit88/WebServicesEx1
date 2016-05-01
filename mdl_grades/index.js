var gradesData = require('../data/gradesData.json');

exports.talk=function(msg){
    console.log("my you said: "+msg);
};


exports.getAllStudents=function(){
    return gradesData;
};


exports.getStudGradeById=function(id){
    var returnMsg;
    if(isNaN(parseInt(id))){
        returnMsg={"Error":"not a number"}

    }
    else if(id<0){
         returnMsg={"Error":"negative number"}
     }
    else{
        console.log("getStudGradeById function. searchong id:"+id);
        var arrSize = gradesData.students.length;
        //console.log("size is:" +arrSize);
        //return arrSize;
        for(var i = 0 ; i < arrSize;i++){
            if(gradesData.students[i].studentId == id){
                returnMsg = gradesData.students[i];
                break;
            }
        }
        if(returnMsg==undefined){
                console.log("yes");
                returnMsg={"massage":"didnt find any result"}
        }
     
    }
    console.log("test3:"+returnMsg);
    return returnMsg;
};

exports.getStudentsByYear=function(year){
    var returnMsg;
    if(isNaN(parseInt(year))){
        returnMsg={"Error":"not a number"}

    }
    else if(year<0){
         returnMsg={"Error":"negative number"}
     }
    else if(year>4){
         returnMsg={"Error":"year must be between 1 to 4"}
     }
    else{

        console.log("getStudentsByYear function. searchong year:"+year);
        var arrSize = gradesData.students.length;
        returnMsg=[];

        for(var i = 0 ; i < arrSize;i++){
            if(gradesData.students[i].year == year){
                returnMsg.push(gradesData.students[i]);
            }
        }
        if(returnMsg==undefined){
                eturnMsg={"massage":"didnt find any result"}
        }
     
    }
    //console.log("test3:"+returnMsg);
    return returnMsg;
};




