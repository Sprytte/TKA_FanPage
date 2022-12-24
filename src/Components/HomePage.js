import Adaptations from "./Adaptations";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import tkaPic from '../images/head.jpg';
import Arcs from './Arcs';
import Adaps from './Adaps';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <h1>The King's Avatar</h1>
            <p>The King's Avatar started off as a light-novel, originally published on July 1, 2011 by Hu Dielan, also known as
                Butterfly Blue.
            </p>
            <p>Synopsis: In the online game Glory, Ye Xiu is regarded as a textbook and a top-tier pro-player. However, due to a
                myriad reasons, he is kicked from the team. After leaving the professional scene, he finds work in an Internet Cafe
                as a manager. When Glory launches its tenth server, he who possesses ten years of gaming experience once again throws
                himself into the game. Bringing with him the memories of his past and an incomplete, self-made weapon, his return 
                along the road to the summit begins! <br/>
                After fighting and scheming, who snatched away my glory? Under the tossing of the wind and rain, my dreams shall
                still appear as though they had never been shattered. In all its splendor, the path shall never be lost. Before
                the gazes of millions, this is where I return! <br/>
                <i>Pulled from <a href="https://www.webnovel.com/book/the-king's-avatar_7176992105000305">webnovel.com</a></i>
            </p>
            <p>This site is meant to serve as an information site for fans of the fandom, made by fellow fans. You don't need to know
                anything about the novel or any of its adaptations to read more about it, though be warned that spoilers are heavily
                present.
            </p>
            <p>Below are all the available adaptations including the original. As some works are not yet completed, the information is
                still getting updated. Let us know if anything is missing or incorrect! <br/>
                <i><a href="">tkafans@hotmail.com</a></i>
            </p>
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
            <h1>Arcs</h1>
            <p>Below is a list of all the arcs inside of the light-novel.</p>
            <ul>
            {arcs.map((i)=>{
                return <li><Arcs
                id = {i.id}
                name = {i.arcName}
                descrip = {i.arcDescription}
                summary = {i.summaryDescription}></Arcs> </li>
            })}
            </ul>
        </div>
      );

    const [currentView, setCurrentView] = React.useState("view1");
    const tempId = "custom-id-yes";
    const notify = () => (toast("Don't forget to support the author on QiDian!", {toastId: tempId}));

    return (
        <div className="bodyId">
            <header className="headImg">
                <img src={tkaPic} alt="tka novel"></img>
            </header>

            <nav>
                <button onClick={() => (setCurrentView("view1"))}>Story</button> &nbsp; 
                <button onClick={() => {(setCurrentView("view2")); (notify())}}>Arcs</button> &nbsp; 
                <button >Arcs</button>
                <ToastContainer/>
            </nav>

            <main>
                {currentView === "view1" ? 
                    <ViewOne onClick={page => setCurrentView(page)} /> : 
                    <ViewTwo onClick={page => setCurrentView(page)} />}
            </main>

            {/*<footer>
                <h2>The King's avatar Fan Page</h2>
    </footer>*/}
        </div>)
}

export default HomePage;