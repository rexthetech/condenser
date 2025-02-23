import * as steem from '@steemit/steem-js';

/**
 * Change Steem client connection to a different endpoint.
 *
 * @param {string} newEndpoint
 */
export function changeEndpoint(newEndpoint) {
    if (typeof steem !== 'undefined') {
        console.log('Changing endpoint to ' + newEndpoint);
        steem.api.setOptions({ url: newEndpoint });
    }
}
