//const { OpenAIApi } = require("openai");

// const api = new OpenAIApi(
//   "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"
// );

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

async function sendMessage(message) {
  const chat_completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
  });

  console.log(chat_completion.data.choices, "message");
}

sendMessage("what is capital of egypt ?");

// openai.ChatCompletion.create

// async function sendMessage(message) {
//   const response = await OpenAIApi.ChatCompletion.create({
//     messages: [
//       { role: "system", content: "You are a helpful assistant." },
//       { role: "user", content: message },
//     ],
//   });
//   const { choices } = response.data;
//   const reply = choices[0].message.content;
//   return reply;
// }

// async function main() {
//   const initialMessage = "Hello, ChatGPT!";
//   const response = await sendMessage(initialMessage);
//   console.log("ChatGPT response:", response);
// }

// main();
