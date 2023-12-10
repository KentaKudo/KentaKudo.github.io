onmessage = async (e) => {
  console.log(`Message received from main script: ${JSON.stringify(e.data)}`);
  postMessage(42);
};
