document.addEventListener("DOMContentLoaded", function () {
    fetch('https://api.tvmaze.com/shows')
        .then(response => response.json())
        .then(data => displayShows(data.slice(0, 12)))
        .catch(error => console.error('Error fetching data:', error));
});

function displayShows(shows) {
    const grid = document.getElementById('showGrid');

    shows.forEach(show => {
        const card = document.createElement('div');
        card.className = 'card';


        card.dataset.showId = show.id;

        card.addEventListener('click', function () {
            window.location.href = `details.html?id=${show.id}`;
        });

        const img = document.createElement('img');
        img.src = show.image ? show.image.medium : 'placeholder.jpg';

        const title = document.createElement('h3');
        title.textContent = show.name;

        const imdb = document.createElement('p');
        imdb.textContent = `IMDB: ${show.rating.average || 'N/A'}`;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(imdb);

        grid.appendChild(card);
    });
}
