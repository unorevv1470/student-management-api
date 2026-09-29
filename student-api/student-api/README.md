# Student Management REST API

A simple REST API built with Node.js and Express.js to manage student records.
No database used — data is stored in an array (in memory).

## Project Structure
```
student-api/
├── app.js
├── package.json
├── routes/
│   └── studentRoutes.js
├── middleware/
│   └── logger.js
└── data/
    └── students.js
```

## Setup
1. Install dependencies:
   ```
   npm install
   ```
2. Start the server:
   ```
   npm start
   ```
3. Server runs at: http://localhost:3000

## API Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|------------------------|
| GET    | /students        | Get all students       |
| GET    | /students/:id    | Get a student by ID    |
| POST   | /students        | Add a new student      |
| PUT    | /students/:id    | Update a student       |
| DELETE | /students/:id    | Delete a student       |

## Example POST Body (Postman)
```json
{
  "name": "Sneha",
  "course": "BSc"
}
```

## Status Codes Used
- 200 Success
- 201 Created
- 400 Bad Request
- 404 Not Found
