import { FC } from 'react'

type Props = {
    className: string
}

const SizeOzel: FC<Props> = ({ className }) => (
    <div
        className={`card ${className} theme-dark-bg-body`}
    >
        {/* begin::Engage widget 7*/}
        {/* begin::Header*/}
        <div className="card-header pt-7">
            {/* begin::Title*/}
            <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-900">Size Özel Ayrıcalıklar</span>
            </h3>
            {/* end::Title*/}
            {/* begin::Toolbar*/}
            <div className="card-toolbar">
                <a href="index.html" className="btn btn-sm btn-light">Daha Fazla</a>
            </div>
            {/* end::Toolbar*/}
        </div>
        {/* end::Header*/}
        {/* begin::Card body*/}
        <div className="card-body pt-3">
            {/* begin::Row*/}
            <div className="row align-items-end h-3 gx-5 gx-xl-5">
                {/* begin::Col*/}
                <div className="col-md-2 mb-5 mt-md-0">
                    {/* begin::Overlay*/}
                    <a className="d-block overlay" data-fslightbox="lightbox-hot-sales" href="assets/media/stock/900x600/42.jpg">
                        {/* begin::Image*/}
                        <div className="overlay-wrapper bgi-position-center bgi-no-repeat bgi-size-cover h-80px card-rounded mb-3" style={{ height: '266px', backgroundColor: 'gray' }}></div>
                        {/* end::Image*/}
                    </a>
                    {/* end::Overlay*/}
                </div>
                {/* end::Col*/}
                {/* begin::Col*/}
                <div className="col-md-2 mb-5 mt-md-0">
                    {/* begin::Overlay*/}
                    <a className="d-block overlay" data-fslightbox="lightbox-hot-sales" href="assets/media/stock/900x600/42.jpg">
                        {/* begin::Image*/}
                        <div className="overlay-wrapper bgi-position-center bgi-no-repeat bgi-size-cover h-80px card-rounded mb-3" style={{ height: '266px', backgroundColor: 'gray' }}></div>
                        {/* end::Image  style="height: 266px;background-image:url('assets/media/stock/900x600/42.jpg');"*/}
                    </a>
                    {/* end::Overlay*/}
                </div>
                {/* end::Col*/}
                {/* begin::Col*/}
                <div className="col-md-2 mb-5 mt-md-0">
                    {/* begin::Overlay*/}
                    <a className="d-block overlay" data-fslightbox="lightbox-hot-sales" href="assets/media/stock/900x600/42.jpg">
                        {/* begin::Image*/}
                        <div className="overlay-wrapper bgi-position-center bgi-no-repeat bgi-size-cover h-80px card-rounded mb-3" style={{ height: '266px', backgroundColor: 'gray' }}></div>
                        {/* end::Image*/}
                    </a>
                    {/* end::Overlay*/}
                </div>
                {/* end::Col*/}
                {/* begin::Col*/}
                <div className="col-md-2 mb-5 mt-md-0">
                    {/* begin::Overlay*/}
                    <a className="d-block overlay" data-fslightbox="lightbox-hot-sales" href="assets/media/stock/900x600/42.jpg">
                        {/* begin::Image*/}
                        <div className="overlay-wrapper bgi-position-center bgi-no-repeat bgi-size-cover h-80px card-rounded mb-3" style={{ height: '266px', backgroundColor: 'gray' }}></div>
                        {/* end::Image*/}
                    </a>
                    {/* end::Overlay*/}
                </div>
                {/* end::Col*/}
            </div>
            {/* end::Row*/}
        </div>
        {/* end::Card body*/}
        {/* end::Engage widget 7*/}
    </div>
)

export { SizeOzel }
