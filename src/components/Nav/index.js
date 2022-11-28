import React from 'react';
import Tabs from '@mui/material/Tabs';
import {Tab} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import {useStateAsync} from '../../utils/helpers';

function Nav () {
    const navigation = useNavigate();
    const location = useLocation();
    const navBar = ['About', 'Portfolio', 'Contact', 'Resume'];

    let initialState;

    switch (location.pathname) {
        case '/Portfolio':
            initialState = 1;
            break
        case '/Contact':
            initialState = 2;
            break
        case '/Resume':
            initialState = 3;
            break
        default: 
        initialState = 0;
        break

    }

    const showPage = async (event, value) => {
        const currentState = await setCurrentNavTab(value);
        navigation(`/${navBar[currentState]}`);
    };

    const [currentNavTab, setCurrentNavTab] = useStateAsync(initialState);

    return (
        <div className='navBarTabs'>
            <Tabs value={currentNavTab} onChange={showPage} className='nav-tabs'>
                {navBar.map((nav, i) => (
                    <Tab value={i} label={nav} key={nav} className='nav-bar-tab' />
                ))}
            </Tabs>
        </div>
    );
}

export default Nav;