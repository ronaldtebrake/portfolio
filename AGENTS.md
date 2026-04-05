# Agent notes

## Local dev (Astro)

- Install deps: `yarn` (or `npm install`).
- Dev server: `yarn dev` / `npm run dev` — runs `astro dev` (default URL is usually `http://localhost:4321`; use the port printed in the terminal if it differs).
- Production check: `yarn build` then `yarn preview`.

## Browser verification

- Use the **cursor-ide-browser** MCP to open the dev URL, snapshot the page, and confirm layout and styling after UI changes.
- Lock the tab before interactions; unlock when finished (see MCP server instructions).
