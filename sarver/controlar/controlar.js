
const { json } = require('body-parser');
const fs = require('fs')


const HomePage = (req, res) =>{
    res.send('hello jahangir')
}





const uploadPage = (req, res) =>{
    const {mimetype} = req.file;


}



module.exports = {
    HomePage,
    uploadPage,
}