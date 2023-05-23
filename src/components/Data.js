import React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import DiceIcon from "../images/icon-dice.svg";
import Divider from "../images/pattern-divider-mobile.svg";
const api = "https://api.adviceslip.com/advice";
function Data() {
  const [data, setData] = useState({ slip: { advice: "" } });
  const fetchData = async () => {
    const response = await axios.get(api);
    setData(response.data);
  };

  return (
    <>
      <Container>
        <AdviceDiv>
          <AdviceIdDiv>
            <StyledH2>ADVICE # {data.slip.id}</StyledH2>
          </AdviceIdDiv>
          <AdviceText>
            <StyledH3>"{data.slip.advice}"</StyledH3>
          </AdviceText>
          <StyledFooter>
            <DividerDiv>
              <img src={Divider} alt="dice icon" />
            </DividerDiv>
            <StyledCircle>
              <StyledImg onClick={fetchData} src={DiceIcon} alt="dice icon" />
            </StyledCircle>
          </StyledFooter>
        </AdviceDiv>
      </Container>
    </>
  );
}

export default Data;

const AdviceDiv = styled.div`
  background-color: hsl(217, 19%, 24%);
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
  color: white;
  padding: 10px 10px 0px 10px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    width: 35%;
    height: 45vh;
`;
const StyledH2 = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 3.45714px;
  color: #53ffaa;
`;

const StyledImg = styled.img`
  background-fit: cover;
  width: 20px;
  height: 20px;
`;

const StyledCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #53ffaa;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transform: translateY(25px);
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 40px 15px #53ffaa;
    transition: all 0.5s ease-in-out;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
`;

const AdviceIdDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const AdviceText = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const StyledH3 = styled.h3`
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  color: #cee3e9;
`;

const StyledFooter = styled.footer`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const DividerDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
