
// base class

// Think of three properties all people share, set them with the constructor
// Think of three methods all people share
class Person{
    constructor(name, age, eyeColor) {
        this.name = name,
        this.age = age,
        this.eyeColor = eyeColor
    }
    eat() {
        console.log('I eat')
    }
    sleep() {
        console.log('I sleep')
    }
    breathe() {
        console.log('I breathe')
    }
}

// There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
class Governor{
    static state = 'Ohio';
    static expLevel = '72 years';
    static dodgyPast = true;
    static campaignSlogan = "We're better together";
    static lie() {
      console.log(`No, I would never do that!`);
    }
    static gubernatorialStuff() {
        console.log(`brb running the state`)
    }
}
// log the properties and test the methods (don't instantiate)
console.log(`State: ${Governor.state}`)
console.log(`Experience Level: ${Governor.expLevel}`)
console.log(`Dodgy Past? ${Governor.dodgyPast}`)
console.log(`Campaign Slogan: ${Governor.campaignSlogan}`)
Governor.lie()
Governor.gubernatorialStuff()




// Create a PostalWorker class that inherits from person, add some methods
class PostalWorker extends Person{
    constructor(name, age, eyeColor, bsToleranceLevel) {
        super(name, age, eyeColor)
        this.bsToleranceLevel = bsToleranceLevel;
    }
    throw() {
        console.log('I threw your package on the stoop bc i have 694 more stops today and do not have time to carefully place things')
    }
    zoomAway() {
        console.log('I waited for .0004 seconds at your door, that is sufficient')
    }
}

// Create a Chef class that inherits from person, add some methods
class Chef extends Person {
    constructor(name, age, eyeColor, palatePreference) {
        super(name, age, eyeColor)
        this.palatePreference = palatePreference
    }
    chop() {
        console.log("My eyes don't even hurt when I chop onions anymore")
    }
    fry() {
        console.log('Watch out the oil is popping')
    }
    preference() {
        console.log(`I have prefer ${this.palatePreference} flavor profiles.`)
    }
}


// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods
let fedexWorker = new PostalWorker('Manny', 32, 'green', 89)
let uspsWorker = new PostalWorker('Cheryl', 50, 'brown', 12)
let season52Chef = new Chef('Salvador', 38, 'brown', 'savory')
let applebeesChef = new Chef('Jim', 27, 'blue', 'sweet')

fedexWorker.breathe()
uspsWorker.throw()
season52Chef.chop()
applebeesChef.sleep()
season52Chef.preference()



//hungry for more
//unfinished
class BankAccount{
    constructor() {
        //ownerName, balance, acctNum
       // ^(generated in constructor - not passed in)
        this.ownerName = ownerName
        this.acctNum = acctNum
        this.balance = balance
    }
    deposit() {
        console.log('Deposit money')
    }
    withdraw() {
        console.log('Withdraw money')

    }
}


class CheckingAccount extends BankAccount {
    super(ownerName, acctNum, balance)
    constructor(overdraftEnabled) {
        this.overdraftEnabled = overdraftEnabled
    }
    withdraw() {
        //Override withdraw to implement overdraft feature
        //saying that checking account is inheriting withdraw from bankaccount, so we can enhance
        super.withdraw()
 
        //overridden AND enhanced
    }
}



class SavingsAccount extends BankAccount{
    withdraw() {
        //Override withdraw to disallow withdrawals completely
        console.log('No withdrawls allowed :(')
    }  
}


