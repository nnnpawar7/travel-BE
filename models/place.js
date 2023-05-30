const  mongoose  = require("mongoose");

const Schema = mongoose.Schema;

const placeSchema = new Schema({
    title: { type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    address: {type: String, required: true},
    location: {
        type: { type: String, required: true },
        coordinates: { type: [Number], required: true },
    },
    
    creator: {type: mongoose.Types.ObjectId, required: true, ref: 'User' }
})

/* placeSchema.index({
    startLocation: "2dsphere",
}) */

// placeSchema.index({"location":"2dsphere"})
placeSchema.index( { "location": "2dsphere" } )
module.exports = mongoose.model('Place', placeSchema);