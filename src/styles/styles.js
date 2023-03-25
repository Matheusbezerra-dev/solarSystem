import styled from 'styled-components';

export const DivApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;  
  @media (max-width: 580px) {
    img{
      width: 280px;
    }
  }
`;

export const ContainerPlanets = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: row;  */
  flex-wrap: wrap;
  color: white;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    margin-left: 20px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    div{
      margin-left: 0;
    }
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
  max-width: 495px;
  width: 100%;
  /* max-height: 250px;
  height: 100%; */
  height: 190px;
  border-radius: 17px;
  margin: 10px;
  div {
    height: 50%;
  }
  @media (max-width: 480px) {
    /* max-height: 250px;
    height: 100%; */
    height: 350px;
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
    justify-content: center;
    align-items: center;
    max-width: 450px;
    width: 100%;
    text-transform: uppercase;
    font-weight: 300;
    font-family: Epilogue;
  }
`;

export const DivMissionAside = styled.div`
  display: flex;
  justify-content: space-around;
  /* flex-wrap: wrap; */
  align-items: center;
  div {
    color: rgb(255 255 255);
    font-weight: 400;
    font-family: Epilogue;
    flex-direction: column;
  }
  
  div img {
    width: 15px;
    height: 18px;
    margin-right: 5px;
  }
  @media (max-width: 480px) {
    justify-content: center;
    flex-direction: column;
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
