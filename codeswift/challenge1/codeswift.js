function splitWordsAndNumbers(txt){
	return txt.match(/(true|false)|[a-zA-Z]|\d/g);
}
function moveZerosToEnd(splitted){
	const words=[];
	const zeros=[];
	for (let i=0;i<splitted.length;i++){
		if(splitted[i]!='0'){
			if(splitted[i]=="false"||splitted[i]=="true"){
			let res=splitted[i]!="false";
			words.push(res);
			}
			else if(!isNaN(splitted[i])){
			words.push(parseInt(splitted[i]));
			}
			else{
				words.push(splitted[i]);
			}
		}
		else{
			zeros.push(parseInt(splitted[i]));
		}
	}
	const final=words.concat(zeros);
	return final;
}
let txt="false1012013a";
const splitted=splitWordsAndNumbers(txt);
const final=moveZerosToEnd(splitted);
console.log(final);