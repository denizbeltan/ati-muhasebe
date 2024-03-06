import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {AlisFatura} from './components/AlisFatura'
import {AlisIrsaliye} from './components/AlisIrsaliye'
import {VerilenSiparis} from './components/VerilenSiparisler'
import {SatinHeader} from './SatinHeader'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Satış Yönetim',
    path: '/pages/satis-yon',
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

const SatinAlmaPage = () => (
  <Routes>
    <Route
      element={
        <>
          <SatinHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='alis-fatura'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Alış Faturaları</PageTitle>
            <AlisFatura />
          </>
        }
      />
      <Route
        path='alis-irsaliye'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Alış İrsaliyeleri</PageTitle>
            <AlisIrsaliye />
          </>
        }
      />
      <Route
        path='verilen-siparis'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Verilen Siparişler</PageTitle>
            <VerilenSiparis />
          </>
        }
      />
      <Route index element={<Navigate to='/pages/satis-fatura/satis-yon' />} />
    </Route>
  </Routes>
)

export default SatinAlmaPage
