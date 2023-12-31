# ReactJS Tutorial 2023

## Getting start

```bash
# config environment variables (remember to replace with your env variables)
cp .env.template .env.development # dev mode
cp .env.tetmplate .env.production # build mode

npm run dev # run development mode
npm run build # build production
npm run preview # view production build
```

## Topics

1. Basic Concepts
2. Advanced Concepts
3. Forms
4. State Management: Context, Redux, Zustand
5. Testing
6. API Integration : Redux-Thunk, Tan-Stack Query
7. Performance
8. Security
9. UI Toolkits
10. Interesting topics: Realtime application(web socket), Web Worker, Progressive Web App, Canvas, WebRTC

### Basic concepts

1. Vite

- [Adjust vite config](https://vitejs.dev/config/build-options.html)

> vite.config.js

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3015,
  },
});
```

- [Environment and mode](https://vitejs.dev/guide/env-and-mode.html)

> .env.template

```sh
VITE_APP_VERSION=1.23
VITE_APP_NAME=ReactJS Tutorial 2023
```

```sh
cp .env.template .env.development
cp .env.template .env.production
```

```js
// src\shared\environment.js
const enviroment = {
  APP_NAME: import.meta.env.VITE_APP_NAME,
  APP_VERSION: import.meta.env.VITE_APP_VERSION,
  MODE: import.meta.env.MODE,
};

export default enviroment;

// src\App.jsx
import "./App.css";
import enviroment from "./shared/environment";

function App() {
  return (
    <>
      <header>
        <h1>{enviroment.APP_NAME}</h1>
      </header>
      <main>Content</main>
      <footer>
        Copyright@JSBase - {enviroment.APP_VERSION} - {enviroment.MODE}
      </footer>
    </>
  );
}

export default App;
```

> .gitignore

```sh
# enviroment
.env.*
!.env.template
```

2. State, Props and Rendering
