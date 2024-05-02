import styled from "styled-components";

export const Section = styled.div`
  padding: 0 30px;
  display: flex;
  height: 100%;
  overflow-y: scroll;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
`;

export const MyInfoTitle = styled.section`
  flex-grow: 1;
  display: flex;
  font-weight: bold;
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
  height: 100%;
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
  flex: 1;
  overflow: hidden;
  width: 100%;

  display: flex;
  flex-direction: column;
  margin-top: 25px;
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
  padding-bottom: 10px;
  margin-bottom: 20px;
  border: none;
  & > p {
    display: flex;
    align-items: flex-end;
  }
`;

export const InfoContentText = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
  height: 100%;
`;
export const BottomSection = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  & > div:nth-child(1) > div > svg {
    font-size: 2rem;
    color: #717171;
    margin-bottom: 5px;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  outline: none;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  & > input {
    border: none;
    padding: 0 10px 10px 10px;
    outline: none;
    margin-top: 10px;
  }
`;
