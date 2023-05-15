En este proyecto se pone en práctica el fetching de datos desde dos APIs diferentes donde la segunda llamada depende de la primera.
También se utilizan custom hooks

npm create vite@latest > vanilla > Javascript
npm install @vitejs/plugin-react -E
npm install react react-dom -E
crear "vite.config.js" e introducir:
	import {defineConfig} from "vite"
	import react from "@vitejs/plugin-react"
	export default defineConfig({
	    plugins: [react()]
	})

cambiar main.js a main.jsx e introducir:
	import {createRoot} from 'react-dom/client'
	const root = createRoot(document.getElementById('app'))
	root.render(<h1>HOLA QUE TAL</h1>)

instalar linter con "npm install standard -D"
añadir la dependencia en package.json: 
},
  "eslintConfig": {
    "extends": "./node_modules/standard/esLintrc.json"
  }