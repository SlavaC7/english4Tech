import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    height: 70px;
  border-bottom: 1px solid gray;
  padding: 10px;
  background-color: #282c34;
  color: white;
`;

export const ContentAuth = styled.div`
    width: 100%;
    height:100%;
    align-items: center;
    display: flex;
    flex-direction:column;
    justify-content:center;
`;

export const TitleHeader = styled.h1`
    text-transform:uppercase ;
`;

export const TitleAuth = styled.h2`
    color: #1e90ff;
`;



export const LinkNav = styled.a`
    text-decoration:none;
    color:#1e90ff;
    cursor: pointer;
`;

export const AuthBlock = styled.div`
    width: 30%;
    min-width: 350px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const DescRegBlock = styled.div`
    margin:10px;
    color:gray;
`;

export const Group = styled.div`
    position: relative;
`;

export const Input = styled.input`
    font-size: 16px;
    padding: 10px;
    display: block;
    width: 250px;
    border: none;
    border-bottom: 1px solid #999;

    :focus{
        outline: none;
    }

    :focus ~ BarSpan:before,
    :focus ~ BarSpan:after {
        width: 50%;
    }

    input:focus ~ Label,
    input:valid ~ Label {
        top: -15px;
        font-size: 14px;
        color: #999;
    }
`;

export const BarSpan = styled.span`
    position: relative;
    display: block;
    width: 250px;

    :focus, :after{
        content: "";
        height: 2px;
        width: 0;
        bottom: 0;
        position: absolute;
        background: #1e90ff;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    :before {
        left: 50%;
    }
    :after {
        right: 50%;
    }
`;

export const Label = styled.label`
    color: #999;
    font-size: 18px;
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: 15px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
`;

export const AuthButton = styled.button`
    padding: 5px;
    width: 50%;
    background-color: #1e90ff;
    border-radius: 5px;
    color: white;

    :active {
        background-color: #197adb;
    }
`;

export const CheckIcon = styled.img`
    width: 12px;
    height: 12px;
    margin-left: 5px;
    fill: #32cd32;
`;

export const MarkText = styled.p`
    margin-top: 10px;
    font-size: 13px;
    max-width: 230px;
    color: #999;
    margin-left: 5px;
`;
