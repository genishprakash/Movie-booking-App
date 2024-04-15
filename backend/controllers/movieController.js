const Movies=require("../model/movieModel")

const movieController=async(req,res)=>{
    try {
        // Extract movie ID from the request parameters
        const { id } = req.params;
        console.log(id);

        // Extract new total tickets count from the request body
        const { tickets } = req.body;

        // Find the movie by ID
        const movie = await Movies.findById(id);

        // If the movie is not found, return a 404 error
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        // Update the total tickets count
        movie.tickets = tickets;

        // Save the updated movie to the database
        await movie.save();

        // Send a success response
        res.json({ message: 'Total tickets count updated successfully', movie });
    } catch (error) {
        // Handle errors
        console.error('Error updating total tickets count:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports=movieController  