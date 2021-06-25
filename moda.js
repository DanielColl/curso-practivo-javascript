const lista1 = [1,2,1,3,2,5,4,6,7,1,2,324,3,45,3,2,2,1,3,1,1,1,6,6,6,6,6,6,6,6,6,6]

const moda = (lista) => {
    const listaObj = {};
    lista.map(
        (elemento) => listaObj[elemento] 
        ? listaObj[elemento] +=1 
        : listaObj[elemento] =1
        );
        
const lista1Array = Object.entries(listaObj).sort((a,b) => (a[1] - b[1]));
 return lista1Array[lista1Array.length - 1]       
}