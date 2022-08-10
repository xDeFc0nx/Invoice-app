import React from "react";

const AddNew = () => {
  return (
    <div className="main__containe">
      <div className="new__invoice">
        <div className="new__invoice-header">
          <h3>New Invoice</h3>
        </div>
        {/* ==== new invoice body ====  */}

        <div className="new__invoice-body">
          {/* ==== bill from ===== */}
          <div className="bill__from">
            <p className="bill__title">Bill from</p>
            <div className="form__group">
              <p> Address</p>
              <input type="text" />
            </div>
            <div className="form__group inline__form-group">
              <div>
                <p>City</p>
                <input type="text" />
              </div>

              <div>
                <p>Postal Code</p>
                <input type="text" />
              </div>

              <div>
                <p>Country</p>
                <input type="text" />
              </div>
            </div>
          </div>
          {/* ===== bill to ====== */}
          <div className="bill__to">
            <p className="bill__title">Bill to</p>
            <div className="form__group">
              <p>CLient name</p>
              <input type="text" />
            </div>
            <div className="form__group">
              <p>CLient email</p>
              <input type="email" />
            </div>
            <div className="form__group">
              <p>Address</p>
              <input type="email" />
            </div>
            <div className="form__group inline__form-group">
              <div>
                <p>City</p>
                <input type="text" />
              </div>

              <div>
                <p>Postal Code</p>
                <input type="text" />
              </div>

              <div>
                <p>Country</p>
                <input type="text" />
              </div>
            </div>

            <div className="form__group inline__form-group">
              <div className="inline__group">
                <p>Invoice Date</p>
                <input type="date" />
              </div>

              <div className="inline__group">
                <p>Payment Term</p>
                <input type="text" />
              </div>
            </div>
            <div className="form__group">
              <p>Project Description</p>
              <input type="text" />
            </div>
          </div>
          {/* ===== invoice product items =====*/}

          <div className="invoice__items">
            <h3>Item List</h3>
            <div className="item">
              <div className="form__group inline__form-group">
                <div>
                  <p>Item Name</p>
                  <input type="text" name="name" />
                </div>

                <div>
                  <p>Qty</p>
                  <input type="number" name="quantity" />
                </div>
                <div>
                  <p>Price</p>
                  <input type="number" name="price" />
                </div>

                <div>
                  <p>Total</p>
                  <h4>$100</h4>
                </div>

                <button className="edit__btn">Delete</button>
              </div>
            </div>
          </div>

          <button className="add__item-btn">Add Item</button>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
