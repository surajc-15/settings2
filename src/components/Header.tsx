"use client";

import React, { FC } from 'react';
import styled from 'styled-components';
import { FaLightbulb, FaLock,FaArrowLeft, FaCar, FaKey } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto; /* Adjust as needed */
  padding: 0 20px; /* Added padding for spacing */
  background-color: #fff; /* Optional background color */
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const ConnectivityIcons = styled.div`
  display: flex;
  align-items: center;
  margin:5px;
`;

const Icon = styled.div<{ image: string }>`
  width: 24px;
  height: 24px;
  margin-left: 10px; /* Space between icons */
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
`;


const Header: FC = () => {
  const handleBackClick = () => {
    window.location.href = 'https://example.com'; // Replace with your desired URL
  };

  return (
    <HeaderContainer>
      <LeftSection>
        < FaArrowLeft onClick={handleBackClick} />
      </LeftSection>
      <RightSection>
        <ConnectivityIcons>
          <Icon image="/images/Vector (4).svg" />
          <Icon image="/images/Vector (5).svg" />
          <Icon image="/images/Union (3).svg" />
        </ConnectivityIcons>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
