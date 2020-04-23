/*### Async function always returns a Promise with resolve status of return value ###*/
// (async function myFunc () {
// 	return 123465
// }()).then(response => console.log(response))


// async function myFunc2(user){
// 	return `Helllo ${user}`
// }

// myFunc2('sakil').then(resolve => console.log(resolve))

/* ########### Basic await example ############*/

// async function myAsync(){
// 	const success = true
// 	const myPromise = new Promise((resolve, reject) => {
// 		setTimeout(function(){
// 			success ? resolve('Success') : reject('Failed')
// 		},2000)
// 	})

// 	const result = await myPromise

// 	return result
// }
// myAsync().then(response=> console.log(response)).catch(error => console.log(error))


/* ############ Aysnc await fetch API ##########*/

// async function MyAsync2(){
// 	const fetchData = fetch('https://api.github.com/users')

// 	const result2 = await fetchData.then(response => response.json())  // its also a Promise that gives us response

// 	return result2

// }

// MyAsync2()
// .then(response => {
// 	let rows = ''
// 	let i = 1
// 	response.forEach((object,index) => {
// 		rows += `${i++} : <strong>${object.login}</strong> <br />`
// 	})
// 	document.write(rows)
// })
// .catch(error => {
// 	console.log(error)
// })

/* Another Process */

async function MyAsync3(){
	let result3 = null
	try{
		result3 = await fetch('https://api.github.com/users').then(response => response.json())
	}catch(error){
		return3 = "Something went wrong"
	}
	console.log(result3)
}
MyAsync3()




















