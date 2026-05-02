const Log = require("./logger");

async function testLogging() {
  await Log(
    "frontend",
    "info",
    "logging-middleware",
    "Application started successfully"
  );
}

testLogging();