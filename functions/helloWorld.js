exports.handler = (event, contect, callback) => {
  console.log("Hi world");
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Hello World!"
    })
  };
};
