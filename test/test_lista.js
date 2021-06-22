/**
 * test 01: En una lista vacia hay cero elementos.
 * test 02: Cuando se agrega un elemento a una lista vacia hay un elemento.
 * test 03: En una lista vacia no se encuentra ninguna clave.
 * test 04: Cuando se agrega un elemento a una lista vacia se puede recuperar el valor a partir de la clave.
 * test 05: Cuando se agrega una clave que ya esta en la lista se actualiza el valor correspondiente.
 * test 06: Cuando se agrega un elemento a una lista vacia la lista de claves esta ordenada.
 * test 07: Cuando se agrega un elemento al principio la lista de claves esta ordenada.
 * test 08: Cuando se agrega un elemento al final la lista de claves esta ordenada.
 * 
 */

const assert = require("chai").assert;

const Lista = require("../src/Lista.js");


describe("en una lista vacia", function() {

    var lista = new Lista();

    //******************** test 01 ****************************/
    it("Hay cero elementos", function() {
        assert.equal(lista.count(), 0);
    })


    //******************** test 03 ****************************/
    it("No se encuentra ninguna clave", function() {
        assert.isNaN(lista.find("clave"));
    })


    describe("cuado se agrega un elemento a una lista vacía", function() {
        var lista = new Lista();
        lista.add("clave", "valor");

        //******************** test 02 ***************************/
        it("hay un elemento", function() {
            assert.equal(lista.count(), 1);
        })
    })


    describe("Cuando se recupera el contenido de la lista", function() {
        var lista = new Lista();
        lista.add("clave", "valor");

        it("hay un elemento", function() {
                assert.equal(lista.count(), 1);
            })
            //******************** test 04 ****************************/
        it("existe el elemento", function() {
            assert.equal(lista.find("clave"), "valor");
        })

        //******************** test 06 ****************************/
        it("la lista está ordenada por clave", function() {
            lista.add("alave", "valor"); //agregamos un elemento para verificar si esta ordenando
            assert.equal(lista.getSort(), true); //tener mas de 1 elemento ayudara a saber si esta ordenando.
        })

    })

    describe("cuando se modifica el valor de un elemento de  la lista", function() {
        var lista = new Lista();
        lista.add("clave", "valor");
        lista.upd("clave", "nuevo_valor");

        //******************** test 05 ****************************/
        it("se modifico el elemento", function() {
            assert.equal(lista.find("clave"), "nuevo_valor");
        })
    })

    describe("cuado se borra un elemento de la lista ", function() {
        var lista = new Lista();
        lista.del("clave");

        it("no existe el elemento", function() {
            assert.isNaN(lista.find("clave"));
        })

    })

    describe("cuado agrega un elemento de la lista (Inicio / Final)", function() {
        var lista = new Lista();
        //agregamos 3 elementos para probar
        lista.add("dlave", "valor1");
        lista.add("alave", "valor2");
        lista.add("xlave", "valor3");

        //**************** test 07 *******************/
        //se agrega en la cabeza y se volvera a ordenar
        lista.addCabeza("clave", "valor");
        it("Cuando se agrega al inicio de la lista", function() {
            assert.equal(lista.getCabeza(), true);
        })

        //**************** test 08 *******************/
        //se agrega en la cola y se vuelve a ordenar
        lista.addCola("clavef", "valorf"); //agregamos un elemento para verificar si esta ordenando
        it("Cuando se agrega al final de la lista", function() {
            assert.equal(lista.getCola(), true); //tener mas de 1 elemento ayudará a saber si esta ordenando.
        })

    })

})