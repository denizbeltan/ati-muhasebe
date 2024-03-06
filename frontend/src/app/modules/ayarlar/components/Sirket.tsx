import React from 'react'
import { Link } from 'react-router-dom'
import { KTIcon } from '../../../../_metronic/helpers'
import {
  ChartsWidget1,
  ListsWidget5,
  TablesWidget1,
  TablesWidget5,
} from '../../../../_metronic/partials/widgets'

export function Sirket() {
  return (
    <>
      <h3 className='fw-bolder my-2'>
        <span className='fs-6 text-gray-500 fw-bold ms-1'>Şirket</span>
      </h3>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>ATİMAK MÜHENDİSLİK DANIŞMANLIK İNŞAAT SANAYİ VE TİCARET ANONİM ŞİRKETİ</h3>
          </div>

          <Link to='/crafted/account/settings' className='btn btn-primary align-self-center'>
            Bilgileri Düzenle
          </Link>
        </div>

        <div className='row gy-10 gx-xl-10'>

          <div className='col-xl-4'>
            <div className='card-body p-9'>
              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Para Birimi</label>

                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-gray-900'>TRY</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Telefon</label>

                <div className='col-lg-8 fv-row'>
                  <span className='fw-bold fs-6'>+90 533 333 3333</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>
                  E-Posta
                </label>

                <div className='col-lg-8 d-flex align-items-center'>
                  <span className='fw-bolder fs-6 me-2'>m@atimak.com.tr</span>

                  <span className='badge badge-success'>Verified</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Website</label>

                <div className='col-lg-8'>
                  <a href='#' className='fw-bold fs-6 text-gray-900 text-hover-primary'>
                  www.atimak.com
                  </a>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Sektör</label>

                <div className='col-lg-8'>
                  <a href='#' className='fw-bold fs-6 text-gray-900 text-hover-primary'>
                    Eğitim Danışmanlık
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className='col-xl-4'>
            <div className='card-body p-9'>
              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Kayıt Tarihi</label>

                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-gray-900'>...</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Abonelik Bitiş Tarihi</label>

                <div className='col-lg-8 fv-row'>
                  <span className='fw-bold fs-6'>12.10.2024</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>
                Ülke
                </label>

                <div className='col-lg-8 d-flex align-items-center'>
                  <span className='fw-bolder fs-6 me-2'>TR</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Şehir </label>

                <div className='col-lg-8'>
                  <a href='#' className='fw-bold fs-6 text-gray-900 text-hover-primary'>
                  Akhisar/Manisa
                  </a>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>
                Adres 
                  <i
                    className='fas fa-exclamation-circle ms-1 fs-7'
                    data-bs-toggle='tooltip'
                    title='Country of origination'
                  ></i>
                </label>

                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-gray-900'>Ragıpbey Mah. 151.Cadde No:8/18</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Şirket Tipi</label>

                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-gray-900'>Tüzel</span>
                </div>
              </div>

            </div>
          </div>

          <div className='col-xl-4'>
            <div className='card-body p-9'>
              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>VKN/TCKN</label>

                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-gray-900'>1020939789</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Vergi Dairesi</label>

                <div className='col-lg-8 fv-row'>
                  <span className='fw-bold fs-6'> AKHİSAR VERGİ DAİRESİ</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>
                MERSİS Kodu
                </label>

                <div className='col-lg-8 d-flex align-items-center'>
                  <span className='fw-bolder fs-6 me-2'>0102093978900001</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>e-Fatura Sağlayıcısı</label>

                <div className='col-lg-8'>
                  <a href='#' className='fw-bold fs-6 text-gray-900 text-hover-primary'>
                  eFinans - Tanımlı
                  </a>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>
                Kullanılan Belge Türü
                  <i
                    className='fas fa-exclamation-circle ms-1 fs-7'
                    data-bs-toggle='tooltip'
                    title='Country of origination'
                  ></i>
                </label>

                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-gray-900'>Fatura</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>İşletme Merkezi</label>

                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-gray-900'>MANİSA</span>
                </div>
              </div>

              <div className='row mb-10'>
                <label className='col-lg-4 fw-bold text-muted'>Sicil Numarası</label>

                <div className='col-lg-8'>
                  <span className='fw-bold fs-6'>11338</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ChartsWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div> */}

    </>
  )
}
