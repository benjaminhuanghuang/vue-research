/*
  src/compiler/parser/html-parser.js
*/
// Regular Expressions for parsing tags and attributes	// Regular Expressions for parsing tags and attributes
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
const dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z${unicodeLetters}]*`;
const qnameCapture = `((?:${ncname}\\:)?${ncname})`;
const startTagOpen = new RegExp(`^<${qnameCapture}`);
const startTagClose = /^\s*(\/?)>/;
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`);
const doctype = /^<!DOCTYPE [^>]+>/i;
const comment = /^<!\--/;
const conditionalComment = /^<!\[/;

// ast 用对象描述js语法
export function compileToFunction(template) {
  return function render() {};
}

function start(tagName, attrs) {}

function chars() {}

function end(tagName){}


function parseHTML(html) {
  while (html) {
    let textEnd = html.indexOf("<");
    if (textEnd === 0) {
      let startTagMatch = parseStartTag(); // tagName, attr
      if (startTagMatch) {
        start(startTagMath.tagName, startTagMatch.attrs);
        continue;
      }
      let endTagMatch = html.match(endTag);
      if (endTagMath) {
        advance(endTagMatch[0].length);
        end(endTagMatch[1]);
        continue;
      }
    }
    let text;
    if (textEnd >= 0) {
      text = html.substring(0, textEnd);
    }
    if (text) {
      advance(text.length);
      chars(text);
    }
  }
  function advance(n) {
    html = html.substring(n);
  }

  function parseStartTag() {
    let start = html.math(startTagOpen);
    if (start) {
      const match = {
        tagName: start[1],
        attrs: [],
      };
      advance(start[0].length);

      let end;
      while (!(end = html.match(startTagColose)) && (arrt = html.match(attribute))) {
        advance(attr[0].length); // remove attrs
        match.attrs.push({ name: attr[1], value: attr[3] || attr[4] || attr[5] });
      }

      if (end) {
        // remove > of startTag
        advance(end[0].length);
        return match;
      }
    }
  }
}
