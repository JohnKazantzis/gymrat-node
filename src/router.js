import { Router } from 'express';
import MuscleGroup from './db/models/muscleGroup.js';
import Workout from './db/models/workout.js';
import User from './db/models/user.js';
import { generateHash, compareHash } from './security/hashing.js';

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
        console.log('Error:', e);
        res.status(500);
        res.json({ success: false, error: 'An internal error occured.' })
    }
});

// Workout endpoints
router.get('/workouts', async (req, res) => {
    console.log('req', req.query)
    const limit = req.query.size;
    const offset = req.query.page * limit;

    try {
        res.status(200);
        const workouts = await Workout.find({ userId: '5' }).skip(offset).limit(limit).exec();
        const totalElements = await Workout.countDocuments({ userId: '5' });
        const response = {
            totalElements: totalElements,
            totalPages: Math.ceil(totalElements / limit),
            pageNumber: parseInt(req.query.page),
            first: req.query.page === '0',
            last: req.query.page === (Math.ceil(totalElements / limit) - 1).toString(),
            workouts: workouts.map(workout => {
                const muscleGroups = new Set();
                workout.exercises.forEach(workout => muscleGroups.add(workout.muscleGroup));
                return {
                    id: workout._id,
                    workoutDate: new Date(workout.createdAt).toLocaleDateString(),
                    muscleGroups: Array.from(muscleGroups),
                    exercises: workout.exercises
                }
            })
        };
        res.json(response);
    } catch(e) {
        console.log('Error:', e);
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
        console.log('Error:', e);
        res.status(500);
        res.json({ success: false, error: 'An internal error occured.' })
    }
});

// Authentication endpoints
router.post('/signup', async (req, res) => {
    try {
        const user = req.body;
        console.log('user: ', user);

        const hashedPassword = await generateHash(user.password);
        console.log('hased password: ', hashedPassword);

        const newUser = await User.create({ ...user, password: hashedPassword });
        res.status(200);
        res.json({ success: true, userId: newUser._id });
    } catch(e) {
        res.status(500);
        res.json({ success: false, error: 'An internal error occured.' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username }).exec();
        console.log('user', user);

        res.status(200);
        if(user && await compareHash(password, user.password)) {
            res.json({ success: true, userId: user._id });
            return;
        }
        res.json({ success: false, error: 'The username or password is wrong' });
    } catch (error) {
        console.log(error)
        res.status(500);
        res.json({ success: false, error: 'An internal error occured.' });
    }
})

const userData = {
    "id": 5,
    "username": "ikazantzis",
    "email": "ikazantzis@test.com"
};