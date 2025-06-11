import styled from 'styled-components';

export const Shimmer = styled.div`
    background: #f6f7f8 linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%) no-repeat;
    background-size: 800px 104px;
    height: 24px;
    width: 100%;

    animation: 2s linear infinite shimmer;

    @keyframes shimmer {
        0% {
            background-position: -468px 0;
        }
        100% {
            background-position: 468px 0;
        }
    }
`;
