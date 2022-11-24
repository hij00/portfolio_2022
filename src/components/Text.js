import re_dyson from "./../img/mockup/re_dyson.png";
import movie from "./../img/mockup/re_movie.png";
import toy_login from "./../img/mockup/toy_login.png";
import toy_cart from "./../img/mockup/toy_cart.png";

import re_seoul_garden from "./../img/mockup/re_seoul.png";
import styled from "styled-components";

const ImgWrap = styled.div`
  width: 100%;
  img {
    margin-right: 10px;
  }
`;

const Text = styled.div`
  h1 {
    display: inline-block;
    font-weight: 700;
  }
`;

export const textSite = [
  {
    id: 0,
    textImg: `${re_dyson}`,
    title: "다이슨",
    date: "07.20 ~ 09.08",
    toolImg: (
      <ImgWrap>
        <img
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"
          alt="Javascript"
        />
        <img
          src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=black"
          alt="Node.js"
        />
        <img
          src="https://img.shields.io/badge/XD-FF61F6?style=flat-square&logo=AdobeXD&logoColor=black"
          alt="AdobeXD"
        />
      </ImgWrap>
    ),
    siteUrl: "https://wjdgus1122.github.io/dyson_project",
    gitUrl: "https://github.com/wjdgus1122/dyson_project",
    keyword: "다이슨 코리아의 사이트 리뉴얼",
    desc: (
      <Text>
        🙋‍♀ 인원 : <h1>4</h1>명
        <br /> 👩‍💻 맡은 역할
        <br /> ✔전체 페이지 디자인
        <br /> ✔코딩 - 커뮤니티, 제품 페이지 기능, 제품 디테일 페이지 기능
        <br /> ✔전체 페이지 디테일 수정
        <br />
        <br /> ✅깃허브 협업 - Branch를 생성해 merge, pull request 작업 진행
        <br /> ✅미디어쿼리를 이용한 반응형 구현
        <br /> ✅Adobe XD를 사용해 디자인 ☑
      </Text>
    ),
    end: "기간 안에 끝내는 것과 여러 인원이 작업할 시 최종 결정을 담당하는 역할이 필요하다는 것을 느꼈습니다. ",
  },
  {
    id: 1,
    textImg: `${movie}`,
    title: "Heving",
    date: "07.06~ 07.20",
    toolImg: (
      <ImgWrap>
        <img
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"
          alt="Javascript"
        />
        <img
          src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=black"
          alt="Node.js"
        />
        <img
          src="https://img.shields.io/badge/XD-FF61F6?style=flat-square&logo=AdobeXD&logoColor=black"
          alt="AdobeXD"
        />
      </ImgWrap>
    ),
    siteUrl: "https://hij00.github.io/Heving_app/",
    gitUrl: "https://github.com/hij00/Heving_app",
    keyword: "영화와 TV시리즈의 API를 받아와서 나만의 OTT 사이트 작업",
    desc: (
      <Text>
        🙋‍♀ 인원 : <h1>1</h1>명
        <br />
        <br /> ✅TMDB 사이트에서 API를 받아옴
        <br /> ✅API에 따른 컨텐츠 자동 업데이트
        <br /> ✅로딩페이지와 비동기화 구현
        <br /> ✅미디어쿼리를 이용한 반응형 구현
        <br /> ✅Adobe XD를 사용해 디자인 ☑
      </Text>
    ),
    end: "다른 곳에서 API를 끌어와 코드에 적용시키는 방법과 리액트의 여러 기능들을 배울 수 있었던 프로젝트였습니다. 오류를 해결하는 것에 뿌듯함을 크게 느꼈습니다.",
  },
  {
    id: 2,
    textImg: `${re_seoul_garden}`,
    title: "서울식물원",
    date: "05.09 ~ 06.13",
    toolImg: (
      <ImgWrap>
        <img
          src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=black"
          alt="Html5"
        />
        <img
          src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=black"
          alt="Css3"
        />
        <img
          src="https://img.shields.io/badge/XD-FF61F6?style=flat-square&logo=AdobeXD&logoColor=black"
          alt="AdobeXD"
        />
      </ImgWrap>
    ),
    siteUrl: "https://hij00.github.io/seoul_garden_renewal/",
    gitUrl: "https://github.com/hij00/seoul_garden_renewal",
    keyword: "서울식물원의 사이트 리뉴얼",
    desc: (
      <Text>
        🙋‍♀ 인원 : <h1>3</h1>명 <br /> 👩‍💻 맡은 역할
        <br /> ✔전반적인 메뉴 구성 및 페이지 기획
        <br /> ✔전체 페이지 디자인
        <br /> ✔코딩 - 온실 안내 페이지
        <br />
        <br /> ✅제일 처음 진행한 퍼블리싱 프로젝트
        <br /> ✅ ☑
      </Text>
    ),
    end: "디자인의 대부분을 저 혼자 진행했기 때문에 막히는 부분이 종종 있었지만 후반 작업에서 다른 사람들에게 피드백을 구하면서 여러 의견의 중요성을 알게 되었습니다. 디자인을 할 때 코드작업은 고려를 하지 못해서 여러모로 아쉬움이 남았던 작업입니다.",
  },
];

