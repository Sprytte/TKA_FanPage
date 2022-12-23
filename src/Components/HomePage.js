import Adaptations from "./Adaptations";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import tkaPic from '../images/head.jpg';
import Arcs from './Arcs';
import Adaps from './Adaps';

function HomePage(){
    const [adaptations, setAdaptations] = useState([]);
    const loadTodosFromAPI = ()=>{
        axios.get('http://localhost:8081/TKA/Adaptations')
        .then((response)=>{
            if(response.status === 200){
                const adaptation = response.data
                setAdaptations(adaptation)
            }
        });
    }
    useEffect(()=>{
        loadTodosFromAPI()
    },[])
    
    const [arcs, setArcs] = useState([]);
    const loadArcs = ()=>{
        axios.get('http://localhost:8081/TKA/Adaptations/1/Arcs')
        .then((response)=>{
            if(response.status === 200){
                const arc = response.data
                setArcs(arc)
            }
        });
    }
    useEffect(()=>{
        loadArcs()
    },[])

    const ViewOne = () => (
        <div>
            {adaptations.map((i)=>{
                return <Adaptations
                id = {i.id}
                name = {i.adaptationName}
                summary = {i.briefSummary}
                images = {i.imageAddress}></Adaptations>
            })}
        </div>
      );
      const ViewTwo = () => (
        <div>
            <ul>
            {arcs.map((i)=>{
                return <li><Arcs
                name = {i.arcName}
                descrip = {i.arcDescription}
                summary = {i.summaryDescription}></Arcs> </li>
            })}
            </ul>
        </div>
      );
      const [currentView, setCurrentView] = React.useState("view1");

    return (
        <div className="bodyId">
            <header className="headImg">
                <img src={tkaPic} alt="tka novel"></img>
            </header>

            <nav>
                <button onClick={() => (setCurrentView("view1"))}>Story</button> &nbsp; 
                <button onClick={() => (setCurrentView("view2"))}>Arcs</button> &nbsp; 
                <button >Arcs</button>
            </nav>

            <main>
                {currentView === "view1" ? 
                    <ViewOne onClick={page => setCurrentView(page)} /> : 
                    <ViewTwo onClick={page => setCurrentView(page)} />}
            </main>
        </div>)
}

export default HomePage;