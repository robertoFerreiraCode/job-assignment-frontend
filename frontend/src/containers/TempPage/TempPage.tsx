import { useLocation } from "react-router-dom"

const TempPage = () => {
    const location = useLocation()
    const { temp } = location.state
    return (
        <div>
            <h2>{temp.firstName + " " + temp.lastName}</h2>
            {/* display jobs */}
        </div>
    )
}

export default TempPage;