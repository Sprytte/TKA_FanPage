function Adaptations({name, summary, images})
{
    return(<>
        <div className="adaptationBoxes">
            <img className="adapImg" src={images} alt="adaptation image" />
            <div>{name}</div>
            <div>{summary}</div>
        </div>
    </>)
}

export default Adaptations;