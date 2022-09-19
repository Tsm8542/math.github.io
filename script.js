function c(){
    var x = document.querySelector("#opt").value;
    var f = document.querySelector("#frame");
    switch(x){
        case 'main':
            f.src = "main.html";
            break;
        case 'basics':
            f.src = "basics.html";
            break;
        case 'number_systems':
            f.src = "number-systems.html";
            break;
        case 'geometry':
            f.src = "geometry.html";
            break;
        case 'algebra':
            f.src = "algebra.html";
            break;
        case 'financial':
            f.src = "financial.html";
            break;
        case 'calculus':
            f.src = "calculus.html";
            break;
        case 'statistics':
            f.src = "statistics.html";
            break;
        case 'logic':
            f.src = "logic.html";
            break;
        case 'physics':
            f.src = "physics.html";
            break;
        case 'other':
            f.src = "others.html";
            break;
    }
}