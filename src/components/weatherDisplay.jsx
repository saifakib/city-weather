import GoogleMap from './google_map'
import Chat from './chat'

const WeatherDisplay = (props) => {

    console.log(props)

    const { cityData } = props;
    
    let temperatures = cityData.list.map(temp => temp.main.temp)
    const pressures = cityData.list.map(pres => pres.main.pressure)
    const humidity = cityData.list.map(humi => humi.main.humidity)
    const { lat, lng } = cityData.city.coord

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

export default WeatherDisplay;