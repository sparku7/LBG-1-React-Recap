import PropTypes from "prop-types";
import Pet from "./Pet";

function PetContainer({ pets }) {
    return (<>
        {[...pets].reverse().map(({ id, name, age, colour, breed }) => (
            <Pet
                key={id}
                id={id}
                age={age}
                colour={colour}
                name={name}
                breed={breed}
                showDetails
            />))}
    </>);
}

PetContainer.propTypes = {
    pets: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        colour: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        breed: PropTypes.string,
    })).isRequired
}

export default PetContainer;