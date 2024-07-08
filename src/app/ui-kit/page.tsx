"use client";

import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui-kit/button";
import OTPInput from "@/components/ui-kit/OTPInput";
import PaymentMethod from "@/components/ui-kit/paymentMethod";
import InvoiceItem from "@/components/ui-kit/invoiceItem";

export default function Home() {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (value: any) => {
    setOtp(value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(`OTP Submitted: ${otp}`);
  };

  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <div>
          <Button>Editar</Button>
        </div>
        <div>
          <Button className="w-full" size="lg">
            Editar
          </Button>
        </div>
        <div>
          <Button variant="outline">Editar</Button>
        </div>
        <div>
          <Button variant="outline" size="lg">
            Cargar saldo de bodega
          </Button>
        </div>
        <div>
          <Button variant="accent" size="sm">
            Editar
          </Button>
        </div>
        <div>
          <OTPInput length={4} onChange={handleOtpChange} />
        </div>
        <pre>code: {otp}</pre>

        <div className="p-8">
          {/* {invoices.map(invoice => (
            <InvoiceItem key={invoice.id} {...invoice} />
          ))}*/}
          <InvoiceItem />
        </div>
        <div className="p-8">
          <PaymentMethod />
        </div>
        {/*  */}
      </section>
    </div>
  );
}
