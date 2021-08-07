import { useReducer, useEffect } from 'react';

interface AuthState {
  isLoading: boolean;
  token: string | null;
  userName: string | null;
  name: string | null;
}

const initialState: AuthState = {
  isLoading: true,
  token: null,
  userName: null,
  name: null,
};

type LoginPayload = { userName: string; name: string };

type AuthAction =
  | {
      type: 'logout';
    }
  | { type: 'login'; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        isLoading: false,
        token: null,
        userName: null,
        name: null,
      };
    case 'login':
      const { name, userName } = action.payload;
      return {
        isLoading: false,
        token: 'abc-123',
        name,
        userName,
      };
    default:
      return state;
  }
};

const Login = () => {
  const [{ isLoading, token, name }, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({ type: 'login', payload: { name: 'Emilio', userName: 'Eve' } });
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  if (isLoading) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validating...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>

      {token ? (
        <>
          <div className="alert alert-success">Success. Authenticated as {name}</div>
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <div className="alert alert-danger">Not authenticated...</div>
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
        </>
      )}
    </>
  );
};

export default Login;
