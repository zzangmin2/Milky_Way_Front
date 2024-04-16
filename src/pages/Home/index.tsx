import Button from "../../components/Button";
import { BottomSection, Section, TopSection } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import ArticleInfoCard from "../../components/ArticleInfoCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Section>
        <TopSection>
          <div>
            <h3>
              안녕하세요 <br /> 홍길동님!
            </h3>
            <p>학생회원</p>
          </div>
          <div></div>
        </TopSection>
        <Button
          text={"스터디 / 프로젝트 등록"}
          onClick={() => navigate("/articleregister")}
        />
        <BottomSection>
          <div>
            <h3>내가 참여 중인 스터디 /프로젝트</h3>
            <div>
              <FontAwesomeIcon icon={faFaceSadTear} />
              <div>아직 없네요 ..</div>
              <div>스터디 / 프로젝트 찾으러 가기</div>
            </div>
          </div>
          <div>
            <h3>실시간 인기 스터디 /프로젝트</h3>
            <ArticleInfoCard cardType="main" navigateRoute="/articledetail/1" />
          </div>
        </BottomSection>
      </Section>
    </>
  );
};

export default Home;
