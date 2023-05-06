import {useRef, useEffect} from 'react'
import { Button, Input } from '../styles';

const LoginEx = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`Welcome ${inputRef.current.value} ~!`);
    inputRef.current.focus();
  }

  return (
    <div>
      <Input ref={inputRef} type="text" placeholder="username" />
      <Button onClick={login}>LOG IN</Button>
    </div>
  )
}

export default LoginEx;