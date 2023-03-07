import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Club(props) {
  const history = useHistory();

  function handler2() {
    history.replace("/");
    window.location.reload();
  }

  return (
    <Container>
      <HomeButton onClick={handler2}>home</HomeButton>
      <div style={{ float: "left" }}>
        <div style={{ padding: "16rem 0", marginRight: "5rem" }}>
          <Title>MIRIM SOCIETY</Title>
          <Content>
            미림마이스터고만의 자유로운 전공 동아리입니다. 총 NN개의 동아리가
            있고,
            <br />각 동아리들은 정해진 날에 모여 활동합니다.
            <br />
            선후배, 각 학과 간의친목을 도모할 수 있는 자리입니다.
          </Content>
        </div>
      </div>
      <RightSideBar className="rightBar">
        {/* 모달. map사용. 배열에 사진링크 넣고 삽입. */}
        <Modal />
        <Modal />
        <Modal />
        <Modal />
        <Modal />
        <Modal />
        <Modal />
        <Modal />
        <Modal />
        <Modal />
        <Modal />
        <Modal />
      </RightSideBar>
    </Container>
  );
}
const Container = styled.div`
  /* height: 50.5rem; */
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  background-color: #f3f3f3;
  /* padding: 4rem; */
`;
const RightSideBar = styled.div`
  float: left;
  width: 47.2%;
  height: 1920px;
  overflow: scroll;
`;
const HomeButton = styled.button`
  cursor: pointer;
  background-color: #f3f3f3;
  border: none;
  float: left;
`;
const Title = styled.p`
  font-size: 64px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #475467;
`;
const Content = styled.p`
  font-size: 26px;
  color: #475467;
`;
const ImageBox = styled.div`
  width: 360px;
  height: 300px;
  background-color: black;
`;
const ContentBox = styled.div`
  width: 360px;
  height: 300px;
  background-color: white;
`;
function Modal(props) {
  // let[title, setTitle] = useState(0);
  return (
    <>
      <div style={{ display: "flex" }}>
        <ImageBox />
        <ContentBox />
      </div>
      <div style={{ display: "flex" }}>
        <ContentBox />
        <ImageBox />
      </div>
    </>
  );
}
export default Club;
