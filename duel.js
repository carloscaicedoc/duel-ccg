// ~~~~~~ Dojo Collectible Card Game ~~~~~~~~ // 

// ~~~~~~ Parent Class ~~~~~~~~ // 
class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

// ~~~~~~ Unit Child Class ~~~~~~~~ // 
class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        if (target instanceof Unit) {
            target.resilience -= this.power;
        } else {
            throw new Error("Watch out! Target must be a unit!")
        }
    }

    displayInfo() {
        console.log(`~~~~ ${this.name} Status ~~~~`);
        console.log(`Cost: ${this.cost}`);
        console.log(`Power: ${this.power}`);
        console.log(`Resiliance: ${this.resilience}`);
        console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.-")
    }
}

// ~~~~~~ Effect Child Class ~~~~~~~~ // 
class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        console.log(`Playing ${this.name}.`);
        console.log(this.text)
        if (target instanceof Unit && this.stat in target) {
            target[this.stat] += this.magnitude;
        }
    }  
}

// ~~~~~ Test & Play ~~~~~~ //
// Units
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// Effects
const hardAlgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3)
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2)
const pairProgr = new Effect("Pair Programming", 3, "Increase target's resilience by 2", "power", 2)


redBeltNinja.displayInfo();
hardAlgo.play(redBeltNinja);
redBeltNinja.displayInfo();
unhandledPromiseRejection.play(redBeltNinja);
redBeltNinja.displayInfo();
pairProgr.play(redBeltNinja);
redBeltNinja.displayInfo();

blackBeltNinja.displayInfo();
// ---- Atack to bb Ninja ---- // 
redBeltNinja.attack(blackBeltNinja);
blackBeltNinja.displayInfo();