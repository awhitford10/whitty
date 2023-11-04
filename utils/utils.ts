import { parse } from "https://deno.land/std@0.200.0/flags/mod.ts";
import type { Args } from "https://deno.land/std@0.200.0/flags/mod.ts";

export const parseArguments = (args: string[]): Args => {
  // All boolean arguments
  const booleanArgs = [
    "help",
  ];

  // All string arguments
  const stringArgs: string[] = [
  ];

  // And a list of aliases
  const alias = {
    "help": "h",
    "save": "s",
    "name": "n",
    "color": "c",
  };

  return parse(args, {
    alias,
    boolean: booleanArgs,
    string: stringArgs,
    stopEarly: false,
    "--": true,
  });
}