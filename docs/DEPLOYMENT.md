## Push-to-Deploy with SST

1. Pushes to the `master` branch trigger `.github/workflows/deploy.yml`, which:
   - checks out the repo and installs dependencies (`npm ci`)
   - configures AWS credentials via `aws-actions/configure-aws-credentials`
   - runs `npm run sst:deploy --stage prod` (SST already builds both infra and the Next.js app)

2. Add the following secrets under GitHub **Settings → Secrets → Actions** for this repository:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_REGION` (make sure it matches `eu-west-1`, which is the region configured in `sst.config.ts`)

3. SST outputs appear in the workflow logs; monitor them (especially `SiteUrl`) to confirm a successful deploy.

4. Since `.pages.yml` only manages `content/` markdown, `docs/DEPLOYMENT.md` is not surfaced in the CMS and can live under `docs/` without interfering with the site content.
