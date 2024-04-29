import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { StudyInfoCardWrap, StudyInfoWrap, StudyStateWrap } from "./styles";
import MentoTag from "../MentoTag";
import ArticleTag from "../ArticleTag";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  cardType?: string;
  navigateRoute: string;
}

const ArticleInfoCard: FC<Props> = ({ cardType, navigateRoute }) => {
  const navigate = useNavigate();

  return (
    <>
      <StudyInfoCardWrap onClick={() => navigate(navigateRoute)}>
        <div style={{ display: "flex" }}>
          <ArticleTag tagType={"스터디"} />
          <MentoTag />
        </div>
        <StudyInfoWrap>
          <h4>토익 스터디원 모집!</h4>
          {cardType === "main" ? (
            <p>
              800점을 목표로 하고 있습니다. 일주일에 두 번이상 오프라인 만남을
              할 예정 입니다. 관심있으신분들
              <div />
            </p>
          ) : (
            ""
          )}
        </StudyInfoWrap>
        <StudyStateWrap>
          <div>
            <p>모집현황</p>
            <p>2/4</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faStar} />
            <p>20</p>
          </div>
        </StudyStateWrap>
      </StudyInfoCardWrap>
    </>
  );
};

export default ArticleInfoCard;
