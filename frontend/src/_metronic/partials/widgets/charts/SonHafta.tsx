
import React, { useEffect, useRef } from 'react'
import KTChartsWidget20 from "./ChartsWidget20"
 

type Props = {
    className: string
}

const SonHafta: React.FC<Props> = ({ className }) => {

    return (
        <div className={`card ${className}`}>
            {/* begin::Header*/}
            <div className="card-header py-5">
                {/* begin::Title*/}
                <h3 className="card-title fw-bold text-gray-800">Son 1 Haftalık Nakit Akışı</h3>
                {/* end::Title*/}
                {/* begin::Toolbar*/}
                <div className="card-toolbar">
                    {/* begin::Daterangepicker(defined in src/js/layout/app.js)*/}
                    <div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" className="btn btn-sm btn-light d-flex align-items-center px-4">
                        {/* begin::Display range*/}
                        <div className="text-gray-600 fw-bold">Loading date range...</div>
                        {/* end::Display range*/}
                        <i className="ki-duotone ki-calendar-8 text-gray-500 lh-0 fs-2 ms-2 me-0">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                            <span className="path5"></span>
                            <span className="path6"></span>
                        </i>
                    </div>
                    {/* end::Daterangepicker*/}
                </div>
                {/* end::Toolbar*/}
            </div>
            {/* end::Header*/}
            {/* begin::Card body*/}
            <div className="card-body d-flex justify-content-between flex-column pb-0 px-0 pt-1">
                {/* begin::Chart*/}
                <div id="kt_charts_widget_20" className="min-h-auto ps-4 pe-6" data-kt-chart-info="Revenue" style={{height: "300px"}}><KTChartsWidget20/></div>
                {/* end::Chart*/}
            </div>
            {/* end::Card body*/}
        </div>
    )
}

export { SonHafta }
