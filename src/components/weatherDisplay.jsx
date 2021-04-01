
import { useContext } from 'react'
import GoogleMap from './google_map'
import Chat from './chat'
import { WeatherContext } from '../App'


const WeatherDisplay = () => {

    const { data } = useContext(WeatherContext)

    let temperatures = data.list.map(tem => tem.main.temp)
    const pressures = data.list.map(pres => pres.main.pressure)
    const humidity = data.list.map(humi => humi.main.humidity)
    const { lat, lng } = data.city.coord

    return (
        <>
            <tr key={data.city.name}>
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
        </>

    )
}

export default WeatherDisplay;