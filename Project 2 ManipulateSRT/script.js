var arraySubtitle;
const input = document.querySelectorAll('.search-input')[0]
const button = document.querySelectorAll('.btnSearch')[0]
input.addEventListener('change', () => { 
	if(input.value === ''){
		button.disabled = true
	}else{
		button.disabled = false
	}
})

window.onload = function () {
	//Check the support for the File API support
	button.disabled = true;
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		var fileSelected = document.getElementById('txtfiletoread');
		fileSelected.addEventListener('change', function (e) {
			//Set the extension for the file
			var fileExtension = /text.*/;
			//Get the file object
			var fileTobeRead = fileSelected.files[0];
			//Check of the extension match
			if (fileTobeRead.type.match(fileExtension)) {
				//Initialize the FileReader object to read the 2file
				var fileReader = new FileReader();
				fileReader.readAsText(fileTobeRead);
				fileReader.onload = function (e) {
					var fileContents = document.getElementById('lines');

					arraySubtitle = selectTexts(fileReader.result)
					arraySubtitle.map( ( line, index ) => { 
						fileContents.append(`${index}. ${line}`) 
						fileContents.innerHTML += '</br>' 
					} )
				}
			}
			else {
				alert("Por favor selecione arquivo texto");
			}

		}, false);
	}
	else {
		alert("Arquivo(s) não suportado(s)");
	}
}

function selectTexts(content){
	const timingSrt = /[\d{4}\r\n\d{2}:\d{2}:\d{2},\d{3}]+[ --> ]+[\d{2}:\d{2}:\d{2},\d{3}]+[\r\n]/g
	const withSpaces = content.split(timingSrt);
	withoutSpaces = withSpaces.filter( ( arr ) => arr !== '')
	withoutQuotes = withoutSpaces.map( ( valueIndex ) => {
		return valueIndex.replaceAll('\"', '"') 
	})
	return withoutQuotes
}

function findQuotes(){
	const keyword = document.querySelectorAll('.search-input')[0].value
	const resultView = document.querySelectorAll('.result-search')[0]
	const arraySubtitleMin = arraySubtitle.map( (line, index) => `${index}. ${line.toLowerCase()}` )
	const result = arraySubtitleMin.filter( quote => quote.match(`${keyword}`) )
	result.map( ( line ) => { 
		resultView.append( line ) 
		resultView.innerHTML += '</br>' 
	} )
	console.log(result);
}
