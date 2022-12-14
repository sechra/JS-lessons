const requestURL = 'https://jsonplaceholder.typicode.com/users'



function sendRequest(method, url, body = null) {
const headers = {
    'Content-Type': 'application/json'
}

   fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
   }).then(response => {
    if (response.ok) {
        return response.json()
 
    }
    return response.json().then(error => {
        const e = new Error('dfsdfs')
        e.data = error
        throw e
    })
   })

    
}

// sendRequest('GET', requestURL)
// .then(data => console.log(data))
// .catch(err => console.log(err))

const body = {
    name: 'Vlad',
    age: 26
}

sendRequest('POST', requestURL, body).then(data => console.log(data))
.catch(err => console.log(err))

 