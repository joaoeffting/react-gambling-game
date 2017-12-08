import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background: #333;
    color: #999;
`;

const FooterInner = styled.div`
    width: 900px;
    text-align: left;
    margin: 0 auto;
`;

const FooterParagraph = styled.p`
    padding: 16px 8px;
`;

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterInner>
                <FooterParagraph>&copy; 1997-2015, Unibet. All rights reserved.</FooterParagraph>
            </FooterInner>
        </FooterContainer>
    )
}