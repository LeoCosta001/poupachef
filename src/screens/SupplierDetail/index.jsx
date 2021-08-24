import React, { useState, useEffect } from 'react';
import ThemeContext from '../../themes/context';
import { useParams } from "react-router-dom";
import api from '../../services/api';
import InputDefault from '../../components/InputDefault/index';
// import { useNavigate } from 'react-router-dom';

function SupplierDetail() {
  // const navigate = useNavigate();
  const [userDate, setUserDate] = useState({});
  const params = useParams();




  async function getDateUser() {
    try {
      const userString = localStorage.getItem('user');
      const token = JSON.parse(userString);

      const config = {
        headers: { Authorization: `Bearer ${token.access_token}` }
      }

      const { supplierPublicId } = params;
      const theUserDate = await api.get(`/suppliers/${supplierPublicId}`, config);
      setUserDate(theUserDate.data)

    } catch(error) {
      console.log(error);
    } 
  }

  useEffect(() => {
    getDateUser()
  },[]);

  return (
    <ThemeContext.Consumer>
      {theme => (
        userDate &&
        <div className={`${theme} SupplierDetail__wrapper`}>
          <div className="SupplierDetail__header">
            <h2>Detalhes do fornecedor</h2>
            <button className="SupplierDetail__header-btn">Submit</button>
          </div>
          <div className="SupplierDetail__sections">

            <div className="SupplierDetail__section-container">
              <div className="Input__organization SupplierDetail__section-details">
                
                <InputDefault title="Nome" type="text" placeholder="Nome" Value={userDate.name} />

                <InputDefault title="CNPJ" type="text" placeholder="CNPJ" value={userDate.cnpj} />
      
                <InputDefault title="Telefone" type="text" placeholder="Telefone" value={userDate.phoneNumber} />
              </div>
            </div>

            <div className="SupplierDetail__section-container">
              <div className="SupplierDetail__section-Owner">
                <h2>Proprietario</h2>
                <div className="Input__organization SupplierDetail__section-Owner-container">
                  
                  <InputDefault title="Nome-Proprietario" type="text" placeholder="Nome do proprietario" value={userDate.ownerName} />

                  <InputDefault title="Email" type="email" placeholder="Email" value={userDate.ownerEmail} />
                  
                  <InputDefault title="Telefone-Proprietario  " type="text" placeholder="Numero de Telefone" value={userDate.ownerPhoneNumber} />

                </div>
              </div>
            </div>

            <div className="SupplierDetail__section-container">
              <div className="SupplierDetail__section-Address">
                <h2>Address</h2>
                <div className="Input__organization SupplierDetail__section-Address">
                  <InputDefault title="Endereco" type="text" placeholder="Endereço" value={userDate.address} />

                  <InputDefault title="Numero" type="text" placeholder="Numero da casa" value={userDate.number} />

                  <InputDefault title="Complemento" type="text" placeholder="Ex: Casa 1..." value={userDate.complement} />

                  <InputDefault title="Bairro" type="text" placeholder="Bairro" value={userDate.neighborhood} />

                  <InputDefault title="Cidade" type="text" placeholder="Cidade" value={userDate.city} />
                  
                  <InputDefault title="Estado" type="text" placeholder="Estado" value={userDate.state} />

                  <InputDefault title="Codigo-Postal" type="text" placeholder="Codigo Postal" value={userDate.zipCode} />
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