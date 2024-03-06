import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {GenelGider} from './components/GenelGider'
import {GenelGiderTip} from './components/GenelGiderTip'
import {GiderHeader} from './GiderHeader'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Genel Gider Yönetim',
    path: '/pages/gider-yon',
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

const GenelGiderPage = () => (
  <Routes>
    <Route
      element={
        <>
          <GiderHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='gider'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Genel Gider</PageTitle>
            <GenelGider />
          </>
        }
      />
      <Route
        path='genel-tip'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Genel Gider Tip</PageTitle>
            <GenelGiderTip />
          </>
        }
      />
      <Route index element={<Navigate to='/pages/gider-yon/gider' />} />
    </Route>
  </Routes>
)

export default GenelGiderPage
