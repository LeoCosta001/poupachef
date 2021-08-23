import React from 'react';
import ButtonDefault from '../ButtonDefault/index';

function ListTable({ listSuppliers }) {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>Telefone</th>
            <th>Proprietario</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          { 
            listSuppliers && (
            listSuppliers.map((supplier) => 
              <tr key={supplier.publicId}>
                <th>{supplier.name}</th>
                <th>{supplier.cnpj}</th>
                <th>{supplier.phoneNumber}</th>
                <th>{supplier.ownerName}</th>
                <th>
                  <ButtonDefault text="Edit" link={`/supplierDetail/${supplier.publicId}`} />
                </th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default ListTable;