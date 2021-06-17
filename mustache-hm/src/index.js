import parseTemplatToToken from './parseTemplateToToken.js  ';
import renderTemplate from './renderTemplate.js'

window.SSG_TemplateEngine = {
  render(templateStr, data) {
    const tokens = parseTemplatToToken(templateStr);

    const domStr = renderTemplate(tokens, data);


  }
} 