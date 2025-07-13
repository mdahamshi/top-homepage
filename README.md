# webpack-base

A minimal and extensible **Webpack 5 boilerplate** designed to kickstart modern web development projects with essential tools pre-configured. This template includes:

* 🛠️ **Webpack 5** (production & development configs)
* ✨ **HTML Webpack Plugin** for template bundling
* 🎨 **CSS Loader & Style Loader** support
* 📦 **Hot Module Reloading** with `webpack-dev-server`
* 🧹 **Prettier** for code formatting
* 🧑‍⚖️ **ESLint** with basic configuration
* 🚀 **GitHub Pages deployment** via `gh-pages` branch

---

## 🔧 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/mdahamshi/webpack-base.git
cd webpack-base
```

### 2. Install Dependencies

```bash
npm install
```

---

## 🚀 Available Scripts

* `npm run dev` – Start development server with HMR (`webpack-dev-server`)
* `npm run build` – Build for production using `webpack.prod.js`
* `npm run deploy` – Deploy the `/dist` folder to GitHub Pages (`gh-pages` branch)
* `npm run test` – Placeholder for future testing scripts

---

## 📁 Project Structure

```
webpack-base/
├── dist/               # Production build output
├── src/                # Source files (JS, CSS, etc.)
├── webpack.dev.js      # Development config
├── webpack.prod.js     # Production config
├── .eslintrc.json      # ESLint configuration
├── .prettierrc         # Prettier configuration
└── package.json
```

---

## ✅ Features Included

* Modular configuration using `webpack-merge`
* Basic ESLint support for JavaScript and CSS
* Prettier formatting out of the box
* Ready for deploying static sites with GitHub Pages
* Minimal dependencies to keep it clean and understandable

---

## 📦 Built With

* [Webpack](https://webpack.js.org/)
* [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [GitHub Pages](https://pages.github.com/)
* [SaraWebs Utils](https://www.npmjs.com/package/@sarawebs/sb-utils)

---

## 👤 Author

**Mohammad Dahamshi** – [SaraWebs](https://sarawebs.com)

---

## 📄 License

This project is licensed under the ISC License – see the [LICENSE](LICENSE) file for details.


