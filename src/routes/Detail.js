import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail(){
    const { movieId } = useParams();
    const [loading, setLoading] = useState(true);
    const [selMovie, setSelMovie] = useState("");
    const navigate = useNavigate();
 
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
                    <img src={selMovie.data.movie.background_image} className={styles.movie_background}></img>
                    <div className={styles.movie_dtCon}>
                        <img src={selMovie.data.movie.medium_cover_image} className={styles.movie_dtImg}></img>
                        <div>
                            <h3 className={styles.movie_dtTitle}>[{selMovie.data.movie.year}] {selMovie.data.movie.title}
                            <br></br>⭐ {selMovie.data.movie.rating} / ❤️ {selMovie.data.movie.like_count}</h3>
                            <div className={styles.movie_dtDescription}>
                                {selMovie.data.movie.description_full}
                                <p></p>
                                
                                📽️ <Link to={`https://www.youtube.com/watch?v=${selMovie.data.movie.yt_trailer_code}`}>YouTube</Link>
                            </div>
                        </div>
                        <div className={styles.movie_back} onClick={() => navigate(-1)}>👈🏻돌아가기</div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Detail;