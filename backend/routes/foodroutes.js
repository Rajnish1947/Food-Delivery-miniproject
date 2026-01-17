import express from 'express';
import multer from 'multer';
import { addFood ,getFoodList ,removeFood ,getFoodByName } from '../controllers/foodController.js';

const foodRoutes = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Destination folder for uploaded images
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); 
  }
});

// Initialize multer with storage config
const upload = multer({ storage });

//   uploading food data with an image
foodRoutes.post('/add', upload.single('image'), addFood);

foodRoutes.get('/foodlist',getFoodList )

foodRoutes.delete('/remove',removeFood)

foodRoutes.post("/getfoodbyname", getFoodByName);


export default foodRoutes ;
