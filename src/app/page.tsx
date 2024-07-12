'use client';
import React, { FC } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer'; // Adjust path as necessary
import Dashboard from '../components/Dashboard';

const MContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: auto;
`;

const Page: FC = () => {
  return (
    <MContainer>
      <Dashboard />
      <Footer />
    </MContainer>
  );
};

export default Page;
