import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import ThemeContext from '../../themes/context';
import ListTable from '../../components/ListTable/index';

function ListSuppliers() {

  const [listSuppliers, setListSuppliers] = useState([]);

  async function getDataList() {
    
    try {
      const userString = localStorage.getItem('user');
      const token = JSON.parse(userString);

      const config = {
        headers: { Authorization: `Bearer ${token.access_token}` }
      }
      
      const responseList = await api.get('/suppliers', config);

      setListSuppliers(responseList.data);
      

    } catch(error) {
      console.log(error);

      //metodo usado por conta da falta da verificação da autenticação
      localStorage.removeItem("user");
      window.location.replace('/')
    }
    
  }

  useEffect(() => {
    getDataList()
  }, []);

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={`${theme} ListSuppliers__wrapper`}>
          <h2 className="ListSuppliers__title">Fornecedores</h2>
          <div className="ListSuppliers__table">
            <ListTable listSuppliers={listSuppliers} />
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default ListSuppliers;