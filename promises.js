const promise = newPromise((res, rej) => {
    setTimeout(() => res('hello'), 1000);
});

promise.then((val) => console.log(val)).catch((err) => console.log(err));

async function getData() {
    const data = await promise;
    console.log(data);
}