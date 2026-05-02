const axios = require("axios");

const LOG_API = "YOUR_LOG_API";

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      LOG_API,
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message,
      },
      {
        headers: {
          Authorization: "Bearer YOUR_TOKEN",
        },
      }
    );

    console.log("Log created successfully");
  } catch (error) {
    console.log("Logging failed");
    console.error(error.message);
  }
}

module.exports = Log;