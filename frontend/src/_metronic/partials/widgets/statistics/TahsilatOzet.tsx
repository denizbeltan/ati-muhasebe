import TahsilatMixed from "../mixed/TahsilatMixed"
import { FC } from 'react'

type Props = {
    className: string
}

const TahsilatOzet: FC<Props> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <TahsilatMixed/>
            {/* begin::Header */}
            <div className="card-header py-5">
                {/* begin::Title */}
                <h3 className="card-title fw-bold text-gray-800">Tahsilat ve Ödeme Özetleri</h3>
                {/* end::Title */}
            </div>
            {/* end::Header */}
            {/* begin::Card body */}
            {/* begin::Header */}
            <div className="card-header pt-0 pb-0">
                {/* begin::Title */}
                <h3 className="card-title fw-bold fs-5">Tahsilatlar</h3>
                {/* end::Title */}
            </div>
            {/* end::Header */}
            {/* begin::Separator */}
            <div className="separator mx-10"></div>
            {/* end::Separator */}

            {/* begin::Row */}
            <div className="row align-items-end h-3 gx-5 gx-xl-5">
                {/* begin::Col */}
                <div className="col-md-4 mb-5 mt-md-0">
                    <div className="card-body d-flex justify-content-between flex-column pb-0 px-0 pt-1">
                        {/* begin::Chart */}
                        <div className="d-flex flex-center w-100">
                            <div className="mixed-widget-17-chart" data-kt-chart-color="success" style={{ height: "300px" }}></div>
                        </div>
                        {/* end::Chart */}
                        {/* begin::Content */}
                        <div className="text-center w-100 position-relative z-index-1" style={{ marginTop: "-130px" }}>
                            {/* begin::Action */}
                            <div className="mb-9 mb-xxl-1">
                                <a href='#' className="btn btn-success fw-semibold" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Vadesi Gelmemiş</a>
                            </div>
                            {/* ed::Action */}
                        </div>
                        {/* end::Content */}
                    </div>
                </div>
                {/* end::Col */}
                {/* begin::Col */}
                <div className="col-md-4 mb-5 mt-md-0">
                    <div className="card-body d-flex justify-content-between flex-column pb-0 px-0 pt-1">
                        {/* begin::Chart */}
                        <div className="d-flex flex-center w-100">
                            <div className="mixed-widget-17-chart" data-kt-chart-color="danger" style={{ height: "300px" }}></div>
                        </div>
                        {/* end::Chart */}
                        {/* begin::Content */}
                        <div className="text-center w-100 position-relative z-index-1" style={{ marginTop: "-130px" }}>
                            {/* begin::Action */}
                            <div className="mb-9 mb-xxl-1">
                                <a href='#' className="btn btn-danger fw-semibold" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Vadesi Geçmiş</a>
                            </div>
                            {/* ed::Action */}
                        </div>
                        {/* end::Content */}
                    </div>
                </div>
                {/* end::Col */}
                {/* begin::Col */}
                <div className="col-md-4 mb-5 mt-md-0">
                    <div className="card-body d-flex justify-content-between flex-column pb-0 px-0 pt-1">
                        {/* begin::Chart */}
                        <div className="d-flex flex-center w-100">
                            <div className="mixed-widget-17-chart" data-kt-chart-color="primary" style={{ height: "300px" }}></div>
                        </div>
                        {/* end::Chart */}
                        {/* begin::Content */}
                        <div className="text-center w-100 position-relative z-index-1" style={{ marginTop: "-130px" }}>
                            {/* begin::Action */}
                            <div className="mb-9 mb-xxl-1">
                                <a href='#' className="btn btn-primary fw-semibold" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Vadesi Belirsiz</a>
                            </div>
                            {/* ed::Action */}
                        </div>
                        {/* end::Content */}
                    </div>
                </div>
                {/* end::Col */}
            </div>
            {/* end::Row */}
            {/* begin::Header */}
            <div className="card-header pt-0 pb-0">
                {/* begin::Title */}
                <h3 className="card-title fw-bold fs-5">Ödemeler</h3>
                {/* end::Title */}
            </div>
            {/* end::Header */}
            {/* begin::Separator */}
            <div className="separator mx-10"></div>
            {/* end::Separator */}

            {/* begin::Row */}
            <div className="row align-items-end h-3 gx-5 gx-xl-5">
                {/* begin::Col */}
                <div className="col-md-4 mb-5 mt-md-0">
                    <div className="card-body d-flex justify-content-between flex-column pb-0 px-0 pt-1">
                        {/* begin::Chart */}
                        <div className="d-flex flex-center w-100">
                            <div className="mixed-widget-17-chart" data-kt-chart-color="success" style={{ height: "300px" }}></div>
                        </div>
                        {/* end::Chart */}
                        {/* begin::Content */}
                        <div className="text-center w-100 position-relative z-index-1" style={{ marginTop: "-130px" }}>
                            {/* begin::Action */}
                            <div className="mb-9 mb-xxl-1">
                                <a href='#' className="btn btn-success fw-semibold" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Vadesi Gelmemiş</a>
                            </div>
                            {/* ed::Action */}
                        </div>
                        {/* end::Content */}
                    </div>
                </div>
                {/* end::Col */}
                {/* begin::Col */}
                <div className="col-md-4 mb-5 mt-md-0">
                    <div className="card-body d-flex justify-content-between flex-column pb-0 px-0 pt-1">
                        {/* begin::Chart */}
                        <div className="d-flex flex-center w-100">
                            <div className="mixed-widget-17-chart" data-kt-chart-color="danger" style={{ height: "300px" }}></div>
                        </div>
                        {/* end::Chart */}
                        {/* begin::Content */}
                        <div className="text-center w-100 position-relative z-index-1" style={{ marginTop: "-130px" }}>
                            {/* begin::Action */}
                            <div className="mb-9 mb-xxl-1">
                                <a href='#' className="btn btn-danger fw-semibold" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Vadesi Geçmiş</a>
                            </div>
                            {/* ed::Action */}
                        </div>
                        {/* end::Content */}
                    </div>
                </div>
                {/* end::Col */}
                {/* begin::Col */}
                <div className="col-md-4 mb-5 mt-md-0">
                    <div className="card-body d-flex justify-content-between flex-column pb-0 px-0 pt-1">
                        {/* begin::Chart */}
                        <div className="d-flex flex-center w-100">
                            <div className="mixed-widget-17-chart" data-kt-chart-color="primary" style={{ height: "300px" }}></div>
                        </div>
                        {/* end::Chart */}
                        {/* begin::Content */}
                        <div className="text-center w-100 position-relative z-index-1" style={{ marginTop: "-130px" }}>
                            {/* begin::Action */}
                            <div className="mb-9 mb-xxl-1">
                                <a href='#' className="btn btn-primary fw-semibold" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Vadesi Belirsiz</a>
                            </div>
                            {/* ed::Action */}
                        </div>
                        {/* end::Content */}
                    </div>
                </div>
                {/* end::Col */}
            </div>
            {/* end::Row */}
        </div>
    )
}

export { TahsilatOzet }
