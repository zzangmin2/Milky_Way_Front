import React from "react";
import { ModalWrapper, ModalContent, CloseButton, LinkButton } from "./styles";
import { ModalProps } from "../../typings/db";

const Modal: React.FC<ModalProps> = ({
  show,
  handleClose,
  modalType,
  conMethod,
  additionalInfo,
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleLinkClick = () => {
    if (modalType === "info" && additionalInfo) {
      window.open(additionalInfo, "_blank"); // 새 창에서 링크 열기
    }
  };

  console.log(conMethod);
  return (
    <ModalWrapper className={showHideClassName}>
      <ModalContent className="modal-main">
        <CloseButton onClick={handleClose}>X</CloseButton>
        {modalType === "info" ? (
          <>
            <div>
              <p>
                스터디 / 프로젝트 매칭 축하합니다!
                <br />
                팀장에게 연락해주세요
              </p>
            </div>
            {conMethod === "카카오톡오픈채팅" ? (
              <div>
                <p>카카오톡 오픈채팅</p>
              </div>
            ) : (
              <div>
                <p>팀장 전화번호</p>
              </div>
            )}

            <div>
              {conMethod === "카카오톡오픈채팅" && (
                <>
                  {additionalInfo ? (
                    <LinkButton onClick={handleLinkClick}>
                      오픈채팅방 접속하기
                    </LinkButton>
                  ) : (
                    <LinkButton style={{ backgroundColor: "gray" }}>
                      등록된 링크가 없어요 ㅠ
                    </LinkButton>
                  )}
                </>
              )}

              {conMethod === "전화번호" && (
                <>
                  {additionalInfo ? (
                    <div style={{ marginBottom: "20px", fontWeight: "bold" }}>
                      {additionalInfo}
                    </div>
                  ) : (
                    // <LinkButton style={{ backgroundColor: "gray" }}>
                    <p style={{ color: "gray", marginBottom: "40px" }}>
                      등록된 전화번호가 없어요 ㅠ
                    </p>
                    // </LinkButton>
                  )}
                </>
              )}
            </div>
          </>
        ) : null}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
