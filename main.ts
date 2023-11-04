/**
 * Main logic of CLI.
 */
import { parseArguments } from "./utils/utils.ts";
import { printHelp } from "./modules/help.ts";


function main(inputArgs: string[]): void {
  const args = parseArguments(inputArgs);

    // If help flag enabled, print help.
    if (args.help) {
      printHelp();
      Deno.exit(0);
    }

  console.log(`Whitty CLI: Command not recognized. Showing help screen: \n`);
  printHelp();
}



/**
 * Run CLI.
 */

main(Deno.args);