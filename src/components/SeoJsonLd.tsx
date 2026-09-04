import { ReactElement } from "react";

type JsonLdProps = {
  data: Record<string, unknown>;
};

export function SeoJsonLd({ data }: JsonLdProps): ReactElement {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
