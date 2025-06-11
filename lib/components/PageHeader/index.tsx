import styled from 'styled-components';

export const PageHeader = (props : { title : string, subTitle? : string }) => {
  const { title, subTitle } = props;
  return <Heading>{title}<Small>{subTitle}</Small></Heading>;
};

const Heading = styled.h1`
    padding: 18px 0 18px 0;
    overflow: hidden;
    max-height: 71px;
    color: #444444;
    font-weight: 400;
    line-height: 1.1;
    font-size: 26px;
    margin:0;
    user-select: none;
`;

const Small = styled.small`
    padding-left: 8px;
    font-size: 65%;
    font-weight: normal;
    line-height: 1;
    color: #bbbbbb;
    user-select: none;
`;
