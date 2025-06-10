import './MovieCard.css';

const MovieCard = (props) => {
    return (
        <div className = "movieCardContainer">
            <img className = "movieIMG" src= {props.imgURL} alt="image" />
            <p className = "movieName"> {props.name}</p>
            <p className = "movieRating"> {props.rating}</p>
        </div>

    );
};

export default MovieCard


