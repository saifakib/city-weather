import { useState, useEffect } from 'react'
import GoogleMap from './google_map'
import Chat from './chat'

const RenderData = ({ data }) => {
    const [cityData, setCityData] = useState(data)

    let temperatures, pressures, humidity, lat, lng

    useEffect(() => {
        console.log("am i calling")
        temperatures = cityData.list.map(temp => temp.main.temp)
        pressures = cityData.list.map(pres => pres.main.pressure)
        humidity = cityData.list.map(humi => humi.main.humidity)
        lat = cityData.city.coord.lat
        lng = cityData.city.coord.lng
    })
    return (
        <tr key={cityData.city.name}>
            <td>
                <GoogleMap lat={lat} lng={lng} />
            </td>
            <td>
                <Chat data={temperatures} color="blue" units="K" />
            </td>
            <td>
                <Chat data={pressures} color="orange" units="hPa" />
            </td>
            <td>
                <Chat data={humidity} color="red" units="%" />
            </td>
        </tr>
    )
}

const Weather = ({ weather }) => {
    console.log("weather: ",weather)
    return (
        
        <table className="table table-hover mt-5">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature(K)</th>
                    <th>Pressure(hPa)</th>
                    <th>Humidity(%)</th>
                </tr>
            </thead>
            <tbody>
                <RenderData data={weather}/>
            </tbody>
        </table>
    )
}

export default Weather;