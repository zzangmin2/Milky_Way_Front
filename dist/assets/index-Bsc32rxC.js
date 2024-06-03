import{u as x,d as u,l as g,c as h,r as c,j as e,I as s,B as d,m as j,o as m}from"./index-5bcgqmhL.js";const v=x.section`
  width: 100%;
  display: flex;
  padding-top: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > div:nth-child(1) {
    text-align: center;
    padding-bottom: 40px;
    color: #717171;
    font-size: 1rem;
  }

  & > div:nth-child(2) {
    background-image: url("/images/LoginImg.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
  }
`,f=x.section`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  > div > p:nth-child(1) {
    color: #717171;
    margin-right: 20px;
  }

  > div > p:nth-child(2) {
    color: #133488;
    font-weight: bold;
    text-decoration: underline;
  }
`,w=()=>{const o=u(g),a=h(),[t,l]=c.useState(""),[n,r]=c.useState(""),p=async()=>{console.log(n,t);try{const i=await j(n,t);if(i.success)a("/home");else throw i}catch{m.error("아이디와 패스워드를 확인해주세요")}};return e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[e.jsxs("div",{children:["교내에서 마음 맞는 ",e.jsx("br",{})," 스터디 / 프로젝트 팀원 구하기"]}),e.jsx("div",{})]}),e.jsxs(f,{children:[o?e.jsxs(e.Fragment,{children:[e.jsx(s,{placeholder:"아이디를 입력해 주세요",setValue:r,value:n}),e.jsx(s,{placeholder:"비밀번호를 입력해 주세요",setValue:l,value:t,inputType:"password"})]}):e.jsxs(e.Fragment,{children:[e.jsx(s,{placeholder:"아이디를 입력해 주세요",setValue:r,value:n,disabled:!0}),e.jsx(s,{placeholder:"비밀번호를 입력해 주세요",setValue:l,value:t,disabled:!0,inputType:"password"})]}),o?e.jsx(d,{text:"로그인",onClick:p}):e.jsx(d,{text:"로그인",color:"gray"}),e.jsxs("div",{children:[e.jsx("p",{children:"아직 회원이 아니신가요?"}),e.jsx("p",{onClick:()=>a("/users/signupemail"),children:"회원가입 하기"})]})]})]})};export{w as default};
