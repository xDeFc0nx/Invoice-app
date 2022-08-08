import React from "react";
import { useRouter } from "next/router";
const InvoiceDetails = () => {
  const router = useRouter();

  const goBack = router.push("/");

  return (
    <div className="main__container">
      <div className="back__btn">
        <h6 onClick={goBack}>Go Back</h6>
      </div>
    </div>
  );
};

export default InvoiceDetails;
