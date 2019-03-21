

class Option { //название класов пишится с большой буквы
 constructor(height = 10, width = 10, bg = 10, fontSize = 10, textAlign = 10) {//что будет принимать класс в своей работе// если подставить width = 20 установливается по умолчанию если аргумент width не поставился
    this.height = height; //мы в каждый отдельный экземпляр будем вписывать свойства height
    this.width = width; //мы в каждый отдельный экземпляр будем вписывать свойства width
    this.bg = bg; //мы в каждый отдельный экземпляр будем вписывать свойства bg
    this.fontSize = fontSize; //мы в каждый отдельный экземпляр будем вписывать свойства fontSize
    this.textAlign = textAlign; //мы в каждый отдельный экземпляр будем вписывать свойства textAlign
    let body = document.querySelectorAll('.body');// вызывем тело html через класс (body)
    let div = document.createElement('div');//создаём div (метод)
    
     body[0].appendChild(div);
     div.style.cssText = [11] ;
     div.textContent = 'lesson';//вписываю в div
     }
    calcArea() { //складывает общую площадь метод
     return this.height * this.width + this.textAlign + this.fontSize + this.bg;
    }
}
const square = new Option(10, 10, 10, 10, 10);//создаёт квадрат
 console.log(square.calcArea());//можно использовать для новых пользователей модальных окн и т.д








