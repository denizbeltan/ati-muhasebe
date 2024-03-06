import React from 'react'

export function GenelGiderTip() {
  return (
    <>
      <h3 className='fw-bolder my-2'>
        <span className='fs-6 text-gray-500 fw-bold ms-1'>GenelGiderTip</span>
      </h3>

      {/* begin::Post */}
      <div className="content flex-column-fluid" id="kt_content">
        {/* begin::Row */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
          {/* begin::Col */}
          <div className="col-md-4">
            {/* begin::Card */}
            <div className="card card-flush h-md-100">
              {/* begin::Card header */}
              <div className="card-header">
                {/* begin::Card title */}
                <div className="card-title">
                  <h2>Kurumsal Giderler</h2>
                </div>
                {/* end::Card title */}
              </div>
              {/* end::Card header */}
              {/* begin::Card body */}
              <div className="card-body pt-1">
                {/* begin::Permissions */}
                <div className="d-flex flex-column text-gray-600">
                  <div className="d-flex align-items-center py-2">
                    <span className="bullet bg-primary me-3"></span>All Admin Controls</div>
                  <div className="d-flex align-items-center py-2">
                    <span className="bullet bg-primary me-3"></span>View and Edit Financial Summaries</div>
                  <div className="d-flex align-items-center py-2">
                    <span className="bullet bg-primary me-3"></span>Enabled Bulk Reports</div>
                  <div className="d-flex align-items-center py-2">
                    <span className="bullet bg-primary me-3"></span>View and Edit Payouts</div>
                  <div className="d-flex align-items-center py-2">
                    <span className="bullet bg-primary me-3"></span>View and Edit Disputes</div>
                  <div className='d-flex align-items-center py-2'>
                    <span className='bullet bg-primary me-3'></span>
                    <em>and 7 more...</em>
                  </div>
                </div>
                {/* end::Permissions */}
              </div>
              {/* end::Card body */}
              {/* begin::Card footer */}
              <div className="card-footer flex-wrap pt-0">
                <a href="apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2">Kategoriyi Düzenle</a>
                <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Yeni Tip Ekle</button>
              </div>
              {/* end::Card footer */}
            </div>
            {/* end::Card */}
          </div>
          {/* end::Col */}
          {/* begin::Col */}
          <div className="col-md-4">
            {/* begin::Card */}
            <div className="card card-flush h-md-100">
              {/* begin::Card header */}
              <div className="card-header">
                {/* begin::Card title */}
                <div className="card-title">
                  <h2>Finansal</h2>
                </div>
                {/* end::Card title */}
              </div>
              {/* end::Card header */}
              {/* begin::Card body */}
              <div className="card-body pt-1">
                {/* begin::Permissions */}
                <div className="d-flex flex-column text-gray-600">
                  <div className="d-flex align-items-center py-2">
                    <span className="bullet bg-primary me-3"></span>Some Admin Controls</div>
                  <div className="d-flex align-items-center py-2">
                    <span className="bullet bg-primary me-3"></span>View Financial Summaries only</div>
                  <div className="d-flex align-items-center py-2">
                    <span className="bullet bg-primary me-3"></span>View and Edit API Controls</div>
                  <div className="d-flex align-items-center py-2">
                    <span className="bullet bg-primary me-3"></span>View Payouts only</div>
                  <div className="d-flex align-items-center py-2">
                    <span className="bullet bg-primary me-3"></span>View and Edit Disputes</div>
                  <div className='d-flex align-items-center py-2'>
                    <span className='bullet bg-primary me-3'></span>
                    <em>and 3 more...</em>
                  </div>
                </div>
                {/* end::Permissions */}
              </div>
              {/* end::Card body */}
              {/* begin::Card footer */}
              <div className="card-footer flex-wrap pt-0">
                <a href="apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2">Kategoriyi Düzenle</a>
                <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Yeni Tip Ekle</button>
              </div>
              {/* end::Card footer */}
            </div>
            {/* end::Card */}
          </div>
          {/* end::Col */}
          {/* begin::Add new card */}
          <div className="ol-md-4">
            {/* begin::Card */}
            <div className="card h-md-100">
              {/* begin::Card body */}
              <div className="card-body d-flex flex-center">
                {/* begin::Button */}
                <button type="button" className="btn btn-clear d-flex flex-column flex-center" data-bs-toggle="modal" data-bs-target="#kt_modal_add_role">
                  {/* begin::Illustration */}
                  <img src="assets/media/illustrations/sketchy-1/4.png" alt="" className="mw-100 mh-150px mb-7" />
                  {/* end::Illustration */}
                  {/* begin::Label */}
                  <div className="fw-bold fs-3 text-gray-600 text-hover-primary">Yeni Kategori Ekle</div>
                  {/* end::Label */}
                </button>
                {/* begin::Button */}
              </div>
              {/* begin::Card body */}
            </div>
            {/* begin::Card */}
          </div>
          {/* begin::Add new card */}
        </div>
        {/* end::Row */}
        {/* begin::Modals */}
        {/* begin::Modal - Add role */}
        <div className="modal fade" id="kt_modal_add_role" tabIndex={-1} aria-hidden="true">
          {/* begin::Modal dialog */}
          <div className="modal-dialog modal-dialog-centered mw-750px">
            {/* begin::Modal content */}
            <div className="modal-content">
              {/* begin::Modal header */}
              <div className="modal-header">
                {/* begin::Modal title */}
                <h2 className="fw-bold">Add a Role</h2>
                {/* end::Modal title */}
                {/* begin::Close */}
                <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-roles-modal-action="close">
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </div>
                {/* end::Close */}
              </div>
              {/* end::Modal header */}
              {/* begin::Modal body */}
              <div className="modal-body scroll-y mx-lg-5 my-7">
                {/* begin::Form */}
                <form id="kt_modal_add_role_form" className="form" action="#">
                  {/* begin::Scroll */}
                  <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_role_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_role_header" data-kt-scroll-wrappers="#kt_modal_add_role_scroll" data-kt-scroll-offset="300px">
                    {/* begin::Input group */}
                    <div className="fv-row mb-10">
                      {/* begin::Label */}
                      <label className="fs-5 fw-bold form-label mb-2">
                        <span className="required">Role name</span>
                      </label>
                      {/* end::Label */}
                      {/* begin::Input */}
                      <input className="form-control form-control-solid" placeholder="Enter a role name" name="role_name" />
                      {/* end::Input */}
                    </div>
                    {/* end::Input group */}
                    {/* begin::Permissions */}
                    <div className="fv-row">
                      {/* begin::Label */}
                      <label className="fs-5 fw-bold form-label mb-2">Role Permissions</label>
                      {/* end::Label */}
                      {/* begin::Table wrapper */}
                      <div className="table-responsive">
                        {/* begin::Table */}
                        <table className="table align-middle table-row-dashed fs-6 gy-5">
                          {/* begin::Table body */}
                          <tbody className="text-gray-600 fw-semibold">
                            {/* begin::Table row */}
                            <tr>
                              <td className="text-gray-800">Administrator Access
                                <span className="ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="Allows a full access to the system">
                                  <i className="ki-duotone ki-information fs-7">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </span></td>
                              <td>
                                {/* begin::Checkbox */}
                                <label className="form-check form-check-custom form-check-solid me-9">
                                  <input className="form-check-input" type="checkbox" value="" id="kt_roles_select_all" />
                                  <span className="form-check-label">Select all</span>
                                  {/* htmlFor="kt_roles_select_all" */}
                                </label>
                                {/* end::Checkbox */}
                              </td>
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">User Management</td>
                              {/* end::Label */}
                              {/* begin::Options */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="user_management_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="user_management_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="user_management_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Options */}
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">Content Management</td>
                              {/* end::Label */}
                              {/* begin::Options */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="content_management_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="content_management_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="content_management_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Options */}
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">Financial Management</td>
                              {/* end::Label */}
                              {/* begin::Options */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="financial_management_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="financial_management_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="financial_management_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Options */}
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">Reporting</td>
                              {/* end::Label */}
                              {/* begin::Options */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="reporting_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="reporting_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="reporting_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Options */}
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">Payroll</td>
                              {/* end::Label */}
                              {/* begin::Options */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="payroll_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="payroll_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="payroll_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Options */}
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">Disputes Management</td>
                              {/* end::Label */}
                              {/* begin::Options */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="disputes_management_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="disputes_management_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="disputes_management_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Options */}
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">API Controls</td>
                              {/* end::Label */}
                              {/* begin::Options */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="api_controls_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="api_controls_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="api_controls_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Options */}
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">Database Management</td>
                              {/* end::Label */}
                              {/* begin::Options */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="database_management_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="database_management_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="database_management_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Options */}
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">Repository Management</td>
                              {/* end::Label */}
                              {/* begin::Options */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="repository_management_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="repository_management_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="repository_management_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Options */}
                            </tr>
                            {/* end::Table row */}
                          </tbody>
                          {/* end::Table body */}
                        </table>
                        {/* end::Table */}
                      </div>
                      {/* end::Table wrapper */}
                    </div>
                    {/* end::Permissions */}
                  </div>
                  {/* end::Scroll */}
                  {/* begin::Actions */}
                  <div className="text-center pt-15">
                    <button type="reset" className="btn btn-light me-3" data-kt-roles-modal-action="cancel">Discard</button>
                    <button type="submit" className="btn btn-primary" data-kt-roles-modal-action="submit">
                      <span className="indicator-label">Submit</span>
                      <span className="indicator-progress">Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                    </button>
                  </div>
                  {/* end::Actions */}
                </form>
                {/* end::Form */}
              </div>
              {/* end::Modal body */}
            </div>
            {/* end::Modal content */}
          </div>
          {/* end::Modal dialog */}
        </div>
        {/* end::Modal - Add role */}
        {/* begin::Modal - Update role */}
        <div className="modal fade" id="kt_modal_update_role" tabIndex={-1} aria-hidden="true">
          {/* begin::Modal dialog */}
          <div className="modal-dialog modal-dialog-centered mw-750px">
            {/* begin::Modal content */}
            <div className="modal-content">
              {/* begin::Modal header */}
              <div className="modal-header">
                {/* begin::Modal title */}
                <h2 className="fw-bold">Update Role</h2>
                {/* end::Modal title */}
                {/* begin::Close */}
                <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-roles-modal-action="close">
                  <i className="ki-duotone ki-cross fs-1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </div>
                {/* end::Close */}
              </div>
              {/* end::Modal header */}
              {/* begin::Modal body */}
              <div className="modal-body scroll-y mx-5 my-7">
                {/* begin::Form */}
                <form id="kt_modal_update_role_form" className="form" action="#">
                  {/* begin::Scroll */}
                  <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_update_role_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_update_role_header" data-kt-scroll-wrappers="#kt_modal_update_role_scroll" data-kt-scroll-offset="300px">
                    {/* begin::Input group */}
                    <div className="fv-row mb-10">
                      {/* begin::Label */}
                      <label className="fs-5 fw-bold form-label mb-2">
                        <span className="required">Role name</span>
                      </label>
                      {/* end::Label */}
                      {/* begin::Input */}
                      <input className="form-control form-control-solid" placeholder="Enter a role name" name="role_name" value="Developer" />
                      {/* end::Input */}
                    </div>
                    {/* end::Input group */}
                    {/* begin::Permissions */}
                    <div className="fv-row">
                      {/* begin::Label */}
                      <label className="fs-5 fw-bold form-label mb-2">Role Permissions</label>
                      {/* end::Label */}
                      {/* begin::Table wrapper */}
                      <div className="table-responsive">
                        {/* begin::Table */}
                        <table className="table align-middle table-row-dashed fs-6 gy-5">
                          {/* begin::Table body */}
                          <tbody className="text-gray-600 fw-semibold">
                            {/* begin::Table row */}
                            <tr>
                              <td className="text-gray-800">Administrator Access
                                <span className="ms-1" data-bs-toggle="tooltip" title="Allows a full access to the system">
                                  <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </span></td>
                              <td>
                                {/* begin::Checkbox */}
                                <label className="form-check form-check-sm form-check-custom form-check-solid me-9">
                                  <input className="form-check-input" type="checkbox" value="" id="kt_roles_select_all" />
                                  <span className="form-check-label" >Select all</span>
                                  {/* htmlFor="kt_roles_select_all" */}
                                </label>
                                {/* end::Checkbox */}
                              </td>
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">User Management</td>
                              {/* end::Label */}
                              {/* begin::Input group */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="user_management_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="user_management_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="user_management_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Input group */}
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">Content Management</td>
                              {/* end::Label */}
                              {/* begin::Input group */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="content_management_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="content_management_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="content_management_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Input group */}
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">Financial Management</td>
                              {/* end::Label */}
                              {/* begin::Input group */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="financial_management_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="financial_management_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="financial_management_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Input group */}
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">Reporting</td>
                              {/* end::Label */}
                              {/* begin::Input group */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="reporting_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="reporting_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="reporting_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Input group */}
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">Payroll</td>
                              {/* end::Label */}
                              {/* begin::Input group */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="payroll_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="payroll_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="payroll_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Input group */}
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">Disputes Management</td>
                              {/* end::Label */}
                              {/* begin::Input group */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="disputes_management_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="disputes_management_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="disputes_management_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Input group */}
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">API Controls</td>
                              {/* end::Label */}
                              {/* begin::Input group */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="api_controls_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="api_controls_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="api_controls_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Input group */}
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">Database Management</td>
                              {/* end::Label */}
                              {/* begin::Input group */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="database_management_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="database_management_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="database_management_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Input group */}
                            </tr>
                            {/* end::Table row */}
                            {/* begin::Table row */}
                            <tr>
                              {/* begin::Label */}
                              <td className="text-gray-800">Repository Management</td>
                              {/* end::Label */}
                              {/* begin::Input group */}
                              <td>
                                {/* begin::Wrapper */}
                                <div className="d-flex">
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="repository_management_read" />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" value="" name="repository_management_write" />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/* end::Checkbox */}
                                  {/* begin::Checkbox */}
                                  <label className="form-check form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" name="repository_management_create" />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/* end::Checkbox */}
                                </div>
                                {/* end::Wrapper */}
                              </td>
                              {/* end::Input group */}
                            </tr>
                            {/* end::Table row */}
                          </tbody>
                          {/* end::Table body */}
                        </table>
                        {/* end::Table */}
                      </div>
                      {/* end::Table wrapper */}
                    </div>
                    {/* end::Permissions */}
                  </div>
                  {/* end::Scroll */}
                  {/* begin::Actions */}
                  <div className="text-center pt-15">
                    <button type="reset" className="btn btn-light me-3" data-kt-roles-modal-action="cancel">Discard</button>
                    <button type="submit" className="btn btn-primary" data-kt-roles-modal-action="submit">
                      <span className="indicator-label">Submit</span>
                      <span className="indicator-progress">Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                    </button>
                  </div>
                  {/* end::Actions */}
                </form>
                {/* end::Form */}
              </div>
              {/* end::Modal body */}
            </div>
            {/* end::Modal content */}
          </div>
          {/* end::Modal dialog */}
        </div>
        {/* end::Modal - Update role */}
        {/* end::Modals */}
      </div>
      {/* end::Post */}
    </>
  )
}
