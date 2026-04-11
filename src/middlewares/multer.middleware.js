import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/temp/");
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        // cb(null, file.fieldname + "-" + uniqueSuffix + "." + file.originalname.split('.').pop());
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

export default upload;