import React from 'react';
import * as steem from '@steemit/steem-js';

const ApiSelect = () => {
    function eventTest(e) {
        e.preventDefault();
        console.log('**** mark: in');

        if (typeof steem !== 'undefined')
            steem.api.setOptions({ url: 'https://api.steemit.com' });

        console.log('**** mark: out');
    }

    return <div className="NodeSelect row" onClick={eventTest}>Placeholder</div>;
};

export default ApiSelect;
