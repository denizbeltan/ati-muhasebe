import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {SatisFatura} from './components/SatisFatura'
import {SatisIrsaliye} from './components/SatisIrsaliye'
import {AlinanSiparis} from './components/AlinanSiparis'
import {SatisProform} from './components/SatisProform'
import {SatisHeader} from './SatisHeader'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Satış Yönetim',
    path: '/pages/satis-yon/satis-fatura',
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
          <SatisHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='fatura'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Satış Faturaları</PageTitle>
            <SatisFatura />
          </>
        }
      />
      <Route
        path='irsaliye'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Satış İrsaliyeleri</PageTitle>
            <SatisIrsaliye />
          </>
        }
      />
      <Route
        path='siparis'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Alınan Siparişler</PageTitle>
            <AlinanSiparis />
          </>
        }
      />
      <Route
        path='proform'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Satış Proformları/Teklifler</PageTitle>
            <SatisProform />
          </>
        }
      />
      <Route index element={<Navigate to='/pages/satis-fatura/satis-yon' />} />
    </Route>
  </Routes>
)

export default SatisYonPage
