const mongoose = require('mongoose')

if (process.argv.length === 3) {
  const password = process.argv[2]

  const url =
        `mongodb+srv://fullstack:${password}@cluster0.l5jcz.mongodb.net/phonebook-app?retryWrites=true&w=majority`

  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

  const personSchema = new mongoose.Schema({
    name: String,
    number: String,
  })

  const Person = mongoose.model('Person', personSchema)
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })

} else if (process.argv.length === 5) {
  const password = process.argv[2]

  const name = process.argv[3]

  const number = process.argv[4]

  const url =
        `mongodb+srv://fullstack:${password}@cluster0.l5jcz.mongodb.net/phonebook-app?retryWrites=true&w=majority`

  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

  const personSchema = new mongoose.Schema({
    name: String,
    number: String,
  })

  const Person = mongoose.model('Person', personSchema)

  const person = new Person({
    name: `${name}`,
    number: `${number}`,
  })

  person.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}

else {
  console.log('Please provide the password, name, and number as an argument: node mongo.js <password> <name> <password>')
  process.exit(1)
}