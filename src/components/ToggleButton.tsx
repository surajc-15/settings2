"use client";

import React, { useState, FC } from 'react';
import styled from 'styled-components';

interface ToggleProps {
  label: string;
}

interface ToggleButtonProps {
  active: boolean;
}
const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-left: 10px;
  color: #fff;
`;

const ToggleButton = styled.button<ToggleButtonProps>`
  background: ${({ active }) => (active ? '#006DFF' : '#333')};
  border: none;
  cursor: pointer;
  border-radius: 25px;
  height: 40px;
  width: 80px;
  position: relative;
  outline: none;

  &::before {
    content: '';
    position: absolute;
    height: 36px;
    width: 36px;
    background: #fff;
    border-radius: 50%;
    top: 2px;
    left: ${({ active }) => (active ? '42px' : '2px')};
    transition: all 0.3s;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

const Toggle: FC<ToggleProps> = ({ label }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <ToggleContainer>
      <ToggleButton active={isActive} onClick={handleToggle} />
      <Label>{label}</Label>
    </ToggleContainer>
  );
};

export default Toggle;
