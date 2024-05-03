import { Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage, NotFoundPage, CreateNotesPage } from './pages'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import UnauthenticatedRoute from './components/UnauthenticatedRoute'

const Links = () => {
  return (
    <Routes>
        <Route path='/' element={
          <HomePage />
          }
        />
    </Routes>
  )
}

//const Links = () => {
//  return (
//    <Routes>
//      <Route path='/' element={
//        <AuthenticatedRoute>
//          <HomePage />
//        </AuthenticatedRoute>
//      }
//      />
//      <Route path='/login' element={
//        <UnauthenticatedRoute>
//          <LoginPage />
//        </UnauthenticatedRoute>
//      }
//      />
//      <Route path='/register' element={
//        <UnauthenticatedRoute>
//          <RegisterPage />
//        </UnauthenticatedRoute>
//      }
//      />
//      <Route path='/notes/create' element={
//        <AuthenticatedRoute>
//          <CreateNotesPage />
//        </AuthenticatedRoute>
//      }
//      />
//      <Route path='/*' element={
//        <UnauthenticatedRoute>
//          <NotFoundPage />
//        </UnauthenticatedRoute>
//      }
//      />
//    </Routes>
//  );
//}

export default Links
