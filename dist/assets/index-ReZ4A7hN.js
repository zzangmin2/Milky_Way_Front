import{u as t,c as o,j as e,A as d}from"./index-5bcgqmhL.js";const a=t.div`
  width: 100%;
  background-color: #fff;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`,s=t.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  box-sizing: border-box;
  margin-bottom: 20px;

  & > div > h2 {
    margin: 0 0 10px 0;
  }

  & > div > p {
    margin: 0;
  }

  & > img.milkywayCharacter {
    width: 80px;
  }
`,c=t.section`
  width: 100%;
  /* height: 100%; */
  padding: 30px 20px;
  box-sizing: border-box;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: #f8f8f8;

  /* data 없을 때 */
  /* & > div:nth-child(1) > div {
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 20px;
    text-align: center;
  }

  & > div:nth-child(1) > div > svg {
    font-size: 2rem;
    color: #717171;
    margin-bottom: 5px;
  }
  & > div:nth-child(1) > div > div:nth-child(2) {
    font-size: 0.75rem;
  }
  & > div:nth-child(1) > div > div:nth-child(3) {
    color: #133488;
    margin-top: 10px;
    font-size: 0.75rem;
    text-decoration: underline;
  } */
`,n=t.section`
  display: flex;
  width: 100%;
  box-sizing: border-box;

  > div {
    width: 100%;
  }

  > div.ContentButton {
    flex: 1;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    padding: 20px;
    margin: 0 5px;
    border-radius: 20px;
    font-weight: bold;

    cursor: pointer;
  }

  > div.ContentButton > div.ContentButtonIcon {
    display: inline-block;
    width: 32px;
    height: 32px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    text-align: center;
    background-color: #f8f8f8;
    border-radius: 50%;
  }
  > div.ContentButton > p {
    margin: 0;
    font-weight: normal;
    font-size: 0.8rem;
  }

  > img.homeBanner {
    width: 100%;
    border-radius: 10px;
    margin: 40px 0 20px 0;
    object-fit: contain;
    cursor: pointer;
  }

  > div > div.ContentTitleContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;

    > button {
      height: 20px;
      margin-top: 22px;
      padding: 0 10px;
      border: 1px solid #d9d9d9;
      color: #d9d9d9;
      font-size: 0.8rem;
      border-radius: 20px;
    }
  }
`,x=()=>{const r=localStorage.getItem("memberName"),i=o();return e.jsx(e.Fragment,{children:e.jsxs(a,{children:[e.jsxs(s,{children:[e.jsxs("div",{children:[e.jsxs("h2",{children:["안녕하세요 ",r,"님!"]}),e.jsx("p",{children:"학생회원"})]}),e.jsx("img",{className:"milkywayCharacter",src:"/images/milkycharacter.svg",alt:""})]}),e.jsxs(c,{children:[e.jsxs(n,{children:[e.jsxs("div",{className:"ContentButton",onClick:()=>i("/home/articlelist"),children:[e.jsx("div",{className:"ContentButtonIcon",children:"🧐"}),e.jsx("p",{children:"나에게 맞는"}),"스터디/프로젝트 ",e.jsx("br",{})," 찾아보기"]}),e.jsxs("div",{className:"ContentButton",onClick:()=>i("/articleregister"),children:[e.jsx("div",{className:"ContentButtonIcon",children:"✏️"}),e.jsx("p",{children:"내가 직접"}),"스터디/프로젝트",e.jsx("br",{})," 팀원 모집하기"]})]}),e.jsx(n,{children:e.jsx("img",{className:"homeBanner",src:"/images/homeBanner.png",alt:"밀키웨이에 대해 더 자세히 알아보세요",onClick:()=>window.open("https://lush-megaraptor-085.notion.site/milkyway-fe9c98cb00c24930b54a0b4a414ca6be?pvs=4")})}),e.jsx(n,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"ContentTitleContainer",children:[e.jsx("h3",{children:"내가 참여 중인 스터디 /프로젝트"}),e.jsx("button",{onClick:()=>i("/home/myinfo"),children:"전체보기"})]}),e.jsx(d,{cardType:"main",navigateRoute:"/articledetail/1",articleType:"",articleMentorNeeded:!1,articleTitle:"esfwsefwrge",articleContent:"ewfewfewsfefw",articleCurrentApply:0,articleApply:"",articleLikes:0,articleEndDay:"",articleRecruitmentState:!1,articleStartDay:""})]})})]})]})})};export{x as default};
