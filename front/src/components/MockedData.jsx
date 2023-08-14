const MainMockedData = [
    {
        id: 1,
        userInfos: {
            firstName: 'Sarah',
            lastName: 'Richa',
            age: 40,
        },
        todayScore: 0.47,
        keyData: {
            calorieCount: 1750,
            proteinCount: 135,
            carbohydrateCount: 310,
            lipidCount: 49
        }
    }
]

const ActivityMockedData = [
    {
        userId: 1,
        sessions: [
            {
                day: '2023-08-01',
                kilogram: 63,
                calories: 239
            },
            {
                day: '2023-08-02',
                kilogram: 62,
                calories: 219
            },
            {
                day: '2023-08-03',
                kilogram: 61,
                calories: 222
            },
            {
                day: '2023-08-04',
                kilogram: 60,
                calories: 219
            },
            {
                day: '2023-08-05',
                kilogram: 59,
                calories: 219
            },
            {
                day: '2023-08-06',
                kilogram: 58,
                calories: 179
            },
            {
                day: '2023-08-07',
                kilogram: 57,
                calories: 183
            }
        ]
    }
]

const AverageMockedData = [
    {
        userId: 1,
        sessions: [
            {
                day: 1,
                sessionLength: 15
            },
            {
                day: 2,
                sessionLength: 15
            },
            {
                day: 3,
                sessionLength: 15
            },
            {
                day: 4,
                sessionLength: 15
            },
            {
                day: 5,
                sessionLength: 0
            },
            {
                day: 6,
                sessionLength: 0
            },
            {
                day: 7,
                sessionLength: 17
            }
        ]
    }
]

const PerformanceMockedData = [
    {
        userId: 1,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 77,
                kind: 1
            },
            {
                value: 119,
                kind: 2
            },
            {
                value: 125,
                kind: 3
            },
            {
                value: 37,
                kind: 4
            },
            {
                value: 155,
                kind: 5
            },
            {
                value: 77,
                kind: 6
            }
        ]
    }
]


module.exports = {
    MainMockedData,
    ActivityMockedData,
    AverageMockedData,
    PerformanceMockedData
}