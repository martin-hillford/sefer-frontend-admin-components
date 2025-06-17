import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    @media (min-width: 1024px) {
        width: 100%;
        height: 100%;
    }
`;

export const SearchPanel = styled.div`
    flex: 0 0 100%;
    @media (min-width: 1024px) {
        flex: 0 0 33.3333333%;
    }
    display: flex;
    flex-direction: column;
    padding-right: 15px;
`;

export const Entities = styled.div`
    flex: 0 0 100%;
    @media (min-width: 1024px) { flex: 0 0 66.666666%; }
    padding-left: 15px;
`;

export const SearchList = styled.div`
    margin-bottom: 15px;
    @media (min-width: 1024px ) {
        display: flex;
        flex: 1 1 auto;
        overflow: hidden;
        border-bottom: 1px solid #dddddd;
        padding-bottom: 3px;
        margin-bottom: 12px;
    }
`;

export const ListGroupPanel = styled.div`
    @media (min-width: 1024px ) {
        height: calc(100vh - 350px);
    }
    width: 100%;
`;

export const Body = styled.div`
    @media (min-width: 1024px ) {
        height: calc(100vh - 254px);
        overflow: auto;
    }
    width: 100%;
`;