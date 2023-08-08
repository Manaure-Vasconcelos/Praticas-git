const peoples = [
    { name: 'Manaure', age: 25},
    { name: 'Ronaldo', age: 60},
    { name: 'Elen', age: 15},
    { name: 'Jose', age: 40},
    { name: 'Millene', age: 30}
]

const withId = peoples.map(obj => {
    obj.id = Math.floor(Date.now() * Math.random()).toString(36)
    return obj
})

console.log(withId)