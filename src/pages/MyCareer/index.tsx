import {
  Section,
  TopSection,
  BottomSection,
  MyInfoTitle,
  MyInfoContent,
  MyInfoCareer,
  MyInfocertificate,
  MyInfoText,
  InfoContentTitle,
  InfoBorderLine,
  InfoContentText,
} from "./style";
import Button from "../../components/Button";

const MyCareer = () => {
  return (
    <>
      <Section>
        <TopSection>
          <MyInfoTitle>
            <div>이력서</div>
          </MyInfoTitle>
          <MyInfoContent>
            <InfoContentTitle>홍길동 @ktg5679</InfoContentTitle>
            <InfoBorderLine />
            <div>대림대학교</div>
            <div>컴퓨터정보학부</div>
            <div>010-2992-5679</div>
          </MyInfoContent>
          <MyInfoCareer>
            <InfoContentTitle>경력</InfoContentTitle>
            <InfoBorderLine />
            <InfoContentText>
              <div>교내gs25아르바이트</div>
              <div>2020-03-25~</div>
            </InfoContentText>
          </MyInfoCareer>
          <MyInfocertificate>
            <InfoContentTitle>자격증</InfoContentTitle>
            <InfoBorderLine />
            <InfoContentText>
              <div>정보처리산업기사</div>
              <div>2020-03-25~</div>
            </InfoContentText>
            <InfoContentText>
              <div>빅데이터분석기사</div>
              <div>2020-03-25~</div>
            </InfoContentText>
          </MyInfocertificate>
          <MyInfoText>
            <InfoContentTitle>한줄소개</InfoContentTitle>
          </MyInfoText>
        </TopSection>
        <BottomSection>
          <Button text={"이력서 수정하기"} />
        </BottomSection>
      </Section>
    </>
  );
};

export default MyCareer;
