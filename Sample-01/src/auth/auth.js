import createAuth0Client from '@auth0/auth0-spa-js';

function createAuth0() {
    let auth0Instance = null;

    async function createClient() {
        try {
            auth0Instance = await createAuth0Client({
                domain: 'eddiestenant.auth0.com',
                client_id: 'M2pLxEZWHiyslZkQo2SINaHbm110lSeK',
                audience: 'https://test-api-eddy.com',
                redirect_uri: `${window.location.origin}`,
                useRefreshTokens: true,
                cacheLocation: 'localstorage',
            });
            return auth0Instance;
        } catch(ex) {
            console.log(ex);
        }
    }

    if (!auth0Instance) {
        return createClient();
    }

    return auth0Instance;
}

export {
    createAuth0,
};
