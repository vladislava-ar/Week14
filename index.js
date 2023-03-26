const list = document.getElementById('list');

directors.forEach(function(item) {
    const directorName = document.createElement('div');
	directorName.className = 'director-name';
	directorName.textContent = item.name;
	list.append(directorName);

	const directorCareer = document.createElement('div');
	directorCareer.className = 'director-career';
	directorCareer.textContent = item.career;
	directorName.append(directorCareer);

	const directorFilms = document.createElement('a');
	directorFilms.className = 'director-films';
	directorFilms.innerHTML = 'Фильмография';
	directorFilms.href = item.films;
	directorCareer.append(directorFilms);
});

const topFilmsList = directors.map(directors => ' ' + directors.top_rated_film);
topFilms.innerHTML = topFilmsList;