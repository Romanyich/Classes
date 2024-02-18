class Developer {
    constructor(name) {
        this.name = name
    }

    startWork() {
        return this.name + ' start work ...'
    }

    endWork() {
        return this.name + ' end work ...'
    }
}

class Frontend extends Developer {
    buildWebSite() {
        return this.name + ' start build ' + this.websiteName + ' ...'
    }
    
    constructor(name, websiteName) {
        super(name)
        this.websiteName = websiteName
    }
}

class Backend extends Developer {
    buildServer() {
        return this.name + ' start build server ...'
    }
}

const John = new Developer('John')
console.log(John)
console.log(John.startWork())
console.log(John.endWork())

const Andrew = new Frontend('Andrew', 'Amazon')
console.log(Andrew)
console.log(Andrew.startWork())
console.log(Andrew.buildWebSite())
console.log(Andrew.endWork())

const Michael = new Backend('Michael')
console.log(Michael.name)
console.log(Michael.buildServer())