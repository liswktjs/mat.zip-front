import React, { useReducer } from "react";
import { BsSearch } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import styled, { css } from "styled-components";
import SearchBar from "./SearchBar";

const Container = styled.header<{ isSearchOpen: boolean }>`
  width: 375px;
  height: 60px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1em 2em;

  background-color: ${({ theme }) => theme.primary};

  ${({ isSearchOpen }) =>
    isSearchOpen &&
    css`
      justify-content: flex-end;
      gap: 0.5em;
    `};
`;

const PageName = styled.h1`
  font-size: 20px;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  gap: 1em;
`;

const Profile = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const SearchToggleButton = styled.button`
  background-color: transparent;
  border: none;

  font-size: 20px;

  cursor: pointer;
`;

function Header() {
  const [isSearchOpen, setSearchOpen] = useReducer(
    (isOpen: boolean) => !isOpen,
    false
  );

  const handleSearchOpen = () => {
    setSearchOpen();
  };

  return (
    <Container isSearchOpen={isSearchOpen}>
      {isSearchOpen ? (
        <>
          <SearchBar onClick={() => {}} />
          <SearchToggleButton onClick={handleSearchOpen}>
            <MdCancel />
          </SearchToggleButton>
        </>
      ) : (
        <>
          <PageName>mat.zip</PageName>
          <RightWrapper>
            <SearchToggleButton onClick={handleSearchOpen}>
              <BsSearch />
            </SearchToggleButton>
            <Profile />
          </RightWrapper>
        </>
      )}
    </Container>
  );
}

export default Header;
