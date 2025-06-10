import mongoose from 'mongoose';

const levelSchema = new mongoose.Schema({
    name: { 
        type: Number,
        required: true
    },
    exp: {
        type: Number,
        required: true
    }
});

export default mongoose.model('level', levelSchema);