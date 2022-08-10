import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
const AddNew = () => {
  const router = useRouter();
  const [items, setItem] = useState([]);
  // add product item
  const addItem = () => {
    setItem([...items, { name: "", quantity: 0, price: 0, total: 0 }]);
    console.log(items);
  };

  // handler change
  const handlerChange = (event, i) => {
    const { name, value } = event.target;
  };
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
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => handlerChange(e, i)}
                  />
                </div>

                <div>
                  <p>Qty</p>
                  <input
                    type="number"
                    name="quantity"
                    onChange={(e) => handlerChange(e, i)}
                  />
                </div>
                <div>
                  <p>Price</p>
                  <input
                    type="number"
                    name="price"
                    onChange={(e) => handlerChange(e, i)}
                  />
                </div>

                <div>
                  <p>Total</p>
                  <h4>$100</h4>
                </div>

                <button className="edit__btn">Delete</button>
              </div>
            </div>
          </div>

          <button className="add__item-btn" onClick={addItem}>
            Add New Item
          </button>

          <div className="new__invoice__btns">
            <button className="edit__btn" onClick={() => router.push("/")}>
              Discard
            </button>
            <div>
              <button className="draft__btn">Save as Draft</button>
              <button className="mark__as-btn">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
