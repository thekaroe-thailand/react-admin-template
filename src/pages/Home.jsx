import React from 'react';
import ContentBody from '../components/ContentBody';
import BackOffice from '../components/BackOffice';
import Helmet from 'react-helmet';

function Home() {
    return (
        <>
            <BackOffice headerTitle='Dashboard'>
                <ContentBody />
            </BackOffice>

            <Helmet>
                <script src="dist/js/pages/dashboard.js"></script>
                <script src="dist/js/demo.js"></script>
            </Helmet>

        </>
    )
}

export default Home