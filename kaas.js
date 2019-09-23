var tutorial = alert('Beantwoord de volgende vragen met ^ja of nee^');
var geel = prompt('Is de kaas geel?');

if (geel == 'ja'){
	var gaten = prompt('zitten er gaten in?');
}

else if (geel == 'nee'){
	var schimmels = prompt('heeft de kaas blauwe schimmels?');
}

if (gaten == 'ja'){
	var duur = prompt('Is de kaas belachelijk duur?');
}

else if (gaten == 'nee'){
	var steen = prompt('Is de kaas hard als steen?');
}

if (schimmels == 'ja'){
	var korst = prompt('Heeft de kaas een korst?');
}

else if (schimmels == 'nee'){
	var korst2 = prompt('Heeft de kaas een Korst?');
}

if (duur == 'ja'){
	alert('Uw kaas is: Emmenthaler');
}

else if (duur == 'nee'){
	alert('Uw kaas is: Leerdammer');
}

if (steen == 'ja'){
	alert('Uw kaas is: Pamigiano Reggiano');
}

else if (steen == 'nee'){
	alert('Uw kaas is: Goudse kaas');
}

if (korst == 'ja'){
	alert('Uw kaas is: Bleu de Rochbaron');
}

else if (korst == 'nee'){
	alert('Uw kaas is: Foume d"Ambert');
}

if (korst2 == 'ja'){
	alert('Uw kaas is: Camembert');
}

else if (korst2 == 'nee'){
	alert('Uw kaas is: Mozzarella')
}