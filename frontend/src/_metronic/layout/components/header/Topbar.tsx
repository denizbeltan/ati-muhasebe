
import {FC} from 'react'
import {ThemeModeSwitcher} from '../../../partials'
// ../../../../../assets/media/avatars/300-1.jpg

const Topbar: FC = () => (
  <>
    {/* begin::Container */}
    <div className="container-fluid d-flex flex-stack">
      {/* begin::Brand */}
      <div className="d-flex align-items-center me-5">
        {/* begin::Aside toggle */}
        <div className="d-lg-none btn btn-icon btn-active-color-white w-30px h-30px ms-n2 me-3" id="kt_aside_toggle">
          <i className="ki-duotone ki-abstract-14 fs-2">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        </div>
        {/* end::Aside  toggle */}
        {/* begin::Logo */}
        <a href="index.html">
          <img alt="Logo" src="../../../../../default-small.svg" className="h-25px h-lg-30px" />
        </a>
        {/* end::Logo */}
        {/* begin::Nav */}
        <div className="ms-5 ms-md-10">
          {/* begin::Toggle */}
          <button type="button" className="btn btn-flex btn-active-color-white align-items-cenrer justify-content-center justify-content-md-between align-items-lg-center flex-md-content-between bg-white bg-opacity-10 btn-color-white px-0 ps-md-6 pe-md-5 h-30px w-30px h-md-35px w-md-200px" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start">
            <span className="d-none d-md-inline">Atimak Müh. Dan.</span>
            <i className="ki-duotone ki-down fs-4 ms-2 ms-md-3 me-0"></i>
          </button>
          {/* end::Toggle */}
        </div>
        {/* end::Nav */}
      </div>
      {/* end::Brand */}
      {/* begin::Topbar */}
      <div className="d-flex align-items-center flex-shrink-0">
        {/* begin::Search */}
        <div id="kt_header_search" className="header-search d-flex align-items-stretch" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-menu-trigger="auto" data-kt-menu-overflow="false" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end">
          {/* begin::Search toggle */}
          <div className="d-flex align-items-center" data-kt-search-element="toggle" id="kt_header_search_toggle">
            <div className="btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-30px h-30px h-40px w-40px">
              <i className="ki-duotone ki-magnifier fs-1">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
            </div>
          </div>
          {/* end::Search toggle */}
          {/* begin::Menu */}
          <div data-kt-search-element="content" className="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px">
            {/* begin::Wrapper */}
            <div data-kt-search-element="wrapper">
              {/* begin::Separator */}
              <div className="separator border-gray-200 mb-6"></div>
              {/* end::Separator */}
            </div>
            {/* end::Wrapper */}
          </div>
          {/* end::Menu */}
        </div>
        {/* end::Search */}
        {/* begin::Activities */}
        <div className="d-flex align-items-center ms-1">
          {/* begin::Drawer toggle */}
          <div className="btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-30px h-30px h-40px w-40px" id="kt_activities_toggle">
            <i className="ki-duotone ki-chart-simple fs-1">
              <span className="path1"></span>
              <span className="path2"></span>
              <span className="path3"></span>
              <span className="path4"></span>
            </i>
          </div>
          {/* end::Drawer toggle */}
        </div>
        {/* end::Activities */}
        {/* begin::Chat */}
        <div className="d-flex align-items-center ms-1">
          {/* begin::Menu wrapper */}
          <div className="btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-30px h-30px h-40px w-40px position-relative" id="kt_drawer_chat_toggle">
            <i className="ki-duotone ki-message-text-2 fs-1">
              <span className="path1"></span>
              <span className="path2"></span>
              <span className="path3"></span>
            </i>
            {/* begin::Animation notification */}
            <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
            {/* begin::Animation notification */}
          </div>
          {/* end::Menu wrapper */}
        </div>
        {/* end::Chat */}
        {/* begin::Quick links */}
        <div className="d-flex align-items-center ms-1">
          {/* begin::Menu wrapper */}
          <div className="btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-30px h-30px h-40px w-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
            <i className="ki-duotone ki-element-11 fs-1">
              <span className="path1"></span>
              <span className="path2"></span>
              <span className="path3"></span>
              <span className="path4"></span>
            </i>
          </div>
          {/* end::Menu wrapper */}
        </div>
        {/* end::Quick links */}
        {/* begin::Theme mode */}
        <div className="d-flex align-items-center ms-1">
          {/* begin::Menu toggle */}
          <a href="#" className="btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-30px h-30px h-40px w-40px" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
            <i className="ki-duotone ki-night-day theme-light-show fs-1">
              <span className="path1"></span>
              <span className="path2"></span>
              <span className="path3"></span>
              <span className="path4"></span>
              <span className="path5"></span>
              <span className="path6"></span>
              <span className="path7"></span>
              <span className="path8"></span>
              <span className="path9"></span>
              <span className="path10"></span>
            </i>
            <i className="ki-duotone ki-moon theme-dark-show fs-1">
              <span className="path1"></span>
              <span className="path2"></span>
            </i>
          </a>
          {/* begin::Menu toggle */}
          {/* begin::Menu */}
          <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">
            {/* begin::Menu item */}
            <div className="menu-item px-3 my-0">
              <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
                <span className="menu-icon" data-kt-element="icon">
                  <i className="ki-duotone ki-night-day fs-2">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                    <span className="path5"></span>
                    <span className="path6"></span>
                    <span className="path7"></span>
                    <span className="path8"></span>
                    <span className="path9"></span>
                    <span className="path10"></span>
                  </i>
                </span>
                <span className="menu-title">Light</span>
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className="menu-item px-3 my-0">
              <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
                <span className="menu-icon" data-kt-element="icon">
                  <i className="ki-duotone ki-moon fs-2">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </span>
                <span className="menu-title">Dark</span>
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className="menu-item px-3 my-0">
              <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
                <span className="menu-icon" data-kt-element="icon">
                  <i className="ki-duotone ki-screen fs-2">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                  </i>
                </span>
                <span className="menu-title">System</span>
              </a>
            </div>
            {/* end::Menu item */}
          </div>
          {/* end::Menu */}
        </div>
        {/* end::Theme mode */}
        {/* begin::User */}
        <div className="d-flex align-items-center ms-1" id="kt_header_user_menu_toggle">
          {/* begin::User info */}
          <div className="btn btn-flex align-items-center bg-hover-white bg-hover-opacity-10 py-2 px-2 px-md-3" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
            {/* begin::Name */}
            <div className="d-none d-md-flex flex-column align-items-end justify-content-center me-2 me-md-4">
              <span className="text-muted fs-8 fw-semibold lh-1 mb-1">Max</span>
              <span className="text-white fs-8 fw-bold lh-1">UX Designer</span>
            </div>
            {/* end::Name */}
            {/* begin::Symbol */}
            <div className="symbol symbol-30px symbol-md-40px">
              <img src="../../../../../media/avatars/300-1.jpg" alt="image" />
            </div>
            {/* end::Symbol */}
          </div>
          {/* end::User info */}
        </div>
        {/* end::User  */}
      </div>
      {/* end::Topbar */}
    </div>
    {/* end::Container */}
  </>
)

export {Topbar}
