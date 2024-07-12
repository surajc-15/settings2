"use client";

import React, { FC } from 'react';
import styled from 'styled-components';
import { FaLightbulb, FaLock,FaArrowLeft, FaCar, FaKey } from 'react-icons/fa';
import { MdDirectionsCar, MdSecurity, MdMiscellaneousServices } from 'react-icons/md';
import Toggle from './ToggleButton';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 2000px;
  margin: auto;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #1c1c1c;
  color: #fff;
  padding: 20px;
`;

const MainContent = styled.div`
  flex: 1;
  background: #000;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const ToggleGroup = styled.div`
  background-color: #111;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 100%;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;

  &:hover {
    background: #333;
  }

  &.highlight {
    background: #444;
    border-left: 4px solid #fff;
  }

  svg {
    margin-right: 10px;
  }
`;

const Dashboard: FC = () => {
  return (
    <Container>
      
      <MainContainer>
        <Sidebar>
          <MenuItem><FaLightbulb /> Quick Controls</MenuItem>
          <MenuItem><FaLightbulb /> Lights</MenuItem>
          <MenuItem className="highlight"><FaLock /> Locks</MenuItem>
          <MenuItem><MdDirectionsCar /> Display</MenuItem>
          <MenuItem><FaCar /> Driving</MenuItem>
          <MenuItem><FaKey /> Autopilot</MenuItem>
          <MenuItem><MdSecurity /> Safety & Security</MenuItem>
          <MenuItem><MdMiscellaneousServices /> Service</MenuItem>
        </Sidebar>
        <MainContent>
        <Header />
          <ToggleGroup>
            <Toggle label="Walk Up Unlock" />
            <Toggle label="Walk Away Unlock" />
            <Toggle label="Child Protection Lock" />
            <Toggle label="Unlock on Park" />
          </ToggleGroup>
        </MainContent>
      </MainContainer>
    </Container>
  );
};

export default Dashboard;
