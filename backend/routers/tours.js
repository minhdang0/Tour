import express from 'express';
import { createTour,updateTour, deleteTour, getSingleTour, getAllTour, getTourBySerach, getFeaturedTour, getTuorCount } from '../controllers/tourController.js';
const router = express.Router()
import { verifyAdmin } from '../utils/verifyToken.js';
// create new tour
router.post("/",verifyAdmin, createTour);

//update new tour
router.put("/:id",verifyAdmin, updateTour);

// delete  tour
router.delete("/:id",verifyAdmin, deleteTour);

// get Single tour
router.get("/:id", getSingleTour);

//  get all tour
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySerach);

//get featured tuor
router.get("/search/getFeaturedTour", getFeaturedTour);
//get tour count
router.get("/search/getTourCount", getTuorCount);
export default router;

