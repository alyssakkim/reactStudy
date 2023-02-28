// 무비 컴포넌트
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({movieId, coverImg, title, summary, genres}) {
        // props (Movie 컴포넌트는 위 속성들을 부모 컴포넌트로부터 받아옴)
    return (
     <div className="{styles.movie}">
        <img src={coverImg} alt={title} />
        <h2>
            <Link to={`/movie/${movieId}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
        </ul>
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