var valores = [1,3,4,5,6,7,12,23,20];
/*
for (let pos = 0; pos < valores.length; pos++ ) {
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
} 
    
    */

for(let pos in valores) {
    console.log(`${valores[pos]}`);
}