import styled from 'styled-components';

export const DivApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  
  img {
    width: 426px;
    height: 243px;
    margin-top: 40px;
    margin-bottom: 74px;
  }
`;

export const ContainerPlanets = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; 
  color: white;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    margin-left: 20px;
  }
`;

export const ContainerMissions = styled.div`
  display: flex; 
  justify-content: center;
  /* align-items: center;  */
  flex-wrap: wrap;
  max-width: 1100px;
  width: 100%;
  background-color: rgba(255, 255, 255, 10%);
  box-shadow: 0px 4px 14px 0px rgba(0 0 0 90%);
  font-family: Epilogue;
  font-weight: 300;
  border-radius: 30px;
  margin-bottom: 80px;
  @media (max-width: 1100px) {
    padding: 2rem;
  }
`;

export const DivMission = styled.section`
  background: linear-gradient(0deg, rgba(24, 26, 37, 0.5), rgba(24, 26, 37, 0.5));
  border: 1px solid rgba(255, 255, 255, 1);
  width: 495px;
  height: 190px;
  border-radius: 17px;
  margin: 10px;
  div {
    height: 50%;
  }
 `;

export const H2Title = styled.h2`
    color: white;
    font-family: Epilogue;
    font-size: 40px;
    font-weight: 300;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 70px;
    align-items: center;
    margin-bottom: 40px;
`;

export const DivMissionAside1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255 255 255);
  div{
    display: flex;
    align-items: center;
    width: 450px;
    text-transform: uppercase;
    font-weight: 300;
    font-family: Epilogue;
  }
`;

export const DivMissionAside = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    color: rgb(255 255 255);
    font-weight: 400;
    font-family: Epilogue;
  }
  
  div img {
    width: 15px;
    height: 18px;
    margin-right: 5px;
  }
`;

export const DivContainerMissions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImgTrybe = styled.img`
  width: 42px;
  height: 48px;
  margin-bottom: 20px;
`;
