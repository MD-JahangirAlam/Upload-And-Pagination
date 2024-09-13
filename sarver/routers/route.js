const express = require('express');
const router = express.Router();
const {HomePage, uploadPage} = require('../controlar/controlar')
const multer = require('multer');
const path = require('path');


var fileStore = multer.diskStorage({
    destination: (req, file, cb) =>{
        const imgType = file.mimetype.split('/');
        
        cb(null, 'userphoto')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + 'user-photo' + path.extname(file.originalname))
    }
})

var userUpload = multer({storage: fileStore});

router.get('/', HomePage);
router.post('/upload', userUpload.single('userphoto'), uploadPage)



module.exports = router;