class Car{
    constructor(company, model, mileage){
        this._company = company;
        this._model = model;
        this._mileage = mileage
    }
    get company(){
        return this._company;
    }
    get model(){
        return this._model
    }
    get mileage(){
        return this._mileage;
    }
    drive(numberOfMiles){
        return this._mileage += numberOfMiles;
    }
}

// Constructs new Child Class ('Electric') off of Parent Class ('Car')
class Electric extends Car{
    constructor(company,model,mileage){
        // Passes Arguments to Parent Constructor via 'super'
        super(company,model,mileage);
        this._percentage = 50;
    }
    get percentage(){
        return `${this._percentage}%`
    }
    charge(hours){
        // Updates percentage to 100 if inital chare is over 100%, otherwise set it to usual percent
        this._percentage = (this._percentage += (hours * 10)) > 100 ? 100 : this._percentage 
    }
}

// Creates a new Instance of class 'Electric'
const tesla = new Electric("Tesla", "Model X", 5300)
tesla.charge(4)
tesla.drive(13)
console.log("Current Charge:", tesla.percentage)
console.log(tesla.mileage)

const truck = new Car("Ford", "F-150", 10280);
tesla.drive(23);
console.log(truck.company);
console.log(truck.mileage);