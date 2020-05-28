async function str() {
    await Promise.resolve("ok");
}

str().then(console.log);
