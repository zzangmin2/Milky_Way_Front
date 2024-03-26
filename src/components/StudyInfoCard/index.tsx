import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  MentoTag,
  StudyInfoCardWrap,
  StudyInfoWrap,
  StudyStateWrap,
  StudyTag,
  TagWrap,
} from "./styles";

const StudyInfoCard = () => {
  return (
    <>
      <StudyInfoCardWrap>
        <TagWrap>
          <StudyTag>스터디</StudyTag>
          <MentoTag>멘토</MentoTag>
        </TagWrap>
        <StudyInfoWrap>
          <h4>토익 스터디원 모집!</h4>
          <p>
            800점을 목표로 하고 있습니다. 일주일에 두 번이상 오프라인 만남을 할
            예정 입니다.
          </p>
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
