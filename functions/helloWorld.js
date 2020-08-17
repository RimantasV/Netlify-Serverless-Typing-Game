exports.handler = (event, contect, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Hello World!"
    })
  };
};
