#!/usr/bin/env node
/**
 * Git Push Warning Hook
 *
 * Warns before git push to prevent accidental pushes.
 * Runs as PreToolUse hook on Bash tool calls.
 */

const fs = require('fs');
const { log } = require('./utils');

try {
  const data = fs.readFileSync(0, 'utf8'); // synchronous stdin read
  const input = JSON.parse(data);
  const cmd = input.tool_input?.command || '';
  if (/git\s+push/.test(cmd)) {
    log('[Hook] WARNING: About to run: ' + cmd.trim());
    log('[Hook] Confirm this push is intentional before proceeding.');
  }
} catch (e) {
  // Ignore errors - allow tool call to proceed
}

process.exit(0);
