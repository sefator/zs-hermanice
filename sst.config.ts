/// <reference path="./.sst/platform/config.d.ts" />

const PRODUCTION_STAGE = "prod";

export default $config({
  app(input) {
    return {
      name: "zs-hermanice",
      home: "aws",
      providers: {
        aws: { region: "eu-west-1" },
      },
      removal: input.stage === PRODUCTION_STAGE ? "retain" : "remove",
    };
  },
  async run() {
    const isProduction = $app.stage === PRODUCTION_STAGE;
    const domainName = isProduction
      ? "skola.sftr.cz"
      : `${$app.stage}.skola.sftr.cz`;

    const site = new sst.aws.Nextjs("Web", {
      path: ".",
      domain: {
        name: domainName,
        dns: sst.aws.dns(),
      },
      environment: {
        NEXT_PUBLIC_SITE_URL: `https://${domainName}`,
      },
    });

    return {
      SiteUrl: site.url,
    };
  },
});
