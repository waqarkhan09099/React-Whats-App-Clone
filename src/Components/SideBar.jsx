import React from "react";
import styled from "styled-components";
import { MdDonutLarge, MdOutlineMoreVert } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import Avatar from "../Assets/Avatar.jpg";
import Avatar1 from "../Assets/User2.jpg";

const friendInfo = [
  { name: "Waqar Khan", message: "Recent Message", image: Avatar1 },
  { name: "Imran Ali", message: "Recent Message", image: Avatar },
  { name: "Iftikhar ahmed", message: "Recent Message", image: Avatar1 },
];

const SideBar = (props) => {
  return (
    <Container>
      {/* SideBar Header */}
      <SideBarNav>
        <SideBarAvatar>
          <img src={Avatar} alt="Avatar/jpg" />
        </SideBarAvatar>
        <SideBarRight>
          <ButtonIcon>
            <MdDonutLarge />
          </ButtonIcon>
          <ButtonIcon>
            <BiMessageDetail />
          </ButtonIcon>
          <ButtonIcon>
            <MdOutlineMoreVert />
          </ButtonIcon>
        </SideBarRight>
      </SideBarNav>
      {/* Sidebar Search Box */}
      <SideBarSearchBar>
        <SearchBox>
          <ButtonSearch>
            <AiOutlineSearch />
          </ButtonSearch>
          <input type="text" placeholder="Search Name" />
        </SearchBox>
      </SideBarSearchBar>
      {/* Contect Box */}
      <ContactBox>
        <h2>Add New Chat</h2>
        {friendInfo.map((item, index) => {
          return (
            <FriendBox key={`firendBox${index}`}>
              <FriendPhoto>
                <img src={item.image} alt="Avatar/jpg" />
              </FriendPhoto>
              <FriendInfo>
                <h3>{item.name}</h3>
                <p>{item.message}</p>
              </FriendInfo>
            </FriendBox>
          );
        })}
      </ContactBox>
    </Container>
  );
};

// Styled Components started below
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f3f2;
`;

export const SideBarNav = styled.div`
  width: 100%;
  background: lightgrey;
  display: flex;
  padding: 0.6rem;
  justify-content: space-between;
  align-items: center;
  background: #e3dede;
  height: 14vh;
  border-right: 2px solid #d4d3d2;
`;

const SideBarAvatar = styled.div`
  width: 20%;
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
export const SideBarRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

export const ButtonIcon = styled.button`
  font-size: 1.5rem;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  & :active {
    transform: scale(0.9);
  }

  & :hover {
    color: white;
  }
`;
const ButtonSearch = styled.button`
  font-size: 1.2rem;
  background: none;
  height: 100%;
  width: 14%;
  border: none;
  outline: none;
  cursor: pointer;

  & :active {
    transform: scale(0.9);
  }

  & :hover {
    color: grey;
  }
`;

const SideBarSearchBar = styled.div`
  width: 100%;
  height: 12vh;
  /* border: 2px solid black; */
  display: flex;
  padding: 1rem;
  font-size: 1.2rem;
`;

const SearchBox = styled.form`
  width: 100%;
  display: flex;
  background: white;
  border-radius: 5rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  align-items: center;
  justify-content: space-between;

  & input {
    background: none;
    padding: 1rem;
    width: 85%;
    height: 100%;
    border: none;
    outline: none;
  }
`;

const ContactBox = styled.div`
  overflow-y: auto;
  width: 98%;
  display: flex;
  padding: 0.5rem 0;
  background: white;
  flex-direction: column;

  & h2 {
    width: 100%;
    padding: 0.5rem 1rem;
    cursor: pointer;
    :hover {
      background: #d9d6ce;
    }
  }
`;

// const ContactContent = styled.ul`
//   width: 98%;
//   margin-top: 1rem;
//   display: flex;
//   flex-direction: column;
// `;

const FriendBox = styled.li`
  padding: 0.5rem 1rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
  cursor: pointer;
  :hover {
    background: #d9d6ce;
  }
`;

const FriendPhoto = styled.div`
  width: 20%;
  height: 70px;
  border-radius: 5rem;
  text-align: center;
  cursor: pointer;

  & img {
    border-radius: 5rem;
    width: 100%;
    height: 100%;
  }
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
    width: 100%;
    margin: 0.2rem;
    overflow-y: hidden;
  }
`;

export default SideBar;
