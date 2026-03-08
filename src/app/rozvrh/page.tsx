import { getRozvrhContent } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { RozvrhHero } from "@/components/rozvrh/RozvrhHero";
import { RozvrhControls } from "@/components/rozvrh/RozvrhControls";
import { RozvrhGrid } from "@/components/rozvrh/RozvrhGrid";
import { RozvrhLegend } from "@/components/rozvrh/RozvrhLegend";
import { getMockRozvrh } from "@/data/rozvrh";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getRozvrhContent();
  return createMetadata({
    title: data.title || "Rozvrhy tříd",
    description: data.lead,
    image: data.heroImage,
    canonical: "/rozvrh",
  });
}

export default async function RozvrhPage() {
  const { data } = await getRozvrhContent();
  const timetable = getMockRozvrh(); // Default to first class

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <RozvrhHero data={data} />
      <RozvrhControls />
      {timetable ? (
        <RozvrhGrid timetable={timetable} />
      ) : (
        <div className="text-center py-8">
          <p className="text-clay-600">Rozvrh pro tuto třídu nebyl nalezen.</p>
        </div>
      )}
      <RozvrhLegend />
    </div>
  );
}