module.exports = class Lista {



    constructor() {
        this.elementos = [];

    }

    count() {
        return this.elementos.length;
    }

    find() {
        if (this.elementos.length == 1) {
            return this.elementos[0].valor;
        }
        return NaN;
    }

    add(clave, valor) {
        this.elementos.push({ clave, valor });
        //console.log(this.elementos);
    }

    update(clave, valor) {


        var lst = this.elementos;
        for (var i = 0; i < lst.length; i++) {
            if (lst[i].clave == clave) {
                this.elementos[i].valor = valor;
                return;
            }
        }

    }

    addCabeza(clave, valor) {

        //guardamos el primero actual
        var item_inicio_key = this.elementos[0].clave;
        var item_inicio_val = this.elementos[0].valor;

        //agregamos el nuevo en la cabeza de la lista
        this.elementos[0].clave = clave;
        this.elementos[0].valor = valor;

        //guardamos el anterior al actual cabeza
        this.elementos.push({ clave, valor }); //reservamos el espacio temporal
        var len = this.elementos.length;
        //actualizamos el anterior desalojado de la cabeza
        this.elementos[len - 1].clave = item_inicio_key;
        this.elementos[len - 1].valor = item_inicio_val;


    }

    getCabeza() {

        if (this.getSort()) {
            return true;
        } else {
            return false;
        }

    }
    addCola(clave, valor) {
        this.elementos.push({ clave, valor });
    }

    getCola() {
        if (this.getSort()) {
            return true;
        } else {
            return false;
        }

    }


    getSort() {

        this.elementos.sort(this.compare("clave")); //ordena la lista
        console.log(this.elementos); //muestra la lista ordenada

        return true;
    }

    compare(prop) {
        return function(a, b) {
            if (a[prop] < b[prop]) {

                return -1;
            }
            if (a[prop] > b[prop]) {


                return 1;
            }
            return 0;
        };
    }

    eliminar(clave) {
        var lst = this.elementos;
        for (var i = 0; i < lst.length; i++) {
            if (lst[i].clave == clave) {
                lst.splice(i, 1);
                return;
            }
        }
    }

}