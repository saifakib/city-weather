
import WeatherDisplay from './weatherDisplay'

const Weather = ({ weather }) => {
    console.log("weather", weather)
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
                <WeatherDisplay cityData={weather}/>
            </tbody>
        </table>
    )
}

export default Weather;