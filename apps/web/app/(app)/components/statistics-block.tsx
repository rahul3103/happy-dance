"use client";

import { Counter } from "@/components/Counter";

type Statistic = {
  value: number;
  label: string;
};

type StatisticsData = {
  title: string;
  statistics: Statistic[];
};

const statisticsData: StatisticsData = {
  title: "High-performing careers websites",
  statistics: [
    {
      value: 25,
      label: "25% average increase in annual traffic",
    },
    {
      value: 50,
      label: "Up to 50% increase in pageviews",
    },
    {
      value: 75,
      label: "Over 75% increase in sessions year on year",
    },
    {
      value: 25,
      label: "Up to 25% increase in conversion rate",
    },
  ],
};

export function StatisticsBlock() {
  return (
    <section className="bg-dark-background text-dark-foreground relative z-20 rounded-b-3xl py-12 lg:py-24">
      <div className="min-2xl:max-w-[1624px] mx-auto w-full px-5">
        <h2 className="mb-5 text-2xl leading-tight lg:mb-12 lg:text-[2.125rem]">
          {statisticsData.title}
        </h2>

        <div className="grid gap-4 lg:grid-cols-4">
          {statisticsData.statistics.map((stat, index) => (
            <div
              key={index}
              className="border-brand-orange flex flex-col justify-between border-b pb-6 lg:border-b-0 lg:border-l lg:px-4 lg:pb-0"
            >
              <h3 className="mb-4 text-lg lg:mb-28">{stat.label}</h3>
              <p className="inline-flex items-end font-serif text-8xl xl:text-9xl">
                <span data-animated="true">
                  <Counter value={stat.value} />
                </span>
                <span className="text-6xl lg:text-7xl">%</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
