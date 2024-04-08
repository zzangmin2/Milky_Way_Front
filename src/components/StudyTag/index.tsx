import { FC } from "react";
import { StyledStudyProjectTag } from "./styles";

interface Props {
  tagType: string;
}

const StudyTag: FC<Props> = ({ tagType }) => {
  return (
    <>
      <StyledStudyProjectTag>{tagType}</StyledStudyProjectTag>
    </>
  );
};

export default StudyTag;
