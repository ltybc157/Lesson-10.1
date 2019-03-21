

class Option { //название класов пишится с большой буквы
 constructor(height, width , bg, fontSize, textAlign) {//что будет принимать класс в своей работе// если подставить width = 20 установливается по умолчанию если аргумент width не поставился
    this.height = height; //мы в каждый отдельный экземпляр будем вписывать свойства height
    this.width = width; //мы в каждый отдельный экземпляр будем вписывать свойства width
    this.bg = bg; //мы в каждый отдельный экземпляр будем вписывать свойства bg
    this.fontSize = fontSize; //мы в каждый отдельный экземпляр будем вписывать свойства fontSize
    this.textAlign = textAlign; //мы в каждый отдельный экземпляр будем вписывать свойства textAlign
}
  
createDiv() { //складывает общую площадь метод
   
       let elem = document.createElement('div');
        document.body.appendChild(elem);
        let param =`height:${this.height}px;
         width:${this.width}px; background-color:${this.bg}; 
         font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        elem.style.cssText = param;
        elem.textContent = 'lesson';//вписываю в div
     return  this.height * this.width + this.textAlign + this.fontSize + this.bg;
     
    }
 
  
}
const square = new Option(300, 350, "red", 14, "center");//создаёт квадрат
 console.log(square.createDiv());//можно использовать для новых пользователей модальных окн и т.д








