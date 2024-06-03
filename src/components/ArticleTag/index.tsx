import { FC } from "react";
import { StyledArticleProjectTag } from "./styles";

interface Props {
  tagType: string;
}

const ArticleTag: FC<Props> = ({ tagType }) => {
  return (
    <>
      <StyledArticleProjectTag>{tagType}</StyledArticleProjectTag>
    </>
  );
};

export default ArticleTag;
