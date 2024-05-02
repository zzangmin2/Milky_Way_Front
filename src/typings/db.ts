export interface Article {
  articleMemberId: string;
  articleType: string;
  articleApply: number;
  articleMentorNeeded: boolean | string;
  articleMentorTag: Array<string>;
  articleStartDay: string;
  articleEndDay: string;
  articleTitle: string;
  articleContent: string;
  articleLikes: number;
  articleApplyNow: number;
  articleId: number;
  articleRecruitmentState: boolean;
  articleApplyState: [
    {
      id: number;
      applicantName: string;
      applicationDate: Date;
      status: string;
    }
  ];
}
