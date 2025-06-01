import mongoose from 'mongoose';

const muscleGroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    exercises: [
        {
            type: String,
            required: true
        },
    ]
});

export default mongoose.model('muscleGroup', muscleGroupSchema);