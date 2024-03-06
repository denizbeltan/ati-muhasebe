import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Sirket} from './components/Sirket'
import {Roller} from './components/Roller'
import {Kullanicilar} from './components/Kullanicilar'
import {Yazdirma} from './components/Yazdirma'
import {Etiket} from './components/Etiket'
import {Profil} from './components/Profil'
import {AyarlarHeader} from './AyarlarHeader'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Ayarlar',
    path: '/pages/ayarlar/sirket',
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

const AyarlarPage = () => (
  <Routes>
    <Route
      element={
        <>
          <AyarlarHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='sirket'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Şirket</PageTitle>
            <Sirket />
          </>
        }
      />
      <Route
        path='roller'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Roller</PageTitle>
            <Roller />
          </>
        }
      />
      <Route
        path='kullanicilar'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Kullanıcılar</PageTitle>
            <Kullanicilar />
          </>
        }
      />
      <Route
        path='yazdirma'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Yazdırma</PageTitle>
            <Yazdirma />
          </>
        }
      />
      <Route
        path='etiket'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Etiket</PageTitle>
            <Etiket />
          </>
        }
      />
      <Route
        path='profil'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Profil</PageTitle>
            <Profil />
          </>
        }
      />
      <Route index element={<Navigate to='/pages/ayarlar/satis-yon' />} />
    </Route>
  </Routes>
)

export default AyarlarPage
