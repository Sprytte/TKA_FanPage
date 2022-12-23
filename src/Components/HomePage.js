import Adaptations from "./Adaptations";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import tkaPic from '../images/head.jpg';
import Adaps from './Adaps';

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
            <h1>Second page</h1>
        </div>
      );
      const [currentView, setCurrentView] = React.useState("view1");

    return (
        <div className="bodyId">
            <header className="headImg">
                <img src={tkaPic} alt="tka novel"></img>
            </header>

            <nav>
                <button onClick={() => (setCurrentView("view1"))}>Home</button> &nbsp; 
                <button onClick={() => (setCurrentView("view2"))}>Adaptations</button> &nbsp; 
                <button>Arcs</button>
            </nav>

            <main>
                {currentView === "view1" ? 
                    <ViewOne onClick={page => setCurrentView(page)} /> : 
                    <ViewTwo onClick={page => setCurrentView(page)} />}
            </main>
        </div>)
}

export default HomePage;