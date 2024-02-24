const {translate} = require('@vitalets/google-translate-api');
/**
 * 
 * @param {object} data 
 * @returns 
 */
async function textTranslate(data) {
  try {
    const {text, lang = "fr"} = data;
    if (!text) {
      return [{code: 400, message: "Please provide a text"}];
    }
    const translatedText = await translate(text, {to: lang});
    return [null, {code: 200, message: translatedText.text}];
  } catch (err) {
    console.error("Error :: ", err);
    return [{code: 500, message: "Internal Server Error"}];
  }
}

module.exports = textTranslate;