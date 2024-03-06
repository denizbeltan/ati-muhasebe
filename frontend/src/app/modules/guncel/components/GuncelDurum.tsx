import React from 'react'
import {
    SizeOzel,
    SonHafta,
    TahsilatOzet,
    KolayBirYol,
    GunuGelen,
    Mobil
  } from '../../../../_metronic/partials/widgets'

export function GuncelDurum() {
    return (
        <>
            <h3 className='fw-bolder my-2'>
                <span className='fs-6 text-gray-500 fw-bold ms-1'>Güncel Durum</span>
            </h3>
            {/* begin::Row */}
            <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                {/* begin::Col */}
                <div className="col-xl-8 mb-xl-10">
                    {/* begin::Chart widget 20  */}
                    <SizeOzel className='card card-flush h-xl-15 mb-5 mb-xl-10' />
                    {/* end::Chart widget 20 */}
                    {/* begin::Chart sonhafta */}
                    {/* <SonHafta className='card card-flush h-xl-80 mb-5 mb-xl-10' /> */}
                    {/* end::Chart son hafta */}
                    {/* begin::Chart widget 20 */}
                    {/* <TahsilatOzet className='card card-flush h-xl-80 mb-3 mb-xl-10' /> */}
                    {/* end::Chart widget 20 */}
                </div>
                {/* end::Col */}

                {/* begin::Col */}
                <div className="col-xl-4 mb-4">
                    <KolayBirYol className='card h-md-70 mb-5' />
                    <GunuGelen className='card h-md-70 mb-5' />
                    <Mobil />
                </div>
                {/* end::Col */}
            </div>
            {/* end::Row */}
        </>
    )
}
