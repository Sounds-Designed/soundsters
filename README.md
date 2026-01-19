[![CI][ci-src]][ci-href]
[![Provenance][provenance-src]][provenance-href]
[![Update Contributors][update-contributors-src]][update-contributors-href]

[Soundsters](https://soundsters.soundsdesigned.com)
<!-- [![Soundsters](./public/social-card.jpg)](https://soundsters.soundsdesigned.com) -->

# Soundsters

Discover the number of contributions you made to Sound UI and the Sounds Designed ecosystem.
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

[ci-src]: https://github.com/Sounds-Designed/soundsters/actions/workflows/ci.yml/badge.svg?branch=main
[ci-href]: https://github.com/Sounds-Designed/soundsters/actions/workflows/ci.yml

[provenance-src]: https://github.com/Sounds-Designed/soundsters/actions/workflows/provenance.yml/badge.svg?branch=main
[provenance-href]: https://github.com/Sounds-Designed/soundsters/actions/workflows/provenance.yml

[update-contributors-src]: https://github.com/Sounds-Designed/soundsters/actions/workflows/update-contributors.yml/badge.svg?branch=main
[update-contributors-href]: https://github.com/Sounds-Designed/soundsters/actions/workflows/update-contributors.yml
