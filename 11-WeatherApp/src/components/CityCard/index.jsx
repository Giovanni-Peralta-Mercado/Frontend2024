import React from 'react'
import { getWeather } from "../../api/WeatherApi"
import { useEffect, useState } from "react"
import CityCardContent from './CityCardContent'
import CityCardPlaceholder from './CityCardPlaceHolder'


export const CityCard = () => {

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const getCityWeather = async () => {
            setWeather(await getWeather())
        }

        getCityWeather()
    }, [])


    return (
        <div className='card' style={{ width: '18rem' }}>
            {
                weather ?
                <CityCardContent weather={weather}/> :
                <CityCardPlaceholder />
            }
        </div>
    )
}

export default CityCard