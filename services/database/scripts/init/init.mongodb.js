db.createCollection("companygoals", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["goalName", "successCriteria", "goalDuration"],
            properties: {
                goalName: { bsonType: "string" },
                successCriteria: { bsonType: "string" },
                goalDuration: { bsonType: "string" },
            },
        },
    },
})

db.createCollection("employees", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "position", "individualGoals", "competencies"],
            properties: {
                name: { bsonType: "string" },
                position: { bsonType: "string" },
                individualGoals: {
                    bsonType: "array",
                    items: { bsonType: "object" },
                },
                competencies: {
                    bsonType: "array",
                    items: { bsonType: "object" },
                },
            },
        },
    },
})

db.createCollection("managers", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "position"],
            properties: {
                name: { bsonType: "string" },
                position: { bsonType: "string" },
            },
        },
    },
})

db.createCollection("goals", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["goalName", "successCriteria", "contributions"],
            properties: {
                goalName: { bsonType: "string" },
                successCriteria: { bsonType: "string" },
                contributions: {
                    bsonType: "array",
                    items: { bsonType: "string" },
                },
            },
        },
    },
})

db.createCollection("competencies", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["competencyName", "level"],
            properties: {
                competencyName: { bsonType: "string" },
                level: { bsonType: "string" },
            },
        },
    },
})

db.createCollection("feedbacks", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["feedbackText", "date", "sender", "receiver"],
            properties: {
                feedbackText: { bsonType: "string" },
                date: { bsonType: "date" },
                sender: { bsonType: "string" },
                receiver: { bsonType: "string" },
            },
        },
    },
})

db.createCollection("workplans", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["taskName", "startDate", "endDate"],
            properties: {
                taskName: { bsonType: "string" },
                startDate: { bsonType: "date" },
                endDate: { bsonType: "date" },
            },
        },
    },
})

// Sample document insertions (optional for testing)
db.companygoals.insert({
    goalName: "Increase Revenue",
    successCriteria: "Increase revenue by 20%",
    goalDuration: "1 year",
})

db.employees.insert({
    name: "John Doe",
    position: "Developer",
    individualGoals: [
        {
            goalName: "Improve Coding Skills",
            successCriteria: "Complete 10 coding challenges",
        },
    ],
    competencies: [{ competencyName: "JavaScript", level: "Intermediate" }],
})

db.managers.insert({
    name: "Jane Smith",
    position: "Team Lead",
})

db.goals.insert({
    goalName: "Improve Team Efficiency",
    successCriteria: "Increase team speed by 15%",
    contributions: ["Collaborate with developers", "Attend daily stand-ups"],
})

db.competencies.insert({
    competencyName: "Project Management",
    level: "Advanced",
})

db.feedbacks.insert({
    feedbackText: "Great job on the last sprint!",
    date: new Date(),
    sender: "Jane Smith",
    receiver: "John Doe",
})

db.workplans.insert({
    taskName: "Code Review",
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)), // task ends tomorrow
})
