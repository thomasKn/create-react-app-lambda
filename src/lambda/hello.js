import Pusher from 'pusher';
import dotenv from 'dotenv/config';
import faker from 'faker';
import Chatkit from 'pusher-chatkit-server';

export function handler(event, context, callback) {
  const userName = faker.name.findName();
  const userId = faker.random.uuid();
  const userAvatar = faker.image.avatar();

  const chatkit = new Chatkit({
    instanceLocator: process.env.PUSHER_INSTANCE_LOCATOR,
    key: process.env.PUSHER_KEY,
  })

  chatkit.createUser(userId, userName, userAvatar)
  .then((res) => {
    console.log('User created successfully');
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({userId: res.id})
    })
  }).catch((err) => {
    console.log(err);
  });
}
