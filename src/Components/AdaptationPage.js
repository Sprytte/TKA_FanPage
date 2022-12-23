import tkaPic from '../images/head.jpg';
import '../App.css';
import Adaps from './Adaps';
import Adaptations from "./Adaptations";
import {useEffect, useState} from 'react';
import axios from 'axios';

function HomeDesign(){
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

    return(
        <div>
            <header>
                <img src={tkaPic} alt="tka novel" width="*"></img>
            </header>
            {adaptations[0](()=>{
                        return <Adaps
                        name = {adaptations[0].adaptationName}
                        summary = {adaptations[0].fullSummary}
                        images = {adaptations[0].imageAddress}
                        rating = {adaptations[0].rating}
                        length = {adaptations[0].length}
                        creators = {adaptations[0].creators}
                        info = {adaptations[0].extraInformation}></Adaps>
                    })}
        </div>
    )
}

export default AdaptationPage;