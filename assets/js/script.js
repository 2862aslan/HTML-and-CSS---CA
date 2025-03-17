const apiUrl = "https://api.noroff.dev/api/v1/square-eyes";
const moviesContainer = document.querySelector(".cards"); 

async function fetchMovies() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Veri alınamadı.");
        }
        const movies = await response.json(); 
        

        displayMovies(movies);
    } catch (error) {
        console.error("API Hatası:", error);
    }
}

function displayMovies(movies) {
    moviesContainer.innerHTML = ""; 
    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("card");

        
        const imageUrl = movie.image ? movie.image : "assets/image/placeholder.jpg"; 
        const imageAlt = movie.title || "No image available";
        const title = movie.title || "No title";
        const price = movie.price ? `${movie.price} $` : "Price not available";

        movieCard.innerHTML = `
            <img src="${imageUrl}" alt="${imageAlt}">
            <h3>${title}</h3>
            <p>${price}</p>
            <a href="movieDetail.html?id=${movie.id}" class="card-button">View</a>
        `;
        moviesContainer.appendChild(movieCard);
    });
}

fetchMovies();
