


async function network_call(){

    //  to get response (get)
    let content = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let data = await content.json()

    console.log(data)

}




async function network_call1(){

    // to update (post)
    let options = {
        method: 'POST',
        body: JSON.stringify({
          name: 'anil',
          surname: 'gehlot',
          userId: 23,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }


      let content = await fetch('https://jsonplaceholder.typicode.com/posts', options)
      let data = await content.json()
      console.log(data)
}