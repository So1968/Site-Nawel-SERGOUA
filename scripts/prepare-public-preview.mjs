import fs from "node:fs";
import path from "node:path";

const source = path.resolve("out");
const destination = path.resolve("dist");
const excludedRoots = new Set(["bureau", "bureau.html", "bureau.txt"]);

if (!fs.existsSync(path.join(source, "index.html"))) {
  throw new Error("Le build statique doit produire out/index.html avant la préparation.");
}

fs.rmSync(destination, { recursive: true, force: true });
fs.cpSync(source, destination, {
  recursive: true,
  filter(sourcePath) {
    const relativePath = path.relative(source, sourcePath);
    if (!relativePath) return true;
    return !excludedRoots.has(relativePath.split(path.sep)[0]);
  },
});

if (!fs.existsSync(path.join(destination, "index.html"))) {
  throw new Error("La prévisualisation publique ne contient pas index.html.");
}

console.log("Prévisualisation publique préparée dans dist/.");
