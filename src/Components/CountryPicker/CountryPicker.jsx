import React,{useEffect,useState} from 'react';
import {NativeSelect,FormControl, StylesProvider} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetch_countries} from '../../api';
const CountryPicker=({handleCountryChange})=>{
    const [CountryData,setCountryData]=useState([]);
    useEffect(()=>{
       const fetchCountryAPI=async ()=>{
           setCountryData(await fetch_countries());
       }
       fetchCountryAPI();
       
    },[setCountryData]);
    console.log(CountryData);
    return (
        <FormControl className={StylesProvider.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {CountryData.map((country,i)=> <option key={i} value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;