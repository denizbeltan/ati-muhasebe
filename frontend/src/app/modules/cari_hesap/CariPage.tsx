import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {GenelCariler} from './components/GenelCariler'
import {PotansiyelMusteriler} from './components/PotansiyelMusteriler'
import {PersonelCarileri} from './components/PersonelCarileri'
import {Ortaklar} from './components/Ortaklar'
import {CariHeader} from './CariHeader'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Cari Hesapları',
    path: '/pages/cari',
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

const CariPage = () => (
  <Routes>
    <Route
      element={
        <>
          <CariHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='cari-genel'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Genel Cariler</PageTitle>
            <GenelCariler />
          </>
        }
      />
      <Route
        path='potansiyel-mus'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Stok Akışı</PageTitle>
            <PotansiyelMusteriler />
          </>
        }
      />
            <Route
        path='personel-cari'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Stok Akışı</PageTitle>
            <PersonelCarileri />
          </>
        }
      />
            <Route
        path='ortaklar'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Ortaklar</PageTitle>
            <Ortaklar />
          </>
        }
      />
      <Route index element={<Navigate to='/pages/cari/cari' />} />
    </Route>
  </Routes>
)

export default CariPage
