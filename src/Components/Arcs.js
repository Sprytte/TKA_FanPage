import React from "react";

function Arcs({name, descrip, summary}){
    const MainPage = ({onClick}) => (
        <div onClick={()=>onClick("sumPage")} className="ark">
            <b>{name}</b><br/>
            {descrip}<br/>
        </div>
      );
    const SumPage = ({onClick}) => (
        <div className="sums" onClick={()=>onClick("mainPage")}>
            {summary}
        </div>
    );
    const [viewPage, setViewPage] = React.useState("mainPage");
    
    return(<>
            {viewPage === "mainPage" ? 
                <MainPage onClick={page => setViewPage(page)} /> : 
                <SumPage onClick={page => setViewPage(page)} />}
    </>);
}

export default Arcs;