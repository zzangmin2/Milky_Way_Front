import{u as n,R as r,n as h,a as g,b as p,c as f,r as u,d as v,U as j,j as e,F as t,f as y,e as b,g as k,O as w,h as C,i as N,k as A}from"./index-5bcgqmhL.js";const L=n.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`,P=n.section`
  width: 100%;
  padding: 24px 20px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  > div.milkyWayLogo {
    width: 155px;
    height: 22px;
    background-image: url("/images/HeaderLogoImg.svg");

    cursor: pointer;
  }

  > svg {
    color: #717171;
    margin-right: 10px;
    cursor: pointer;
  }

  > .activeIcon {
    color: #ff9078;
  }
`,I=n.nav`
  width: 100%;
  bottom: 0;
  margin-top: auto;
  padding: 0px 40px;
  box-sizing: border-box;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 1;

  > ul {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > ul > li {
    list-style: none;
    font-size: 0.75rem;
    text-align: center;
    color: #717171;
    cursor: pointer;
  }

  > ul > li.activePage {
    color: #ff9078;
  }

  > ul > li > svg {
    font-size: 1rem;
    margin-bottom: 5px;
  }
`,z=({type:c})=>{const[s,l]=r(h),[m,x]=r(g),o=p(),a=f();u.useEffect(()=>{let i="";o.pathname==="/home/mycareer"?i="career":o.pathname==="/home/articlelist"?i="list":o.pathname==="/home"?i="home":o.pathname==="/home/myinfo"&&(i="myinfo"),console.log("페이지"+i),i&&l(i)},[o.pathname]);const d=v(j);return e.jsx(e.Fragment,{children:e.jsxs(L,{children:[e.jsxs(P,{children:[c==="home"?e.jsx("div",{className:"milkyWayLogo",onClick:()=>a("/home")}):e.jsx(t,{icon:y,onClick:()=>a(-1)}),c==="articleDetail"&&d.isAuthor?e.jsx(t,{icon:b,onClick:()=>x(!m)}):e.jsx(t,{className:s==="mypage"?"activeIcon":"",icon:k,onClick:()=>{l("mypage"),a("/home/myinfo")}})]}),e.jsx(w,{}),e.jsx(I,{children:e.jsxs("ul",{children:[e.jsxs("li",{className:s==="home"?"activePage":"",onClick:()=>{a("/home")},children:[e.jsx(t,{icon:C}),e.jsx("div",{children:"홈"})]}),e.jsxs("li",{className:s==="list"?"activePage":"",onClick:()=>{a("/home/articlelist")},children:[e.jsx(t,{icon:N}),e.jsx("div",{children:"스터디 / 프로젝트 찾기"})]}),e.jsxs("li",{className:s==="career"?"activePage":"",onClick:()=>{a("/home/mycareer")},children:[e.jsx(t,{icon:A}),e.jsx("div",{children:"이력서"})]})]})})]})})};export{z as default};
