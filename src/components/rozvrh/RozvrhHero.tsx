import type { RozvrhContent } from "@/types/rozvrh";

interface RozvrhHeroProps {
  data: RozvrhContent;
}

export function RozvrhHero({ data }: RozvrhHeroProps) {
  return (
    <div className="mb-12 rounded-3xl bg-gradient-to-br from-clay-50 to-clay-100 p-8 text-center shadow-sm">
      <h1 className="mb-4 text-4xl font-semibold text-clay-800">{data.title}</h1>
      <p className="text-lg text-clay-600">{data.lead}</p>
      <div className="mt-6 rounded-lg bg-yellow-50 p-4 border border-yellow-200">
        <p className="text-sm text-yellow-800">
          <strong>Informace:</strong> Data jsou pouze ilustrační – propojení s Bakaláři je ve vývoji.
        </p>
      </div>
    </div>
  );
}