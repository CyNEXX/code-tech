import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/articleContext";
import { HeaderWrapperStyle, HeaderContentStyle, LogoMainDivStyle, UlStyle } from './HeaderStyle'


/** This is the header component. Has styled wrappers for logo, and nav links.
 * 
 * @returns header component
 */



export const Header: React.FC<{}> = () => {
    const { state, dispatch } = useGlobalContext();
    const location = useLocation();

    useEffect(() => {
        const categoryFromGlobalContext = state.category;

        let categoryFromUrl = location.pathname.split('/')[1];

        if (!categoryFromGlobalContext) {
            dispatch({ type: 'SET_CURRENT_CATEGORY', payload: 'any' });
        }
        if (['', 'codes', 'news'].indexOf(categoryFromUrl) != -1) {
            let category = '';
            switch (categoryFromUrl) {
                case '': {
                    category = 'any';
                    break;
                }
                case 'codes': {
                    category = 'codes';
                    break;
                }
                case 'news': {
                    category = 'news';
                    break;
                }
            }
            dispatch({ type: 'SET_CURRENT_CATEGORY', payload: category });
        }
    }
        , [location]);

    return (
        <HeaderWrapperStyle>
            <HeaderContentStyle>
                <LogoMainDivStyle>
                    <h1>{'<T>'}</h1>
                    <div id="logo-text">
                        <h1>code & tech</h1>
                    </div>
                </LogoMainDivStyle>
                <nav>
                    <UlStyle>
                        <li><NavLink to="/" className={'active-nav-link'}>home</NavLink></li>
                        <li><NavLink to="codes" className={'active-nav-link'}>codes{'<>'}</NavLink></li>
                        <li><NavLink to="news" className={'active-nav-link'}>tech news</NavLink></li>
                        <li><NavLink to="about" className={'active-nav-link'}>about</NavLink></li>
                        <li><NavLink to="contact" className={'active-nav-link'}>contact</NavLink></li>
                    </UlStyle>
                </nav>
            </HeaderContentStyle>
        </HeaderWrapperStyle>

    )
}