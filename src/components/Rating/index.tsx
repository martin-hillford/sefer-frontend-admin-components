import styled from 'styled-components';
import { Colors } from '../../types/Colors';

export const Rating = (props : {value? : number}) => {
  const { value } = props;
  if (!value) return null;

  // ensure the rating is between 0 and 10
  const rating = Math.max(Math.min(value, 10), 0);

  const stars = [];
  for (let i = 2; i < 11; i += 2) {
    if (rating >= i) stars.push(<StartIconFull key={i}>&#x2605;</StartIconFull>);
    else if (rating === i - 1) stars.push(<StartIconHalf key={i}>&#x2605;</StartIconHalf>);
    else stars.push(<StartIconEmpty key={i}>&#x2605;</StartIconEmpty>);
  }

  return <>{stars}</>;
};

const StartIconEmpty = styled.span`
    color: #DDDDDD;
    font-size: 14px;
    position: relative;
`;
const StartIconFull = styled.span`
     font-size: 14px;
     color: ${Colors.Blue};
     position: relative;
`;

const StartIconHalf = styled.span`
     font-size: 14px;
     position: relative;

    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    background: linear-gradient(90deg, ${Colors.Blue} 50%, #DDDDDD 50%);
`;
