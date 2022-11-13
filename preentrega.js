const productos=[
    {nombre: "Mortal Kombat", precio: 15000},
    {nombre: "Batman", precio: 11000},
    {nombre: "Fifa", precio: 16000},
    {nombre: "Crash Bandicourt", precio: 15000},
    {nombre: "Tekken", precio: 11000},
    {nombre: "Gta", precio: 16000},
    
];
let carrito= []

let seleccion= prompt("Bienvenido desea comprar alguno de nuestros productos??")

while(seleccion!= "si" && seleccion != "no"){
    alert("Ingresa tu respuesta mediante un si o un no");
    seleccion= prompt("Bienvenido desea comprar alguno de nuestros productos??")
}

if(seleccion =="si"){
    alert("Te mostramos nuestros productos");
    let todosLosProductos = productos.map((producto)=> producto.nombre +" "+ producto.precio + "$");
    alert(todosLosProductos.join("\n"));
}
else if (seleccion == "no"){
    alert ("Gracias por tu visita; Hasta luego!!");
}

while (seleccion != "no"){
    let producto= prompt("Agrega un producto a tu carrito ").toLowerCase();
    let precio = 0;

    if (producto== "mortal kombat" || producto=="batman"|| producto=="fifa"
    || producto=="crash bandicourt"|| producto=="tekken" || producto=="gta" ){

        switch (producto) {
            case "Mortal Kombat":
                precio= 15000;
                break;

            case "batman":
                precio= 11000;
                    
                break;
            case "fifa":
                precio= 16000;
                break;
    
            case "crash bandicourt":
                precio= 15000;
                break;

            case "tekken":
                precio= 11000;
                break;
        
            case "gta":
                precio= 16000
                break;
                           
                       
             default:

                break;
        }
    

    let unidades= parseInt(prompt("Cuantas unidades quieres llevar??"));

    carrito.push({producto, unidades, precio});
    console.log(carrito);

    }
    else{
        alert("no tenemos ese producto en nuestro stock")
    }
    seleccion =prompt(" Desea seguir comprando??");


      while(seleccion=== "no"){

        alert("Gracias por la compra");
        carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, 
        total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio }`)

    })
    break;
 }
}
const total= carrito.reduce((acc, el) => acc + el.precio * el.unidades,0);
console.log(`el total a pagar es de ${total}`)
