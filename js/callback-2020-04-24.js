let posts = [
	{title: 'post one', body: 'body one'},
	{title: 'post two', body: 'body two'},
]

const show = () => {
	
	setTimeout(() => {
		let result = ''
		posts.forEach((post,index) => {
			result += `<li> ${index} : ${post.title}</li>`
		})		
		document.write(result)
	},60000)

	
}

const create = (post, callback) => {
	
	setTimeout(() => {
		posts.push(post)
		callback()
	}, 60000)
}

create({title : 'post three', body : 'body three'}, show)
create({title : 'post four', body : 'body four'}, show)
create({title : 'post five', body : 'body five'}, show)




