import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import SideBar from './Sidebar';
import ContentHeader from './ContentHeader';
import Footer from './Footer';

function BackOffice(props) {
    return (
        <div className='wrapper'>
                <NavBar adminName='Tavon Seesenpila' adminLevel='Admin' />
                <SideBar adminName='Tavon Seesenpila' adminLevel='Admin' />

                <div className='content-wrapper'>
                    <ContentHeader headerTitle={props.headerTitle} />
                    { props.children }
                </div>

                <Footer />
            </div>
    )
}

export default BackOffice;