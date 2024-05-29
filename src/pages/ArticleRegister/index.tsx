import {
  ArticleContentInputWrap,
  ArticleRegisterWrap,
  ArticleTypeSelectWrap,
  CustomRadioLabel,
  MentorTagInputContainer,
} from "./styles";

import { useState } from "react";
import Button from "../../components/Button";
import { sendNewArticle } from "../../utils/apimodule/article";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Article } from "../../typings/db";
import { toast } from "react-toastify";

const ArticleRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Article>();

  const articleMentorNeeded = watch("articleMentorNeeded");
  const articleType = watch("articleType");
  const [articleMentorTag, setArticleMentorTag] = useState<string>();
  const [articleMentorTagArr, setArticleMentorTagArr] = useState<string>("");

  const navigate = useNavigate();

  // 멘토 취향 버튼 눌렀을 때 실행 함수
  const handleArticleMentorSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (articleMentorTag) {
      // 기존 멘토타입arr에서 멘토 타입 추가하기
      setArticleMentorTagArr(articleMentorTagArr + `#${articleMentorTag}`);
      console.log(articleMentorTagArr);

      setValue("articleMentorTag", articleMentorTagArr);
      setArticleMentorTag("");
    }
  };

  // handleSubmit에서 받은 데이터를 기반으로 게시물 등록 처리하는 함수
  const onSubmit = async (data: Article) => {
    try {
      const result = await sendNewArticle({
        ...data,
        articleMentorTag: articleMentorTagArr,
        // articleLikes: 0,
        // articleId: 11,
        // articleRecruitmentState: true,
        articleStartDay: new Date().toISOString(),
        // articleApplyNow: 0,
        articleMentorNeeded: articleMentorNeeded === "yes" ? true : false,
      });

      console.log(result);

      if (result.success) {
        toast.success("등록 완료!");
        navigate(`/home/articlelist`);
      } else {
        throw new Error("등록 실패");
      }
    } catch (error: any) {
      console.log(`실패: ${error.message}`);
    }
  };
  return (
    <>
      <ArticleRegisterWrap onSubmit={handleSubmit(onSubmit)}>
        <h3>스터디 / 프로젝트 등록</h3>

        <ArticleTypeSelectWrap>
          <p className="inputTitle">팀 유형</p>
          <label>모집하는 팀의 유형을 선택해 주세요</label>
          <div className="inputWrap">
            <CustomRadioLabel>
              <input
                type="radio"
                value="study"
                {...register("articleType", { required: true })}
              />
              <span>스터디</span>
            </CustomRadioLabel>
            <CustomRadioLabel>
              <input
                type="radio"
                value="project"
                {...register("articleType", { required: true })}
              />
              <span>프로젝트</span>
            </CustomRadioLabel>
          </div>
          {errors.articleType && (
            <p style={{ color: "red", fontSize: "0.75rem", margin: "0" }}>
              팀 유형을 선택해 주세요
            </p>
          )}
        </ArticleTypeSelectWrap>
        <ArticleTypeSelectWrap>
          <p className="inputTitle">모집 인원 </p>
          <label htmlFor="articleApply">모집 인원을 선택해 주세요</label>
          <select {...register("articleApply", { required: true })}>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          {errors.articleApply && (
            <p style={{ color: "red", fontSize: "0.75rem", margin: "0" }}>
              모집 인원 선택해 주세요
            </p>
          )}
        </ArticleTypeSelectWrap>

        <ArticleTypeSelectWrap>
          <p className="inputTitle">모집 날짜</p>
          <label>팀원을 모집하는 마지막 날짜를 입력해 주세요</label>
          <div className="inputWrap">
            <input
              type="date"
              {...register("articleEndDay", { required: true })}
            />
          </div>
          {errors.articleEndDay && (
            <p style={{ color: "red", fontSize: "0.75rem", margin: "0" }}>
              날짜를 선택해 주세요
            </p>
          )}
        </ArticleTypeSelectWrap>
        <ArticleTypeSelectWrap>
          <p className="inputTitle">연락 수단</p>
          <label>
            매칭이 성공한 팀원과 연락할 수 있는 방법을 입력해 주세요. <br />
            매칭되기 전까지는 이 정보가 공개되지 않으니 안심하세요.
          </label>
          <div className="inputWrap">
            <CustomRadioLabel>
              <input
                type="radio"
                value="전화번호"
                {...register("articleContactMethod", { required: true })}
              />
              <span>전화번호</span>
            </CustomRadioLabel>
            <CustomRadioLabel>
              <input
                type="radio"
                value="카카오톡오픈채팅"
                {...register("articleContactMethod", { required: true })}
              />
              <span>카카오톡 오픈채팅</span>
            </CustomRadioLabel>
          </div>

          {errors.articleContactMethod && (
            <p style={{ color: "red", fontSize: "0.75rem", margin: "0" }}>
              소통 수단을 입력해 주세요
            </p>
          )}
          <div className="inputWrap" style={{ marginTop: "10px" }}>
            <input
              type="input"
              placeholder="전화번호 또는 카카오톡 오픈채팅 링크를 입력해 주세요"
              {...register("articleContactInfo", { required: true })}
            />
          </div>
          {errors.articleContactInfo && (
            <p style={{ color: "red", fontSize: "0.75rem", margin: "0" }}>
              소통할 연락처를 입력해 주세요
            </p>
          )}
        </ArticleTypeSelectWrap>

        <ArticleTypeSelectWrap>
          <p className="inputTitle">멘토 필요 여부</p>
          <label> 멘토 필요 여부를 선택해 주세요</label>
          <div className="inputWrap">
            <CustomRadioLabel>
              <input
                type="radio"
                value="yes"
                {...register("articleMentorNeeded", { required: true })}
              />
              <span>네</span>
            </CustomRadioLabel>
            <CustomRadioLabel>
              <input
                type="radio"
                value="no"
                {...register("articleMentorNeeded", { required: true })}
              />

              <span>아니요</span>
            </CustomRadioLabel>
          </div>
          {errors.articleMentorNeeded && (
            <p style={{ color: "red", fontSize: "0.75rem", margin: "0" }}>
              멘토 필요 여부를 선택해 주세요
            </p>
          )}
        </ArticleTypeSelectWrap>
        {articleMentorNeeded === "yes" && (
          <div>
            <ArticleTypeSelectWrap>
              <ArticleTypeSelectWrap>
                <label style={{ marginTop: "10px" }}>
                  원하는 멘토의 타입을 적어주세요
                  <br /> ex 열정적인, 끝까지 완주 가능한, 자주 만남 가능한
                </label>
                <MentorTagInputContainer>
                  <div className="mentorTagInput">
                    <div>#</div>
                    <input
                      type="text"
                      value={articleMentorTag}
                      onChange={(e) => setArticleMentorTag(e.target.value)}
                    />
                    <button type="submit" onClick={handleArticleMentorSubmit}>
                      +
                    </button>
                  </div>
                  <div className="mentorTagWrap">
                    {" "}
                    {articleMentorTagArr.length >= 1 &&
                      articleMentorTagArr.split("#").map((tag, index) => {
                        return <div key={index}>{tag}</div>;
                      })}
                  </div>
                </MentorTagInputContainer>
              </ArticleTypeSelectWrap>
            </ArticleTypeSelectWrap>
          </div>
        )}

        <ArticleContentInputWrap>
          <input
            placeholder="제목을 입력해 주세요"
            {...register("articleTitle")}
          />
          {errors.articleTitle && (
            <p style={{ color: "red", fontSize: "0.75rem", margin: "0" }}>
              제목을 5자 이상으로 작성해 주세요
            </p>
          )}

          <textarea {...register("articleContent", { required: true })} />
          {errors.articleContent && (
            <p style={{ color: "red", fontSize: "0.75rem", margin: "0" }}>
              내용을 10자 이상으로 작성해 주세요
            </p>
          )}
        </ArticleContentInputWrap>

        <div className="buttonWrap">
          <Button
            text={
              (articleType === "study" ? "스터디" : "프로젝트") + " 등록하기"
            }
            // buttonState={buttonState}
            type={"submit"}
          />
        </div>
      </ArticleRegisterWrap>
    </>
  );
};

export default ArticleRegister;
