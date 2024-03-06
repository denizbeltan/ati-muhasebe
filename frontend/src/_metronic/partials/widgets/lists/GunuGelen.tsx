
import React, { useEffect, useRef } from 'react'

type Props = {
    className: string
}

const GunuGelen: React.FC<Props> = ({ className }) => {

    return (
        <div className={`card ${className}`}>
            {/* begin::Header */}
            <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bold text-gray-900">Günü gelen işlemler</span>
                </h3>
            </div>
            {/* end::Header */}
            {/* begin::Body */}
            <div className="card-body pt-5">
                {/* begin::Item */}
                <div className="d-flex align-items-center mb-xl-1">
                    <a href="#" className="btn btn-light-dark w-100">Bugün</a>
                </div>
                {/* end::Item */}
                {/* begin::Item */}
                <div className="d-flex align-items-center mb-xl-1">
                    <a href="#" className="btn btn-light-dark w-100">Yaklaşanlar</a>
                </div>
                {/* end::Item */}
                {/* begin::Item */}
                <div className="d-flex align-items-center mb-xl-1">
                    <a href="#" className="btn btn-light-dark w-100">Tarihi Geçenler</a>
                </div>
                {/* end::Item */}

            </div>
            {/* end::Body */}
        </div >
    )
}

export { GunuGelen }
