import { Router } from 'express';

export const router = Router();

// User endpoints
router.get('/users/:id', (req, res) => {
    console.log('req.params', req.params);
    res.status(200);
    res.json(userData);
})

router.put('/users/:id', (req, res) => {
    console.log('req.params:', req.params);
    console.log('req.body:', req.body);
    userData.email = req.body.email;
    userData.username = req.body.username;
})

// Workout endpoints
router.get('/workouts', (req, res) => {
    console.log('req', req.query)
    res.status(200);
    res.json(pages[`page${req.query.page}`]);
})

const userData = {
    "id": 5,
    "username": "ikazantzis",
    "email": "ikazantzis@test.com"
}

const pages = {
    page0: {
        "content": [
            {
                "id": 13,
                "workoutDate": "2025-12-03T22:00:00.000+00:00",
                "muscleGroups": [
                    "Chest",
                    "Legs",
                    "Triceps",
                    "Abdominals"
                ],
                "exercises": [
                    {
                        "id": 1,
                        "exerciseName": "Wide-Grip Standing Barbell Curl",
                        "workoutSets": [
                            {
                                "id": 1,
                                "setNumber": 1,
                                "reps": 10,
                                "weight": 60.0
                            },
                            {
                                "id": 2,
                                "setNumber": 2,
                                "reps": 8,
                                "weight": 60.0
                            },
                            {
                                "id": 3,
                                "setNumber": 3,
                                "reps": 6,
                                "weight": 60.0
                            },
                            {
                                "id": 4,
                                "setNumber": 4,
                                "reps": 8,
                                "weight": 50.0
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "exerciseName": "Alternating Renegade Row",
                        "workoutSets": [
                            {
                                "id": 5,
                                "setNumber": 1,
                                "reps": 12,
                                "weight": 30.0
                            },
                            {
                                "id": 6,
                                "setNumber": 2,
                                "reps": 9,
                                "weight": 30.0
                            },
                            {
                                "id": 7,
                                "setNumber": 3,
                                "reps": 7,
                                "weight": 30.0
                            }
                        ]
                    }
                ] 
            },
            {
                "id": 12,
                "workoutDate": "2025-11-03T22:00:00.000+00:00",
                "muscleGroups": [
                    "Back",
                    "Triceps",
                    "Biceps"
                ],
                "exercises": [
                    {
                        "id": 1,
                        "exerciseName": "Wide-Grip Standing Barbell Curl",
                        "workoutSets": [
                            {
                                "id": 1,
                                "setNumber": 1,
                                "reps": 10,
                                "weight": 60.0
                            },
                            {
                                "id": 2,
                                "setNumber": 2,
                                "reps": 8,
                                "weight": 60.0
                            },
                            {
                                "id": 3,
                                "setNumber": 3,
                                "reps": 6,
                                "weight": 60.0
                            },
                            {
                                "id": 4,
                                "setNumber": 4,
                                "reps": 8,
                                "weight": 50.0
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "exerciseName": "Alternating Renegade Row",
                        "workoutSets": [
                            {
                                "id": 5,
                                "setNumber": 1,
                                "reps": 12,
                                "weight": 30.0
                            },
                            {
                                "id": 6,
                                "setNumber": 2,
                                "reps": 9,
                                "weight": 30.0
                            },
                            {
                                "id": 7,
                                "setNumber": 3,
                                "reps": 7,
                                "weight": 30.0
                            }
                        ]
                    }
                ] 
            },
            {
                "id": 1,
                "workoutDate": "2025-10-31T22:00:00.000+00:00",
                "muscleGroups": [
                    "Back",
                    "Biceps"
                ],
                "exercises": [
                    {
                        "id": 1,
                        "exerciseName": "Wide-Grip Standing Barbell Curl",
                        "workoutSets": [
                            {
                                "id": 1,
                                "setNumber": 1,
                                "reps": 10,
                                "weight": 60.0
                            },
                            {
                                "id": 2,
                                "setNumber": 2,
                                "reps": 8,
                                "weight": 60.0
                            },
                            {
                                "id": 3,
                                "setNumber": 3,
                                "reps": 6,
                                "weight": 60.0
                            },
                            {
                                "id": 4,
                                "setNumber": 4,
                                "reps": 8,
                                "weight": 50.0
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "exerciseName": "Alternating Renegade Row",
                        "workoutSets": [
                            {
                                "id": 5,
                                "setNumber": 1,
                                "reps": 12,
                                "weight": 30.0
                            },
                            {
                                "id": 6,
                                "setNumber": 2,
                                "reps": 9,
                                "weight": 30.0
                            },
                            {
                                "id": 7,
                                "setNumber": 3,
                                "reps": 7,
                                "weight": 30.0
                            }
                        ]
                    }
                ] 
            },
            {
                "id": 2,
                "workoutDate": "2025-10-03T21:00:00.000+00:00",
                "muscleGroups": [
                    "Shoulders",
                    "Abdominals"
                ],
                "exercises": [
                    {
                        "id": 1,
                        "exerciseName": "Wide-Grip Standing Barbell Curl",
                        "workoutSets": [
                            {
                                "id": 1,
                                "setNumber": 1,
                                "reps": 10,
                                "weight": 60.0
                            },
                            {
                                "id": 2,
                                "setNumber": 2,
                                "reps": 8,
                                "weight": 60.0
                            },
                            {
                                "id": 3,
                                "setNumber": 3,
                                "reps": 6,
                                "weight": 60.0
                            },
                            {
                                "id": 4,
                                "setNumber": 4,
                                "reps": 8,
                                "weight": 50.0
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "exerciseName": "Alternating Renegade Row",
                        "workoutSets": [
                            {
                                "id": 5,
                                "setNumber": 1,
                                "reps": 12,
                                "weight": 30.0
                            },
                            {
                                "id": 6,
                                "setNumber": 2,
                                "reps": 9,
                                "weight": 30.0
                            },
                            {
                                "id": 7,
                                "setNumber": 3,
                                "reps": 7,
                                "weight": 30.0
                            }
                        ]
                    }
                ] 
            },
            {
                "id": 11,
                "workoutDate": "2025-10-03T21:00:00.000+00:00",
                "muscleGroups": [
                    "Chest",
                    "Biceps",
                    "Abdominals"
                ],
                "exercises": [
                    {
                        "id": 1,
                        "exerciseName": "Wide-Grip Standing Barbell Curl",
                        "workoutSets": [
                            {
                                "id": 1,
                                "setNumber": 1,
                                "reps": 10,
                                "weight": 60.0
                            },
                            {
                                "id": 2,
                                "setNumber": 2,
                                "reps": 8,
                                "weight": 60.0
                            },
                            {
                                "id": 3,
                                "setNumber": 3,
                                "reps": 6,
                                "weight": 60.0
                            },
                            {
                                "id": 4,
                                "setNumber": 4,
                                "reps": 8,
                                "weight": 50.0
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "exerciseName": "Alternating Renegade Row",
                        "workoutSets": [
                            {
                                "id": 5,
                                "setNumber": 1,
                                "reps": 12,
                                "weight": 30.0
                            },
                            {
                                "id": 6,
                                "setNumber": 2,
                                "reps": 9,
                                "weight": 30.0
                            },
                            {
                                "id": 7,
                                "setNumber": 3,
                                "reps": 7,
                                "weight": 30.0
                            }
                        ]
                    }
                ] 
            },
            {
                "id": 10,
                "workoutDate": "2025-09-03T21:00:00.000+00:00",
                "muscleGroups": []
            },
            {
                "id": 9,
                "workoutDate": "2025-08-03T21:00:00.000+00:00",
                "muscleGroups": [
                    "Abdominals"
                ],
                "exercises": [
                    {
                        "id": 1,
                        "exerciseName": "Wide-Grip Standing Barbell Curl",
                        "workoutSets": [
                            {
                                "id": 1,
                                "setNumber": 1,
                                "reps": 10,
                                "weight": 60.0
                            },
                            {
                                "id": 2,
                                "setNumber": 2,
                                "reps": 8,
                                "weight": 60.0
                            },
                            {
                                "id": 3,
                                "setNumber": 3,
                                "reps": 6,
                                "weight": 60.0
                            },
                            {
                                "id": 4,
                                "setNumber": 4,
                                "reps": 8,
                                "weight": 50.0
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "exerciseName": "Alternating Renegade Row",
                        "workoutSets": [
                            {
                                "id": 5,
                                "setNumber": 1,
                                "reps": 12,
                                "weight": 30.0
                            },
                            {
                                "id": 6,
                                "setNumber": 2,
                                "reps": 9,
                                "weight": 30.0
                            },
                            {
                                "id": 7,
                                "setNumber": 3,
                                "reps": 7,
                                "weight": 30.0
                            }
                        ]
                    }
                ] 
            },
            {
                "id": 8,
                "workoutDate": "2025-07-03T21:00:00.000+00:00",
                "muscleGroups": []
            },
            {
                "id": 7,
                "workoutDate": "2025-06-03T21:00:00.000+00:00",
                "muscleGroups": []
            },
            {
                "id": 6,
                "workoutDate": "2025-04-03T21:00:00.000+00:00",
                "muscleGroups": []
            }
        ],
        "pageable": {
            "pageNumber": 0,
            "pageSize": 10,
            "sort": {
                "empty": false,
                "sorted": true,
                "unsorted": false
            },
            "offset": 0,
            "paged": true,
            "unpaged": false
        },
        "last": false,
        "totalElements": 22,
        "totalPages": 3,
        "size": 10,
        "number": 0,
        "sort": {
            "empty": false,
            "sorted": true,
            "unsorted": false
        },
        "first": true,
        "numberOfElements": 10,
        "empty": false
    },
    page1: {
        "content": [
            {
                "id": 73,
                "workoutDate": "2025-03-02T22:00:00.000+00:00",
                "muscleGroups": []
            },
            {
                "id": 21,
                "workoutDate": "2024-12-03T22:00:00.000+00:00",
                "muscleGroups": []
            },
            {
                "id": 20,
                "workoutDate": "2024-11-03T22:00:00.000+00:00",
                "muscleGroups": []
            },
            {
                "id": 19,
                "workoutDate": "2024-10-03T21:00:00.000+00:00",
                "muscleGroups": []
            },
            {
                "id": 18,
                "workoutDate": "2024-09-03T21:00:00.000+00:00",
                "muscleGroups": []
            },
            {
                "id": 17,
                "workoutDate": "2024-08-03T21:00:00.000+00:00",
                "muscleGroups": []
            },
            {
                "id": 3,
                "workoutDate": "2024-07-03T21:00:00.000+00:00",
                "muscleGroups": []
            },
            {
                "id": 16,
                "workoutDate": "2024-07-03T21:00:00.000+00:00",
                "muscleGroups": []
            },
            {
                "id": 15,
                "workoutDate": "2024-06-03T21:00:00.000+00:00",
                "muscleGroups": []
            },
            {
                "id": 14,
                "workoutDate": "2024-04-03T21:00:00.000+00:00",
                "muscleGroups": []
            }
        ],
        "pageable": {
            "pageNumber": 1,
            "pageSize": 10,
            "sort": {
                "empty": false,
                "sorted": true,
                "unsorted": false
            },
            "offset": 10,
            "paged": true,
            "unpaged": false
        },
        "last": false,
        "totalElements": 22,
        "totalPages": 3,
        "size": 10,
        "number": 1,
        "sort": {
            "empty": false,
            "sorted": true,
            "unsorted": false
        },
        "first": false,
        "numberOfElements": 10,
        "empty": false
    },
    page2: {
        "content": [
            {
                "id": 29,
                "workoutDate": "2023-12-03T22:00:00.000+00:00",
                "muscleGroups": []
            },
            {
                "id": 28,
                "workoutDate": "2023-11-03T22:00:00.000+00:00",
                "muscleGroups": []
            }
        ],
        "pageable": {
            "pageNumber": 2,
            "pageSize": 10,
            "sort": {
                "empty": false,
                "sorted": true,
                "unsorted": false
            },
            "offset": 20,
            "paged": true,
            "unpaged": false
        },
        "last": true,
        "totalElements": 22,
        "totalPages": 3,
        "size": 10,
        "number": 2,
        "sort": {
            "empty": false,
            "sorted": true,
            "unsorted": false
        },
        "first": false,
        "numberOfElements": 10,
        "empty": false
    },
}