import React from "react";
import { useRouter } from "next/router";
const InvoiceDetails = () => {
  const router = useRouter();

  const navigatePage = () => router.push("/");

  return (
    <div className="main__container">
      <div className="back__btn">
        <h6 onClick={navigatePage}>Go Back</h6>
      </div>

      {/* ===== invoice defaults header =====*/}

      <div className="invoice__details-header">
        <div className="details__status">
          <p>status</p>
          <button className="pending__status">pending</button>
        </div>
        <div className="details__btns">
          <button className="edit__btn">Edit</button>
          <button className="delete__btn">Delete</button>
          <button className="mark__as-btn">Mark as Paid</button>
        </div>
      </div>

      {/* ===== invoice details ===== */}

      <div className="invoice__details">
        <div className="details__box">
          <div>
            <h4>RT500</h4>
            <p>Re-branding</p>
          </div>
          <div>
            <p>Block -b</p>
            <p>suhlet</p>
            <p>19250</p>
            <p>debar</p>
          </div>
        </div>

        {/* ====== details box 2 ====== */}

        <div className="details__box">
          <div>
            <div className="invoice__created-date">
              <p>Invoice Date</p>
              <h4>10/8/2022</h4>
            </div>
            <div>
              <p className="invoice__payment">Payment Due</p>
              <h4>10/8/2022</h4>
            </div>
          </div>
          {/* ===== invoice client adress ===== */}
          <div className="invoice__client-address">
            <p>Bill to</p>
            <h4>nehar@gmail.com</h4>
            <div>
              <p>Block -a</p>
              <p>deba</p>
              <p>19250</p>
              <p>de1bar</p>
            </div>
          </div>
        </div>
        {/* ==== invoice item ===== */}

        <div className="invoice__item-box">
          <ul className="list">
            <li className="list__item">
              <p className="item__name-box">Item name</p>
              <p className="list__item-box">Qty</p>
              <p className="list__item-box">Price</p>
              <p className="list__item-box">Total</p>
            </li>

            {/* ===== invoice item =====*/}

            <li className="list__item">
              <div className="item__name-box">
                <h5>Web hosting</h5>
              </div>
              <div className="list__item-box">
                <p>1</p>
              </div>
              <div className="list__item-box">
                <p>$10</p>
              </div>
              <div className="list__item-box">
                <p>$10</p>
              </div>
            </li>
            <li className="list__item">
              <div className="item__name-box">
                <h5>minecraft hosting</h5>
              </div>
              <div className="list__item-box">
                <p>1</p>
              </div>
              <div className="list__item-box">
                <p>$10</p>
              </div>
              <div className="list__item-box">
                <p>$10</p>
              </div>
            </li>
          </ul>
        </div>
        {/* ===== grand total ===== */}
        <div className="grand__total">
          <h5>Grand total</h5>
          <h2>$20</h2>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
