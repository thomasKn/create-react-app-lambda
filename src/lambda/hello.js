import dotenv from 'dotenv/config';
import https from 'https';

export function handler(event, context, callback) {
  console.log(event)
  console.log(process.env.SLACK_HOOK);

  var post_data = JSON.stringify({
    "username": "NetlifyWebhook",
    "icon_emoji":":robot_face:",
    "channel": "@Vivian",
    "attachments": [
      {
        "text": "Hello from Netlify!",
        }
      ]
    });

    // An object of options to indicate where to post to
    var post_options = {
      host: 'hooks.slack.com',
      port: '443',
      path: `/services/${process.env.SLACK_HOOK}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(post_data)
      }
    };

    // Set up the request
    var post_req = https.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
      });
    });

    // post the data
    post_req.write(post_data);
    post_req.end();

    var response = {
      'statusCode': 200,
      'headers': { 'Content-Type': 'application/json' },
    };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({msg: "Hello, World!"})
  })
}
