const CityCardContent = ({weather}) => {

    return (
        <>
            <img
                src={`http:${weather.current.condition.icon}`}
                className='card-img-top'
                alt="weather.current.condition.text" />

            <div className="card-body">
                <h5 className="card-title">{weather.location.name}</h5>
                <p className='card-text'>{weather.current.condition.text}</p>
            </div>
        </>
    )
}

export default CityCardContent