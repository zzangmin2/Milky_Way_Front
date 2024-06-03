import{u as r,j as e,t as w,S as L,R as n,T as k,V as T,W as R,X as C,d as N,Y as D,c as F,r as g,Z as O,I as z,o as E,A as I,F as _,_ as P}from"./index-5bcgqmhL.js";import{a as p,b as a}from"./styles-CvxLOeA-.js";const W=r.section`
  padding: 20px 20px 0px 20px;
  overflow: hidden;
`,M=r.button`
  position: fixed;
  display: block;
  bottom: 100px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #133488;
  color: #fff;
  font-size: 2rem;
  padding: 0;
  margin: 0;
  right: 42%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (max-width: 1600px) {
    right: 40%;
  }

  @media (max-width: 1000px) {
    right: 34%;
  }
  @media (max-width: 850px) {
    right: 30%;
  }
  @media (max-width: 575px) {
    right: 20px;
  }
`,B=r.nav`
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
`,V=r.div`
  display: flex;
  margin-top: 20px;

  & > select {
    border: none;
    margin-right: 10px;
  }
`,$=r.div`
  & > div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 10px;
  }

  & > div:nth-child(1) > select {
    border: none;
  }

  & > div:nth-child(2) {
  }
`;r.div`
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding: 20px;
`;const H=r.section`
  width: 100%;
  height: 58vh;
  padding-bottom: 40px;
  box-sizing: border-box;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
  z-index: 999;

  > section {
    margin-bottom: 10px;
  }
`,X=r.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  > svg {
    color: #ccc;
    font-size: 2rem;
    margin-bottom: 10px;
  }
  > div {
    color: #ccc;
  }
`,Y=()=>{const l={width:"100%",border:"1px solid #f4f4f4",backgroundColor:"#fff",borderRadius:"20px",padding:"20px 20px 10px 20px",boxSizing:"border-box",marginBottom:"20px",cursor:"pointer"};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:l,children:[e.jsx(p,{}),e.jsx(a,{}),e.jsx(a,{})]}),e.jsxs("div",{style:l,children:[e.jsx(p,{}),e.jsx(a,{}),e.jsx(a,{})]}),e.jsxs("div",{style:l,children:[e.jsx(p,{}),e.jsx(a,{}),e.jsx(a,{})]})]})},G=()=>{const l=w(L),[b,x]=n(k),[c,j]=n(T),[m,f]=n(R),[v,y]=n(C),o=N(D),A=F(),[h,u]=g.useState(!0);g.useEffect(()=>{S()},[]);const d=t=>{j(t)},S=async()=>{try{console.log(h);const t=await O();if(t){const s=t.map(i=>({articleId:i.article_no,articleTitle:i.title,articleMentorNeeded:i.findMentor,articleEndDay:i.endDay,articleLikes:i.likes,articleRecruitmentState:i.recruit,articleApply:i.apply,articleApplyNow:i.applyNow,articleType:i.articleType,articleRegDate:i.regDate}));l(s),console.log(s),u(!0)}}catch(t){console.log(`다시 시도해주세요: ${t.message}`)}finally{u(!1)}};return e.jsx(e.Fragment,{children:e.jsxs(W,{children:[e.jsx("section",{children:e.jsx(z,{placeholder:"스터디/프로젝트를 찾아 보세요!",value:b,setValue:x,onEnterPress:()=>{E.info("검색 기능은 개발 중입니다."),x("")}})}),e.jsx(B,{children:e.jsxs("ul",{children:[e.jsx("li",{className:c==="all"?"activeTab":"",onClick:()=>d("all"),children:"ALL"}),e.jsx("li",{className:c==="study"?"activeTab":"",onClick:()=>d("study"),children:"스터디"}),e.jsx("li",{className:c==="project"?"activeTab":"",onClick:()=>d("project"),children:"프로젝트"})]})}),e.jsx(V,{children:e.jsxs("select",{name:"",id:"",value:m,onChange:t=>f(t.target.value),children:[e.jsx("option",{value:"all",children:"전체"}),e.jsx("option",{value:"recruting",children:"모집 중"}),e.jsx("option",{value:"recruitmentCompleted",children:"모집 완료"})]})}),e.jsxs($,{children:[e.jsx("div",{children:e.jsxs("select",{name:"",id:"",value:v,onChange:t=>y(t.target.value),children:[e.jsx("option",{value:"latest",children:"최신순"}),e.jsx("option",{value:"popular",children:"인기순"})]})}),e.jsx(M,{onClick:()=>A("/articleregister"),children:"+"}),h?e.jsx(Y,{}):e.jsx(H,{children:o.length>=1?o==null?void 0:o.map((t,s)=>e.jsx(I,{navigateRoute:`/articledetail/${t.articleId}`,articleType:t.articleType,articleRecruitmentState:t.articleRecruitmentState,articleMentorNeeded:t.articleMentorNeeded,articleTitle:t.articleTitle,articleApply:t.articleApply,articleCurrentApply:t.articleApplyNow,articleLikes:t.articleLikes,articleEndDay:t.articleEndDay,articleStartDay:t.articleRegDate},s)):e.jsxs(X,{children:[e.jsx(_,{icon:P}),e.jsx("div",{children:"게시물이 없습니다..."})]})})]})]})})};export{G as default};
