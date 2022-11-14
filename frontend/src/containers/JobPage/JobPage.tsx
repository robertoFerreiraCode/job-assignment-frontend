import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const JobPage = () => {
    const location = useLocation()
    const { job } = location.state
    const [temps, setTemps] = useState<Temp[]>([]);
    const [selectedTempId, setSelectedTempId] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        getTemps();
    }, [])

    type Temp = {
        id: number,
        firstName: string,
        lastName: string,
    };

    const getTemps = async () => {
        const response = await axios.get("/api/temps?jobId=" + job.id);
        const data: Temp[] = response.data;
        setTemps(data);
    }

    const handleTempAssign = async () => {
        const reqBody = {
            tempID: selectedTempId,
        };
        const response = await axios.patch("/api/jobs/" + job.id, reqBody);
        const data = response.data;
        console.log(data);
        navigate("/");
    }

    return (
        <div>
            <h2>{job.name}</h2>
            <h3>Start Date: {job.startDate}</h3>
            <h3>End Date: {job.endDate}</h3>
            <div>
                <h4>Assign Temp: </h4>
                <select 
                name="tempSelect" 
                onChange={(e) => setSelectedTempId(e.target.value)}
                >
                {temps.map((temp, index) => {
                    return <option 
                        key={index} 
                        value={temp.id}
                        >
                            {temp.firstName + " " + temp.lastName}
                        </option>
                })}
                </select>
                <button type="button" id="submit" onClick={() => handleTempAssign()}>Assign</button>
            </div>
        </div>
    )
}

export default JobPage;