import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  StudyInfoCardWrap,
  StudyInfoWrap,
  StudyIntroWrap,
  StudyStateWrap,
} from "./styles";
import MentoTag from "../MentoTag";
import ArticleTag from "../ArticleTag";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTimeAgo } from "../../utils/utils";

interface Props {
  cardType?: string;
  navigateRoute: string;
  articleType: string;
  articleMentorNeeded: boolean | string;
  articleTitle: string;
  articleContent?: string;
  articleCurrentApply: number;
  articleApply: string;
  articleLikes: number;
  articleEndDay: string;
  articleRecruitmentState: boolean;
  articleStartDay: string;
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
  articleStartDay,
  articleRecruitmentState,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <StudyInfoCardWrap onClick={() => navigate(navigateRoute)}>
        <StudyIntroWrap>
          <div className="studyRecruitmentStateWrap">
            <div>
              {articleRecruitmentState ? (
                <div className="articleRecruitmentState articleRecruitmentActive"></div>
              ) : (
                <div className="articleRecruitmentState"></div>
              )}

              <p>{articleEndDay}까지</p>
            </div>

            <div className="studyStateTagWrap">
              {articleType === "study" ? (
                <ArticleTag tagType={"스터디"} />
              ) : (
                <ArticleTag tagType={"프로젝트"} />
              )}

              {articleMentorNeeded ? <MentoTag /> : ""}
            </div>
          </div>
          <div className="line" />
        </StudyIntroWrap>
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
          <div className="recruitmentStateWrap">
            <div>
              <p>{getTimeAgo(articleStartDay)}</p>
            </div>

            <div>
              <p>모집현황</p>
              <p>
                {articleCurrentApply}/{articleApply}
              </p>
            </div>
          </div>
          <div className="likeStateWrap">
            <FontAwesomeIcon icon={faStar} />
            <p>{articleLikes}</p>
          </div>
        </StudyStateWrap>
      </StudyInfoCardWrap>
    </>
  );
};

export default ArticleInfoCard;
