document
    .getElementById('myBtn')
    .addEventListener(
        'click',
        getData('http://localhost:5001/cloud-functions-aaa69/us-central1/api/dog')
    );

async function getData(url) {
    let data = fetch(url).then(console.log);
    // let data = await response.json();
    console.log(data);
}