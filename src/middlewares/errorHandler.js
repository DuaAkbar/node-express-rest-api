import fs from "fs";
const errorhandler = (err, request, responce, next) => {
  fs.appendFileSync(
    "C:/Users/Admin/OneDrive/Desktop/node_express_rest_api/logs/ErrorLogger.txt",
    `\n Request ----> ${request.method} URL = ${
      request.url
    } at ${new Date()} Error -----> ${err.message}`
  );

  console.log(err.message);
  responce.status(500);
  responce.json({
    success: false,
    message: "Some Error Occured",
  });
};

export default errorhandler;
