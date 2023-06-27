import React, { ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUnitListAction } from "../../store/unit/action";
import Check from "../../icon/check.svg";
import {
  sendAuthAction,
  sendCodeAction,
  sendRegAction,
} from "../../store/auth";
import { useTypedSelector } from "../../store/store";
import { Link, useNavigate } from "react-router-dom";
import ReactCodeInput from "react-verification-code-input";
import { BarSpan, CheckIcon, ContentReg, Group, Header, Input, Label, LinkNav, MarkText, RegBlock, RegButton, TitleHeader, TitleReg, VerificationBlock, VerParagraph, VerTitle, Wrapper } from "./styled";
import { getValue } from "@testing-library/user-event/dist/utils";
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";

function Reg() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(getUnitListAction.request({}));
  // },[]);

  const [regData, setRegData] = useState({
    email: "",
    pass: "",
    userName: "",
    gender: "",
  });

  const [colotValid, setColorValid] = useState({
    email: "#999",
    pass: "#999",
    userName: "",
  });

  const [markValid, setMarkValid] = useState({
    email: "",
    pass: "",
    userName: "",
  });

  const [verBlock, setVerBlock] = useState(false);

  const [verifyCode, setVerifyCode] = useState("");

  const regEmail =
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
      regData.email
    );

  const regPass = /^[0-9a-zA-Z]{9,}$/.test(regData.pass);

  const regName = /^[a-zA-Z ]{2,30}$/.test(regData.userName);

  const verification = useTypedSelector((s) => s.auth.verification);

  const result = useTypedSelector((s) => s.auth.result);

  const sendRegData = () => {
    setColorValid({
      email: regEmail ? "#32CD32" : "#B22222",
      pass: regPass ? "#32CD32" : "#B22222",
      userName: regName ? "#32CD32" : "#B22222",
    });

    setMarkValid({
      email: regEmail ? "" : "Check email. (+2)@(+2).(+2)",
      pass: regPass ? "" : "Check password. No more than 9 characters",
      userName: regName ? "" : "Check name. No more than 30 characters",
    });

    console.log(regEmail, regPass, regName);
    if (regEmail && regPass && regName) {
      setColorValid({ email: "#32CD32", pass: "#32CD32", userName: "#32CD32" });

      setMarkValid({ email: "", pass: "", userName: "" });

      dispatch(
        sendRegAction.request({
          email: regData.email,
          password: regData.pass,
          userName: regData.userName,
          gender: regData.gender,
        })
      );
      console.log("dispatch");

      setVerBlock(!verBlock);

      console.log(verBlock);
    }
  };

  const sendCodeData = () => {
    dispatch(sendCodeAction.request({ code: verifyCode }));
  };
  useEffect(() => {
    if (result == "Confirmed") {
      navigation("/MyProfile");
    }
  }, [result]);

  useEffect(() => {}, [verification]);

  const setEmail = (even: string) => {
    setRegData((prev) => ({ ...prev, email: even }));
  };

  const setPass = (even: string) => {
    setRegData((prev) => ({ ...prev, pass: even }));
  };

  const setName = (even: string) => {
    setRegData((prev) => ({ ...prev, userName: even }));
  };

  const setGender = (even: string) => {
    setRegData((prev) => ({ ...prev, gender: even }));
  };

  const setPressLink = ()=>{
    navigation("/auth");
  }

  return (
    <Wrapper>
      <Header>
        <TitleHeader>Register</TitleHeader>
        <span>
          Register new account or <LinkNav onClick={()=>setPressLink()}> log in </LinkNav>
        </span>
      </Header>
      <ContentReg>
        <RegBlock>
          <TitleReg>Register form</TitleReg>

            <Box
              style={{margin:15, width:"50%"}}
            >
              <TextField 
              label={"Name"} 
              variant="standard"
              required
              value={regData.userName}
              color={regName?"success":"error"}
              onChange={(even) => setName(even.target.value)}
              fullWidth 
              />

              {!regName && <MarkText>{markValid.userName}</MarkText>}

            
            </Box>


          <Box
              style={{margin:15, width:"50%"}}
            >
              <TextField 
              label="Email" 
              variant="standard"
              type={"email"}
              required
              value={regData.email}
              color={regEmail?"success":"error"}
              onChange={(even) => setEmail(even.target.value)}
              fullWidth 
              />

              {!regEmail && <MarkText>{markValid.email}</MarkText>}
            
            </Box>
            

            <Box
            style={{margin:15, width:"50%"}}>
            <TextField 
              label="Password" 
              variant="standard"
              type={"password"}
              required
              value={regData.pass}
              color={regPass?"success":"error"}
              onChange={(even) => setPass(even.target.value)}
              fullWidth 
              />

              {!regPass && <MarkText>{markValid.pass}</MarkText>}`
            </Box>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="M" control={<Radio onChange={(even)=>setGender(even.target.value)} />} label="Man" />
              <FormControlLabel value="W" control={<Radio onChange={(even)=>setGender(even.target.value)} />} label="Woman" />
            </RadioGroup>
          </FormControl>

          <RegButton className="authButton" onClick={sendRegData}>
            Veryfication
          </RegButton>
        </RegBlock>
        <VerificationBlock style={{display:verBlock?"flex":"none"}}>
          <VerTitle>verification</VerTitle>
          <VerParagraph>
            Check your email. Confirm your email by using verification code.
          </VerParagraph>
          <ReactCodeInput
            className="customClass"
            fields={5}
            onChange={setVerifyCode}
          />
          <RegButton onClick={sendCodeData}>
            register
          </RegButton>
        </VerificationBlock>
      </ContentReg>
    </Wrapper>
  );
}

export default Reg;
