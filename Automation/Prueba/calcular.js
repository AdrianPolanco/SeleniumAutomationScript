class ElementId {
    constructor(){

    }

    ElementArray = []
    
   getOptionNumber() {
        //Obteniendo un numero random, que sera un numero entre 0 y 1
        const randomNum = Math.random()
        //Multiplicando el numero por 10, y luego sumandole 3 para que sea posible pueda ser 9 + 3 = 13
        const operationNumber = (randomNum * 10) + 3
        //Redondeando el numero hacia abajo
        const num = Math.floor(operationNumber)
        //Chequeando si el numero cumple con las condiciones requeridas: Que sea multiplo de 3,
        //que sea menor que 13 y que sea mayor o igual a 3, si no cumple tales condiciones, 
        // se repetira la funcion
        if(!(num%3 == 0 && num< 13 && num>=3)) return this.getOptionNumber()

        return num
    }

    getAnswer(startNum){
        //Obteniendo el incremento de 3 en 3
        const numOpcion = this.getOptionNumber()
        //Fabricando el string que utilizaré para hacer el select con Selenium
        const idRespuesta = "i" + (startNum + numOpcion)

        return idRespuesta
    }

    buildElementArray(){
    for (let index = 5; index <= 366; index += 19) {
        //Obteniendo el select para usar con Selenium
        const idRespuesta = this.getAnswer(index)
        this.ElementArray.push(idRespuesta)
    }
}
}

module.exports = ElementId

