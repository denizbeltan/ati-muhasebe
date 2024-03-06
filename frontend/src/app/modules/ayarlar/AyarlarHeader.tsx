import React from "react";
import { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { HtmlMenuItem } from '../HeaderItem'
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
    path: '/pages/ayarlar',
    isSeparator: false,
    isActive: false,
  },
]

export function AyarlarHeader() {
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
                        <HtmlMenuItem to='/pages/ayarlar/sirket' title='Şirket' />
                        <HtmlMenuItem to='/pages/ayarlar/roller' title='Roller' />
                        <HtmlMenuItem to='/pages/ayarlar/kullanicilar' title='Kullanıcılar' />
                        <HtmlMenuItem to='/pages/ayarlar/yazdirma' title='Yazdırma' />
                        <HtmlMenuItem to='/pages/ayarlar/etiket' title='Etiket' />
                        <HtmlMenuItem to='/pages/ayarlar/profil' title='Profil' />
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
        <AyarlarHeader />
      </>
    )
  }