import Adaptations from "./Adaptations";
import {useEffect, useState} from 'react';
import axios from 'axios';
import tkaPic from '../images/head.jpg';

function HomePage(){
    const [adaptations, setAdaptations] = useState([]);
    const loadTodosFromAPI = ()=>{
        axios.get('http://localhost:8081/TKA/Adaptations')
        .then((response)=>{
            if(response.status === 200){
                const item = response.data
                setAdaptations(item)
            }
        });
    }

    useEffect(()=>{
        loadTodosFromAPI()
    },[])

    return (
        <div id="bodyId">
            <header className="headImg">
                <img src={tkaPic} alt="tka novel" width="*"></img>
            </header>

            <nav>
                <a href="">Home</a> &nbsp; <a href="">Arcs</a> &nbsp; <a href="">Adaptations</a>
            </nav>

            <main>
                    {adaptations.map((i)=>{
                        return <Adaptations
                        name = {i.adaptationName}
                        summary = {i.briefSummary}
                        images = {i.imageAddress}></Adaptations>
                    })}
            </main>
            
        </div>)
}

export default HomePage;