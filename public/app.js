let reciveData = null

document.getElementById('crawlerForm').addEventListener('submit', function (event) {
	console.log('hello im listener')
	event.preventDefault()

	const userInput = document.getElementById('inputField').value
	console.log(userInput)
	const result = document.getElementById('result')
	result.innerHTML = 'Please wait, page is crawling'
	getInputValue(userInput)
})

function getInputValue(input) {
	const inputValue = input
	console.log(input)

	fetch('/submit', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ inputValue: inputValue }),
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}
			return response.json()
		})
		.then(data => {
			console.log('Response:', data)
			result.innerHTML = 'now you can download your raport'
			reciveData = data
			document.getElementById('downloadBtn').addEventListener('click', function () {
				createCSV(reciveData)
			})
		})
		.catch(error => {
			console.error('Error:', error)
		})
}

function createCSV(reciveData) {
	console.log('im downloadButton')
	console.log(reciveData)
	if (!reciveData) {
		console.error('There is not data to convert to csv')
		return
	}
	const csvRows = []
	const headers = ['URL-address', 'number of hits'].join(',')
	csvRows.push(headers)

	for (const [key, value] of Object.entries(reciveData)) {
		csvRows.push(`${key}, ${value}`)
	}
	const csvStrings = csvRows.join('\n')

	console.log(csvStrings)
	const blob = new Blob([csvStrings], { type: 'text/csv' })
	console.log(blob)

	const url = URL.createObjectURL(blob)
	console.log(url)

	const button = document.querySelector('button');
	const aTag = document.createElement('a');
	aTag.setAttribute('href', url);
	aTag.setAttribute('download', 'crawling report csv')
	button.appendChild(aTag);
	aTag.click()

	console.log(button, aTag)
}


