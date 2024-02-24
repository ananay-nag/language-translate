const textTranslate = require("./translater/translate");
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
async function textTranslateContoller(req, res) {
  try {
    let data = req.body;
    let [error, result] = await textTranslate(data);
    if (error) {
      return responseFormat(res, error);
    }
    responseFormat(res, result);
  } catch (err) {
    return responseFormat(res, {code: 400, message: "Something went wrong!"});
  }
}

/**
 * 
 * @param {Response} res 
 * @param {object} param1 
 */
function responseFormat(res, {code, message}) {
  try {
    res.status(code).json({ message});
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = textTranslateContoller;