import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { BankaHesap } from './components/BankaHesap'
import { Cekler } from './components/Cekler'
import { Kasalar } from './components/Kasalar'
import { Senetler } from './components/Senetler'
import { FinansHeader } from './FinansHeader'

const profileBreadCrumbs: Array<PageLink> = [
    {
        title: 'Finans',
        path: '/pages/finans',
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

const FinansPage = () => (
    <Routes>
        <Route
            element={
                <>
                    <FinansHeader />
                    <Outlet />
                </>
            }
        >
            <Route
                path='banka-hesap'
                element={
                    <>
                        <PageTitle breadcrumbs={profileBreadCrumbs}>Banka Hesapları</PageTitle>
                        <BankaHesap />
                    </>
                }
            />
            <Route
                path='kasalar'
                element={
                    <>
                        <PageTitle breadcrumbs={profileBreadCrumbs}>Kasalar</PageTitle>
                        <Kasalar />
                    </>
                }
            />
            <Route
                path='cekler'
                element={
                    <>
                        <PageTitle breadcrumbs={profileBreadCrumbs}>Çekler</PageTitle>
                        <Cekler />
                    </>
                }
            />
            <Route
                path='senetler'
                element={
                    <>
                        <PageTitle breadcrumbs={profileBreadCrumbs}>Senetler</PageTitle>
                        <Senetler />
                    </>
                }
            />
            <Route index element={<Navigate to='/pages/finans/banka-hesap' />} />
        </Route>
    </Routes>
)

export default FinansPage
