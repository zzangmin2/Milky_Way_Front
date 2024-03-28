import { FC } from "react";
import { StyledStudyProjectTag } from "./styles";

interface Props {
  tagType: string;
}

const StudyProjectTag: FC<Props> = ({ tagType }) => {
  return (
    <>
      <StyledStudyProjectTag>{tagType}</StyledStudyProjectTag>
    </>
  );
};

export default StudyProjectTag;
