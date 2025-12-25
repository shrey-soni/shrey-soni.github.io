import React from 'react';
import { Helmet } from 'react-helmet-async';
import { config } from '../data/config';

const SEO = () => {
    const { title, description } = config.meta;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
        </Helmet>
    );
};

export default SEO;
