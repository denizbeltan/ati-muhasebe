import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Urunler} from './components/Urunler'
import {Tumu} from './components/Tumu'
import {UrunHeader} from './UrunHeader'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Ürün ve Hizmetler',
    path: '/pages/hizmet',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const SatisYonPage = () => (
  <Routes>
    <Route
      element={
        <>
          <UrunHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='tumu'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Tümü</PageTitle>
            <Tumu />
          </>
        }
      />
      <Route
        path='urunler'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Ürünler</PageTitle>
            <Urunler />
          </>
        }
      />
      <Route index element={<Navigate to='/pages/hizmet/tumu' />} />
    </Route>
  </Routes>
)

export default SatisYonPage
