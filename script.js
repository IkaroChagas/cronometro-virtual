let demo = document.querySelector('#demo');
let d = new Date(0);
let ml = 31;
let mostrar;

function  showTime() {
    ml += 31;
    d.setHours (0,0,0,ml);
    let h = ('00' + d.getHours()).slice(-2);
    let m =  ('00' + d.getMinutes()).slice(-2);
    let s =  ('00' + d.getSeconds()).slice(-2);
    let ms = ('000' + d.getMilliseconds()).slice(-3);
    
    demo.innerHTML = h+':'+m+':'+s+':'+ms;

}

// em showTime setamos todas as variáveis let que correspondem as horas, minutos, segundos e milesegundos fatiamos a string com os slice através da quantidade algorismos  
 
    function comecar() {
        mostrar = setInterval(showTime, 31);
    }
    
    function parar() {
        clearInterval(mostrar);
    }
    function zerar() {
        clearInterval(mostrar);
        demo.innerHTML = '00:00:00:000'
        ml = 31
    }


