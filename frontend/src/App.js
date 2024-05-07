import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { MenuBar } from './components'
import Links from './routes'
import { useState, useEffect } from 'react'
import { AppContext } from './lib/contextLib'
import { Auth } from 'aws-amplify'
import { useDispatch } from 'react-redux'
import { updateUser } from './reducers/userSlice'

function App() {
  return (
    <div className="App">
      <>
        <MenuBar />
        <Links />
      </>
    </div>
  );
//  const [isAuthenticated, userHasAuthenticated] = useState(false)
//  const [isAuthenticating, setIsAuthenticating] = useState(true);
//
//  const dispatch = useDispatch()
//
//  useEffect(() => {
//    onLoad();
//  }, []);
//
//  async function onLoad() {
//    try {
//      const user = await Auth.currentUserInfo()
//      if (user) {
//        dispatch(updateUser({...user?.attributes}))
//        userHasAuthenticated(true)
//      }
//    } catch (e) {
//      if (e !== "No current user") {
//        alert(e);
//      }
//    }
//
//    setIsAuthenticating(false);
//  }

//  return (
//    <div className="App">
//      <AppContext.Provider
//        value={{ isAuthenticated, userHasAuthenticated }}
//      >
//        {!isAuthenticating && (
//          <>
//            <MenuBar
//              isAuthenticated={isAuthenticated}
//              userHasAuthenticated={userHasAuthenticated}
//            />
//            <Links />
//          </>
//        )}
//      </AppContext.Provider>
//    </div>
//  );
}

export default App;
