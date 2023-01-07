export function getBooks () {
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = { method: 'GET', headers: myHeaders, mode: 'cors' };
    let promise = fetch("/books", myInit);
    return promise.then((response) => {
        return response.text();
    });
}