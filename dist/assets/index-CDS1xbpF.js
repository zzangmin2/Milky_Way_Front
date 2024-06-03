import{u as s,R as x,a as q,c as $,p as W,j as e,q as O,o as m,s as H,t as T,v as N,w as D,d as I,x as L,r as y,B as M,y as V,z as X,C as R,D as E,E as F,U as B,G as Q,H as P,J as G,K as J,F as K,L as Y,M as Z,N as ee,P as te,Q as ie}from"./index-5bcgqmhL.js";import{S as re,a as U,b as z,c as ae}from"./styles-CvxLOeA-.js";const se=s.section`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
  > .buttonWrap {
    position: fixed;
    width: 340px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 70px;
  }

  @media (max-width: 575px) {
    > .buttonWrap {
      width: 90%;
    }
  }
`,le=s.section`
  margin-bottom: 20px;
`,ne=s.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  > div {
    display: flex;
    align-items: center;
  }

  > div.articleRecruitment > div.articleRecruitmentState {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #a8a8a8;
    margin-right: 10px;
  }

  > div.articleRecruitment > div.articleRecruitmentActive {
    background-color: #22ee68;
  }

  > div.articleRecruitment > div:nth-child(2) {
    font-size: 0.75rem;
    line-height: 0.75rem;
  }
`,oe=s.div`
  > svg {
    cursor: pointer;
    font-size: 0.75rem;
    color: ${t=>t.$articleLike?"#ff9078":"#d1d1d1"};
    margin-right: 5px;
  }

  > p {
    font-size: 0.75rem;
    margin: 0;
  }
`,ce=s.div`
  > div:nth-child(1) {
    display: flex;
  }

  > div.articleInfoSummary {
    display: flex;
    flex-direction: column;
  }

  > div.articleInfoSummary > div {
    display: flex;
  }

  > div.articleInfoSummary > div.articleRecruiter > p {
    margin: 0 0 10px 0;
    font-size: 0.85rem;
    line-height: 0.85rem;
  }
  /* > div.articleInfoSummary > div.articleRecruiter > p:nth-child(1)::after {
    display: inline-block;
    content: "";
    width: 1px;
    height: 0.7rem;
    background-color: black;
    margin-left: 5px;
    margin-right: 5px;
  } */
  > div.articleInfoSummary > div.articleState > div {
    margin-right: 16px;
  }
  > div.articleInfoSummary > div.articleState > div > p {
    font-size: 0.75rem;

    margin: 0;
  }

  > div.articleInfoSummary
    > div.articleState
    > div:nth-child(1)
    > p:nth-child(2) {
    color: #ff4646;
  }
  > div.articleInfoSummary > div.articleState > div > p:nth-child(1) {
    font-weight: bold;
    margin-right: 5px;
  }

  > div.articleInfoSummary > div > div {
    display: flex;
  }
`,_=s.div`
  width: 100%;

  & > ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  & > ul > li {
    padding: 5px 0;
    list-style: none;
    flex: 1;
    text-align: center;
    font-size: 0.75rem;
    border-bottom: 1px solid #d9d9d9;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  & > ul > li.activeTab {
    font-weight: bold;
    color: #ff9078;
    border-bottom: 2px solid #ff9078;
  }
`,de=s.div`
  position: fixed;
  width: 200px;
  top: 14%;
  left: 53%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  padding: 0 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: #fff;
  opacity: ${t=>t.isopen?1:0};
  transform: ${t=>t.isopen?"translate(-50%, -50%)":"translate(-50%, -60%)"};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  pointer-events: ${t=>t.isopen?"auto":"none"};

  & > div {
    padding: 16px 0;
    cursor: pointer;
  }
  & > div:nth-child(1) {
    border-bottom: 1px solid #d1d1d1;
  }

  & > div:nth-child(2) {
    color: red;
  }
