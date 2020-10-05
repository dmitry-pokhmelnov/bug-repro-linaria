## To reproduce bug follow steps: 

1. ### `npm i`
2. ### `npm run build`
3. ### `serve -s build -l 3000 `
4. ### open `localhost:3000`


**Note: Bug is reporoducible only in build mode because there is no css chunks in dev mode.**

This repo also has examples of astroturf and styled-components behaviors. Astroturf has the same problem as Linaria with duplicating classNames but styled-components doesn't because they generate unique classNames.