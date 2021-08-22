function SupplierDetail() {
  return (
    <div className="SupplierDetail">
      <div className="SupplierDetail__header">
        <h2>Supplier Details</h2> 
        <button>Submit</button>
      </div>
      <div className="SupplierDetail__sections">

        <div className="SupplierDetail__section-details">
          <div className="SupplierDetail__section-details-container">
            <label htmlFor="name">Name</label>
            <input type="text" />

            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" />

            <label htmlFor="phone">Phone Number</label>
            <input type="text"/>
          </div>
        </div>

        <div className="SupplierDetail__section-Owner">
          <h2>Owner</h2>
          <div className="SupplierDetail__section-Owner-container">
            <label htmlFor="nameOwner">Name</label>
            <input type="text" id="nameOwner" />

            <label htmlFor="email">Email</label>
            <input type="email" />

            <label htmlFor="phone">Phone Number</label>
            <input type="text"/>
          </div>
        </div>

        <div className="SupplierDetail__section-Address">
          <h2>Address</h2>
          <div className="SupplierDetail__section-Address">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" />

            <label htmlFor="number">Number</label>
            <input type="text" id="number"/>

            <label htmlFor="complement">Complement</label>
            <input type="text" id="complement"/>

            <label htmlFor="neighborhood">Neighborhood</label>
            <input type="text" id="neighborhood"/>

            <label htmlFor="city">City</label>
            <input type="text" id="city"/>

            <label htmlFor="state">State</label>
            <input type="text" id="state"/>

            <label htmlFor="zipCode">Zip Code</label>
            <input type="text" id="zipCode" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupplierDetail;