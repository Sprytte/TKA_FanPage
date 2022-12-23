import tkaPic from '../images/head.jpg';
import '../App.css';
import Adaps from './Adaps';
import {useEffect, useState} from 'react';
import axios from 'axios';

function AdaptationPage(adapId){
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
            <Adaps
                name = {adaptations[{adapId}].adaptationName}
                summary = {adaptations[{adapId}].fullSummary}
                images = {adaptations[{adapId}].imageAddress}
                rating = {adaptations[{adapId}].rating}
                length = {adaptations[{adapId}].length}
                creators = {adaptations[{adapId}].creators}
                info = {adaptations[{adapId}].extraInformation}></Adaps>
        </div>
    )
}

export default AdaptationPage;