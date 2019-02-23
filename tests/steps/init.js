module.exports.init = () => {
  process.env.mastersTable = `masters-${process.env.TEST_STAGE}`;
  // process.env.TEST_BASE_URL = `https://bbhgpea36h.execute-api.eu-west-1.amazonaws.com/${process.env.TEST_STAGE}/api`;
  process.env.AWS_REGION = "eu-west-1";

  console.log('Variables de entorno');
  console.log('TEST_BASE_URL: ', process.env.TEST_BASE_URL);
  console.log('TEST_MODE; ', process.env.TEST_MODE);
  console.log('TEST_STAGE; ', process.env.TEST_STAGE);
  console.log('SLSUSER; ', process.env.SLSUSER);
  console.log('AWS_PROFILE: ', process.env.AWS_PROFILE);
};