`,pe=()=>{const[t,h]=x(q),p=$(),{articleId:n}=W(),a=async()=>{try{if(n)if((await O(parseInt(n))).success)m.success("수정 완료!"),setTimeout(()=>{window.location.reload()},2e3);else throw m.error("수정 실패"),new Error("수정 실패")}catch(o){console.log(`실패: ${o.message}`)}h(!1)},l=async()=>{try{if(n)if((await H(parseInt(n))).success)m.success("삭제 성공!"),p("/home/articlelist");else throw m.error("삭제 실패"),new Error("삭제 실패")}catch(o){console.log(`실패: ${o.message}`)}h(!1)};return e.jsx(e.Fragment,{children:e.jsxs(de,{isopen:t?!0:void 0,children:[e.jsx("div",{onClick:a,children:"스터디/프로젝트 모집 완료"}),e.jsx("div",{onClick:l,children:"스터디/프로젝트 모집 글 삭제"})]})})},xe=s.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100vw;
  width: 80%;
  background-color: white;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (max-width: 1200px) {
    max-width: 300px;
  }
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-vertical {
    display: none;
  }
`,me=s.div`
  margin-bottom: 20px;
  margin: 0 20px;
  height: 500px;
  @media (max-width: 1200px) {
    max-height: 540px;
  }

  justify-content: flex-start;
  flex-direction: column;
  overflow-y: scroll;
`,he=s.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 16px;
  color: #333;
`;s.section`
  flex-grow: 1;
  display: flex;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;
  flex-basis: 20px;
  text-align: left;
  align-items: center;
`;const ue=s.section`
  flex-directon: column;
  flex: 1;
  margin-top: 15px;
  flex-basis: 55px;
  & > div {
    padding-bottom: 15px;
  }
  & > input {
  }
`,fe=s.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-basis: 55px;
  margin-top: 25px;
`,ge=s.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-basis: 50px;
  margin-top: 25px;
`,be=s.section`
  flex-grow: 1;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
`,S=s.div`
  color: #143488;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
  padding-top: 5px;
  margin-bottom: 20px;
  & > p {
    display: flex;
    align-items: flex-end;
  }
`,je=s(S)`
  text-align: left;
  color: #143488;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border: none;
