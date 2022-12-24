import { Pane, SortablePane } from "react-sortable-pane";

function Favorites({id, chapters, descrip, user}){
    return(
        <div>
            <p>Chapter(s): {chapters} </p>
            <p>{descrip} <br/>
            <i>{user} </i><br/> </p>
        </div>
    )
}

export default Favorites;