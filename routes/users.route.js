const express= require('express');
const { students, teachers, gallary, about, admin, classname, homepage } = require('../controllers/users.controlers');

const router= express.Router();

router.get('/',(homepage));

router.get('/student',(students));

router.get('/teacher',(teachers))

router.get('/gallary',(gallary));

router.get('/about',(about))

router.get('/admin',(admin))

router.get('/class',(classname))

module.exports=router;