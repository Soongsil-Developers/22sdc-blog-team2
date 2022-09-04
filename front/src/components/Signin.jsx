import React from 'react';
import ReactDOM from 'react-dom';
import { atom, useSetRecoilState } from 'recoil';
import { useState } from 'react';

const Signin = () => {
  const setUserName = useSetRecoilState(userNameState);
  // useSetRecoilState : 상태를 업데이트하는 setter 함수.
  // 현재 로그인한 userName을 전역으로 관리한다.
  const [input, setInput] = useState('');
  const [state, setState] = useState({
    isLogined: false,
    userName: '',
  });
  const loginText = state.isLogined ? 'LOGOUT' : 'LOGIN';

  function onChangeInputHandler(e) {
    const text = e.target.value;
    setInput(text);
  }

  function onClickSubmitHandler(e) {
    e.preventDefault();
    if (!state.isLogined) {
      setState({
        userName: input,
        isLogined: true,
      });
      setUserName(input);
      return;
    }
    setState({
      isLogined: false,
      userName: '',
    });
  }

  // const inputText = <input type="text" onChange={onChangeInputHandler} />;

  return (
    <div>
      <div class="auth-page">
        <div class="container page">
          <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
              <h1 class="text-xs-center">Sign In</h1>
              <p class="text-xs-center">
                <a href="">Need an account?</a>
              </p>

              <ul class="error-messages">
                <li>That email is already taken</li>
              </ul>

              <form>
                {state.isLogined ? <h2>{state.userName}</h2> : inputText}
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                  />
                </fieldset>
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                  />
                </fieldset>
                <button
                  type="button"
                  class="btn btn-lg btn-primary pull-xs-right"
                  onClick={onClickSubmitHandler}
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
