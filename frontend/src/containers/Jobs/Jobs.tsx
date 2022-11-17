import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Job } from "../../utilities/types";
const Jobs = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    
    useEffect(() => {
        getJobs();
    }, [])

    const getJobs = async () => {
        const response = await fetch("/api/jobs?assigned=false", {
            headers: {
                "Content-Type": "application/json", 
            }, 
            method: "get"
        })
        const data: Job[] = await response.json();
        setJobs(data);
    }

    return (
        <div>
            <h1>Jobs</h1>
            <ul>
                {jobs.map((job, index) => {
                    return <li key={index}><Link 
                        to={"/jobs/" + job.id}
                        state={{ job: job }}>{job.name}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default Jobs;