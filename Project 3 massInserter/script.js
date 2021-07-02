document.getElementById('submit').addEventListener('click', trigger);

async function getPeople(qtd) {
	const RESPONSE = await fetch(`https://randomuser.me/api/?results=${qtd}`);
	return RESPONSE.json();
}

function selectInformation(){
	const QUANTITY = document.getElementById('quantity').value;

	let fields, people = [];

	getPeople(QUANTITY).then( data => {
		const INFO = data.results;
		fields = filterCheckboxes();

		writeMassInsert(true, '');
	  
		for ( let i = 0 ; i < INFO.length ; i++ ) {
			var ref = [
				`${ INFO[i].name.first } ${ INFO[i].name.last }`,
				INFO[i].cell,
				INFO[i].dob.age,
				INFO[i].dob.date,
				INFO[i].email,
				INFO[i].gender,
				INFO[i].location.city,
				INFO[i].location.country,
				INFO[i].location.postcode,
				INFO[i].location.state,
				INFO[i].location.street.name,
				INFO[i].location.street.number,
				INFO[i].login.md5,
				INFO[i].login.password,
				INFO[i].login.sha1,
				INFO[i].login.sha256,
				INFO[i].login.username,
				INFO[i].name.title,
				INFO[i].nat,
				INFO[i].phone,
				INFO[i].picture.large,
				INFO[i].picture.medium,
				INFO[i].picture.thumbnail
			];

			people.push([]);

			for ( let j = 0; j < fields.length; j++ ) {
				people[i].push( ref[fields[j]] );
			}
			if (i == ( INFO.length - 1 )) writeMassInsert( false, (formatLine( true, addQuotes(people[i]))));
			else writeMassInsert( false, (formatLine( false, addQuotes(people[i])))); 
			// if (i == ( INFO.length - 1 )) console.log(((formatLine( true, addQuotes(people[i])))));
			// else console.log(((formatLine( false, addQuotes(people[i]))))); 
		}
	});

	return people;
}

function trigger(){
	selectInformation();
}

function filterCheckboxes(){
	const CHECKBOXITEM = document.querySelectorAll("input[type='checkbox']:checked");
	const SELECTEDBOXES = [];
	for(let i=0; i < CHECKBOXITEM.length; i++){
		SELECTEDBOXES.push(CHECKBOXITEM[i].id);
	}
	return SELECTEDBOXES;
}

function formatLine(isLast, ...params){
	if (isLast) return `(${params});`;  
	else return `(${params}),`;
}

function addQuotes(data = []){
	return data.map(item => `'${item}'`);
}

function writeMassInsert(isFirst, line){
	const INDEX = document.getElementById('header').value;
	const DIV_RESULT = document.querySelectorAll('#result>p')
	if (isFirst) DIV_RESULT[0].innerHTML += `<p>${INDEX}</p>`;
	else DIV_RESULT[0].innerHTML += `<p>${line}</p>`;
}

