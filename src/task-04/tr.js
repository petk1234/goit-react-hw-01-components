import React from "react";
import PropTypes from 'prop-types';
function Tr({type, amount, currency}){
    return (<tr> 
       <td>{type}</td>
       <td>{amount}</td>
       <td>{currency}</td>
    </tr>);
}

Tr.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default Tr;
