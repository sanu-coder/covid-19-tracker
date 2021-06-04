import React from 'react';
import Cards from './Components/Cards/Cards';
import Charts from './Components/Charts/Charts';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import styles from './app.module.css';
import { fetchdata } from './api';
import coronaImage from './images/coronavirus.png';
class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fetched_data = await fetchdata();
        // console.log(data);
        this.setState({ data: fetched_data });
    }
    handleCountryChange = async(country) => {
        const fetch_data = await fetchdata(country);
        this.setState({ data: fetch_data, country: country });
    }
    render() {
        return ( 
            <div className = { styles.container } >
            <p className = { styles.heading } > COVID - 19 TRACKER </p> 
            <Cards className={styles.Cards_class} data = { this.state.data }/>  
            <CountryPicker handleCountryChange = { this.handleCountryChange }/> 
            <Charts data = { this.state.data } country = { this.state.country }/> 
            
            </div>
        )
    }
}
export default App;