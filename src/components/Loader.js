import React from 'react';
import LoaderGif from './../assets/img/loader.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={LoaderGif} alt="loader"/>
        </div>
    );
};

export default Loader;