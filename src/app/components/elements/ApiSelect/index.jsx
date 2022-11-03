import React from 'react';
import config from 'config';

import * as steem from '@steemit/steem-js';

const ApiSelect = () => {
    function eventTest(e) {
        e.preventDefault();
        console.log('**** mark: in');

        if (typeof steem !== 'undefined')
            console.log('steem in scope');


        if (typeof config !== 'undefined')
            console.log('config in scope');
/*
        steem.api.setOptions({
            url: config.steemd_connection_server,
            retry: {
                retries: 10,
                factor: 5,
                minTimeout: 50,
                maxTimeout: 60 * 1000,
                randomize: true,
            },
            useAppbaseApi: !!config.steemd_use_appbase,
        });
*/
        console.log('**** mark: out');
    }

    return <div className="NodeSelect row" onClick={eventTest}>Placeholder</div>;
};

export default ApiSelect;
