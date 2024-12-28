const bcrypt = require("bcrypt");  // CommonJS style import

async function hasher(value) {
  try {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hashSync(value, salt);
  } catch (error) {
    console.log(error);
  }
}

async function comparer(value, hash) {
  try {
    return bcrypt.compareSync(value, hash);
  } catch (error) {
    console.log(error);
  }
}

function checkexpiredOTP(data) {
  const currentTime = Date.now();
  const expiresAt = new Date(data.expiresAt).getTime();
  return currentTime > expiresAt;
}

module.exports = { hasher, comparer, checkexpiredOTP };  
