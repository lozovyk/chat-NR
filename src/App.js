import React from 'react';
import reducer from './reducer';
import AuthBlock from './components/AuthBlock';
// import connectSocket from './socket';

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    // IS_AUTHORISED: false,
  });

  const onLogin = () => {
    dispatch({
      type: 'IS_AUTHORISED',
      payload: true,
    });
  };

  return (
    <section className="chatApp">
      {!state.isAuth && <AuthBlock onLogin={onLogin} />}
    </section>
  );
}

export default App;
