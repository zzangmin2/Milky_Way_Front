export interface ArticleDetail extends ArticleCard {
  articleContactMethod: string;
  articleContactInfo: string;
  articleContent: string;
  articleStartDay: string;
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
  articleMemberId?: string;
  articleType: string;
  articleRecruitmentState: boolean;
  articleTitle: string;
  articleLikes: number;
  articleApply: string;
  articleApplyNow: number;
  articleEndDay: string;
  articleMentorNeeded: boolean;
  articleMentorTag?: string;
  articleRegDate: string;

  // articleApplyState: {
  //   id: number;
  //   applicantName: string;
  //   applicationDate: number;
  //   status: string;
  // }[];
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
  // show: boolean;
  handleClose: () => void;
  conMethod?: string;
  modalType?: any; // 추가한 type
  additionalInfo?: any; // 추가
}
