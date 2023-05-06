import { Div } from "./styles";

const Home = () => {
  return (
    <Div>
      🔺함수형 컴포넌트는 "함수"다.🔺
      <br />
      ➡ 함수형 컴포넌트가 렌더링 된다. = 함수가 호출된다.
      <br />
      ➡ 컴포넌트 내부의 모든 변수가 초기화된다.
      <br />
      ➡ 새로운 객체가 다시 만들어지고, 메모리 주소도 새로 생성된다.
      <br />
      ➡ 렌더링 전 변수와 렌더링 후 변수가 다르다.
      <br />➡ useEffect에서 의존성 배열은 객체를 구분하지 못하고 렌더링이
      계속일어난다.
    </Div>
  );
}

export default Home;