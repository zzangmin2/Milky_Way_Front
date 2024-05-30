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
  articleRegDate: string;
}

export interface ArticleApplyState {
  applyNo: number;
  articleNo: number;
  memberName: string;
  applyDate: string;
  applyResult: string;
}
