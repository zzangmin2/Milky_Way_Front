import styled from "styled-components";

export const Section = styled.div`
  padding: 0 30px;
  display: flex;
  height: auto;
  overflow-y: scroll;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TopSection = styled.section`
  display: flex;
  flex-direction: column;

  flex: 1;
  height: auto;
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
  height: 100%;
  & > div {
    padding-bottom: 15px;
  }
  & > input {
  }
`;

export const MyInfoContentEdit = styled(MyInfoContent)`
  flex-directon: column;
  flex: 1;
  margin-top: 15px;
  flex-basis: 55px;
  height: 100%;

  & > input {
    border: none;
    color: gray;
    background-color: none;
    padding: 0 10px 10px 0px;
    margin-top: 19px;
    font-size: 15px;
    width: 50%;
    &:focus {
      outline: none;
    }
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
  display: flex;
  flex: 0.2;
  height: auto;

  box-sizing: border-box;
  padding: 10px;
`;

export const InputCareer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;

  outline: none;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  & > input {
    border: none;
    width: 100%;
    padding: 0 10px 10px 10px;
    outline: none;
    margin-top: 10px;
  }
  & > input:nth-child(1) {
    font-weight: bold;
  }
`;
