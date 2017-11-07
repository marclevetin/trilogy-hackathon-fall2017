var express = require('express'); 
var Student = require('../models/students');
var router = express.Router();

/* GET student listing. */
router.get('/', function(req, res, next) {  

  Student.find(function(err,students) {
    if (err)
    res.send(err)
    res.json(students) 
    // res.json({ message: 'API initialized! No Really, its working'}); 
  });
});   

router.route('/').post(function(req, res, next) {
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