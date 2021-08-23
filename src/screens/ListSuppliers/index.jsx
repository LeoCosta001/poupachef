import React from 'react';
import ThemeContext from '../../themes/context';

import ButtonDefault from '../../components/ButtonDefault/index';

function ListSuppliers() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={`${theme} ListSuppliers__wrapper`}>
          <h2 className="ListSuppliers__title">Fornecedores</h2>
          <div className="ListSuppliers__table">
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
                <tr>
                  <th>Robson</th>
                  <th>999.999.999.99</th>
                  <th>11 123456789</th>
                  <th>Bob</th>
                  <th>
                    <ButtonDefault text="Edit" />
                  </th>
                </tr>
                <tr>
                  <th>Robson</th>
                  <th>999.999.999.99</th>
                  <th>11 123456789</th>
                  <th>Bob</th>
                  <th>
                    <ButtonDefault text="Edit" />
                  </th>
                </tr>
                <tr>
                  <th>Robson</th>
                  <th>999.999.999.99</th>
                  <th>11 123456789</th>
                  <th>Bob</th>
                  <th>
                    <ButtonDefault text="Edit" />
                  </th>
                </tr>
                <tr>
                  <th>Robson</th>
                  <th>999.999.999.99</th>
                  <th>11 123456789</th>
                  <th>Bob</th>
                  <th>
                    <ButtonDefault text="Edit" />
                  </th>
                </tr>
                <tr>
                  <th>Robson</th>
                  <th>999.999.999.99</th>
                  <th>11 123456789</th>
                  <th>Bob</th>
                  <th>
                    <ButtonDefault text="Edit" />
                  </th>
                </tr>
                <tr>
                  <th>Robson</th>
                  <th>999.999.999.99</th>
                  <th>11 123456789</th>
                  <th>Bob</th>
                  <th>
                    <ButtonDefault text="Edit" />
                  </th>
                </tr>
                <tr>
                  <th>Robson</th>
                  <th>999.999.999.99</th>
                  <th>11 123456789</th>
                  <th>Bob</th>
                  <th>
                    <ButtonDefault text="Edit" />
                  </th>
                </tr>
                <tr>
                  <th>Robson</th>
                  <th>999.999.999.99</th>
                  <th>11 123456789</th>
                  <th>Bob</th>
                  <th>
                    <ButtonDefault text="Edit" />
                  </th>
                </tr>
                <tr>
                  <th>Robson</th>
                  <th>999.999.999.99</th>
                  <th>11 123456789</th>
                  <th>Bob</th>
                  <th>
                    <ButtonDefault text="Edit" />
                  </th>
                </tr>
                <tr>
                  <th>Robson</th>
                  <th>999.999.999.99</th>
                  <th>11 123456789</th>
                  <th>Bob</th>
                  <th>
                    <ButtonDefault text="Edit" />
                  </th>
                </tr>
                <tr>
                  <th>Robson</th>
                  <th>999.999.999.99</th>
                  <th>11 123456789</th>
                  <th>Bob</th>
                  <th>
                    <ButtonDefault text="Edit" />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default ListSuppliers;