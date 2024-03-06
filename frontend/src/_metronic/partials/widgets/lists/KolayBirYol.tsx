
import React, { useEffect, useRef } from 'react'

type Props = {
    className: string
}

const KolayBirYol: React.FC<Props> = ({ className }) => {

    return (
        <div className={`card ${className}`}>
            {/* begin::Header*/}
            <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bold text-gray-900">KolayBi' Yolu Var!</span>
                </h3>
            </div>
            {/* end::Header*/}
            {/* begin::Body*/}
            <div className="card-body pt-5">
                {/* begin::Item*/}
                <div className="d-flex align-items-center mb-7">
                    {/* begin::Symbol*/}
                    <div className="symbol symbol-50px me-5">
                        <span className="symbol-label bg-light-success">
                            <i className="ki-duotone ki-abstract-26 fs-2x text-success">
                                <span className="path1"></span>
                                <span className="path2"></span>
                            </i>
                        </span>
                    </div>
                    {/* end::Symbol*/}
                    {/* begin::Text*/}
                    <div className="d-flex flex-column">
                        <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">Davet Et ve Kazan</a>
                    </div>
                    {/* end::Text*/}
                </div>
                {/* end::Item*/}
                {/* begin::Item*/}
                <div className="d-flex align-items-center mb-7">
                    {/* begin::Symbol*/}
                    <div className="symbol symbol-50px me-5">
                        <span className="symbol-label bg-light-warning">
                            <i className="ki-duotone ki-pencil fs-2x text-warning">
                                <span className="path1"></span>
                                <span className="path2"></span>
                            </i>
                        </span>
                    </div>
                    {/* end::Symbol*/}
                    {/* begin::Text*/}
                    <div className="d-flex flex-column">
                        <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">iWalllet</a>
                    </div>
                    {/* end::Text*/}
                </div>
                {/* end::Item*/}
                {/* begin::Item*/}
                <div className="d-flex align-items-center mb-7">
                    {/* begin::Symbol*/}
                    <div className="symbol symbol-50px me-5">
                        <span className="symbol-label bg-light-primary">
                            <i className="ki-duotone ki-message-text-2 fs-2x text-primary">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                            </i>
                        </span>
                    </div>
                    {/* end::Symbol*/}
                    {/* begin::Text*/}
                    <div className="d-flex flex-column">
                        <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">Müşavirini Davet Et</a>
                    </div>
                    {/* end::Text*/}
                </div>
                {/* end::Item*/}
                {/* begin::Item*/}
                <div className="d-flex align-items-center mb-7">
                    {/* begin::Symbol*/}
                    <div className="symbol symbol-50px me-5">
                        <span className="symbol-label bg-light-danger">
                            <i className="ki-duotone ki-disconnect fs-2x text-danger">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                                <span className="path5"></span>
                            </i>
                        </span>
                    </div>
                    {/* end::Symbol*/}
                    {/* begin::Text*/}
                    <div className="d-flex flex-column">
                        <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">Blog'</a>
                    </div>
                    {/* end::Text*/}
                </div>
                {/* end::Item*/}
                {/* begin::Item*/}
                <div className="d-flex align-items-center">
                    {/* begin::Symbol*/}
                    <div className="symbol symbol-50px me-5">
                        <span className="symbol-label bg-light-info">
                            <i className="ki-duotone ki-security-user fs-2x text-info">
                                <span className="path1"></span>
                                <span className="path2"></span>
                            </i>
                        </span>
                    </div>
                    {/* end::Symbol*/}
                    {/* begin::Text*/}
                    <div className="d-flex flex-column">
                        <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">Sosyal Medya</a>
                    </div>
                    {/* end::Text*/}
                </div>
                {/* end::Item*/}
            </div>
            {/* end::Body*/}
        </div>
    )
}

export { KolayBirYol }
