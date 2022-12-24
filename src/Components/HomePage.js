import Adaptations from "./Adaptations";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import tkaPic from '../images/head.jpg';
import Arcs from './Arcs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Favorites from "./Favorites";
import { Pane, SortablePane } from "react-sortable-pane";

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

    const [fav, setFav] = useState([]);
    const loadFavorites = ()=>{
        axios.get('http://localhost:8081/TKA/Adaptations/1/Favorites')
        .then((response)=>{
            if(response.status === 200){
                const fav = response.data
                setFav(fav)
            }
        });
    }
    useEffect(()=>{
        loadFavorites()
    },[])

    const StoriesPage = () => (
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
                smallSummary = {i.briefSummary}
                fullSummary = {i.fullSummary}
                images = {i.imageAddress}
                rating = {i.rating}
                length = {i.length}
                creators = {i.creators}
                info = {i.extraInformation}></Adaptations>
            })}
            
        </div>
      );
      const ArcsPage = () => (
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
        
      const favorites = fav.map((i)=>{
            return <Favorites
            id = {i.id}
            chapters = {i.chapters}
            descrip = {i.description}
            user = {i.username}></Favorites>
        })
        const length = favorites.length
        const arry = []
        const arr = () => {
            for(var i = 0; i < length; i++)
                arry.push(i)
            return arry;
        }
        const ar = arr()
        const panes = ar.map(key => (
        <Pane key={key} defaultSize={{width: '50%', height: 120}} className="pain">
            {favorites[key]}
        </Pane>
      ))
      const FavoritesPage = () => (
        <div>
            <h1>Fan Favorites</h1>
            <p>Below are the fan favorite moments in the entire novel, ranked by preference. If they don't suit your taste, switch them
                around as you please!
            </p>
            <p>Think a scene is missng? Add it yourself!</p>
            <form onSubmit={formSubmit}>
                <label>Chapter(s):</label> <input name='chapNb'></input> <br/>
                <label>Scene(s) description:</label> <input name='sceneDescrip'></input> <br/>
                <label>Username:</label> <input name='userName'></input>
                <button type='submit'>Add Item</button>
            </form>   

            <SortablePane direction="vertical" margin={20} defaultOrder={['0', '1']}>
                {panes}
            </SortablePane>
        </div>
    );
    const addItem = (item)=>{
        axios.post('http://localhost:8081/TKA/Adaptations/1/Favorites',{
            chapters: item.chapters,
            description: item.description,
            username: item.username
          })
          .then((response)=>{
            if(response === 200){
                loadFavorites()
            }
          })
          .catch((error)=>{
            console.log(error);
          });
    }
    const formSubmit = (event) =>{
        event.preventDefault();
        const itemC = event.target.elements.chapNb.value;
        const itemD = event.target.elements.sceneDescrip.value;
        const itemU = event.target.elements.userName.value;
        event.target.elements.chapNb.value = "";
        event.target.elements.sceneDescrip.value = "";
        event.target.elements.userName.value = "";
        if(itemC === '' || itemD === '' || itemU === ''){
            window.alert("You cannot add nothing to the list");
            return;
        }
        addItem({"chapters": itemC, "description": itemD, "username": itemU});
    }
    const [currentView, setCurrentView] = React.useState("storiesPage");
    const tempId = "custom-id-yes";
    const notify = () => (toast("Don't forget to support the author on QiDian!", {toastId: tempId}));
    
    const gettingViews = ()=>{
        return (<>
              {(() => {
                if (currentView === "storiesPage") {
                  return (
                    <StoriesPage onClick={page => setCurrentView(page)} />
                  )
                } else if (currentView === "arcsPage") {
                  return (
                    <ArcsPage onClick={page => setCurrentView(page)} />
                  )
                } else {
                  return (
                    <FavoritesPage onClick={page => setCurrentView(page)}/>
                  )
                }
              })()}
        </>)
    }

    return (
        <div className="bodyId">
            <header className="headImg">
                <img src={tkaPic} alt="tka novel"></img>
            </header>

            <nav>
                <button onClick={() => (setCurrentView("storiesPage"))}>Story</button> &nbsp; 
                <button onClick={() => {(setCurrentView("arcsPage")); (notify())}}>Arcs</button> &nbsp; 
                <button onClick={() => (setCurrentView("FavoritesPage"))}>Favorites</button>
                <ToastContainer/>
            </nav>

            <main>
                {gettingViews()}
            </main>

            {/*<footer>
                <h2>The King's avatar Fan Page</h2>
            </footer>*/}
        </div>)
}

export default HomePage;