let array = [23, 65, 98, 5]

Array.prototype.myMap = function (callback) {
	let newArray = []
	this.forEach (el => newArray.push(callback(el)))
	
	return newArray
}

let newArray = array.myMap(item => item * 2)
