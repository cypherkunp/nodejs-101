const fs = require('fs-extra');

// Sync:
try {
  fs.copySync('my-file', 'my-file-1');
  console.log('success!');
} catch (err) {
  console.error(err);
}

// Async/Await:
async function copyFiles() {
  try {
    await fs.copy('my-file', 'my-file-2');
    console.log('success!');
  } catch (err) {
    console.error(err);
  }
}

copyFiles();
