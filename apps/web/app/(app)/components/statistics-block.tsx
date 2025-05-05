"use client";

import { Counter } from "@/components/Counter";
import { StatisticsData } from "@/types/homepage";

export function StatisticsBlock({ data }: { data: StatisticsData }) {
  return (
    <section className="bg-dark-background text-dark-foreground relative z-20 rounded-b-3xl py-12 lg:py-24">
      <div className="min-2xl:max-w-[1624px] mx-auto w-full px-5">
        <h2 className="mb-5 text-2xl leading-tight lg:mb-12 lg:text-[2.125rem]">
          {data.title}
        </h2>

        <div className="grid gap-4 lg:grid-cols-4">
          {data.statistics.map((stat, index) => (
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
