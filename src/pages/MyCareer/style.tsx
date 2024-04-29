import styled from "styled-components";

export const Section = styled.div`
  padding: 0 30px;
  display: flex;
  height: 100%;
  margin: 0px;
  overflow-y: scroll;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TopSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MyInfoTitle = styled.section`
  flex-grow: 0.5;
  display: flex;
  font-weight: bold;
  font-size: 20px;
  text-align: left;
  align-items: center;
`;
export const MyInfoContent = styled.section`
  flex-directon: column;
  flex: 1;
  margin-top: 20px;
`;
export const MyInfoCareer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const MyInfocertificate = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;
export const MyInfoText = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const InfoContentTitle = styled.div`
  text-align: left;
  color: #143488;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export const InfoContentText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const BottomSection = styled.section`
  display: flex;
  flex: 0.2;
  align-items: flex-end;
  justify-content: flex-end;
  marg
  position: fixed;
  d & > div:nth-child(1) > div > svg {
    font-size: 2rem;
    color: #717171;
    margin-bottom: 5px;
  }
`;

export const CareerInput = styled.input`
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid #f1f1f1;
`;
