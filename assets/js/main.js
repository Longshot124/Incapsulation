class Wehicle{
    constructor(){
        let brand;
        let model;
        let color;
        let gearbox;
        
    }

    getBrand(){
        return this.brand
    }
    setBrand(brand){
        this.brand = brand
    }

    getModel(){
        return this.model
    }

    setModel(model){
        this.model = model
    }
    
    getColor(){
        return this.color
    }

    setColor(color){
        this.color = color
    }

    getGearBox(){
        return this.gearbox
    }
    setGearBox(gearbox){
        this.gearbox = gearbox
    }

   
}

let car = new Wehicle
car.setBrand('Mercedes')
car.setModel('E350')
car.setColor('Black')
car.setGearBox('Automatic')

console.log(`Brand:${car.getBrand()} Model:${car.getModel()} Color:${car.getColor()} Gearbox:${car.getGearBox()}`)