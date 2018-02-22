export function handler(event, context, callback) {
  console.log(event)
  console.log(process.env.REACT_APP_SECRET_CODE);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({msg: "Hello, World!"})
  })
}
