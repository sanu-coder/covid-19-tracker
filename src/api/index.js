import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchdata = async(country) => {
    let changeableurl=url;
    if(country){
        changeableurl=`${url}/countries/${country}`;
    }
    if(country=='Global') 
    {     changeableurl=url;
          country='';
    }

    try {
        const { data } = await axios.get(changeableurl);
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }
        return modifiedData;
    } catch (error) {

    }
}
export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData1 = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData1;

    } catch (error) {

    }
}
export const fetch_countries = async() => {
    try{
        const {data:{countries}}=await axios.get(`${url}/countries`);
        console.log(countries);
        return countries.map((country)=>country.name);
    }
    catch(error){}
    
}