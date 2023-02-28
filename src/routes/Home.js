import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);   // API로 부터 얻은 데이터로 state를 변경함
    const getMoives = async () => {
        const json = await (
            await fetch(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
            )
        ).json();
        
        setMovies(json.data.movies);    // movies 를 받아오면 
        setLoading(false);
         
    };

    useEffect(() => {
        getMoives();
    }, []);

    console.log(movies);
    return (
        <div>
            {loading ? 
                (<h1>Loading...</h1>) :
                (<div>
                    {movies.map((movie) => (
                        // Movie 컴포넌트 render
                        <Movie
                            key={movie.id}
                            // key 값 매우 중요★ (map안에서 컴포넌트들을 render 할 때 사용 - React.js에서만!)
                            movieId={movie.id}
                            coverImg={movie.medium_cover_image}
                            // ↑ 우리가 쓰는 컴포넌트라 네이밍은 자유!
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        /> 
                        ))
                    }
                </div>)
            }
        </div>
    );
}

export default Home;