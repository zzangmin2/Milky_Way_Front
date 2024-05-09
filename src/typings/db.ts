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
  articleApplyState: [
    {
      id: number;
      applicantName: string;
      applicationDate: Date;
      status: string;
    }
  ];
}
