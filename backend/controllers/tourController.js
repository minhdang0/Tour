import Tour from '../models/Tour.js';
export const createTour = async(req, res)=>{
    const newTour = new Tour (req.body)
    try {
        const savedTour= await newTour.save()
        res.status(200).json({success:true, message:'Successfully created', 
        data:savedTour})
    }catch(err){
        res.status(500).json({success:false, message:'Falied to created. Try again!', 
        })
    }
};
//update tour
export const updateTour = async(req,res) =>{
    const id = req.params.id
    try{
        const updatedTour = await Tour.findByIdAndUpdate(id, {$set:req.body}, {new:true})
        res.status(200).json({
            success:true, 
            message:'Successfully updated', 
            data:updatedTour})

    }
    catch(err){
         res.status(500).json({
            success:false, 
            message:'Falied to update. Try again!',

        })
    }
};
//delete tour
export const deleteTour = async(req,res) =>{
    const id = req.params.id;
    try{
        await Tour.findByIdAndDelete(id);
        res.status(200).json({
            success:true, 
            message:'Successfully deleted', 
            
        })
        
    }
    catch(err){
        res.status(500).json({
            success:false, 
            message:'Falied to delete0',

        })
    }
};
//getSingle tour
export const getSingleTour = async (req,res)=>{
    const id = req.params.id
    try{
        const tour = await Tour.findById(id).populate("reviews");
        res.status(200).json({
            success:true, 
            message:'Successfully getSingle tour', 
            data:tour
        })

    }
    catch(err){
         res.status(404).json({
            success:false, 
            message:'not found',

        })
    }
};
//Get ALL tour
export const getAllTour = async(req,res) =>{
    const page = parseInt(req.query.page);

    try{
        const tours = await Tour.find({})
        .populate("reviews")
        .skip(page*8)
        .limit(8);
        res.status(200).json({
            success:true, 
            count:Tour.length,
            message:'Successfully ', 
            data:tours})
    }
    catch(err){
        res.status(404).json({
            success:false, 
            message:'not found',

        })
    }
};
//get Tour by search
export const getTourBySerach= async(req,res)=>{
    
    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const macGroupSize = parseInt(req.query.maxGroupSize);
    try{
        const tours =await Tour.find({city, distance:{$gte:distance}, maxGroupSize:{$gte:maxGroupSize}})
        res.status(200).json({
            success:true,
            message:"Successful",
            data:tours,
        })
    }catch(err){
        res.status(404).json({
            success:false, 
            message:'not found',
        })
    }
}
//get featured tour
export const getFeaturedTour = async(req,res) =>{
    const page = parseInt(req.query.page);

    try{
        const tours = await Tour.find({featured:true}).populate("reviews").limit(8);
        res.status(200).json({
            success:true, 
            message:'Successfull', 
            data:tours})
    }
    catch(err){
        res.status(404).json({
            success:false, 
            message:'not found',

        })
    }
};
//get tour counts
export const getTuorCount = async(req, res) =>{
    try{
        const tourCount =await Tour.estimatedDocumentCount();
        res.status(200).json({
            success:true, data: tourCount,
        });
    }catch(err){
        res.status(500).json({
            success:false,
            message:"faile to fetch!",
        })
    }
}