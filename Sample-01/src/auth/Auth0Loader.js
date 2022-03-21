import React from 'react';

const SiteLoader = ({ inProgress, handleAuth0PopUpFocus }) => {
    return (
        <>
            {(inProgress) && (
                <div id="overlay" onClick={handleAuth0PopUpFocus} />                
            )}
        </>
    );
};

export default SiteLoader;