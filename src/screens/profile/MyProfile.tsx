import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./style.css";
import { useTypedSelector } from "../../store/store";
import Profile from "../../icon/profile.svg";
import LogOut from "../../icon/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import { getProfileAction, LogOutAction } from "../../store/profile";
import { IconContainer, IconProfile } from "./styled";

function MyProfile() {
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const token = useTypedSelector((s) => s.auth.accesToken);

  useEffect(() => {
    dispatch(getProfileAction.request({ accesToken: token!! }));
  }, []);

  const profile = useTypedSelector((s) => s.profile.profile);

  const [group, setGroup] = useState("");

  const [curs, setCurs] = useState("");

  const [gender, setGender] = useState("");

  const onSetGroup = (even: string) => {
    setGroup(even);
  };

  const sendGroup = () => {
    dispatch(getProfileAction.request({ group: group }));
  };

  useEffect(() => {
    if (profile == undefined) {
    } else {
      setGroup(profile?.group!!);
      if (profile?.gender == "M") {
        setGender("Man");
      } else {
        setGender("Woman");
      }

      setCurs(group.charAt(0));
    }
  }, [group, profile]);

  const onLogOut = ()=>{
    dispatch(LogOutAction())

    navigate("/")
  }

  return (
    <div className="App">
      <header className="header">
        <div className="headerElem">
          <div className="headerLogo">{profile?.userName}</div>

          <IconContainer>

              <IconProfile src={LogOut} onClick={()=>onLogOut()}/>

            <IconProfile src={Profile}/>
            </IconContainer>
        </div>
      </header>
      <div className="wrapper">
        <div className="profileBlock">
          <div className="profile">
            <div className="profilePhoto">
              <img src={profile?.image} className="userPhoto" />
            </div>
            <div className="profileIInfo">
              <div className="profileItem">
                <span className="constSpan">Name</span>
                <h2>{profile?.userName}</h2>
              </div>
              <div className="profileItem">
                <span className="constSpan">Group</span>
                <div className="textItem">{group}</div>
              </div>
              <div className="profileItem">
                <span className="constSpan">Course</span>
                <div className="textItem">{curs}</div>
              </div>
              <div className="profileItem">
                <span className="constSpan">Email</span>
                <div className="textItem">{profile?.email}</div>
              </div>
              <div className="profileItem">
                <span className="constSpan">Gender</span>
                <div className="textItem">{gender}</div>
              </div>
            </div>
          </div>
          <div className="profileOption">
            <h3>Settings</h3>
            <div className="groupSelect">
              <select
                name="language"
                onChange={(value) => onSetGroup(value.target.value)}
              >
                <option value="310">310</option>
                <option value="311">311</option>
                <option value="410">410</option>
                <option value="411">411</option>
              </select>
              <label className="constLabel">*Select your group</label>
            </div>

            <button className="buttonSetting" onClick={sendGroup}>
              SEND
            </button>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <h3>English4Tech</h3>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default MyProfile;
