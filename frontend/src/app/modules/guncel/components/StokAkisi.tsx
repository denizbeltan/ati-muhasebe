import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { UsersListHeader } from './components/header/UsersListHeader'
import { UsersTable } from './table/UsersTable'
import { UserEditModal } from './user-edit-modal/UserEditModal'
import { KTCard } from './../../../../_metronic/helpers'
import React from 'react'

const StokAkisiModul = () => {
  const { itemIdForUpdate } = useListView()
  return (
    <>
      <h3 className='fw-bolder my-2'>
        <span className='fs-6 text-gray-500 fw-bold ms-1'>Stok Akışı</span>
      </h3>
      <KTCard>
        <UsersListHeader />
        <UsersTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  )
}

const StokAkisi = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <StokAkisiModul />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { StokAkisi }