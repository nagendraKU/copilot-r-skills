#!/usr/bin/env node
/**
 * Git Push Blocker Hook
 *
 * Blocks git push to prevent accidental pushes.
 * Runs as PreToolUse hook on Bash tool calls.
 * Exits 2 to block and surface the message in the UI.
 */

const fs = require('fs');
const { isHookDisabled } = require('./utils');

if (isHookDisabled('git-push-warn')) process.exit(0);

try {
  const data = fs.readFileSync(0, 'utf8');
  const input = JSON.parse(data);
  const cmd = input.tool_input?.command || '';
  // Only check the first line to avoid matching "git push" in heredoc content
  const firstLine = cmd.split('\n')[0].trim();
  if (/^git\s+push/.test(firstLine)) {
    console.error('[Hook] BLOCKED: git push requires explicit user confirmation.');
    console.error('[Hook] Command: ' + cmd.trim());
    console.error('[Hook] Ask the user to confirm before pushing.');
    process.exit(2);
  }
} catch (e) {
  // Ignore errors - allow tool call to proceed
}

process.exit(0);
