import { Router } from 'express';

export const router = Router();

// Workout endpoints
router.get('/workouts', (req, res) => {
    console.log('req', req.query)
    res.status(200);
    res.json(pages[`page${req.query.page}`]);
})

const pages = {
    page0: {
        content: [
            {
                id: 1,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 2,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 3,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 4,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 5,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 6,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 7,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 8,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 9,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 10,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
        ],
        isFirst: true,
        isLast: false,
        currentPage: 0,
        totalRecords: 22
    },
    page1: {
        content: [
            {
                id: 11,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 12,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 13,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 14,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 15,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 16,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 17,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 18,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 19,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 20,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
        ],
        isFirst: false,
        isLast: false,
        currentPage: 1,
        totalRecords: 22
    },
    page2: {
        content: [
            {
                id: 21,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            },
            {
                id: 22,
                workoutDate: 'December 17, 1995 03:24:00',
                muscleGroups: ['Chest', 'Shoulders', 'Tricepts']
            }
        ],
        isFirst: false,
        isLast: true,
        currentPage: 2,
        totalRecords: 22
    },
}