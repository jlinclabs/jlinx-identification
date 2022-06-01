
class Identification {
  constructor(jlinxDoc){
    this.doc = jlinxDoc
  }

  ready () { return this.doc.ready() }

  init () {
    await this.ready()
    if (this.doc.length > 0){
      throw new Error(`document is already initialized`)
    }
  }

  toJson () {
    return {

    }
  }
}

module.exports = Identification
