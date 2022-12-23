import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Adaps from './Adaps';

function Adaptations({id,name, summary, images})
{
    const [adaps, setAdaps] = useState([]);
    const loadTodosFromAPI = ()=>{
        axios.get('http://localhost:8081/TKA/Adaptations')
        .then((response)=>{
            if(response.status === 200){
                const item = response.data
                setAdaps(item)
            }
        });
    }
    useEffect(()=>{
        loadTodosFromAPI()
    },[])

    const [adapId, setAdapId] = useState(0);
    const ViewOne = ({onClick}) => (
        <div className="adaptationBoxes">
            {setAdapId(id)}
            <img className="adapImg" src={images} alt="adaptation" onClick={() => onClick("view2")}/>
            <div>{name}</div>
            <div>{summary}</div>
        </div>
      );
      
    const ViewTwo = () => (
        <div className='fullAdaptationBox'>
            <Adaps
                name = {adaps[adapId-1].adaptationName}
                summary = {adaps[adapId-1].fullSummary}
                images = {adaps[adapId-1].imageAddress}
                rating = {adaps[adapId-1].rating}
                length = {adaps[adapId-1].length}
                creators = {adaps[adapId-1].creators}
                info = {adaps[adapId-1].extraInformation}></Adaps>
        </div>
    );
    const [currentView, setCurrentView] = React.useState("view1");
    
    return(<>
        <div>
            {currentView === "view1" ? 
                <ViewOne onClick={page => setCurrentView(page)} /> : 
                <ViewTwo onClick={page => setCurrentView(page)} />}
        </div>
    </>)
}

export default Adaptations;