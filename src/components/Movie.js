// 무비 컴포넌트
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({movieId, coverImg, title, year, summary, genres, movie_style}) {
        // props (Movie 컴포넌트는 위 속성들을 부모 컴포넌트로부터 받아옴)
        // Movie의 부모 컴포넌트 : Home
    
    if (coverImg == "") {
        return null;
    }
    return (
     <div className={styles.movie} style={movie_style}>
        <img src={coverImg} alt={title} className={styles.movie_img}/>
        <div className={styles.movie_titleArea}>
            <h2 className={styles.movie_title}>
                <Link to={`/movie/${movieId}`}>[{year}] {title && title.length > 50 ? `${title.slice(0, 50)}...` : title}</Link>
            </h2>
            <ul className={styles.movie_genres}>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <div className={styles.movie_summary}>{summary}</div>
        </div>
        
     </div>
    );
}

// propTypes 설정
Movie.propTypes = {
    movieId: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;