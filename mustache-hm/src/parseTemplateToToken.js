import Scanner from "./Scanner.js";
import nestTokens from "./nestTokens.js";

export default function parseTemplateToToken(templateStr) {
  const tokens = [];

  const scanner = new Scanner();
  let words;
  while (!scanner.eos()) {
    // get word before {{
    words = scanner.scanUtil("{{");
    if (words != "") {
      tokens.push(["text", words]);
      words = scanner.scan("{{");
    }
    // get wordss before }}
    words = scanner.scanUtil("}}");
    if (words != "") {
      if (words[0] == "#") {
        tokens.push(["#", words.substring(1)]);
      } else if (words[0] == "/") {
        tokens.push(["/", words.substring(1)]);
      }
      else {
        tokens.push(["name", words]);
      }
      words = scanner.scan("}}");
    }
  }
  return nestTokens(tokens);
}
