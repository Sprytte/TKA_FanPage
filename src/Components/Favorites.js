function Favorites({id,chapters, descrip, user, deleteItem}){
    return(
        <div>
            <p className="chaps">Chapter(s): {chapters} </p>  <button id="toTheRight" onClick={()=>{deleteItem(id)}}>Unfavavorite</button>
            <p>{descrip} <br/>
            <i>{user}</i> <br/> </p>
        </div>
    )
}

export default Favorites;