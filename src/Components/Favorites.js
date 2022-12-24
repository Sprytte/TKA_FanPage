function Favorites({id, chapters, descrip, user}){
    return(
        <div>
            Chapter(s): {chapters} <br/>
            {descrip} <br/>
            {user} <br/>
        </div>
    )
}

export default Favorites;