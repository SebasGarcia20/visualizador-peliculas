

export const getMovies = async () => {
    const url = `http://www.omdbapi.com/?apikey=5eec5adc&s=love&type=movie&y=2020`
    const resp = await fetch(url);
    const { Search } = await resp.json();
    
    return Search;
}

