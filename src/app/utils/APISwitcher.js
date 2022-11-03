import * as steem from '@steemit/steem-js';

/**
 * Change Steem client connection to a different endpoint.
 *
 * @param {string} href
 */
export default function changeEndpoint(newEndpoint) {
    console.log('*** Change endpoint fired');
    if (typeof steem !== 'undefined') {
        console.log('Changing endpoint to ' + newEndpoint);
        steem.api.setOptions({ url: newEndpoint });
    }
}
