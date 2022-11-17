import { useLocation } from "react-router-dom"
import { Job } from "../../utilities/types"
const TempPage = () => {
    const location = useLocation()
    const { temp } = location.state

    return (
        <div>
            <h2>{temp.firstName + " " + temp.lastName}</h2>
            <h3>Jobs:</h3>
                {temp.jobs.map((job:Job, index:any) => {
                    return (
                        <div>
                            <p>{job.name}</p>
                            <p>Start Date {job.startDate}</p>
                            <p>End Date {job.endDate}</p>
                        </div>
                    )
                })}

        </div>
    )
}

export default TempPage;