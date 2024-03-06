import React from "react";
import { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { HtmlMenuItem } from '../HeaderItem'
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
    path: '/pages/satis-yon',
    isSeparator: false,
    isActive: false,
  },
]

export function SatisHeader() {
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
                        <HtmlMenuItem to='/pages/satis-yon/fatura' title='Satış Faturaları' />
                        <HtmlMenuItem to='/pages/satis-yon/irsaliye' title='Satış İrsaliyeleri' />
                        <HtmlMenuItem to='/pages/satis-yon/siparis' title='Alınan Siparişler' />
                        <HtmlMenuItem to='/pages/satis-yon/proform' title='Satış Proformlar/Teklifler' />
                    </ul>
                    {/* {/* end::Nav */}
                </div>
            </div>
            {/* {/* end::Toolbar */}
            {/* {/* begin::Separator */}
            <div className="separator mx-10 mb-5"></div>
            {/* {/* end::Separator */}
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
        <SatisHeader />
      </>
    )
  }