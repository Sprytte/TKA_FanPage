import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Adaps from './Adaps';

function Adaptations({id,name, summary, images})
{
    const [counter, setCounter] = useState(0)
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

    const [adapId, setAdapId] = useState(1);
    const ViewOne = ({onClick}) => (
        <div className="adaptationBoxes">
            {setAdapId(id)}
            <img className="adapImg" src={images} alt="adaptation" onClick={() =>
                onClick("view2")
                /*setCounter(counter+1) &&
                counter % 2 === 0 ? onClick("view2"): onClick("view1")
            */}/>
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
            {currentView === "view1" ? 
                <ViewOne onClick={page => setCurrentView(page)} /> : 
                <ViewTwo onClick={page => setCurrentView(page)} />}
    </>)
}

export default Adaptations;