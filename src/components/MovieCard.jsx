import '../components-css/MovieCard.css';

const MovieCard = ({imgURL, name, rating}) => {

    return (
        <div className = "movieCardContainer">
            <img className = "imgURL" src= {imgURL} alt="image" />
            <p className = "name"> {name}</p>
            <p className = "rating"> {rating}</p>
        </div>

    );
};

export default MovieCard


