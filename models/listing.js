const moongoose = require('mongoose');
const Schema = moongoose.Schema;
const Review= require('./review.js');
const review = require('./review.js');
const listingSchema = new Schema({
    title: {
        type : String,
        required : true,
    },
    description :String,
    
image :{
        url :String,
        filename : String,
    },
    price : Number,
       
    location  :  String, 
       
    country  : String,

    reviews :[
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        },
    ],
        
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    geometry :{
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    }
});

listingSchema.post('findOneAndDelete', async (listing) =>{
    if(listing){
        await review.deleteMany({_id : { $in: listing.reviews } });
    }
});


const Listing = moongoose.model('Listing', listingSchema);
module.exports = Listing;