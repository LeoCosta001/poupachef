import React, { useState, useEffect } from 'react';
import ThemeContext from '../../themes/context';
import { useParams } from "react-router-dom";
import api from '../../services/api';
import InputDefault from '../../components/InputDefault/index';

function SupplierDetail() {
  const params = useParams(); 
  
  const [userDate, setUserDate] = useState({});
  const [nameSupplier, setNameSupplier] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [phoneSupplier, setPhoneSupplier] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [dataState, setDataState] = useState('');
  const [zipCode, setZipCode] = useState('');


  function handleChange(element, value) {
    switch (element) {

      case 'nameSupplier':
        setNameSupplier(value)
        break

      case 'cnpj':
        if(isNaN(value))
        setCnpj(value)
        break

      case 'phoneSupplier':
        setPhoneSupplier(value)
        break

      case 'ownerName':
        setOwnerName(value)
        break

      case 'ownerEmail':
        setOwnerEmail(value)
        break

      case 'ownerPhone':
        setOwnerPhone(value)
        break

      case 'address':
        setAddress(value)
        break

      case 'number':
        setNumber(value)
        break

      case 'complement':
        setComplement(value)
        break

      case 'neighborhood':
        setNeighborhood(value)
        break

      case 'city':
        setCity(value)
        break

      case 'dataState':
        setDataState(value)
        break

      case 'zipCode':
        setZipCode(value)
        break

      default:
        break
    }
  }

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
      setNameSupplier(userDate.name)
      setCnpj(userDate.cnpj)
      setPhoneSupplier(userDate.phoneNumber)
      setOwnerName(userDate.ownerName)
      setOwnerEmail(userDate.ownerEmail)
      setOwnerPhone(userDate.ownerPhoneNumber)
      setAddress(userDate.address)
      setNumber(userDate.number)
      setComplement(userDate.complement)
      setNeighborhood(userDate.neighborhood)
      setCity(userDate.city)
      setDataState(userDate.state)
      setZipCode(userDate.zipCode)

    } catch(error) {
      console.log(error);

      //metodo usado por conta da falta da verificação da autenticação
      localStorage.removeItem("user");
      window.location.replace('/')
    } 
  }

  useEffect(() => {
    getDateUser()
  }, [params, userDate.address, userDate.city, userDate.cnpj, userDate.complement, userDate.name, userDate.neighborhood, userDate.number, userDate.ownerEmail, userDate.ownerName, userDate.ownerPhoneNumber, userDate.phoneNumber, userDate.state, userDate.zipCode]);

  return (
    <ThemeContext.Consumer>
      {theme => (
        userDate &&
        <div className={`${theme} SupplierDetail__wrapper`}>
          <div className="SupplierDetail__header">
            <h2>Detalhes do fornecedor</h2>
            <div className="SupplierDetail__container-btn">
              <button className="SupplierDetail__header-btn">Atualizar</button> 
              <button className="SupplierDetail__header-btn delete">Remover</button>
            </div>
          </div>
          <div className="SupplierDetail__sections">

            <div className="SupplierDetail__section-container">
              <div className="Input__organization SupplierDetail__section-details">
                
                <InputDefault 
                  title="Nome" 
                  type="text" 
                  placeholder="Nome" 
                  value={nameSupplier}
                  onChange={e => handleChange('nameSupplier', e.target.value)} 
                />

                <InputDefault 
                  title="CNPJ" 
                  type="text" 
                  placeholder="CNPJ" 
                  value={cnpj}
                  onChange={e => handleChange('cnpj', e.currentTarget.value)}
                />
      
                <InputDefault 
                  title="Telefone" 
                  type="text" 
                  placeholder="Telefone" 
                  value={phoneSupplier}
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
                    value={ownerName}
                    onChange={e => handleChange('ownerName', e.currentTarget.value)}
                  />

                  <InputDefault 
                    title="Email" 
                    type="email" 
                    placeholder="Email" 
                    value={ownerEmail}
                    onChange={e => handleChange('ownerEmail', e.currentTarget.value)}
                  />
                  
                  <InputDefault 
                    title="Telefone-Proprietario" 
                    type="text" 
                    placeholder="Numero de Telefone" 
                    value={ownerPhone}
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
                    value={address}
                    onChange={e => handleChange('address', e.currentTarget.value)}
                  />

                  <InputDefault 
                    title="Numero" 
                    type="text" 
                    placeholder="Numero da casa" 
                    value={number}
                    onChange={e => handleChange('number', e.currentTarget.value)}
                  />

                  <InputDefault 
                    title="Complemento" 
                    type="text" 
                    placeholder="Ex: Casa 1..." 
                    value={complement} 
                    onChange={e => handleChange('complement', e.currentTarget.value)}
                  />

                  <InputDefault 
                    title="Bairro" 
                    type="text" 
                    placeholder="Bairro" 
                    value={neighborhood}
                    onChange={e => handleChange('neighborhood', e.currentTarget.value)}
                  />

                  <InputDefault 
                    title="Cidade" 
                    type="text" 
                    placeholder="Cidade" 
                    value={city}
                    onChange={e => handleChange('city', e.currentTarget.value)}
                  />
                  

                  <InputDefault 
                    title="Estado" 
                    type="text" 
                    placeholder="Estado" 
                    value={dataState}
                    onChange={e => handleChange('state', e.currentTarget.value)}
                  />

                  <InputDefault 
                    title="Codigo-Postal" 
                    type="text" 
                    placeholder="Codigo Postal" 
                    value={zipCode}
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