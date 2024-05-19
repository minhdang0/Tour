const { message } = require('antd');
const express = require('express');
const multer  = require('multer');
const path    = require('path')

const app = express();

// cấu hình multer
const  storage =multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.join(__dirname, 'public/hotel-images'));
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now() +path.extname(file.originalname));
    }
})

const upload = multer({storage});

app.post('/upload', upload.single('image'), (req,res)=>{
    if (req.file) {
        res.json({
            success:true,
            message:'Tải ảnh thành công',
            filePath:`/hotel-images/${req.filename}`,
        });
    }
    else {
        res.status(400).json({
            success:false,
            message:'Không có file nào được tải lên',
        })
    }
})
qpp.listen(4000, () =>{
    console.log('Server is  running on port 4000');
})