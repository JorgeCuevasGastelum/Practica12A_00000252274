// Compila un archivo con SWC (versión WebAssembly de @swc/core).
// Uso: node compilar.mjs <archivo.jsx> [config.json]
import { readFileSync } from 'node:fs';
import { transformSync } from '@swc/wasm';

const [archivo, rutaConfig] = process.argv.slice(2);
const codigo = readFileSync(archivo, 'utf8');
const config = rutaConfig ? JSON.parse(readFileSync(rutaConfig, 'utf8')) : {};

try {
  const { code } = transformSync(codigo, { filename: archivo, ...config });
  console.log(code);
} catch (error) {
  console.error(String(error));
  process.exitCode = 1;
}
