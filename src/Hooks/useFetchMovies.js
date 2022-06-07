import { useEffect, useState } from "react"
import { getMovies } from "../Helpers/getMovies"


export const useFetchMovies = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })
    
    useEffect(() => {
        getMovies()
            .then(movies => {
                setState({
                    data: movies,
                    loading: false
                })
            })
    }, [])


    return state;

}