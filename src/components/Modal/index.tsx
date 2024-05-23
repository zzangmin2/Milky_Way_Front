import React from "react";
import { ModalWrapper, ModalContent, CloseButton, LinkButton } from "./styles";
import { ModalProps } from "../../typings/db";

const Modal: React.FC<ModalProps> = ({
  show,
  handleClose,
  modalType,
  additionalInfo,
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleLinkClick = () => {
    if (modalType === "info" && additionalInfo) {
      window.open(additionalInfo, "_blank"); // 새 창에서 링크 열기
    }
  };

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
            <div>
              <p>카카오톡 오픈채팅</p>
            </div>
            <div>
              {additionalInfo ? (
                <LinkButton onClick={handleLinkClick}>
                  오픈채팅방 접속하기
                </LinkButton>
              ) : (
                <>
                  <LinkButton style={{ backgroundColor: "gray" }}>
                    등록된 링크가 없어요 ㅠ
                  </LinkButton>
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
