import GlobalStyles from '@/styles/GlobalStyles'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AuthCallback from './pages/auth'
import HomePage from './pages/home'
import LoginPage from './pages/login/login'
import SelectPlanPage from './pages/login/select-plan'
import MyPage from './pages/mypage'
import MyPageEditPage from './pages/mypage/edit'
import ExitPage from './pages/mypage/exit'
import GoodbyePage from './pages/mypage/good-bye'
import ProductsPage from './pages/products'
import ReviewDetailPage from './pages/review/detail'
import ReviewWritePage from './pages/review/write'
import SignupStartPage from './pages/signup'
import SignupEndPage from './pages/signup/end'
import SignupPage from './pages/signup/signup'
import SelectPlanRouter from './router/SelectPlanRouter'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup/start" element={<SignupStartPage />} />
        <Route path="/result" element={<div>result page</div>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/end" element={<SignupEndPage />} />
        <Route element={<SelectPlanRouter />}>
          <Route path="/select-plan" element={<SelectPlanPage />} />
        </Route>
        {/* <Route path="/browsing" element={<BrowsingPage />} /> */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/edit" element={<MyPageEditPage />} />
        <Route path="/exit" element={<ExitPage />} />
        <Route path="/goodbye" element={<GoodbyePage />} />
        <Route path="/auth/callback/:platform" element={<AuthCallback />} />
        <Route path="/review/write" element={<ReviewWritePage />} />
        <Route path="/review/:reviewId" element={<ReviewDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}
