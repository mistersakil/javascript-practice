let url = 'https://api.github.com/users'
// console.log(fetch(url))
// fetch("https://jsonplaceholder.typicode.com/users")

/*############### calling an api which works like promise ###############*/
fetch(url)
.then((response) => {return response.json()})
.then(res => {
	console.log(res)
})
.catch(err => {
	console.log(err)
})

/*####### Calling multiple promise ############### */

const prom = (data) => {
	let myPromise = new Promise((resoleve, reject)=> {
		data ? resoleve(data) : reject('Something went wrong!')
	})
	return myPromise
}

prom('My dear promise').then(response => console.log(response)).catch(err => console.log(err))

Promise.all([prom('one'),prom('two'),prom(),prom()])
.then(response=>{
	console.log(response)
})
.catch(error => console.log(error))




