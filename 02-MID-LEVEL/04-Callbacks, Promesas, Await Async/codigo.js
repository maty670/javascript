const bebidas=["cafe","jugo","cerveza","vino"];



    const pedirBebida = (nPedido,id)=>{
      return new Promise((resolve,reject)=>{
        if(bebidas[id]==undefined){
          reject("No se encontro la bebida para servir");
        }else{
          tiempoPreparacion = Math.floor(Math.random() * 4 + 1);
          console.log(`Preparando ${nPedido}º pedido (${tiempoPreparacion}seg): ${bebidas[id]}`);
            setTimeout(()=>{
            resolve("Pedido " + nPedido + "º listo" ); 
            },tiempoPreparacion *1000);
        }
      });
    }




    pedirBebida(1,0).then(resultado=>console.log(resultado))//.catch((error)=>{console.log(error)});
    pedirBebida(2,1).then(resultado=>console.log(resultado));
    pedirBebida(3,2).then(resultado=>console.log(resultado));
    pedirBebida(4,3).then(resultado=>console.log(resultado));


  

/*          Con AWAIT y ASYNC
    const mostrarData = async()=>{
      console.log(await pedirBebida(1,0)); 
      console.log(await pedirBebida(2,1)); 
      console.log(await pedirBebida(3,2)); 
      console.log(await pedirBebida(4,3)); 
    }

    mostrarData();
  */
    

    