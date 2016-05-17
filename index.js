

var gradesModule=require('./mdl_grades');
var express=require ('express');
var app=express();
var mongoose=require('mongoose');
mongoose.connect('mongodb://db_usr:db_pass@ds023932.mlab.com:23932/students_grades');


// var conn=mongoose.connection;

// conn.on('error', function (err){
//     console.log('error issssss: ' + err);
// });

// conn.once('open',function(){
//     console.log('yess');
//     mongoose.disconnect();
// });

var port=process.env.PORT||3000;
// var db=mongoose.connect('mongodb://db_usr:db_pass@ds023932.mlab.com:23932/students_grades');
// var gradesModule=require('./mdl_grades');
//var schema=mongoose.Schema;

// var conn=mongoose.connection;

// mongoose.model('studModel',student);

     // mongoose.connection.once('open',function (){
     //     console.log('connected2'); 
     //     mongoose.disconnect();
     // });


app.get("/",function(req,res){ //the regular route - send beck the html API document.
    res.set('Header-one', 'my talk function');
    res.sendFile(__dirname + '/API/api.html'); //sending the file to the client.
 });

app.get('/getAllStudents',function(req,res){
    var jsonMessage=gradesModule.getAllStudents();
    res.json(jsonMessage);  //sending the relevant data in a Json format.
});

app.get('/getStudGradeById/:studentId',function(req,res){
    var studentId = req.params.studentId;
    //console.log("test: getStudGradeById function, id recieved: "+studentId);
    var jsonMessage=gradesModule.getStudGradeById(studentId);
    //console.log("test2:  getStudGradeById function, return val:"+jsonMessage);
    res.send(jsonMessage);
});

app.get('/getStudentsByYear/:year',function(req,res){
    var year = req.params.year;
    //console.log("test: getStudentsByYear function, year received: "+year);
    var jsonMessage=gradesModule.getStudentsByYear(year);
    //console.log("test2: getStudentsByYear function, return val:"+jsonMessage);
    res.send(jsonMessage);
});


app.get('/*',function(req,res){
    var jsonMessage="<p>Error: Wrong path!</p><p>please use the API: https://students-grades.herokuapp.com</p>";
    res.send(jsonMessage);
});

app.listen(port);
console.log('listening on port' + port);