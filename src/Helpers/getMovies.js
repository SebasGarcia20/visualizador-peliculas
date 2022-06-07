

export const getMovies = async () => {
    const url = `http://www.omdbapi.com/?apikey=5eec5adc&s=love&type=movie&y=2020`
    const resp = await fetch(url)
    const Search = []
    console.log(resp.status)
    if (resp.status === 200) {
        const { Search } = await resp.json();
        return Search;
    } else {
        alert('Error al obtener el listado. Intente nuevamente')
    }

    console.log(Search)
    return [];
}

