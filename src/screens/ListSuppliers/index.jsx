function ListSuppliers() {
  return (
    <div className="ListSuppliers__wrapper">
      <h2 className="ListSuppliers__title">Fornecedores</h2>
      <div className="ListSuppliers__table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>CNPJ</th>
              <th>Phone Number</th>
              <th>Owner</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Robson</th>
              <th>999.999.999.99</th>
              <th>11 123456789</th>
              <th>Bob</th>
              <th>
                <button>Edit</button>
              </th>
            </tr>
            <tr>
              <th>Robson</th>
              <th>999.999.999.99</th>
              <th>11 123456789</th>
              <th>Bob</th>
              <th>
                <button>Edit</button>
              </th>
            </tr>
            <tr>
              <th>Robson</th>
              <th>999.999.999.99</th>
              <th>11 123456789</th>
              <th>Bob</th>
              <th>
                <button>Edit</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListSuppliers;