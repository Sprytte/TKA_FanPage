import React, {useEffect, useState} from 'react';

function Adaptations({id,name, smallSummary, fullSummary, rating, creators, length, info, images})
{
    const Gods = creators.split(',');
    const [counter, setCounter] = useState(0)

    const [adapId, setAdapId] = useState(1);
    const ViewOne = ({onClick}) => (
        <div className="adaptationBoxes">
            {setAdapId(id)}
            <img className="adapImg" src={images} alt="adaptation" onClick={() =>onClick("view2")}/>
            <div>{name}</div>
            <div>{smallSummary}</div>
        </div>
      );
      
    const ViewTwo = ({onClick}) => (
        <div className='fullAdaptationBox'>
        <img className="adapImg" src={images} alt="adaptation" onClick={() =>onClick("view1")}/>
            <div>{name}</div>
            <div>{fullSummary}</div>
            <div>Rating: {rating}</div>
            <div>{length}</div>
            <div>{Gods.map((i)=>{
                return <p>{i}</p>
            })}</div>
            <div>{info}</div>
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