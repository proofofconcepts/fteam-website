#!/usr/bin/env node

const { execSync } = require("child_process");

const chunks = [];
process.stdin.on("data", (chunk) => chunks.push(chunk));
process.stdin.on("end", () => {
  const input = JSON.parse(Buffer.concat(chunks).toString());
  const filePath = input?.tool_input?.file_path ?? "";

  if (!filePath.match(/\.(ts|tsx)$/) || filePath.includes("node_modules")) {
    process.exit(0);
  }

  const projectRoot = "/Users/felipeaugustosilva/development/personal-projects/fteam-website";

  try {
    execSync("npx tsc --noEmit", { cwd: projectRoot, stdio: "pipe" });
  } catch (err) {
    const output = (err.stdout?.toString() ?? "") + (err.stderr?.toString() ?? "");
    if (output.trim()) {
      process.stdout.write(
        JSON.stringify({
          hookSpecificOutput: {
            hookEventName: "PostToolUse",
            additionalContext: `TypeScript errors after editing ${filePath}:\n${output.trim()}`,
          },
        })
      );
    }
  }
});
