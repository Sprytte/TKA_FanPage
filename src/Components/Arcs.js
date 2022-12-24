import ArcSummaries from "./ArcSummaries";
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Arcs({id,name, descrip, summary}){
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

    const [arcId, setArcId] = useState(1);
    const ViewOne = ({onClick}) => (
        <div onClick={()=>onClick("view2")}>
            {setArcId(id)}
            {name}<br/>
            {descrip}<br/>
            {summary}<br/>
        </div>
      );
      
    const ViewTwo = () => (
        <div className="sums">
            <ArcSummaries summary = {arcs[arcId-1].summary.summaryDescription}></ArcSummaries>
        </div>
    );
    const [currentView, setCurrentView] = React.useState("view1");
    
    return(<>
            {currentView === "view1" ? 
                <ViewOne onClick={page => setCurrentView(page)} /> : 
                <ViewTwo onClick={page => setCurrentView(page)} />}
    </>);
}

export default Arcs;