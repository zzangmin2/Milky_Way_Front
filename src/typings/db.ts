export interface Article {
  articleMemberId: string;
  articleType: string;
  articleApply: string;
  articleMentorNeeded: boolean | string;
  articleMentorTag: string;
  articleStartDay: string;
  articleEndDay: string;
  articleTitle: string;
  articleContent: string;
  articleLikes: number;
  articleApplyNow: number;
  articleId: number;
  articleRecruitmentState: boolean;
  articleContactMethod: string;
  articleContactInfo: string;
}

export interface ArticleApplyState {
  applyNo: number;
  articleNo: number;
  memberName: string;
  applyDate: string;
  applyResult: string;
}

export interface ArticleCard {
  articleId: number;
  articleMemberId: string;
  articleType: string;
  articleRecruitmentState: boolean;
  articleTitle: string;
  articleContent: string;
  articleLikes: number;
  articleApply: string;
  articleApplyNow: number;
  articleStartDay: string;
  articleEndDay: string;
  articleMentorNeeded: boolean;
  articleMentorTag: string;
  articleApplyState: {
    id: number;
    applicantName: string;
    applicationDate: number;
    status: string;
  }[];
}

export interface BottomTableProps {
  articleApplyState: any[];
  type: string;
}

export interface UserInfo {
  editName?: any;
  editEmail?: any;
  editNumber?: any;
}

export interface ModalProps {
  show: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
  modalType: any; // 추가한 type
  additionalInfo?: any; // 추가
}
