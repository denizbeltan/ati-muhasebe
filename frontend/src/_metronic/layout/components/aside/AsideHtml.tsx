import { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useLayout } from '../../core'
import { KTIcon, toAbsoluteUrl } from '../../../helpers'
import {HtmlMenuTabs} from './Tabs/HtmlMenuTabs'

const AsideFromHtml = () => {
	return (
		<>
		<div id="kt_aside" className="aside card" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_toggle">
			{/* <!--begin::Aside menu--> */}
			<div className="aside-menu flex-column-fluid px-4">
				{/* <!--begin::Aside Menu--> */}
				<div className="hover-scroll-overlay-y mh-100 my-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="{default: '#kt_aside_footer', lg: '#kt_header, #kt_aside_footer'}" data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu" data-kt-scroll-offset="{default: '5px', lg: '75px'}">
					{/* <!--begin::Menu--> */}
					<HtmlMenuTabs/>
					{/* <!--end::Menu--> */}
				</div>
			</div>
			{/* <!--end::Aside menu--> */}
		</div>
		</>
	)
}

export { AsideFromHtml }
