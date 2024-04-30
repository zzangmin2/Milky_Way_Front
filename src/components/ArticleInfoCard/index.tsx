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
  articleType: string;
  articleMentorNeeded: boolean;
  articleTitle: string;
  articleContent?: string;
  articleCurrentApply: number;
  articleApply: number;
  articleLikes: number;
  articleEndDay: string;
}

const ArticleInfoCard: FC<Props> = ({
  cardType,
  navigateRoute,
  articleType,
  articleMentorNeeded,
  articleTitle,
  articleContent,
  articleApply,
  articleCurrentApply,
  articleLikes,
  articleEndDay,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <StudyInfoCardWrap onClick={() => navigate(navigateRoute)}>
        <div style={{ display: "flex" }}>
          <div className="articlePeriodState"></div>
          {articleType === "study" ? (
            <ArticleTag tagType={"스터디"} />
          ) : (
            <ArticleTag tagType={"프로젝트"} />
          )}

          {articleMentorNeeded ? <MentoTag /> : ""}
        </div>
        <StudyInfoWrap>
          <h4>{articleTitle}</h4>
          {cardType === "main" ? (
            <p>
              {articleContent}
              <div />
            </p>
          ) : (
            ""
          )}
        </StudyInfoWrap>
        <StudyStateWrap>
          <div>
            <p>모집현황</p>
            <p>
              {articleCurrentApply}/{articleApply}
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faStar} />
            <p>{articleLikes}</p>
          </div>
        </StudyStateWrap>
      </StudyInfoCardWrap>
    </>
  );
};

export default ArticleInfoCard;