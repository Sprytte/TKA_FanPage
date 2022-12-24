import React from "react";

function Adaptations({name, smallSummary, fullSummary, rating, creators, length, info, images}){
    const Gods = creators.split(',');

    const MainPage = ({onClick}) => (
        <div className="adaptationBoxes">
            <img className="adapImg" src={images} alt="adaptation" onClick={() =>onClick("sumPage")}/>
            <div>{name}</div>
            <div>{smallSummary}</div>
        </div>
      );
      
    const SumPage = ({onClick}) => (
        <div className='fullAdaptationBox'>
        <img className="adapImg" src={images} alt="adaptation" onClick={() =>onClick("mainPage")}/>
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
    const [viewPage, setViewPage] = React.useState("mainPage");
    
    return(<>
            {viewPage === "mainPage" ? 
                <MainPage onClick={page => setViewPage(page)} /> : 
                <SumPage onClick={page => setViewPage(page)} />}
    </>)
}

export default Adaptations;