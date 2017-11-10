var express = require('express');  
var router = express.Router();
var multer = require('multer');  
var fs = require('fs');   

var csv = require('csvtojson');
var pathToCSV = '../cohort-uploads/';

var Student = require('../models/students');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'cohort-uploads');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + '.csv');
    }
});
  
var upload = multer({ storage: storage }).single('cohort');  

router.get('/', function(req, res, next) {
    res.json({message: "Cohorts Page"});
});

router.post('/', function (req, res) {
    upload(req, res, function (err) {
      if (err) {
        return res.send(err)
      } 

      console.log(req.file);
    
      csv() 
      .fromFile(req.file.path)
      .on('json', (jsonObj)=>{
        var student = new Student();
        
        student.name = jsonObj.name;
        student.email = jsonObj.email; 
        student.slack = jsonObj.slack;
            
        student.save()  
        .then(student => {
            res.json('Added Student Sucessfully');  
    
       });
      })  
    })   
});

    // fs.unlink(req.file.path, function(error) {
    //     if (error) {
    //         throw error;
    //     }
    //     console.log('Deleted!');
    // }); 


module.exports = router;
 

