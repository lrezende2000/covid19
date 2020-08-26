import styled from 'styled-components';
import { CardContent, Typography, Button } from '../../../components';

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.5rem;
`;

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;
`;

export const CardContentStyled = styled(CardContent)`
  border-left: 8px solid ${({ color }) => color || '#5d78ff'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

export const ButtonStyled = styled(Button)`
  margin: 0 15px;
`;

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: ${({ isComparing }) => (isComparing ? 'space-around' : 'center')};
  align-items: center;
  background: white;
  border-radius: 4px;
  margin: 0 0 20px 0;
`;

export const HeaderLabel = styled.h1`
  text-align: center;
`;

export const Divider = styled.div`
  margin: 0 20px;
  border: 1px dashed black;
`;
