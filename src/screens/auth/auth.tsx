import React, { ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUnitListAction } from "../../store/unit/action";
import Check from "../../icon/check.svg";
import { sendAuthAction } from "../../store/auth";
import { useTypedSelector } from "../../store/store";
import { Link, useNavigate } from "react-router-dom";
import { AuthBlock, AuthButton, BarSpan, CheckIcon, ContentAuth, DescRegBlock, Group, Header, Input, Label, LinkNav, MarkText, TitleAuth, TitleHeader, Wrapper } from "./styled";
import { Box, TextField } from "@mui/material";

function Auth() {
  const navigation = useNavigate();

  const dispatch = useDispatch();

  const [result, setResult] = useState("");

  const [authData, setAuthData] = useState({ email: "", pass: "" });

  const [colotValid, setColorValid] = useState({ email: "#999", pass: "#999" });

  const [markValid, setMarkValid] = useState({ email: "", pass: "" });

  const [checkButton, setcheckButton] = useState(false);

  const regEmail =
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
      authData.email
    );

  const regPass = /^[0-9a-zA-Z]{9,}$/.test(authData.pass);

  const sendAuthData = () => {
    setcheckButton(true);

    if (!regEmail && !regPass) {
      setColorValid({ email: "#B22222", pass: "#B22222" });

      setMarkValid({
        email: "Check email. (+2)@(+2).(+2)",
        pass: "Check password. No more than 9 characters",
      });
    } else if (!regEmail && regPass) {
      setColorValid({ email: "#B22222", pass: "#32CD32" });

      setMarkValid({ email: "Check email. (+2)@(+2).(+2)", pass: "" });
    } else if (regEmail && !regPass) {
      setColorValid({ email: "#32CD32", pass: "#B22222" });

      setMarkValid({
        email: "",
        pass: "Check password. No more than 9 characters",
      });
    } else if (regEmail && regPass) {
      setColorValid({ email: "#32CD32", pass: "#32CD32" });

      setMarkValid({ email: "", pass: "" });

      dispatch(
        sendAuthAction.request({
          email: authData.email,
          password: authData.pass,
        })
      );

      console.log("dispatch");
    }
  };

  

  const authDataAcc = useTypedSelector((s) => s.auth);

  useEffect(() => {
    console.log(authDataAcc.email + " " + authDataAcc.password);
    if ((authDataAcc ?? false) && checkButton) {
      if (authDataAcc?.email) {
        if (authDataAcc.password) {
          if (authDataAcc.isAdmin) {
            //go admin panel
            navigation("/adminPanel");
          } else {
            console.log("isAdmin=false");
            // go profile
            navigation("/MyProfile");
          }
        } else {
          setMarkValid((prev) => ({ ...prev, pass: "wrong password" }));

          setColorValid((prev) => ({ ...prev, pass: "#B22222" }));
        }
      } else {
        setMarkValid((prev) => ({ ...prev, email: "account does not exist" }));

        setColorValid((prev) => ({ ...prev, email: "#B22222" }));
      }
    }
  }, [authDataAcc]);

  useEffect(() => {
    if (authDataAcc.accesToken) {
      if (authDataAcc.isAdmin) {
        //go admin panel
        navigation("/adminPanel");
      } else {
        console.log("isAdmin=false");
        // go profile
        navigation("/MyProfile");
      }
    }
  }, []);

  const setEmail = (even: string) => {
    setAuthData((prev) => ({ ...prev, email: even }));
  };

  const setPass = (even: string) => {
    setAuthData((prev) => ({ ...prev, pass: even }));
  };

  const setPressLink = () => {
    navigation("/reg");
  };

  return (
    <Wrapper>
      <Header>
        <TitleHeader>log in</TitleHeader>
        <span>
          login in you account or{" "}
            <LinkNav onClick={()=>setPressLink()}>
            register new
            </LinkNav>
        </span>
      </Header>
      <ContentAuth>
        <AuthBlock>
          <TitleAuth>log in</TitleAuth>
            <Box
              style={{margin:15, width:"50%"}}
            >
              <TextField 
              label={"Email"} 
              variant="standard"
              required
              value={authData.email}
              color={regEmail?"success":"error"}
              onChange={(even) => setEmail(even.target.value)}
              fullWidth 
              />

            {markValid.email && <MarkText>{markValid.email}</MarkText>}

            </Box>

          <Box
              style={{margin:15, width:"50%"}}
            >
              <TextField 
              label={"password"} 
              variant="standard"
              required
              type={"password"}
              value={authData.pass}
              color={regPass?"success":"error"}
              onChange={(even) => setPass(even.target.value)}
              fullWidth 
              />

              {markValid.pass && <MarkText>{markValid.pass}</MarkText>}

            </Box>

          <AuthButton className="authButton" onClick={sendAuthData}>
            Login
          </AuthButton>
        </AuthBlock>

        <DescRegBlock>If you don't have an account, <Link to={"/reg"}>register</Link></DescRegBlock>
      </ContentAuth>
    </Wrapper>
  );
}

export default Auth;
