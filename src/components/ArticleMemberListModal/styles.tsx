import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100vw;
  width: 80%;
  background-color: white;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  box-shadow: 0px 3px 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 1200px) {
    max-width: 300px;
  }
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-vertical {
    display: none;
  }
`;

export const ModalContent = styled.div`
  margin-bottom: 20px;
  margin: 0 20px;
  height: 500px;
  @media (max-width: 1200px) {
    max-height: 540px;
  }

  justify-content: flex-start;
  flex-direction: column;
  overflow-y: scroll;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 16px;
  color: #333;
`;

export const MyInfoTitle = styled.section`
  flex-grow: 1;
  display: flex;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;
  flex-basis: 20px;
  text-align: left;
  align-items: center;
`;
export const MyInfoContent = styled.section`
  flex-directon: column;
  flex: 1;
  margin-top: 15px;
  flex-basis: 55px;
  & > div {
    padding-bottom: 15px;
  }
  & > input {
  }
`;

export const MyInfoCareer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-basis: 55px;
  margin-top: 25px;
`;
export const MyInfocertificate = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-basis: 50px;
  margin-top: 25px;
`;
export const MyInfoText = styled.section`
  flex-grow: 1;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InfoContentTitle = styled.div`
  color: #143488;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
  padding-top: 5px;
  margin-bottom: 20px;
  & > p {
    display: flex;
    align-items: flex-end;
  }
`;

export const FirstInfoContentTitle = styled(InfoContentTitle)`
  text-align: left;
  color: #143488;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border: none;
`;

export const InfoContentText = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
  height: 100%;
`;

export const InfoContentLineText = styled.div`
  display: flex;
  width: auto;
  height: auto;
  margin-bottom: 20px;
  & > input {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const BottomSection = styled.section`
  margin-top: 20px;
  width: 100%;
  margin-right: 30px;
  display: flex;
  flex-grow: 1;
  flex-basis: 20px;
  height: 70px;
  justify-content: center;
  flex-direction: row;

  & > div:nth-child(1) {
    width: 47%;
  }

  & > div:nth-child(2) {
    width: 47%;
    margin-left: 20px;
  }
`;
