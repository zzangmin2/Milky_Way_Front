import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { StudyInfoCardWrap, StudyInfoWrap, StudyStateWrap } from "./styles";
import MentoTag from "../MentoTag";
import StudyTag from "../StudyTag";
import { FC } from "react";

interface Props {
  CardType: string;
}

const StudyInfoCard: FC<Props> = ({ CardType }) => {
  return (
    <>
      <StudyInfoCardWrap>
        <div style={{ display: "flex" }}>
          <StudyTag tagType={"스터디"} />
          <MentoTag />
        </div>
        <StudyInfoWrap>
          <h4>토익 스터디원 모집!</h4>
          {CardType === "main" ? (
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

export default StudyInfoCard;
