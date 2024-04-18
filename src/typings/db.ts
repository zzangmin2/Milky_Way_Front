export interface Article {
  articleMemberId: string;
  articleType: string;
  articleApply: number;
  articleMentorNeeded: boolean;
  articlementorTag: string;
  articleEndDay: string;
  articleTitle: string;
  articleContent: string;
}

export interface CurrentArticle extends Article {
  articleLikes: number;
  articleApplyNow: number;
  articleStartDay: string;
  articleId: number;
  articleApplyState: [
    {
      id: number;
      applicantName: string;
      applicationDate: string;
      status: string;
    }
  ];
}
