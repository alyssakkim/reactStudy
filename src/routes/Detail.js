import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail(){
    const { movieId } = useParams();
    const [loading, setLoading] = useState(true);
    const [selMovie, setSelMovie] = useState("");
 
    const getMovie = async () => {
        const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`)
        ).json();
        setSelMovie(json);
        console.log(json);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ?
                (<h1>Loading...</h1>) :
                (<div>
                    <img src={selMovie.data.movie.medium_cover_image}></img>
                    <h3>[{selMovie.data.movie.year}] {selMovie.data.movie.title} (★ {selMovie.data.movie.rating} / likes {selMovie.data.movie.like_count})</h3>
                    <div>
                        <i>{selMovie.data.movie.description_intro}</i>
                        <br></br>
                        
                        <Link to={`https://www.youtube.com/watch?v=${selMovie.data.movie.yt_trailer_code}`}>Youtube</Link>

                    </div>
                    <h3></h3>
                </div>)

            }
        </div>
    );
}

export default Detail;