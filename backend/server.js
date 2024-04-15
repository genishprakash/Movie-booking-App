// app.js
const express=require("express")
const dotenv=require("dotenv").config()
const app=express()
const cors = require('cors');
const connectDb=require("./config/dbConnection")
const Users=require("./model/userModel")
const Movies=require("./model/movieModel")
const PORT=process.env.PORT || 5001
connectDb()


app.use(cors());

// Optionally, specify allowed origins
app.use(cors({
  origin: 'http://localhost:4200' // Replace with your Angular app's URL
}));


app.use(express.json())

// Assuming you have already defined your Express app and imported necessary modules

// Define a route to handle the GET request to view users

const userData = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
    // Add more user data as needed
];
// movies = [
//     { id: 1, title: 'Inception', genre: 'Sci-Fi', duration: 148, rating: 8.8, tickets: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjd6v5CTAYNg0TYR2O25_NzJ_2WbZb2mdf99pq3SRLQw&s' },
//     { id: 2, title: 'The Dark Knight', genre: 'Action', duration: 152, rating: 9.0, tickets: 120, imageUrl: 'https://m.media-amazon.com/images/I/81CLFQwU-WL.jpg' },
//     { id: 3, title: 'Porthozhil', genre: 'Crime', duration: 154, rating: 8.9, tickets: 80, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZ1AEg8gwD6lpp-dGLOF5vr1-O9FZwoh9C71OH2_PA7u3elzXt0iyV6x-xQ&s' }
//   ];
// Movies.insertMany(movies)
//     .then(movies => {
//         console.log('Users created:', movies);
//         // Do something with the created users
//     })
//     .catch(error => {
//         console.error('Error creating users:', error);
// });



app.get('/api/users', async (req, res) => {
    try {
        // Retrieve users from the database
        const users = await Users.find();
        // Send the users as a response
        console.log(users)
        res.json(users);
    } catch (error) {
        // Handle errors
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.use("/api/users",require("./routes/Users"))
app.use("/api/movies",require("./routes/movies"))
app.get("/api/movies",async (req, res) => {
    try {
        // Retrieve users from the database
        const movies = await Movies.find();
        // Send the users as a response
        res.json(movies);
    } catch (error) {
        // Handle errors
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
} )


app.listen(PORT,()=>{
    console.log(`Sever listening on port:${PORT}`)
})