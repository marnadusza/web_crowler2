

document.getElementById('crawlerForm').addEventListener('submit', function (event) {
	console.log('hello im listener')
	event.preventDefault()

	const userInput = document.getElementById('inputField').value
	console.log(userInput)

	getInputValue(userInput)
})

function getInputValue(input) {
    const inputValue = input;
    console.log(input)

fetch ('/submit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({inputValue: inputValue})
})
.then(response => {
    if(!response.ok){
        throw new Error('Network response was not ok')
    }
    return response.text()
})
.then(data => {
    console.log('Response:', data);
  
})
.catch(error => {
    console.error('Error:', error);
});

}
