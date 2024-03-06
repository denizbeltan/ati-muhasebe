import { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import {
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget6,
  ListsWidget9,
  MixedWidget3,
  MixedWidget8,
  StatisticsWidget4,
  TablesWidget5,
  TablesWidget9,
  SizeOzel,
  SonHafta,
  TahsilatOzet,
  KolayBirYol,
  GunuGelen,
  Mobil
} from '../../../_metronic/partials/widgets'

const dashboardBreadCrumbs: Array<PageLink> = [
  {
    title: 'Home',
    path: '/dashboard',
    isSeparator: false,
    isActive: false,
  },
]

const DashboardPage = () => {
  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    return () => {
      document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    }
  }, [])

  return (
    <>
      {/* {/* begin::Toolbar */}
      <div className="card mb-5 mb-xxl-8">
        <div className="card-body pt-0 pb-0">
          {/* {/* begin::Nav */}
          <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
            {/* {/* begin::Nav item */}
            <li className="nav-item">
              <a className="nav-link text-active-primary py-5 me-6 active" href="index.html">Güncel Durum</a>
            </li>
            {/* {/* end::Nav item */}
            {/* {/* begin::Nav item */}
            <li className="nav-item">
              <a className="nav-link text-active-primary py-5 me-6" href="apps/ecommerce/reports/customer-orders.html">Stok Akışı</a>
            </li>
            {/* {/* end::Nav item */}
            {/* {/* begin::Nav item */}
            <li className="nav-item">
              <a className="nav-link text-active-primary py-5 me-6" href="index.html">Notlar</a>
            </li>
            {/* {/* end::Nav item */}
          </ul>
          {/* {/* end::Nav */}
        </div>
      </div>
      {/* {/* end::Toolbar */}
      {/* {/* begin::Separator */}
      <div className="separator mx-10 mb-5"></div>
      {/* {/* end::Separator */}
      {/* begin::Row */}
      <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
        {/* begin::Col */}
        <div className="col-xl-8 mb-xl-10">
          {/* !--begin::Chart widget 20  */}
          <SizeOzel className='card card-flush h-xl-15 mb-5 mb-xl-10' />
          {/* end::Chart widget 20 */}
          {/* begin::Chart sonhafta */}
          <SonHafta className='card card-flush h-xl-80 mb-5 mb-xl-10' />
          {/* end::Chart son hafta */}
          {/* begin::Chart widget 20 */}
          <TahsilatOzet className='card card-flush h-xl-80 mb-3 mb-xl-10'/>
          {/* end::Chart widget 20 */}
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className="col-xl-4 mb-4">
          <KolayBirYol className='card h-md-70 mb-5'/>
          <GunuGelen className='card h-md-70 mb-5'/>
          <Mobil/>
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
    </>
  )
}

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={dashboardBreadCrumbs}>
        {intl.formatMessage({ id: 'MENU.DASHBOARD' })}
      </PageTitle>
      <DashboardPage />
    </>
  )
}

export { DashboardWrapper }
