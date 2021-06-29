import styled from "styled-components";

export const SucRegBg = styled.div`
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background: #f9fafb;
`;

export const SucRegBox = styled.div`
  width: 80%;
  min-height: 400px;
  background: white;
  border-radius: 10px;
  padding: 36px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px auto;
`;

export const SucRegWrited = styled.div`
  max-width: 50%;
  text-align: center;
  font-weight: ${(props) => (props.message ? "normal" : "bold")};
  font-size: ${(props) => (props.message ? "14px" : "30px")};
  line-height: ${(props) => (props.message ? "21px;" : "45px")};
  color: ${(props) => (props.message ? "#909DAA" : "#212B36")};
  margin: 8px auto;
  @media screen and (max-width: 569px) {
    font-size: ${(props) => (props.message ? "14px" : "20px")};
    line-height: ${(props) => (props.message ? "21px;" : "25px")};
  }
  @media screen and (max-width: 525px) {
    max-width: 80%;
  }
`;

export const GoHome = styled.button`
  width: 50%;
  margin: 10px auto;
  background: #e30045;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  border: none;
  padding: 16px;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  cursor: pointer;
  @media screen and (max-width: 525px) {
    width: 80%;
  }
`;
