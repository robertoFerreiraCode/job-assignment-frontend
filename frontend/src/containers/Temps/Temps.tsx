import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Temp } from "../../utilities/types";

const Temps = () => {
    const [temps, setTemps] = useState<Temp[]>([]);
    
    useEffect(() => {
        getTemps();
    }, [])

    const getTemps = async () => {
        const response = await axios.get("/api/temps/");
        const data: Temp[] = response.data;
        setTemps(data);
    }

    return (
        <div>
            <h1>Temps</h1>
            <ul>
                {temps.map((temp, index) => {
                    return <li key={index}><Link 
                        to={"/temps/" + temp.id}
                        state={{ temp: temp }}>{temp.firstName + " " + temp.lastName}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default Temps;