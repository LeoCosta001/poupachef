import React, { useState, useEffect } from 'react';
import ThemeContext from '../../themes/context';
import { useParams } from "react-router-dom";
import api from '../../services/api';
import InputDefault from '../../components/InputDefault/index';

function SupplierDetail() {
  const params = useParams(); 
  
  const [userDate, setUserDate] = useState({});
  const [nameSupplier, setNameSupplier ] = useState(null);



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

  function handleChange (element, value) {
    switch (element) {
      case 'nameSupplier':
        console.log("acionou");
        setNameSupplier(value)
        break

      // case 'nameSupplier':
      //   setNameSupplier(value)
      //   break

      // case 'nameSupplier':
      //   setNameSupplier(value)
      //   break

      // case 'nameSupplier':
      //   setNameSupplier(value)
      //   break

      default:
        break
    }
  }

  useEffect(() => {
    getDateUser()
  }, []);

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
                
                <InputDefault 
                  title="Nome" 
                  type="text" 
                  placeholder="Nome" 
                  value={nameSupplier || userDate.name} 
                  onChange={e => handleChange('nameSupplier', e.currentTarget.value)} 
                />

                <InputDefault 
                  title="CNPJ" 
                  type="text" 
                  placeholder="CNPJ" 
                  value={userDate.cnpj} 
                  onChange={e => handleChange('cnpj', e.currentTarget.value)}
                />
      
                <InputDefault 
                  title="Telefone" 
                  type="text" 
                  placeholder="Telefone" 
                  value={userDate.phoneNumber}
                  onChange={e => handleChange('phoneSupplier', e.currentTarget.value)}
                />

              </div>
            </div>

            <div className="SupplierDetail__section-container">
              <div className="SupplierDetail__section-Owner">
                <h2>Proprietario</h2>
                <div className="Input__organization SupplierDetail__section-Owner-container">
                  
                  <InputDefault 
                    title="Nome-Proprietario" 
                    type="text" 
                    placeholder="Nome do proprietario" 
                    value={userDate.ownerName} 
                    onChange={e => handleChange('ownerName', e.currentTarget.value)}
                  />

                  <InputDefault 
                    title="Email" 
                    type="email" 
                    placeholder="Email" 
                    value={userDate.ownerEmail} 
                    onChange={e => handleChange('ownerEmail', e.currentTarget.value)}
                  />
                  
                  <InputDefault 
                    title="Telefone-Proprietario" 
                    type="text" 
                    placeholder="Numero de Telefone" 
                    value={userDate.ownerPhoneNumber} 
                    onChange={e => handleChange('ownerPhone', e.currentTarget.value)}
                  />

                </div>
              </div>
            </div>

            <div className="SupplierDetail__section-container">
              <div className="SupplierDetail__section-Address">
                <h2>Endereço</h2>
                <div className="Input__organization SupplierDetail__section-Address">

                  <InputDefault 
                    title="Endereco" 
                    type="text" 
                    placeholder="Endereço" 
                    value={userDate.address} 
                    onChange={e => handleChange('address', e.currentTarget.value)}
                  />

                  <InputDefault 
                    title="Numero" 
                    type="text" 
                    placeholder="Numero da casa" 
                    value={userDate.number} 
                    onChange={e => handleChange('number', e.currentTarget.value)}
                  />

                  <InputDefault 
                    title="Complemento" 
                    type="text" 
                    placeholder="Ex: Casa 1..." 
                    value={userDate.complement} 
                    onChange={e => handleChange('complement', e.currentTarget.value)}
                  />

                  <InputDefault 
                    title="Bairro" 
                    type="text" 
                    placeholder="Bairro" 
                    value={userDate.neighborhood} 
                    onChange={e => handleChange('neighborhood', e.currentTarget.value)}
                  />

                  <InputDefault 
                    title="Cidade" 
                    type="text" 
                    placeholder="Cidade" 
                    value={userDate.city} 
                    onChange={e => handleChange('city', e.currentTarget.value)}
                  />
                  

                  <InputDefault 
                    title="Estado" 
                    type="text" 
                    placeholder="Estado" 
                    value={userDate.state} 
                    onChange={e => handleChange('state', e.currentTarget.value)}
                  />

                  <InputDefault 
                    title="Codigo-Postal" 
                    type="text" 
                    placeholder="Codigo Postal" 
                    value={userDate.zipCode} 
                    onChange={e => handleChange('zipCode', e.currentTarget.value)}
                  />

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