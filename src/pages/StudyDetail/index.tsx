import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MentoTag from "../../components/MentoTag";
import StudyTag from "../../components/StudyTag";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  StudyDetailPageNavWrap,
  StudyDetailWrap,
  StudyInfoStateWrap,
  StudyInfoSummaryWrap,
  StudyIntrowrap,
  TopSection,
} from "./styles";
import Button from "../../components/Button";
import { useState } from "react";

const StudyDetail = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <StudyDetailWrap>
        <TopSection>
          <StudyInfoStateWrap>
            <div className="studyPeriod">
              <div className="studyPeriodState"></div>
              <div>2024.03.20 까지</div>
            </div>
            <div className="studyLike">
              <FontAwesomeIcon icon={faStar} />
              <p>10</p>
            </div>
          </StudyInfoStateWrap>
          <StudyInfoSummaryWrap>
            <div>
              <StudyTag tagType="스터디" />
              <MentoTag />
            </div>
            <div className="StudyInfoSummary">
              <h3>[토익] 스터디원 모집합니다.</h3>
              <div className="StudyRecruiter">
                <p>컴퓨터정보학부</p>
                <p>홍길동</p>
              </div>
              <div className="StudyState">
                <div>
                  <p>모집 현황</p>
                  <p>2/4</p>
                </div>
                <div>
                  <p>모집 시작 날짜</p>
                  <p>2023.03.20</p>
                </div>
              </div>
            </div>
          </StudyInfoSummaryWrap>
        </TopSection>
        <StudyDetailPageNavWrap>
          <ul>
            <li
              className={activeTab === "intro" ? "activeTab" : ""}
              onClick={() => handleTabClick("intro")}
            >
              스터디 소개
            </li>
            <li
              className={activeTab === "qna" ? "activeTab" : ""}
              onClick={() => handleTabClick("qna")}
            >
              Q&A
            </li>
          </ul>
        </StudyDetailPageNavWrap>
        <StudyIntrowrap>
          <p>
            안녕하십니까 !<br />
            <br /> 컴퓨터정보학부 200030001 홍길동입니다. 취업 준비를 위한 토익
            스터디를 진행하려고 합니다. <br />
            목표 점수는 800점이며, 매주 화요일, 목요일 오후 6시부터 8시까지
            전산관에서 스터디를 진행하고자 합니다.
            <br /> 관심 있으신 분들은 신청바라며, 추가적으로 궁금하신 사항이
            있으시다면 Q&A 게시판에 남겨주시기 바랍니다. <br />
            컴퓨터정보학부 200030001 홍길동입니다. 취업 준비를 위한 토익
            스터디를 진행하려고 합니다. <br />
            목표 점수는 800점이며, 매주 화요일, 목요일 오후 6시부터 8시까지
            전산관에서 스터디를 진행하고자 합니다.
            <br /> 관심 있으신 분들은 신청바라며, 추가적으로 궁금하신 사항이
            있으시다면 Q&A 게시판에 남겨주시기 바랍니다. <br />
            컴퓨터정보학부 200030001 홍길동입니다. 취업 준비를 위한 토익
            스터디를 진행하려고 합니다. <br />
            목표 점수는 800점이며, 매주 화요일, 목요일 오후 6시부터 8시까지
            전산관에서 스터디를 진행하고자 합니다.
            <br /> 관심 있으신 분들은 신청바라며, 추가적으로 궁금하신 사항이
            있으시다면 Q&A 게시판에 남겨주시기 바랍니다. <br />
          </p>
        </StudyIntrowrap>
        <div className="buttonWrap">
          <Button text="참여 신청하기" />
        </div>
      </StudyDetailWrap>
    </>
  );
};

export default StudyDetail;
