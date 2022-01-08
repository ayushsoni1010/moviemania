import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background: var(--mediumGray);
    color: var(--white);
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;

    span{
        font-size: var(--fontMedium);
        color: var(--white);
        padding-right: 10px;

        @media screen and (max-width: 760px){
            font-size: var(--fontSmall);
        }
    }
`;