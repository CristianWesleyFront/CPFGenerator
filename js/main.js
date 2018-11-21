
class Cpf{
   gerar(){
    let cpf = [];
    for(let i=0; i<9;i++){
        cpf[i] = Math.floor(Math.random()*10);
    }
    return cpf;
    }
} 

let haha = new Cpf();
console.log(haha.gerar());
