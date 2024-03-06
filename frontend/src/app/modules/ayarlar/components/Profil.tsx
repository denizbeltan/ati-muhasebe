import React from 'react'
import { Link } from 'react-router-dom'
import { KTIcon } from '../../../../_metronic/helpers'
import {
  ChartsWidget1,
  ListsWidget5,
  TablesWidget1,
  TablesWidget5,
} from '../../../../_metronic/partials/widgets'

export function Profil() {
  return (
    <>
      <h3 className='fw-bolder my-2'>
        <span className='fs-6 text-gray-500 fw-bold ms-1'>Profil</span>
      </h3>

      {/* row 1 */}
      <div className='row gy-10 gx-xl-10'>

        {/* col 1 */}
        <div className='col-xl-6 align-items-stretch'>
          <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
            <div className='card-header cursor-pointer'>
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0'>Kullanıcı Bilgileri</h3>
              </div>

              <Link to='/crafted/account/settings' className='btn btn-primary align-self-center'>
                Bilgileri Düzenle
              </Link>
            </div>


            <div className='row gy-10 gx-xl-10'>

              <div className='col-xl-12'>
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

            </div>
          </div>
        </div>

        {/* col 2 */}
        <div className='col-xl-6 align-items-stretch'>
          <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
            <div className='card-header cursor-pointer'>
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0'>Şifre Değiştirme</h3>
              </div>

              <Link to='/crafted/account/settings' className='btn btn-primary align-self-center'>
                Güncelle
              </Link>
            </div>

            <div className='col-xl-12'>
              <div className='card-body p-9'>
                <div className='row gy-10 gx-xl-10'>

                  <div className='col-xl-12'>

                    <div className="row mb-3">
                      <label className="col-lg-4 fw-bold text-muted">Mevcut Şifre</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="*******"
                      />
                    </div>

                    <div className="row mb-3">
                      <label className="col-lg-4 fw-bold text-muted">Yeni Şifre</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="*******"
                      />
                    </div>

                    <div className="row mb-3">
                      <label className="col-lg-4 fw-bold text-muted">Yeni Şifre Tekrar</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="*******"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* row 2 */}
      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-12 align-items-stretch'>
          <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
            <div className='card-header cursor-pointer'>
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0'>Sistem Dili</h3>
              </div>

              <div className='d-flex my-2'>
                <select
                  name='status'
                  data-control='select2'
                  data-hide-search='true'
                  className='form-select form-select-white form-select-sm w-200px h-50px'
                  defaultValue='Online'
                >
                  <option value='Online'>Türkçe</option>
                  <option value='Pending'>English</option>
                  <option value='Declined'>Deutsch</option>
                  <option value='Accepted'>Accepted</option>
                </select>
              </div>
            </div>

            <div className='row gy-10 gx-xl-10'>
              <div className='col-xl-12'>
                <div className='card-body p-9'>
                    <label className='col-lg-4 fw-bold text-muted'>Sistem dilini değiştirin.</label>
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
