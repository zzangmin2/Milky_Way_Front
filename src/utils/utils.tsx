// 자주 쓰이는 함수

import moment from "moment";

// 게시물 시간과 현재 시간 사이의 간격 표현 함수
export const getTimeAgo = (dateTime: string) => {
  const now = moment();
  const targetDateTime = moment(dateTime);

  const diffInMinutes = now.diff(targetDateTime, "minutes");
  const diffInHours = now.diff(targetDateTime, "hours");
  const diffInDays = now.diff(targetDateTime, "days");

  if (diffInMinutes < 60) {
    return `${diffInMinutes} 분 전`; //n 분 전
  } else if (diffInHours < 24) {
    return `${diffInHours} 시간 전`; //n 시간 전
  } else if (diffInDays < 14) {
    return `${diffInDays} 일 전`; //n 일 전
  } else {
    return targetDateTime.format("YYYY-MM-DD");
  }
};
