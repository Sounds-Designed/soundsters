[Soundsters](https://soundsters.soundsdesigned.com)
<!-- [![Soundsters](./public/social-card.jpg)](https://soundsters.soundsdesigned.com) -->

# Soundsters

Discover the number of contributions you made to Sounds Designed UI.
<!-- and get the Soundster badge on [Sounds Designed Discord server](https://chat.soundsdesigned.com). -->

https://soundsters.soundsdesigned.com

## Setup

Install the dependencies with [pnpm](https://pnpm.js.org/en/):

```bash
pnpm install
```

Next, copy the `.env.example` to `.env` and fill the env variables.

## Development

Start the development server on http://localhost:3000:

```bash
pnpm dev
```

## Contributor stats

 - Run `pnpm collect:contributors` locally with `NUXT_GITHUB_TOKEN` set to a GitHub personal access token that can read public repos.
 - The script aggregates contributions across Sounds Designed organizations and writes the results to `public/contributors.json`.
- `.github/workflows/update-contributors.yml` refreshes the data nightly and on demand, committing changes automatically.

### License

[MIT License](./LICENSE)
