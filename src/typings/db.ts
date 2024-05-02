export interface Article {
  articleMemberId: string;
  articleType: string;
  articleApply: number;
  articleMentorNeeded: boolean;
  articleMentorTag: Array<string>;
  articleStartDay: string;
  articleEndDay: string;
  articleTitle: string;
  articleContent: string;
}

export interface CurrentArticle extends Article {
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
