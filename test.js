async function runTests() {
  console.log("Starting tests ...");
  await new Promise(resolve => setTimeout(resolve, 3000));
  console.log("Waiting 3 seconds ...");
  console.log("Tests complete!");
}

runTests();