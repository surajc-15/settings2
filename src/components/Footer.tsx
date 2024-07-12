// components/Footer.tsx
"use client";
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background-color: #000; /* Black background */
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;

interface IconButtonProps {
  bgImage: string;
  onClick: () => void;
}

const IconButton = styled.button<IconButtonProps>`
  background: none;
  background-image: url(${(props) => props.bgImage});
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 50px;
  margin: 0 10px;
  z-index: 5;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Toolbar>
        <IconButton bgImage="/" onClick={() => window.open('https://example.com/page1')} />
        <IconButton bgImage="/images/Group 4548.svg" onClick={() => window.open('https://example.com/page1')} />
        <IconButton bgImage="/images/Vector (3).svg" onClick={() => window.open('https://example.com/page2')} />
        <IconButton bgImage="/images/Group 427318962.svg" onClick={() => window.open('https://example.com/page6')} />
        <IconButton bgImage="/tesla.svg" onClick={() => window.open('https://example.com/page4')} />
        <IconButton bgImage="/images/Vector (1).svg" onClick={() => window.open('https://example.com/page5')} />
        <IconButton bgImage="/images/Vector (2).svg" onClick={() => window.open('https://example.com/page6')} />
        <IconButton bgImage="/images/Group 427318961.svg" onClick={() => window.open('https://example.com/page3')} />
      </Toolbar>
    </FooterContainer>
  );
};

export default Footer;
