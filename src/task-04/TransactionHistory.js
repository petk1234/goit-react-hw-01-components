import React from "react";
import styles from './styles4.module.css';
import { Fragment } from 'react';
import Tr from "./tr";
import PropTypes from 'prop-types';
function TransactionHistory({items}){

    return items.map( (item, i) =>(
         <Fragment key={item.id}>
            {i%2 === 0 
            ? (
            <tbody className={styles.pair}>
                <Tr 
                  type = {item.type}
                  amount = {item.amount}
                  currency = {item.currency}
                />
            </tbody>
            ) 
            : (
            <tbody className={styles.noPair}>
                <Tr 
                  type = {item.type}
                  amount = {item.amount}
                  currency = {item.currency}
                />
            </tbody>)}
         </Fragment> 
    ));
}

TransactionHistory.propTypes ={
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TransactionHistory;