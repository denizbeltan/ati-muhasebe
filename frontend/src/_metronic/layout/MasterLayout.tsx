import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
// import {AsideDefault} from './components/aside/AsideDefault'
// you added this line change {AsideDefault}
import { AsideFromHtml } from './components/aside/AsideHtml'
import { Footer } from './components/Footer'
import { HeaderWrapper } from './components/header/HeaderWrapper'
import { RightToolbar } from '../partials/layout/RightToolbar'
import { ScrollTop } from './components/ScrollTop' //bunu eklersin aleyna
import { Content } from './components/Content'
import { PageDataProvider } from './core'
import { ActivityDrawer, DrawerMessenger, InviteUsers, UpgradePlan } from '../partials'
import { MenuComponent } from '../assets/ts/components'

const MasterLayout = () => {
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  return (
    <PageDataProvider>
      {/* <!--begin::Body--> */}
      <body id="kt_body" className="header-fixed header-tablet-and-mobile-fixed">
        <div className='d-flex flex-column flex-root'>
          {/* begin::Page */}
          <div className="page d-flex flex-row flex-column-fluid">
            {/* <!--begin::Wrapper--> */}
            <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
              <HeaderWrapper />
              {/* <!--begin::Content wrapper--> */}
              <div className="d-flex flex-column-fluid">
                <AsideFromHtml />
                {/* <!--begin::Container--> */}
                <div className="d-flex flex-column flex-column-fluid container-fluid">
                  {/* <!--begin::Post--> */}
                  <Content>
                    <Outlet />
                  </Content>
                  {/* <Footer /> */}
                </div>
                {/* <!--end::Container--> */}
              </div>
              {/* <!--end::Content wrapper--> */}
            </div>
            {/* end::Wrapper */}
          </div>
          {/* end::Page */}
        </div>
      </body>
    </PageDataProvider>
  )
}

export { MasterLayout }
