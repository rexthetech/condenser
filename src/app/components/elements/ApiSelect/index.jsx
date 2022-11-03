import React from 'react';
import PropTypes from 'prop-types';

const ApiSelect = () => {
    function eventTest(e) {
        e.preventDefault();
        console.log('Event fired!');
    }

    return <div className="NodeSelect row" onClick={eventTest}>Placeholder</div>;
};

export default ApiSelect;
