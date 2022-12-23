function Adaps({name, summary, images, rating, length, creators, info})
{
    return(<>
        <div className="adaptationBoxes">
            <img className="adapImg" src={images} alt="adaptation image" />
            <div>{name}</div>
            <div>{summary}</div>
            <div>{rating}</div>
            <div>{length}</div>
            <div>{creators}</div>
            <div>{info}</div>
        </div>
    </>)
}

export default Adaps;