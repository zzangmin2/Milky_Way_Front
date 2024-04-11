import { useSetRecoilState } from "recoil";
import Input from "../../components/Input";
import {
  ArticleContentTextArea,
  ArticleRegisterWrap,
  ArticleTypeSelectWrap,
  ArticleTypeWrap,
} from "./styles";
import { ArticleRegisterState } from "../../utils/recoil/atom";
import { useEffect, useState, ChangeEvent } from "react";
import Button from "../../components/Button";
import { sendNewArticle } from "../../utils/apimodule/article";

const ArticleRegister = () => {
  const articleRegister = useSetRecoilState(ArticleRegisterState);
  const [articleType, setArticleType] = useState("study");
  const [articleApply, setArticleApply] = useState("");
  const [articleMentorNeeded, setArticleMentorNeeded] = useState("yes");
  const [articleMentorTag, setArticleMentorTag] = useState("");
  const [articleMentorTagArr, setArticleMentorTagArr] = useState<string[]>([]);
  const [articleEndDay, setArticleEndDay] = useState("");
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [buttonState, setButtonState] = useState("inactive");

  useEffect(() => {
    console.log(articleTitle);
  }, [articleTitle]);

  const handleMentorNeededChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArticleMentorNeeded(e.target.value);
  };

  const handleArticleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArticleType(e.target.value);
  };

  const handleArticleApplyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setArticleApply(e.target.value);
  };

  const handleArticleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setArticleContent(e.target.value);
  };

  const handleArticleMentorTagChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArticleMentorTag(e.target.value);
  };

  const handleArticleMentorSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (articleMentorTag) {
      setArticleMentorTagArr((prev) => [...prev, "#" + articleMentorTag]);
      setArticleMentorTag("");
    }
  };

  const handleSubmitButtonClick = async (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (buttonState === "inactive") {
      alert(" 칸을 모두 입력하슈"); // 추후 각 input에 alert 표시
      return;
    }

    //등록 버튼 클릭 -> http 통신
    const newArticleData = {
      articleType: articleType,
      articleApply: parseInt(articleApply),
      articleMentorNeeded: articleMentorNeeded === "yes" ? true : false,
      articlementorTag: articleMentorTagArr.join(", "),
      articleEndDay: articleEndDay,
      articleTitle: articleTitle,
      articleContent: articleContent,
    };

    try {
      const result = await sendNewArticle(newArticleData);
      if (result.success) {
        alert("등록 완료!");
      } else {
        throw result;
      }
    } catch (error: any) {
      alert(`실패: ${error.message}`);
    }
  };

  return (
    <>
      <ArticleRegisterWrap>
        <h3>스터디 / 프로젝트 등록</h3>

        <ArticleTypeWrap>
          <ArticleTypeSelectWrap>
            <label>모집하는 팀의 유형을 선택해 주세요</label>
            <div>
              <input
                type="radio"
                name="articleType"
                value="study"
                checked={articleType === "study"}
                onChange={handleArticleTypeChange}
              />
              스터디
            </div>
            <div>
              <input
                type="radio"
                name="articleType"
                value="project"
                checked={articleType === "project"}
                onChange={handleArticleTypeChange}
              />
              프로젝트
            </div>
          </ArticleTypeSelectWrap>
          <ArticleTypeSelectWrap>
            <label htmlFor="studyApply">모집 인원을 선택해 주세요</label>
            <select
              name=""
              id="studyApply"
              value={articleApply}
              onChange={handleArticleApplyChange}
            >
              {(() => {
                const options = [];
                for (let i = 1; i <= 10; i++) {
                  options.push(
                    <option key={i} value={i}>
                      {i}
                    </option>
                  );
                }
                return options;
              })()}
            </select>
          </ArticleTypeSelectWrap>

          <ArticleTypeSelectWrap>
            <label>팀원을 모집하는 마지막 날짜를 입력해 주세요</label>
            <Input
              inputType="date"
              value={articleEndDay}
              setValue={setArticleEndDay}
            ></Input>
          </ArticleTypeSelectWrap>

          <ArticleTypeSelectWrap>
            <label> 멘토 필요 여부를 선택해 주세요</label>
            <div>
              <input
                type="radio"
                name="mentor"
                value="yes"
                checked={articleMentorNeeded === "yes"}
                onChange={handleMentorNeededChange}
              />
              예
            </div>
            <div>
              <input
                type="radio"
                name="mentor"
                value="no"
                checked={articleMentorNeeded === "no"}
                onChange={handleMentorNeededChange}
              />
              아니오
            </div>
          </ArticleTypeSelectWrap>

          {articleMentorNeeded === "yes" ? (
            <ArticleTypeSelectWrap>
              <label>
                원하는 멘토의 타입을 적어주세요
                <br /> ex 열정적인, 끝까지 완주 가능한, 자주 만남 가능한
              </label>
              <div className="mentorTagInput">
                <p>#</p>
                <input
                  type="text"
                  value={articleMentorTag}
                  onChange={handleArticleMentorTagChange}
                />
                <button type="submit" onClick={handleArticleMentorSubmit}>
                  +
                </button>
              </div>
              <div className="mentorTagWrap">
                {articleMentorTagArr.map((tag, index) => {
                  return <div key={index}>{tag}</div>;
                })}
              </div>
            </ArticleTypeSelectWrap>
          ) : (
            ""
          )}
        </ArticleTypeWrap>

        {/* 게시물 모집 마지막날 적는 input 추가 필요*/}
        <section>
          <Input
            placeholder="제목을 입력해 주세요"
            value={articleTitle}
            setValue={setArticleTitle}
          />
          <ArticleContentTextArea
            name=""
            id=""
            value={articleContent}
            placeholder="내용을 입력해 주세요"
            onChange={handleArticleContentChange}
          ></ArticleContentTextArea>
        </section>

        <div className="buttonWrap">
          <Button
            text={
              (articleType === "study" ? "스터디" : "프로젝트") + " 등록하기"
            }
            buttonState={buttonState}
            // onClick={handleSubmitButtonClick}
          />
        </div>
      </ArticleRegisterWrap>
    </>
  );
};

export default ArticleRegister;
