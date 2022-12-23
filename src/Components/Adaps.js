function Adaps({name, summary, images, rating, length, creators, info})
{
    const Gods = creators.split(',');
    return(<>
            <img className="adapImg" src={images} alt="adaptation" />
            <div>{name}</div>
            <div>{summary}</div>
            <div>Rating: {rating}</div>
            <div>{length}</div>
            <div>{Gods.map((i)=>{
                return <p>{i}</p>
            })}</div>
            <div>{info}</div>
    </>)
}

export default Adaps;