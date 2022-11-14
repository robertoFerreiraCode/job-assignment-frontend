
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Jobs from "../Jobs";
import Login from "../Login"

const Home = ({id} : {id: number}) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (id == 0) navigate("/login");
        console.log(id);
    }, [])
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home;