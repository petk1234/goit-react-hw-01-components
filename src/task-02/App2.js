import React from "react";
import ReactDOM from 'react-dom';
import statisticalData from './statistical-data.json';
import Section from './Section.js';

console.log(statisticalData);
const App2 = props =>(
    <>
    <Section
       title = "Sheeesh"
       stats = {statisticalData}     
    />
    <Section
       title = "EEEEEEEE"
       stats = {statisticalData}     
    />
    <Section
       title = "EEEEEEEE"
       stats = {statisticalData}     
    />
    </>
);
ReactDOM.render(<App2/>, document.getElementById('root'));