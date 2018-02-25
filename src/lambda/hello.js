import Pusher from 'pusher';
import dotenv from 'dotenv/config';

export function handler(event, context, callback) {
  const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    encrypted: true
  });

  pusher.trigger('my-channel', 'my-event', {
    "message": "hello world from pusher"
  });

  console.log(event)
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({msg: "Hello, World!"})
  })
}
