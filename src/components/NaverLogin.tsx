import { useState } from "react";
import styled from "styled-components";
import UserInterface from "../Interfaces/UserInterface";

export const NaverLogin = () => {
  const [user, setUser] = useState<UserInterface>({ id: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("유저 정보:", user);
  };

  return (
    <StyledForm>
      <StyledSpan>네이버에 로그인을 해봅시다</StyledSpan>
      <StyledInput
        type="text"
        name="id"
        value={user.id}
        placeholder="ID를 입력하세요"
        onChange={handleChange}
      />
      <StyledInput
        type="password"
        name="password"
        value={user.password}
        placeholder="비밀번호를 입력하세요"
        onChange={handleChange}
      />
      <StyledBtn type="submit" onClick={handleSubmit}>로그인하기</StyledBtn>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  width: 600px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 10px 0px;
  box-shadow: 3px 10px 10px #ccc;
`;

const StyledInput = styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  margin: 10px 0px;
`;

const StyledBtn = styled.button`
  width: 300px;
  height: 60px;
  font-size: 20px;
  color: #666;
  background-color: #23ff9c;
  border: 1px solid #93ffce;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  &:active {
    background-color: #116841;
  }
`;

const StyledSpan = styled.span`
  font-size: 24px;
`;
