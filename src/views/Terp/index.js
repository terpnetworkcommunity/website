import React from 'react';
import Banner from "../../Containers/Terp/Banner";
import Opportunities from "../../Containers/Terp/Opportunities";
import Blogs from "../../Containers/Terp/Blogs";
const Terp = () => {
    return (
        <React.Fragment>
            <Banner/>
            <Opportunities/>
            <Blogs/>
        </React.Fragment>
    );
};

export default Terp;