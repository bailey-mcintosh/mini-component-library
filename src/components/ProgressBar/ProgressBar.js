/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const progressHeight = {
  small: '8px',
  medium: '12px',
  large: '16px',
}

const ProgressWrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: ${props => props.size === 'large' ? '4px' : '0px'};
  background-color: ${COLORS.transparentGray15};
  width: fit-content;
  border-radius: 8px;
  height: ${props => props.size === 'large' ? '24px' : progressHeight[props.size]};
`

const StyledProgress = styled.progress`
  padding: 0;
  -webkit-appearance: none;
  appearance: none;
  display: block;

  ::-webkit-progress-bar {
    background-color: transparent;
    border-radius: 8px;
    overflow: hidden;
    height: ${props => progressHeight[props.size]};
  }
  ::-webkit-progress-value {
    background-color: ${COLORS.primary};
    height: 100%;
    height: ${props => progressHeight[props.size]};
  }
`;

const ProgressBar = ({ value, size, label }) => {

  return (
    <ProgressWrapper size={size}>
      <StyledProgress 
        aria-label={label} 
        min="0" 
        max="100" 
        value={value}
        size={size}
      >
        {`${value}%`}
      </StyledProgress>
      <VisuallyHidden>
        <span>{`${label ?? 'progress'}: ${value}%`}</span>
      </VisuallyHidden>
    </ProgressWrapper>
  )
};

export default ProgressBar;
