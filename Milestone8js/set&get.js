const person={
    fname: "Nithi",
    lname: "Vidhya",
    language: "",
    get lang(){
        return this.language;
    },
    set lang(val){
        this.language=val;

    }
}
person.lang="English";
console.log(person.lang);
