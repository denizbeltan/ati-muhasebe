import { FC, lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { MenuTestPage } from '../pages/MenuTestPage'
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import { WithChildren } from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
// import { StokAkisi } from "../modules/guncel/components/StokAkisi"

const PrivateRoutes = () => {
  // const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  // const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const SatisYonPage = lazy(() => import('../modules/satis_yonetim/SatisYonPage'))
  const AyarlarPage = lazy(() => import('../modules/ayarlar/AyarlarPage'))
  const GuncelPage = lazy(() => import('../modules/guncel/GuncelPage'))
  const SatinAlmaPage = lazy(() => import('../modules/satin_alma_yonetim/SatinAlmaPage'))
  const GenelGiderPage = lazy(() => import('../modules/genel_gider_yonetim/GenelGiderPage'))
  const UrunPage = lazy(() => import('../modules/urun_hizmet/UrunPage'))
  const CariPage = lazy(() => import('../modules/cari_hesap/CariPage'))
  const FinansPage = lazy(() => import('../modules/finans/FinansPage'))


  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='pages/guncel/guncel-durum' />} />
        {/* Pages */}
        {/* <Route path='pages/guncel/guncel-durum' element={<DashboardWrapper />} /> */}
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />

        {/* Lazy Modules */}

        <Route
          path='pages/guncel/*'
          element={
            <SuspensedView>
              <GuncelPage />
            </SuspensedView>
          }
        />
        <Route
          path='pages/satis-yon/*'
          element={
            <SuspensedView>
              <SatisYonPage />
            </SuspensedView>
          }
        />
        <Route
          path='pages/satin-alma-yon/*'
          element={
            <SuspensedView>
              <SatinAlmaPage />
            </SuspensedView>
          }
        />
        <Route
          path='pages/gider-yon/*'
          element={
            <SuspensedView>
              <GenelGiderPage />
            </SuspensedView>
          }
        />
        <Route
          path='pages/hizmet/*'
          element={
            <SuspensedView>
              <UrunPage />
            </SuspensedView>
          }
        />
        <Route
          path='pages/cari/*'
          element={
            <SuspensedView>
              <CariPage />
            </SuspensedView>
          }
        />
        <Route
          path='pages/finans/*'
          element={
            <SuspensedView>
              <FinansPage />
            </SuspensedView>
          }
        />
        <Route
          path='pages/ayarlar/*'
          element={
            <SuspensedView>
              <AyarlarPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export { PrivateRoutes }