export const textToy = [
  {
    id: 0,
    textImg: `${toy_login}`,
    title: "로그인 / 회원가입",
    date: "09.",
    toolImg: (
      <ImgWrap>
        <img
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"
          alt="Javascript"
        />
        <img
          src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=black"
          alt="Node.js"
        />
        <img
          src="https://img.shields.io/badge/XD-FF61F6?style=flat-square&logo=AdobeXD&logoColor=black"
          alt="AdobeXD"
        />
      </ImgWrap>
    ),
    siteUrl: "",
    gitUrl: "https://github.com/hij00/signIn_signUp",
    keyword: "React Hook을 사용해 간편한 작업",
    desc: (
      <Text>
        🙋‍♀ 인원 : <h1>1</h1>명
        <br />
        <br /> ✅React Hook을 사용해 인풋(input)을 간편하게 작업
        <br /> ✅유효성 검사 가능
        <br /> ✅인터렉티브한 디자인 작업 ☑
      </Text>
    ),
    end: "간편한 코드로도 쉽게 로그인과 회원가입 기능을 할 수 있다는 것과 인터렉티브한 움직임을 의도한 대로 넣는 방법을 알게 되었습니다.",
  },
  {
    id: 1,
    textImg: `${toy_cart}`,
    title: "장바구니",
    date: "08.23 ~ 10.14",
    toolImg: (
      <ImgWrap>
        <img
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"
          alt="Javascript"
        />
        <img
          src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=black"
          alt="Node.js"
        />
        <img
          src="https://img.shields.io/badge/XD-FF61F6?style=flat-square&logo=AdobeXD&logoColor=black"
          alt="AdobeXD"
        />
      </ImgWrap>
    ),
    siteUrl: "https://hij00.github.io/toy_cart/",
    gitUrl: "https://github.com/hij00/toy_cart",
    keyword: "React Liverary 중 하나인 Redux를 사용",
    desc: (
      <Text>
        🙋‍♀ 인원 : <h1>1</h1>명
        <br />
        <br /> ✅리액트 라이브러리를 익히기 위한 작업
        <br /> ✅깃허브 팀 프로젝트 - 브랜치(branch)를 생성해 작업 진행
      </Text>
    ),
    end: "여러 방법들을 찾던 도중 로그인 프로젝트에 썼던 기능으로 쉽게 장바구니를 구현할 수 있다는 것을 깨달았습니다.",
  },
];

