import React from "react";
import styled from "styled-components";
import { Container, SideBarNav, ButtonIcon } from "./SideBar";
import Avatar from "../Assets/User2.jpg";
import MessageBox from "./MessageBox";
import { MdAttachFile, MdOutlineMoreVert } from "react-icons/md";

const ChatSection = () => {
  return (
    <Container>
      <SideBarNav>
        
          <ChatBoxAvatar>
            <img src={Avatar} alt="Avatar/jpg" />
          </ChatBoxAvatar>
          <FriendInfo>
            <h3>Iftikhar ahmed</h3>
            <p>Online</p>
          </FriendInfo>
        
        <ChatNavRight>
          <ButtonIcon>
            <MdAttachFile />
          </ButtonIcon>
          <ButtonIcon>
            <MdOutlineMoreVert />
          </ButtonIcon>
        </ChatNavRight>
      </SideBarNav>
      <MessageBox></MessageBox>
    </Container>
  );
};

const ChatBoxAvatar = styled.div`
  width: 10%;
  margin-left: 1rem;
  border-radius: 5rem;
  height: 100%;
  background: url("${Avatar}") no-repeat;
  background-size: cover;
  cursor: pointer;

  & img {
    border-radius: 5rem;
    width: 100%;
    height: 100%;
  }
`;

const ChatNavRight = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 1.5rem;
`;

const FriendInfo = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;

  & h3 {
    width: 100%;
    margin: 0.2rem;
    overflow-x: hidden;
  }
  & p {
    color: green;
    width: 100%;
    margin: 0.2rem;
    overflow-y: hidden;
  }
`;

export default ChatSection;
