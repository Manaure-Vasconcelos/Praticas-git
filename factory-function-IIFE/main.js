(function () {
    
    function createPerson(name, surname, hight, weight) {
        return {
            name,
            surname,

            get nameAll() {
                return `${this.name} ${this.surname}`
            },

            set nameAll(name) {
                name = name.split(' ')
                this.name = name.shift()
                this.surname = name.join(' ')
            },

            talk(subject) {
                return `${this.name} ${subject}`
            },

            hight,
            weight,

            get imc() {
                const index = this.weight / (this.hight ** 2);
                return index.toFixed(2);
            }
        }
    }

    const p1 = createPerson('Manaure', 'Vasconcelos', 1.80, 70);
    console.log(p1.talk('falando algo'));
    console.log(`IMC: ${p1.imc}`);
    p1.nameAll = "Millene soares de sousa";
    console.log(p1.name);
    console.log(p1.surname);

})();