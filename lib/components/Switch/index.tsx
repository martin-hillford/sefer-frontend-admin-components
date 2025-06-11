import styled from 'styled-components';
import { True } from '../../icons/True';
import { Colors } from '../../types/Colors';
import { DataContext } from '../../types/DataContext';
import { Property } from '../Property';

type SwitchProps = {
    value? : boolean,
    onChange? : (value : boolean, name? : string | undefined) => void
    name? : string | undefined
    dataContext? : DataContext<any> | undefined
    label? : string | undefined,
    maxWidth? : boolean
    flex? : number
    tooltip? : string,
}

export const Switch = (props : SwitchProps) => {
  const { dataContext, name, label, tooltip, flex, maxWidth, value } = props;
  let val = value === true;

  if (dataContext && name) val = dataContext.getValue(name);

  const onClick = () => {
    let { onChange } = props;
    if (dataContext) onChange = dataContext.getOnChangeHandler();
    if (onChange) onChange(!val, name);
  };

  const content = <Content onClick={onClick} value={val} />;

  if (!label) return content;
  return (
    <Property tooltip={tooltip} flex={flex} maxWidth={maxWidth} label={label} dataContext={dataContext} name={name}>
      {content}
    </Property>
  );
};

const Content = ({ value, onClick } : { value : boolean, onClick : Function}) => (
  <Wrapper>
    <Container onClick={() => onClick()}>
      {value && <True size={18} /> }
      <Selector />
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
    display: inline-block;
    padding-top:9px;
    height:39px;
`;

const Container = styled.div`
    color: white;
    background-color: ${Colors.Blue};
    border-color: ${Colors.Blue};
    cursor: pointer;
    width: 40px;
    height: 20px;
    border-radius: 10px;
    display: flex;

    span {
        color: white;
        width:19px;
        display:flex;
        height:20px;
        align-items:center;
        justify-content:center;
        margin-top:-1px;
        margin-left:1px;
    }

    svg {
        padding-top: 2px;
        padding-left: 1px;
    }
`;

const Selector = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    position: relative;
    top: 1px;
    left: 1px;
    background-color: white;
`;
