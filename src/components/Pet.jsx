import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Pet({ id, name, age, colour, breed, showDetails }) {
    const navigate = useNavigate();


    return (
        <>
            <p>Name: {name}</p>
            <p>Colour: {colour}</p>
            <p>Age: {age}</p>
            <p>Breed: {breed}</p>
            {showDetails && <button onClick={() => navigate("/get/" + id)}>View Details</button>}
        </>
    );
}

Pet.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    breed: PropTypes.string,
}

Pet.defaultProps = {
    breed: "Unknown",
    showDetails: false,
}

export default Pet;