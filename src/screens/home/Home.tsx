import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { useDispatch } from "react-redux";
import "./style.css";
import { getUnitAction, getUnitListAction } from "../../store/unit/action";
import { useTypedSelector } from "../../store/store";
import FlatList from "flatlist-react";
import { oneUnitPayload } from "../../store/unit/types";
import Profile from "../../icon/profile.svg";
import { Link, useNavigate } from "react-router-dom";
import { AccountDlock, AccountImage, AccountText, ContentBlock, ContentMain, Header, HeaderElem, HeaderLogo, HeaderLogoMobile, ImageMain, LeftAside, LeftAsideMobile, LeftMain, Main, NavBlock, NavElem, RenderText, RevisionLink, UnitBlockActive, UnitContainer, UnitDescActive, UnitText, UnitTitle, UnitTitleActive, Wrapper } from "./styled";
import { Button } from "@mui/material";
import { getProfileAction } from "../../store/profile";

function Home() {
  const dispatch = useDispatch();

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getUnitListAction.request({}));
    dispatch(getProfileAction.request({}))
  }, []);

  const unit = useTypedSelector((s) => s.unit.unitList);

  const user = useTypedSelector((s) => s.profile.profile);

  const isAdmin = useTypedSelector((s) => s.auth.isAdmin);

  const [chekUnit, setCheckUnit] = useState("");

  const oneUnit = useTypedSelector((s) => s.unit.unit);

  const onChangeUnit = (id: string) => {
    dispatch(getUnitAction.request({ id }));

    setCheckUnit(id);
  };

  // useEffect(()=>{
  //   setCheckUnit(unit[0].id)
  // },[unit])

  const renderUnit = (unit: oneUnitPayload, index:number) => {
    return(
        <UnitBlockActive
          onClick={() => onChangeUnit(unit.id)}
          key={unit.id}
          style={{background:unit.id == chekUnit?"#97daf7":"#fff"}}
        >
          <UnitTitle>{unit.title}</UnitTitle>
          <RenderText>{unit.description}</RenderText>
        </UnitBlockActive>
    )
  };

  const onGoToHome = () => {
    navigate("/")
  };

  const onGoToLogIn = () => {
    navigate("/auth")
  };

  const onGoToProfile = () => {
    navigate("/MyProfile")
  };

  const onGoToAdminPanel = () => {
    navigate("/adminPanel")
  };

  return (
    <Wrapper>
      <Header>
        <HeaderElem>
          <HeaderLogo>English4Tech</HeaderLogo>
          <HeaderLogoMobile>E4T</HeaderLogoMobile>
          <NavBlock>
            <NavElem onClick={()=>onGoToHome()}> 
              <AccountText>
                Home
              </AccountText>
            </NavElem>

            {isAdmin && (
              <NavElem onClick={()=>onGoToAdminPanel()}> 
                <AccountText>
                  Admin Panel
                </AccountText>
              </NavElem>
            )

            }

            {user ? (
              <NavElem onClick={()=>onGoToProfile()}> 

                <AccountText>
                  {user.userName}
                </AccountText>

                <AccountImage src={Profile} />
              </NavElem>
            ):(
              <NavElem onClick={()=>onGoToLogIn()}> 
                

                <AccountText>
                  Log in
                </AccountText>

                <AccountImage src={Profile} />
              </NavElem>
            )
          }

            
          </NavBlock>
        </HeaderElem>
      </Header>
      <Main>
        <LeftAside>
          <FlatList list={unit} renderItem={renderUnit} />
        </LeftAside>

        <LeftAsideMobile>
          <FlatList vertical list={unit} renderItem={renderUnit} />
        </LeftAsideMobile>

        <ContentBlock>
          <ContentMain>
            <UnitContainer>
              <UnitTitle>Vocabulary</UnitTitle>
              <UnitText>{oneUnit?.vocabulary.text!!} </UnitText>
              {oneUnit?.vocabulary.links.map((array, index)=>{
                return(
                  <p>
                  <RevisionLink href={array.link} target="_blank">{array.title}</RevisionLink>
                  </p>
                )
              })}
            </UnitContainer>
            <UnitContainer>
              <UnitTitle>Gramar</UnitTitle>
              {oneUnit?.grammar.image != "" &&(
                <img
                src={oneUnit?.grammar.image} 
                className={"gramarImg"} 
              />
              ) 
              }
              
              <UnitText>
                {oneUnit?.grammar.text}
              </UnitText>
            </UnitContainer>

            <UnitContainer>
              <UnitTitle>Pronunciation</UnitTitle>
              <UnitText>{oneUnit?.pronunciation.text!!}</UnitText>
              <UnitTitle>
                {oneUnit?.pronunciation.video!= "" && (
                  <video
                  controls
                  src={oneUnit?.pronunciation.video}
                  width={500}
                  height={200}
                  className="gramarImg"
                />
              )}
                
{oneUnit?.pronunciation.audio != ""&&(
  <audio controls src={oneUnit?.pronunciation.audio} />
)}
                
                </UnitTitle>
            </UnitContainer>
            <UnitContainer>
              <UnitTitle>Speaking &amp; Softskills</UnitTitle>
              {oneUnit?.speaking.image != "" && (
                <ImageMain
                src={oneUnit?.speaking.image}
              />
              )


              }
              
              <UnitText>{oneUnit?.pronunciation.text!!}</UnitText>
              
            </UnitContainer>
          </ContentMain>
          <LeftMain>
            <UnitContainer>
              <UnitTitle>Revision</UnitTitle>
              {oneUnit?.revision.map((array, index)=>{
                return(
                  <p>
                  <RevisionLink href={array.link} target="_blank">{array.title}</RevisionLink>
                  </p>
                )
              })}
            </UnitContainer>
          </LeftMain>
        </ContentBlock>
      </Main>
    </Wrapper>
  );
}

export default Home;
