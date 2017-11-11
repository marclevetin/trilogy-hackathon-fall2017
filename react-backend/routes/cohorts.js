var express = require('express');  
var router = express.Router();  
var Student = require('../models/students');

router.get('/', function(req, res, next) {
    res.json({message: "Cohorts Page"});
});

router.post('/', function (req, res) { 
    
  console.log(req.body);

  
  var student = new Student();
    student.name = req.body.name;
    student.email = req.body.email; 
    student.slack = req.body.slack;

  student.save()  
  .then(student => {
     res.json('Added Student Sucessfully');
  });
});

module.exports = router;
 

