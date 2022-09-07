import { useEffect } from 'react';
import ReactDOM from 'react-dom';

// useEffect(() => {
//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const query = category === 'all' ? '' : `&category=${category}`;
//       const response = await axios.get(``);
//       setArticles(response.data.articles);
//     } catch (e) {
//       console.log(e);
//     }
//     setLoading(false);
//   };
//   fetchData();
// }, [category]);

// if (loading) {
//   return <NewsListBlock>대기 중...</NewsListBlock>;
// }
// if (!articles) {
//   return null;
// }

const LoginInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [onInsert, value],
  );
  const loginDB = (e, id, password) => {
    e.preventDefault();
    return function (getState, { history }) {
      axios({
        method: 'post',
        url: '',
        data: {
          email: id,
          password: password,
        },
      })
        .then((res) => {
          console.log(res);
          setUser({
            email: res.data.email,
            nickname: res.data.nickname,
          });
          const accessToken = res.data.token;
          //쿠키에 토큰 저장
          setCookie('is_login', `${accessToken}`);
          document.location.href = '/';
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

  const Login = () => {
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

                <form onSubmit={onSubmit}>
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
                  <button class="btn btn-lg btn-primary pull-xs-right">
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
};
export default Login;
