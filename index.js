var express=require ('express');
var app=express();
var gradesModule=require('./mdl_grades');
//var gradesData = require('./data/gradesData.json');
var myData;


var port=process.env.PORT||3000;

// app.get("/",function(req,res){ //if thre is requens && methid "get" and the path is:  do
//     console.log("log in...");
//  });

app.get("/",function(req,res){ //if thre is requens && methid "get" and the path is:  do
    gradesModule.talk('hiii');
    //res.status(200);
    res.set('Header-one', 'my talk function');
    res.send(200,'received something..');
 });

app.get('/getAllStudents',function(req,res){
    myData=gradesModule.getAllStudents();
    res.json(myData);  
});


app.get('/getStudGradeById/:studentId',function(req,res){
    var studentId = req.params.studentId;
    //console.log("test:"+studentId);
    var jsonMessage=gradesModule.getStudGradeById(studentId);
    //console.log("test2:"+jsonMessage);
    //var str="hi"
    res.send(jsonMessage);
});



app.get('/getStudentsByYear/:year',function(req,res){
    var year = req.params.year;
    //console.log("test:"+year);
    var jsonMessage=gradesModule.getStudentsByYear(year);
    //console.log("test2:"+jsonMessage);
    //var str="hi"
    res.send(jsonMessage);
});



app.listen(port);
console.log('listening on port' + port);