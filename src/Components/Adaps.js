function Adaps({name, summary, images, rating, length, creators, info})
{
    return(<>
            <img className="adapImg" src={images} alt="adaptation image" />
            <div>{name}</div>
            <div>{summary}</div>
            <div>{rating}</div>
            <div>{length}</div>
            <div>{creators}</div>
            <div>{info}</div>
    </>)
}

export default Adaps;