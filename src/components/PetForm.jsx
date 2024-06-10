import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

function PetForm({ getPets }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [colour, setColour] = useState("");
    const [breed, setBreed] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // stops the form from submitting fully

        axios.post("http://localhost:8080/pets", { name, age, colour, breed })
            .then(() => {
                setAge(0);
                setBreed("");
                setColour("");
                setName("");
                getPets();
            })
            .catch(err => console.error(err));
    }

    return (<form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} required />
        <label htmlFor="age">Age</label>
        <Input type="number" name="age" id="age" value={age} onChange={e => setAge(parseInt(e.target.value))} min={1} max={100} required />
        <label htmlFor="breed">Breeder</label>
        <Input type="text" name="breed" id="breed" value={breed} onChange={e => setBreed(e.target.value)} required />
        <label htmlFor="colour">Colour</label>
        <Input type="text" name="colour" id="colour" value={colour} onChange={e => setColour(e.target.value)} required />
        <button type="submit">Add Pet</button>
    </form>);
}

PetForm.propTypes = {
    getPets: PropTypes.func.isRequired
}

export default PetForm;