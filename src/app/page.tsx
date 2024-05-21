/** @format */

import PageTitle from "@/components/PageTitle";
import Card, { CardContent } from "@/components/Card";
import BarChart from "@/components/BarChart";


export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </CardContent>

        {/*  */}
      </section>
    </div>
  );
}
