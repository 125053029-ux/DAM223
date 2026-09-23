const pedidos = [];
let pacumulados = 0;

function agregarPedido(nombre,precio){
    pedidos.push(nombre); // push pone como ultimos valores al array y devuelve una longitud en este caso nombre
    pacumulados = pacumulados + precio;
    
}
agregarPedido('sopa' ,60);
agregarPedido('pollo' ,100);
agregarPedido('chilaquiles',40);
agregarPedido('Hot cakes',30);
agregarPedido('Hamburguesa',110);
agregarPedido('Pure de papa',50);

console.log("PEDIDOS:");
console.log(pedidos);
console.log("TOTAL ACUMULADO:");
console.log(pacumulados);