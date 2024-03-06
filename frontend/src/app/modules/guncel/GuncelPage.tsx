import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {StokAkisi} from './components/StokAkisi'
import {GuncelDurum} from './components/GuncelDurum'
import {GuncelHeader} from './GuncelHeader'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Güncel Durum',
    path: '/pages/guncel',
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
          <GuncelHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='guncel-durum'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Güncel Durum</PageTitle>
            <GuncelDurum />
          </>
        }
      />
      <Route
        path='stok-akisi'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Stok Akışı</PageTitle>
            <StokAkisi />
          </>
        }
      />
      <Route index element={<Navigate to='/pages/guncel/guncel-durum' />} />
    </Route>
  </Routes>
)

export default SatisYonPage
