import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
    exercises: [{
        name: String,
        muscleGroup: String,
        sets: [{
            setNumber: Number,
            weight: Number,
            reps: Number
        }]
    }],
    userId: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('workout', workoutSchema);