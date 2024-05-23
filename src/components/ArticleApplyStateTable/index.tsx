import React, { useState } from "react";
import { ArticleApplyStateTableWrap } from "./styles";
import { InfoProjectList } from "../../pages/MyInfo/style";
import { ArticleInfoCardWrap } from "../../pages/MyInfo/style";
import ArticleInfoCard from "../ArticleInfoCard";
import { ArticleApplySelector } from "../../utils/recoil/atom";
import { ArticleArticleSelector } from "../../utils/recoil/atom";
import { useRecoilValue } from "recoil";

interface ArticleApplyStateTableProps {
  articleApplyState: any[];
  handleModalOpen: (additionalInfo: string) => void;
  setModalType: (type: string) => void;
  type: string;
}

const ArticleApplyStateTable: React.FC<ArticleApplyStateTableProps> = ({
  articleApplyState,
  handleModalOpen,
  setModalType,
  type,
}) => {
  const articleCard: any[] = useRecoilValue(ArticleArticleSelector);
  const applyGrid: any = useRecoilValue(ArticleApplySelector);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCards = articleCard.slice(startIndex, endIndex);
  console.log(applyGrid);

  console.log(visibleCards);

  const renderArticleCards = (cards: any[]) => {
    return cards.map((card, index) => (
      <ArticleInfoCard
        key={startIndex + index}
        navigateRoute={`/articledetail/${card.cardArticle_no}`}
        articleMentorNeeded={card.cardFindMentor}
        articleStartDay={card.cardStartDay.slice(0, -9)}
        articleLikes={card.cafdLikes}
        articleRecruitmentState={card.cardRecruit}
        articleTitle={card.cardTitle}
        articleType={card.cardArticleType}
        articleCurrentApply={card.cardApply}
        articleApply={card.cardApplyNow}
        articleEndDay={card.cardEndDay}
      />
    ));
  };

  const handleNextPage = () => {
    setPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(articleCard.length / itemsPerPage))
    );
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      {type === "apply" && (
        <>
          <InfoProjectList>
            <div>등록한 스터디 / 프로젝트</div>
            <div>
              <p>Tips!</p>
              <p>
                내가 등록한 스터디/프로젝트를 볼 수 있습니다. 페이지를 넘겨 나의
                등록카드를 확인해보세요!
              </p>
            </div>
          </InfoProjectList>
          <section style={{ marginTop: "50px", flex: "1" }}>
            <ArticleInfoCardWrap
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1",
                marginBottom: "90px",
              }}
            >
              {visibleCards.length > 0 ? (
                renderArticleCards(visibleCards)
              ) : (
                <div>데이터가 없습니다.</div>
              )}
              <div>
                <button onClick={handlePrevPage} disabled={page === 1}>
                  이전
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={
                    page === Math.ceil(articleCard.length / itemsPerPage)
                  }
                >
                  다음
                </button>
              </div>
            </ArticleInfoCardWrap>{" "}
          </section>
        </>
      )}
      {type === "article" && (
        <>
          <InfoProjectList>
            <div>현재 내가 신청한 스터디 / 프로젝트</div>
            <div>
              <p>Tips!</p>
              <p>
                스터디나 프로젝트가 선정되어 있을 때, "선정" 버튼을 누르면 해당
                스터디나 프로젝트의 오픈 채팅방으로 이동하여 팀원들과 소통을
                시작할 수 있습니다.
              </p>
            </div>
          </InfoProjectList>
          <section style={{ marginTop: "50px", flex: "1" }}>
            <ArticleApplyStateTableWrap>
              <div>
                <div className="tableRow tableRowTop">
                  <div className="tableCell">스터디/프로젝트명</div>
                  <div className="tableCell">신청일</div>
                  <div className="tableCell">상태</div>
                </div>
                {applyGrid.length > 0 ? (
                  applyGrid.map(
                    (_apply: any, idx: React.Key | null | undefined) => (
                      <div className="tableRow" key={idx}>
                        <div className="tableCell"></div>
                        <div className="tableCell">date</div>
                        <div className="tableCell">
                          <p
                            onClick={() => {
                              handleModalOpen("userList");
                              setModalType("userList");
                            }}
                          >
                            모집중
                          </p>
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <div>아직 없네요 ..</div>
                )}
              </div>
            </ArticleApplyStateTableWrap>
          </section>
        </>
      )}
      {type === "like" && (
        <>
          <InfoProjectList>
            <div>좋아요한 항목</div>
            <div>
              <p>Tips!</p>
              <p>
                내가 좋아요한 스터디/프로젝트를 볼 수 있습니다. 페이지를 넘겨
                나의 좋아요 항목을 확인해보세요!
              </p>
            </div>
          </InfoProjectList>
          <ArticleInfoCardWrap>
            {articleCard.length > 0 ? (
              renderArticleCards(articleCard)
            ) : (
              <div>좋아요한 항목이 없습니다.</div>
            )}
          </ArticleInfoCardWrap>
        </>
      )}
    </>
  );
};

export default ArticleApplyStateTable;
