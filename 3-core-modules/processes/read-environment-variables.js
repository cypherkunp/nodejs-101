require("./write-environment-variable");

const env = process.env;

console.log(`JAVA_HOME: ${env.JAVA_HOME}`);
console.log(`MKSAPI_RUNNER_HOME: ${env.MKSAPI_RUNNER_HOME}`);
console.log(`HOME_DRIVE: ${env.HOME_DRIVE}`);
