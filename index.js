if(localStorage.getItem('usuario') === null){
    let math = '';
    for (let index = 0; index < 3; index++) {
        math += Math.floor(Math.random() * 100); 
        
    }
    localStorage.setItem('usuario',math);
}