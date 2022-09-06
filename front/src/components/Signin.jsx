//@ts-check

import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
const token = window.location.href.split('?token=')[1];

export const LoginState =
  atom <
  boolean >
  {
    key: 'LoginState',
    default: false,
    effects_UNSTABLE: { persistAtom },
  };

useEffect(() => {
  if (token) localStorage.setItem('4242-token', token);
  if (localStorage.getItem('4242-token')) setIsLoggedIn(true);
}, []);

const Signin = () => {
  return (
    <div>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <a href="">Need an account?</a>
              </p>

              <ul className="error-messages">
                <li>That email is already taken</li>
              </ul>

              <form>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                  />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right">
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
