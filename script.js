const workoutGenerator = (dayName, majorLifts, minorLifts) => {
    return {
        dayName: dayName,
        majorLifts: majorLifts,
        minorLifts: minorLifts,
        getRandomMajor() {
            return this.majorLifts[Math.floor(Math.random() * majorLifts.length)]
        },
        getRandomMinor() {
            return this.minorLifts[Math.floor(Math.random() * minorLifts.length)]
        }
    }
}

const workouts = [];
workouts.push(workoutGenerator('Chest', ['Bench Press', 'Incline Bench Press', 'Weighted Dips', 'Decline Bench Press'],
    ['Flyes', 'Pullovers', 'Pushups', 'Pushups', 'Tricep Extensions', 'Dumbell Bench Press']));
workouts.push(workoutGenerator('Back', ['Weighted Pullups', 'Bent Over Barbell Rows', 'T-Bar Rows', 'Deadlifts'],
    ['Lat Pulldowns', 'Pullups', 'Alternating Curls', 'Hammer Curls']));
workouts.push(workoutGenerator('Legs', ['Squat', 'Leg Press', 'Front Squat', 'Weighted Lunges'],
    ['Romanian Deadlifts', 'Leg Extensions', 'Leg Curls', 'Calf Raises']));
workouts.push(workoutGenerator('Shoulders', ['Pike Press', 'Shoulder Press', 'Arnold Press', 'Dumbell Shoulder Press'], 
    ['Lateral Raises', 'Band Shoulder Work', 'Cable Shoulder Press', 'Reverse Flyes']));
    