`,w=s.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
  height: 100%;
`,ve=s.div`
  display: flex;
  width: auto;
  height: auto;
  margin-bottom: 20px;
  & > input {
    width: 100%;
    height: 100%;
    border: none;
  }
`,ye=s.section`
  margin-top: 20px;
  width: 100%;
  margin-right: 30px;
  display: flex;
  flex-grow: 1;
  flex-basis: 20px;
  height: 70px;
  justify-content: center;
  flex-direction: row;

  & > div:nth-child(1) {
    width: 47%;
  }

  & > div:nth-child(2) {
    width: 47%;
    margin-left: 20px;
  }
`,Ae=()=>{const t=T(N),h=T(D),{career:p}=I(N),{certificate:n}=I(N),[a,l]=x(L),o=()=>{l(!a)},{userName:u,userId:j,userDpt:v,userPhoneNumber:f,userLocation:r,userLineText:g}=I(D),C=async()=>{var c,i;try{const[d,A]=await Promise.all([V(),X()]),b=(c=d.data.basicInfos[0])==null?void 0:c.member,k=(i=A.data)==null?void 0:i.careers;b&&k?(t({userCareer:k.careers||[],userCertificate:k.certifications||[]}),h({userName:b.memberName,userId:b.memberId,userPhoneNumber:b.memberPhoneNum,userDpt:b.memberDpt,userLocation:b.memberLocation,userUni:b.memberUniversity})):console.error("Data structure is not as expected")}catch(d){console.error("Error fetching user career data:",d)}};return y.useEffect(()=>{a&&C()},[a]),a?e.jsx(xe,{children:e.jsxs(me,{children:[e.jsx(he,{onClick:o,children:"X"}),e.jsxs(ue,{children:[e.jsxs(je,{children:[u," @",j]}),e.jsx("div",{children:f}),e.jsx("div",{children:v}),e.jsx("div",{children:r})]}),e.jsxs(fe,{children:[e.jsx(S,{children:"경력"}),p&&p.length>0?p.map(c=>e.jsxs(w,{children:[e.jsx("div",{children:c.careerCompany}),e.jsxs("div",{children:[c.careerFirstDate,"~",c.careerLastDate]})]},c.id)):e.jsx(w,{children:"등록된 경력이 없습니다."})]}),e.jsxs(ge,{children:[e.jsx(S,{children:"자격증"}),n&&n.length>0?n.map(c=>e.jsxs(w,{children:[e.jsx("div",{children:c.certificateName}),e.jsx("div",{children:c.certificateDate})]},c.id)):e.jsx(w,{children:"등록된 자격증이 없습니다."})]}),e.jsxs(be,{children:[e.jsx(S,{children:"한줄소개"}),e.jsx(ve,{children:g||"등록된 한줄소개가 없습니다."})]}),e.jsxs(ye,{children:[e.jsx(M,{text:"거절하기",border:"1px solid #133488",color:"white",fontColor:"#133488"}),e.jsx(M,{text:"승인하기"})]})]})}):null},we=()=>{const[t,h]=x(R),[p,n]=x(E),a=l=>{n(l)};return e.jsxs(re,{children:[e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx(U,{}),e.jsx(U,{}),e.jsx(z,{}),e.jsx(z,{})]}),e.jsx(_,{children:e.jsxs("ul",{children:[e.jsx("li",{className:"activeTab",onClick:()=>a("intro"),children:t.articleType==="study"?"스터디 소개":"프로젝트 소개"}),e.jsx("li",{className:p==="qna"?"activeTab":"",onClick:()=>a("qna"),children:"Q&A"})]})}),e.jsx("div",{style:{marginTop:"20px"},children:e.jsx(ae,{})})]})},Se=s.div`
  line-height: 160%;
  margin-bottom: 60px;

  > div.mentorTagWrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  > p.mentorTagTitle {
    color: #133488;
    font-weight: bold;
    font-size: 0.8rem;
  }

  > div.mentorTagWrapper > p.mentorTag {
    padding: 2px 10px;
    background-color: #f8f8f8;
    color: #676767;
    font-size: 0.75rem;
    margin-right: 5px;
    border-radius: 10px;
    font-size: 0.75rem;
    margin: 0 5px 5px 0;
  }
`,Ce=s.section`
  margin-bottom: 100px;
  width: 100%;

  div.articleAuthorMessage {
    background-color: #f8f8f8;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  div.articleAuthorMessage > div:nth-child(1) {
    color: #133488;
    font-size: 0.9rem;
    font-weight: bold;
  }

  div.articleAuthorMessage > div:nth-child(2) {
    font-size: 0.8rem;
  }
`,ke=s.div`
  display: grid;
  width: 100%;
  height: 100%;
  /* grid-template-rows: repeat(4, 1fr); */
  font-size: 0.9rem;

  div.tableRow {
    display: grid;
    grid-template-columns: 14% 23% 47% 16%;
    border-bottom: 1px solid #d1d1d1;
    padding: 5px;
  }

  div.tableRowTop {
    height: 30px;
    border-bottom: 2px solid #d1d1d1;
  }

  div.tableCell {
    padding: 5px;
    text-align: center;
  }

  div.tableCellButton {
    cursor: ${t=>t.$isAuthor?"pointer":""};
    text-decoration: ${t=>t.$isAuthor?"underline":""};
  }

  div.applicantMessage {
    text-align: center;
    margin: 0 auto;
    padding: 20px;
  }
`,Ne=()=>{const[t,h]=x(R),[p,n]=x(F),[a,l]=x(B),[o,u]=x(L);y.useEffect(()=>{t&&t.articleId&&j()},[t]);const j=async()=>{try{if(t.articleId>=1){const r=await Q(t.articleId);console.log(r),n(r)}}catch(r){console.log(`다시 시도해주세요: ${r.message}`),m.error("오류가 발생했습니다. 다시 시도해주세요")}},v=async()=>{try{t&&t.articleRecruitmentState?(await G(t.articleId),m.success("지원 성공!"),await j(),l(r=>({...r,isApplier:!0})),h(r=>({...r,articleApplyNow:t.articleApplyNow+1}))):m.error("모집이 완료된 게시물입니다.")}catch(r){console.log(`다시 시도해주세요: ${r.message}`),m.error("오류가 발생했습니다. 다시 시도해주세요")}},f=()=>{a.isAuthor&&u(!o)};return e.jsxs(e.Fragment,{children:[e.jsxs(Se,{children:[t.articleMentorTag&&t.articleMentorTag.length>=1?e.jsx("p",{className:"mentorTagTitle",children:"우리에게 필요한 멘토는?"}):e.jsx(e.Fragment,{}),e.jsx("div",{className:"mentorTagWrapper",children:t.articleMentorTag&&t.articleMentorTag.length>=1?t.articleMentorTag.split("#").filter(r=>r!=="").map((r,g)=>e.jsxs("p",{className:"mentorTag",children:["#",r]},g)):e.jsx(e.Fragment,{})}),e.jsx("p",{children:t.articleContent})]}),a.isAuthor?"":e.jsx("div",{className:"buttonWrap",children:e.jsx(M,{text:t.articleRecruitmentState?`${a.isApplier?"이미 지원한 게시물입니다.":t.articleType==="study"?"스터디 신청하기":"프로젝트 신청하기"}`:"모집이 완료된 게시물입니다. ",buttonState:t.articleRecruitmentState&&!a.isApplier?"":"inactive",onClick:v,disabled:!t.articleRecruitmentState||a.isApplier})}),e.jsxs(Ce,{children:[e.jsx("h3",{children:"스터디 신청현황"}),a.isAuthor&&e.jsxs("div",{className:"articleAuthorMessage",children:[e.jsx("div",{children:" * 잠깐!"}),e.jsxs("div",{children:["신청 상태를 클릭하여 신청자의 이력서를 확인하고, ",e.jsx("br",{}),"스터디/프로젝트 합류 여부를 선택해주세요"]})]}),e.jsxs(ke,{$isAuthor:a.isAuthor,children:[e.jsxs("div",{className:"tableRow tableRowTop",children:[e.jsx("div",{className:"tableCell",children:"번호"}),e.jsx("div",{className:"tableCell",children:"신청자명"}),e.jsx("div",{className:"tableCell",children:"신청일"}),e.jsx("div",{className:"tableCell",children:"상태"})]}),(a.isAuthor||a.isApplier)&&p.length>=1?p.map((r,g)=>e.jsxs("div",{className:"tableRow",children:[e.jsx("div",{className:"tableCell",children:r.applyNo}),e.jsx("div",{className:"tableCell",children:r.memberName}),e.jsx("div",{className:"tableCell",children:P(r.applyDate)}),e.jsx("div",{className:"tableCell tableCellButton",onClick:f,children:r.applyResult})]},g)):a.isAuthor||a.isApplier?e.jsx("div",{className:"applicantMessage",children:e.jsx("p",{children:"아직 없네요.."})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"applicantMessage",children:["스터디 / 프로젝트 신청현황은",e.jsx("br",{})," 게시물 작성자와 신청자만 확인할 수 있습니다.",e.jsx("br",{})," ",e.jsx("br",{}),e.jsxs("b",{children:["본 스터디 / 프로젝트와 함께하는 팀원이 궁금하다면",e.jsx("br",{})," 지금 바로 신청하세요 !"]})]})})]})]})]})},Me=()=>{const[t,h]=y.useState(!0),p=$(),[n,a]=x(B),[l,o]=x(R),[u,j]=x(E),v=T(F),[f]=x(L);y.useEffect(()=>{console.log(f)},[f]);const{articleId:r}=W();y.useEffect(()=>{g()},[]);const g=async()=>{try{if(r){const[i,d]=await Promise.all([J(parseInt(r)),Q(parseInt(r))]);if(i){const A={articleId:i.article_no,articleMemberNo:i.member.memberNo,articleMemberName:i.member.memberName,articleType:i.articleType,articleTitle:i.title,articleContent:i.content,articleLikes:i.likes,articleApply:i.apply,articleApplyNow:i.applyNow,articleStartDay:i.startDay,articleEndDay:i.endDay,articleRecruitmentState:i.recruit,articleMentorNeeded:i.findMentor,articleMentorTag:i.mentorTag,isAuthor:i.isAuthor,isApplier:i.isApplier,isLike:i.isLike};console.log(A),o(A),a({isAuthor:i.isAuthor,isLike:i.isLike,isApplier:i.isApplier}),h(!1)}else throw i;console.log(d),v(d)}}catch(i){console.log(`다시 시도해주세요: ${i.message}`),h(!1),m.error(`정보를 불러오는 중에
 오류가 발생했습니다`,{onClose:()=>p(-1)})}},C=async()=>{try{if(r&&!n.isLike){const i=await te(parseInt(r));if(o(d=>({...d,articleLikes:d.articleLikes+1})),a(d=>({...d,isLike:!0})),i.error===409){o(d=>({...d,articleLikes:d.articleLikes-1})),m.error("이미 찜한 게시물입니다!");return}return}if(r&&n.isLike){await ie(parseInt(r)),o(i=>({...i,articleLikes:i.articleLikes-1})),a(i=>({...i,isLike:!1})),console.log("취소");return}}catch(i){console.log(`다시 시도해주세요: ${i.message}`),m.error("오류가 발생했습니다. 다시 시도해주세요")}},c=i=>{j(i)};return e.jsx(e.Fragment,{children:t?e.jsx(we,{}):e.jsxs(e.Fragment,{children:[e.jsx(pe,{}),l.articleId>0&&e.jsxs(se,{children:[e.jsxs(le,{children:[e.jsxs(ne,{children:[e.jsxs("div",{className:"articleRecruitment",children:[l.articleRecruitmentState?e.jsx("div",{className:"articleRecruitmentState articleRecruitmentActive"}):e.jsx("div",{className:"articleRecruitmentState"}),e.jsxs("div",{children:[l.articleEndDay," 까지"]})]}),e.jsxs(oe,{$articleLike:n.isLike,children:[e.jsx(K,{icon:Y,onClick:C}),e.jsx("p",{children:l.articleLikes})]})]}),e.jsxs(ce,{children:[e.jsxs("div",{children:[e.jsx(Z,{tagType:l.articleType==="study"?"스터디":"프로젝트"}),l.articleMentorNeeded&&e.jsx(ee,{})]}),e.jsxs("div",{className:"articleInfoSummary",children:[e.jsx("h3",{children:l.articleTitle}),e.jsx("div",{className:"articleRecruiter",children:e.jsx("p",{children:l.articleMemberName})}),e.jsxs("div",{className:"articleState",children:[e.jsxs("div",{children:[e.jsx("p",{children:"모집 현황"}),e.jsxs("p",{children:[l.articleApplyNow,"/",l.articleApply]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"모집 시작일"}),e.jsx("p",{children:P(l.articleStartDay)})]})]})]})]})]}),e.jsx(_,{children:e.jsxs("ul",{children:[e.jsx("li",{className:u==="intro"?"activeTab":"",onClick:()=>c("intro"),children:l.articleType==="study"?"스터디 소개":"프로젝트 소개"}),e.jsx("li",{className:u==="qna"?"activeTab":"",onClick:()=>c("qna"),children:"Q&A"})]})}),u==="intro"?e.jsx(Ne,{}):e.jsxs("div",{children:["Q&A 기능은 열심히 개발 중입니다!",e.jsx("br",{}),"조금만 기다려주세요!"]}),f&&e.jsx(Ae,{})]})]})})};export{Me as default};
