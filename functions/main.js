(function () { // IIFE

    // factory function
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

    // construct function
    function CreatePerson(name, surname) {
        //atributos privados
        const ID = 123456;
        const metodoInterno = () => {
            console.log(ID);
        }

        // atributosglobais
        this.name = name;
        this.surname = surname;
        this.metodo = () => {
            console.log(this.name);
        };
    }

    const p3 = new CreatePerson('manaure', 'vasconcelos')
    p3.metodo();
    console.log(p3.surname)

    // funções recursivas.
    function recursiva(max) {
        if (max >= 10) return
        max++;
        console.log(max)
        recursiva(max)
    }

    recursiva(0)

    function* geradora() {
        // codigo
        yield 'valor 1'
        // codigo
        yield 'valor 2'
        // codigo
        yield 'valor 3'
    }

    const g1 = geradora();
    for (let valor of g1) {
        console.log(valor)
    }
    console.log(g1.next().value)
})();