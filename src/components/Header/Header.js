import React from 'react';
import styled from 'styled-components';
import unibetLogo from '../../images/unibet-logo.png';

const HeaderContainer = styled.header`
    width: 900px;
    text-align: left;
    margin: 0 auto;
    padding: 20px 0;
`;

const Logo = styled.div`
    height: 33px;
    background: url(${unibetLogo}) no-repeat;
    background-size: 200px 33px;
    text-indent: -999em;
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <Logo>Unibet</Logo>
        </HeaderContainer>
    )
}