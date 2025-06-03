import { Router } from 'express';
import MuscleGroup from './db/models/muscleGroup.js';
import Workout from './db/models/workout.js';

export const router = Router();

// User endpoints
router.get('/users/:id', (req, res) => {
    console.log('req.params', req.params);
    res.status(200);
    res.json(userData);
});

router.put('/users/:id', (req, res) => {
    console.log('req.params:', req.params);
    console.log('req.body:', req.body);
    userData.email = req.body.email;
    userData.username = req.body.username;
});

// Exercise endpoints
router.get('/exercises', async (req, res) => {
    try {
        res.status(200);
        res.json(await MuscleGroup.find({}).exec());
    } catch(e) {
        res.status(500);
        res.json({ success: false, error: 'An internal error occured.' })
    }
});

const exercises = {
    'Chest': {key: 1, exercises: [{key: 1, name: 'Bench Press', muscleGroup: 'Chest'}, {key: 2, name: 'Pec Dec', muscleGroup: 'Chest'}, {key: 3, name: 'Dumbbel Bench Press', muscleGroup: 'Chest'}, {key: 4, name: 'Incline Bench Press', muscleGroup: 'Chest'}]},
    'Back': {key: 2, exercises: [{key: 5, name: 'Pull-up', muscleGroup: 'Back'}, {key: 6, name: 'Lat Pull Down', muscleGroup: 'Back'}, {key: 7, name: 'Rows', muscleGroup: 'Back'}]},
    'Legs': {key: 3, exercises: [{key: 8, name: 'Leg Press', muscleGroup: 'Legs'}, {key: 9, name: 'Squat', muscleGroup: 'Legs'}, {key: 10, name: 'Deadlift', muscleGroup: 'Legs'}, {key: 11, name: 'Quad Extensions', muscleGroup: 'Legs'}]}
};

// Workout endpoints
router.get('/workouts', async (req, res) => {
    console.log('req', req.query)
    const limit = req.query.size;
    const offset = req.query.page * limit;

    try {
        res.status(200);
        const workouts = await Workout.find({ userId: '5' }).skip(offset).limit(limit).exec();
        console.log('# workouts: ', workouts)
        const response = {
            totalElements: workouts.length,
            totalPages: Math.ceil(workouts.length / limit),
            pageNumber: parseInt(req.query.page),
            first: req.query.page === '0',
            last: req.query.page === (Math.ceil(workouts.length / limit) - 1).toString(),
            workouts: workouts.map(workout => {
                const muscleGroups = new Set();
                workout.exercises.forEach(workout => muscleGroups.add(workout.muscleGroup));
                return {
                    id: workout._id,
                    workoutDate: workout.createdAt,
                    muscleGroups: Array.from(muscleGroups),
                    exercises: workout.exercises
                }
            })
        };
        console.log('# response: ', response)
        res.json(response);
    } catch(e) {
        res.status(500);
        res.json({ success: false, error: 'An internal error occured.' })
    }
});

router.post('/workouts', async (req, res) => {
    try {
        res.status(200);
        const workoutToInsert = { exercises: req.body, userId: '5' };
        await Workout.create(workoutToInsert);
        res.json({ success: true, error: null })
    } catch(e) {
        res.status(500);
        res.json({ success: false, error: 'An internal error occured.' })
    }
});

const userData = {
    "id": 5,
    "username": "ikazantzis",
    "email": "ikazantzis@test.com"
};