import React from "react";

function Arcs({name, descrip, summary}){
    const ViewOne = ({onClick}) => (
        <div onClick={()=>onClick("view2")}>
            {name}<br/>
            {descrip}<br/>
        </div>
      );
    const ViewTwo = ({onClick}) => (
        <div className="sums" onClick={()=>onClick("view1")}>
            {summary}
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