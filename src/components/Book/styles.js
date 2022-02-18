import  styled, { css }   from 'styled-components';

export const Container = styled.div`
    margin-left: 5px;
    margin-top: -23px;
    background: transparent;
    cursor: grab;
  

    ${props => props.isDragging && css`
       
        cursor:grabbing;
        background: none;
        
   ` }
`