const API_KEY = '6712faf79ce759566fcf612fb6befc86';
let ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=`;
import axios from './utils/axios'


export default class Weather {
    constructor(city) {
        this._city = city;
    }

    fetchingData = async () => {
        try{
          let result = await axios.get(getProperUrl())
          setData(result.data)
          console.log("result:",data)
          
        } catch(e) {
          console.log(e)
        }
        
      }

    getWeather() {
        try {
            const res = await axios.get(this._getURL())
            return res.data
        } catch (e) {
            throw new Error(e)
        }
    }

    search(term) {
        this._city = term
        return this.getWeather()
     }

    _getURL() {

        if (this._city) ROOT_URL += `${this._city}`;

        return ROOT_URL;
    }


}