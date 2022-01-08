import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 70px;
  background: var(--darkGray);
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 45px;
    background: var(--mediumGray);
    border-radius: 40px;
    color: var(--white);

    img{
        position: absolute;
        left: 17px;
        top: 10px;
        width: 25px;
    }
    input{
        font-size: var(--fontMedium);
        margin: 3px 0;
        padding: 0 0 0 60px;
        width: 95%;
        height: 40px;
        border: 0;
        background: transparent;
        border-radius: 40px;
        color: var(--white);

        :focus{
            outline: none;
        }
    }
`;