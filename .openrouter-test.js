/* eslint-disable @typescript-eslint/no-require-imports */
const https = require('https');
const body = JSON.stringify({
  model: 'gpt-4o-mini',
  messages: [
    { role: 'system', content: 'Test OpenRouter request' },
    { role: 'user', content: 'Hello' },
  ],
  max_tokens: 10,
});
const req = https.request(
  'https://openrouter.ai/v1/chat/completions',
  {
    method: 'POST',
    headers: {
      Authorization: 'Bearer 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',
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body),
    },
  },
  (res) => {
    console.log('status', res.statusCode);
    console.log('headers', res.headers);
    let data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => {
      console.log(data);
    });
  },
);
req.on('error', console.error);
req.write(body);
req.end();
