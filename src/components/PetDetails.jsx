import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pet from "./Pet";

function PetDetails() {
    const [pet, setPet] = useState({ name: "", age: "", breed: "", colour: "" });



    const params = useParams();

    console.log("Params:", params);

    useEffect(() => {
        axios.get("http://localhost:8080/pets/" + params.id)
            .then(res => { setPet(res.data); })
            .catch(err => console.error(err));
    }, [params.id])

    return (<Pet
        name={pet.name}
        age={pet.age}
        colour={pet.colour}
        breed={pet.breed}
    />
    );
}

export default PetDetails;