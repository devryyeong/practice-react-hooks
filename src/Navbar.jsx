import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <IconWrapper>
          <FontAwesomeIcon
            icon={faHouse}
            style={{ width: "30px", height: "30px" }}
          />
        </IconWrapper>
      </Link>
      <Link to="/ref">
        <Text>useRef</Text>
      </Link>
      <Link to="/context">
        <Text>useContext</Text>
      </Link>
      <Link to="/memo">
        <Text>useMemo</Text>
      </Link>
      <Link to="/callback">
        <Text>useCallback</Text>
      </Link>
      <Link to="/reducer">
        <Text>useReducer</Text>
      </Link>
      <Link to="/custom">
        <Text>Custom Hooks</Text>
      </Link>
      <Link to="/more">
        <IconWrapper>
          <FontAwesomeIcon
            icon={faCirclePlus}
            style={{ width: "30px", height: "30px" }}
          />
        </IconWrapper>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 30px;
  background-color: peachpuff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconWrapper = styled.div`
  border-radius: 50%;
  transition: all 0.2s;
  &:hover {
    transform: rotate(15deg) scale(1.5);
    color: #b3a580;
  }
`;

const Text = styled.div`
  font-size: 18px;
`;

export default Navbar;
