import React from "react";

interface ArticleApplyStateTableProps {
  articleApplyState: any[];
  handleModalOpen: (additionalInfo: string) => void;
  setModalType: (type: string) => void;
}

const ArticleApplyStateTable: React.FC<ArticleApplyStateTableProps> = ({
  articleApplyState,
  handleModalOpen,
  setModalType,
}) => {
  return (
    <div>
      <div className="tableRow tableRowTop">
        <div className="tableCell">스터디/프로젝트명</div>
        <div className="tableCell">등록일</div>
        <div className="tableCell">상태</div>
      </div>
      {articleApplyState ? (
        articleApplyState.map((applicant, idx) => {
          return (
            <div className="tableRow" key={idx}>
              <div className="tableCell">{applicant.applicantName}</div>
              <div className="tableCell">{applicant.applicationDate}</div>
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
          );
        })
      ) : (
        <div>아직 없네요 ..</div>
      )}
    </div>
  );
};

export default ArticleApplyStateTable;
