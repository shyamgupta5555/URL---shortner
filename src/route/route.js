const express = require('express');
const router = express.Router();
const urlCotroller = require('../controller/urlController');

router.post('/url/shorten',urlCotroller.genrateShortUrl);
router.get('/:urlCode',urlCotroller.getUrl);
router.all("/*",(req,res)=>res.status(400).send({status:false,message:"Invalid path."}));

module.exports = router;