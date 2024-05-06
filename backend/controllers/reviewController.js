import Tour from "../models/Tour.js";
import Review from "../models/Review.js"
export const createReview = async (req,res) => {
    const tourId = req.params.tourId
    const newReview= new Review({
        ... req.body
    })
    try {

        const savedReview = await newReview.save();
        //after creatin a new review now update the reviews array of tour
        await Tour.findByIdAndUpdate(tourID,{
            $push: {reviews:savedReview._id}
        })
        res.status(200).json().json({
            success:true,
            message:'Review submitted',
        })
    }catch(err){
        req.status(500).json({
            success:false, 
            message:'Failed to submit'
        })
    }
};