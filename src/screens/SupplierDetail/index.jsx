import React from 'react';
import ThemeContext from '../../themes/context';

import InputDefault from '../../components/InputDefault/index';

function SupplierDetail() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={`${theme} SupplierDetail__wrapper`}>
          <div className="SupplierDetail__header">
            <h2>Detalhes do fornecedor</h2>
            <button className="SupplierDetail__header-btn">Submit</button>
          </div>
          <div className="SupplierDetail__sections">

            <div className="SupplierDetail__section-container">
              <div className="Input__organization SupplierDetail__section-details">
                
                <InputDefault title="Nome" type="text" placeholder="Nome" />

                <InputDefault title="CNPJ" type="text" placeholder="CNPJ" />
      
                <InputDefault title="Telefone" type="text" placeholder="Telefone" />
              </div>
            </div>

            <div className="SupplierDetail__section-container">
              <div className="SupplierDetail__section-Owner">
                <h2>Proprietario</h2>
                <div className="Input__organization SupplierDetail__section-Owner-container">
                  
                  <InputDefault title="Nome" type="text" placeholder="Nome do proprietario" />

                  <InputDefault title="Email" type="email" placeholder="Email" />
                  
                  <InputDefault title="Telefone" type="text" placeholder="Numero de Telefone" />

                </div>
              </div>
            </div>

            <div className="SupplierDetail__section-container">
              <div className="SupplierDetail__section-Address">
                <h2>Address</h2>
                <div className="Input__organization SupplierDetail__section-Address">
                  <InputDefault title="Endereco" type="text" placeholder="Endereço" />

                  <InputDefault title="Numero" type="text" placeholder="Numero da casa" />

                  <InputDefault title="Complemento" type="text" placeholder="Ex: Casa 1..." />

                  <InputDefault title="Bairro" type="text" placeholder="Bairro" />

                  <InputDefault title="Cidade" type="text" placeholder="Cidade" />
                  
                  <InputDefault title="Estado" type="text" placeholder="Estado" />

                  <InputDefault title="Codigo-Postal" type="text" placeholder="Codigo Postal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default SupplierDetail;