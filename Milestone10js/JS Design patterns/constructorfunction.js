function SuperElement(type,content){
    this.el=document.createElement(type);
    this.el.innerText=content;
    document.body.append(this.el)
    this.el.addEventListener('click',()=>{
        console.log(this.el);
    })}
const ele=new SuperElement('h1',"Hello")