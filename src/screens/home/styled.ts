import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0;
    height: 100%;
    width: 100%;
`;

export const Header = styled.div`
    background-color: #282c34;
    color: white;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderElem = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`;

export const HeaderLogo = styled.div`
    font-size: 2vw;
    font-weight: 900;

    @media (max-width: 600px) {
        display:none;   
      }
`;

export const HeaderLogoMobile = styled.div`
display:none;
font-size:30pt;
    font-weight: 900;

    @media (max-width: 600px) {
        display:block;    
      }
`;

export const Main = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
font-size: calc(10px + 2vmin);
color: black;
height: 100%;
width:100%;

@media (max-width: 600px) {
    flex-direction: column;
    align-items: center;    
  }
`;

export const LeftMain = styled.div`
width: 20%;
  height: 100%;
  margin: 10px;

  @media (max-width: 600px) {
    width: 90%;
  margin: 10px;
  }
`;



export const LeftAside = styled.div`
    width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 600px) {
    display:none;
  }
`;

export const LeftAsideMobile = styled.div`
    display:none;
    width: 100%;
  justify-content: flex-start;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  justify-content: flex-start;
  @media (max-width: 600px) {
    display:flex;
  }
`;



export const ContentBlock = styled.div`
    width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: 600px) {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export const ContentMain = styled.div`
width: 70%;
margin: 10px;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
border-radius: 8px;

@media (max-width: 600px) {
    width: 90%;
  }
`;

export const UnitContainer = styled.div`
width: 100%;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 15px;

  
`;

export const UnitTitle = styled.h2`
  font-size: 20pt;
  font-weight:500;
`;

export const VideoWiew = styled.div`
    font-weight: 500;
  color: #696969;
`;

export const UnitText = styled.p`
    font-weight: 300;
margin-bottom: 20px;
font-size:18pt;
text-indent: 20px;

@media (max-width: 600px) {
    font-size:18pt;
  }
`;

export const RenderText = styled.p`
    font-size:12pt;
    font-weight: 300;
`;

export const UnitBlockActive = styled.div`
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    margin-bottom: 10px;
    margin-top: 10px;
    width:80%;
`;

export const ImageMain = styled.img`
width: 400px;
float: left;
margin: 10px;

@media (max-width: 600px) {
    width: 300px;
  }
`;


export const UnitTitleActive = styled.h2`
    font-weight:300;
`;

export const UnitDescActive = styled.p`
overflow: hidden;
position: relative;
max-height: 1em;
max-width: 100%;
text-align: justify;
padding-right: 1em;
color: gray;

:before {
    content: "...";
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const AccountText = styled.div`
    font-size:18px;
    color:white;
margin:10px;    
`;

export const AccountDlock = styled.div`
    display:flex;   
    align-items:center;
    justify-content:center;
`;

export const AccountImage = styled.img`
width: 30px;
height: 30px;
color: white;
`;

export const NavBlock = styled.div`
    display:flex;   
    align-items:center;
    justify-content:center;
`;

export const NavElem = styled.div`
    display:flex;   
    align-items:center;
    justify-content:center;
    border-radius:10px;
    padding:5px;
    margin-left:10px;

    :hover{
        background-color: rgba(255, 255, 255, 0.562);
    }
`;

export const RevisionLink = styled.a`
    font-size:16pt;
`;