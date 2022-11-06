const cargarMakeup = async ()=>{
    const resp = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than 1')
    const datos = await resp.json()
    console.log(resp)
    console.log(datos)
   }
    
   cargarMakeup();