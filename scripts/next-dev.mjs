import { spawn } from "node:child_process";

const sourceArgs = process.argv.slice(2);
const nextArgs = [];

for (let index = 0; index < sourceArgs.length; index += 1) {
  const argument = sourceArgs[index];

  if (argument === "--strictPort") {
    if (sourceArgs[index + 1] && !sourceArgs[index + 1].startsWith("-")) {
      index += 1;
    }
    continue;
  }

  if (argument === "--host") {
    nextArgs.push("--hostname");
    continue;
  }

  if (argument.startsWith("--host=")) {
    nextArgs.push(argument.replace(/^--host=/, "--hostname="));
    continue;
  }

  nextArgs.push(argument);
}

const nextCommand = process.platform === "win32" ? "next.cmd" : "next";
const child = spawn(nextCommand, ["dev", ...nextArgs], {
  stdio: "inherit",
});

child.on("error", (error) => {
  console.error(error);
  process.exit(1);
});

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