export const project = [
  {
    id: 0,
    textImg: `${re_dyson}`,
    title: "다이슨",
    date: "07.20 ~ 09.08",
    toolImg: (
      <ImgWrap>
        <img
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"
          alt="Javascript"
        />
        <img
          src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=black"
          alt="Node.js"
        />
        <img
          src="https://img.shields.io/badge/XD-FF61F6?style=flat-square&logo=AdobeXD&logoColor=black"
          alt="AdobeXD"
        />
      </ImgWrap>
    ),
    siteUrl: "https://wjdgus1122.github.io/dyson_project",
    gitUrl: "https://github.com/wjdgus1122/dyson_project",
    keyword: "다이슨 코리아의 사이트 리뉴얼",
    desc: (
      <Text>
        🙋‍♀ 인원 : <h1>4</h1>명
        <br /> 👩‍💻 맡은 역할
        <br /> ✔전체 페이지 디자인
        <br /> ✔코딩 - 커뮤니티, 제품 페이지 기능, 제품 디테일 페이지 기능
        <br /> ✔전체 페이지 디테일 수정
        <br />
        <br /> ✅깃허브 협업 - Branch를 생성해 merge, pull request 작업 진행
        <br /> ✅미디어쿼리를 이용한 반응형 구현
        <br /> ✅Adobe XD를 사용해 디자인 ☑
      </Text>
    ),
    end: "기간 안에 끝내는 것과 여러 인원이 작업할 시 최종 결정을 담당하는 역할이 필요하다는 것을 느꼈습니다. ",
  },
  {
    id: 1,
    textImg: `${movie}`,
    title: "Heving",
    date: "07.06~ 07.20",
    toolImg: (
      <ImgWrap>
        <img
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"
          alt="Javascript"
        />
        <img
          src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=black"
          alt="Node.js"
        />
        <img
          src="https://img.shields.io/badge/XD-FF61F6?style=flat-square&logo=AdobeXD&logoColor=black"
          alt="AdobeXD"
        />
      </ImgWrap>
    ),
    siteUrl: "https://hij00.github.io/Heving_app/",
    gitUrl: "https://github.com/hij00/Heving_app",
    keyword: "영화와 TV시리즈의 API를 받아와서 나만의 OTT 사이트 작업",
    desc: (
      <Text>
        🙋‍♀ 인원 : <h1>1</h1>명
        <br />
        <br /> ✅TMDB 사이트에서 API를 받아옴
        <br /> ✅API에 따른 컨텐츠 자동 업데이트
        <br /> ✅로딩페이지와 비동기화 구현
        <br /> ✅미디어쿼리를 이용한 반응형 구현
        <br /> ✅Adobe XD를 사용해 디자인 ☑
      </Text>
    ),
    end: "다른 곳에서 API를 끌어와 코드에 적용시키는 방법과 리액트의 여러 기능들을 배울 수 있었던 프로젝트였습니다. 오류를 해결하는 것에 뿌듯함을 크게 느꼈습니다.",
  },
  {
    id: 2,
    textImg: `${re_seoul_garden}`,
    title: "서울식물원",
    date: "05.09 ~ 06.13",
    toolImg: (
      <ImgWrap>
        <img
          src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=black"
          alt="Html5"
        />
        <img
          src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=black"
          alt="Css3"
        />
        <img
          src="https://img.shields.io/badge/XD-FF61F6?style=flat-square&logo=AdobeXD&logoColor=black"
          alt="AdobeXD"
        />
      </ImgWrap>
    ),
    siteUrl: "https://hij00.github.io/seoul_garden_renewal/",
    gitUrl: "https://github.com/hij00/seoul_garden_renewal",
    keyword: "서울식물원의 사이트 리뉴얼",
    desc: (
      <Text>
        🙋‍♀ 인원 : <h1>3</h1>명 <br /> 👩‍💻 맡은 역할
        <br /> ✔전반적인 메뉴 구성 및 페이지 기획
        <br /> ✔전체 페이지 디자인
        <br /> ✔코딩 - 온실 안내 페이지
        <br />
        <br /> ✅제일 처음 진행한 퍼블리싱 프로젝트
        <br /> ✅ ☑
      </Text>
    ),
    end: "디자인의 대부분을 저 혼자 진행했기 때문에 막히는 부분이 종종 있었지만 후반 작업에서 다른 사람들에게 피드백을 구하면서 여러 의견의 중요성을 알게 되었습니다. 디자인을 할 때 코드작업은 고려를 하지 못해서 여러모로 아쉬움이 남았던 작업입니다.",
  },
  {
    id: 3,
    textImg: `${toy_login}`,
    title: "로그인 / 회원가입",
    date: "09.",
    toolImg: (
      <ImgWrap>
        <img
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"
          alt="Javascript"
        />
        <img
          src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=black"
          alt="Node.js"
        />
        <img
          src="https://img.shields.io/badge/XD-FF61F6?style=flat-square&logo=AdobeXD&logoColor=black"
          alt="AdobeXD"
        />
      </ImgWrap>
    ),
    siteUrl: "",
    gitUrl: "https://github.com/hij00/signIn_signUp",
    keyword: "React Hook을 사용해 간편한 작업",
    desc: (
      <Text>
        🙋‍♀ 인원 : <h1>1</h1>명
        <br />
        <br /> ✅React Hook을 사용해 인풋(input)을 간편하게 작업
        <br /> ✅유효성 검사 가능
        <br /> ✅인터렉티브한 디자인 작업 ☑
      </Text>
    ),
    end: "간편한 코드로도 쉽게 로그인과 회원가입 기능을 할 수 있다는 것과 인터렉티브한 움직임을 의도한 대로 넣는 방법을 알게 되었습니다.",
  },
  {
    id: 4,
    textImg: `${toy_cart}`,
    title: "장바구니",
    date: "08.23 ~ 10.14",
    toolImg: (
      <ImgWrap>
        <img
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"
          alt="Javascript"
        />
        <img
          src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=black"
          alt="Node.js"
        />
        <img
          src="https://img.shields.io/badge/XD-FF61F6?style=flat-square&logo=AdobeXD&logoColor=black"
          alt="AdobeXD"
        />
      </ImgWrap>
    ),
    siteUrl: "https://hij00.github.io/toy_cart/",
    gitUrl: "https://github.com/hij00/toy_cart",
    keyword: "React Liverary 중 하나인 Redux를 사용",
    desc: (
      <Text>
        🙋‍♀ 인원 : <h1>1</h1>명
        <br />
        <br /> ✅리액트 상태관리 라이브러리 중 하나인 Redux를 익히기 위한 작업
        <br /> ✅깃허브 팀 프로젝트 - 브랜치(branch)를 생성해 작업 진행
      </Text>
    ),
    end: "여러 방법들을 찾던 도중 로그인 프로젝트에 썼던 기능으로 쉽게 장바구니를 구현할 수 있다는 것을 깨달았습니다.",
  },
];
