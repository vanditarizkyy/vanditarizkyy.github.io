function luasSegitiga(){
    let x = parseInt(document.getElementById('alas').value);
    let y = parseInt(document.getElementById('tinggi').value);
    let z = 0.5*x*y;
    document.getElementById('hasil').value = z ;
}

function luasPersegi(){
    let x = parseInt(document.getElementById('sisi1').value);
    let z = x**2;
    document.getElementById('hasil').value = z ;
}

function luasPersegiPanjang(){
    let x = parseInt(document.getElementById('panjang').value);
    let y = parseInt(document.getElementById('lebar').value);
    let z = x*y;
    document.getElementById('hasil').value = z ;
}

function luasLingkaran(){
    let x = parseInt(document.getElementById('jari').value);
    let z = 3.14*x**2;
    document.getElementById('hasil').value = z ;
}

function luasTrapesium(){
    let x = parseInt(document.getElementById('sisi1').value);
    let y = parseInt(document.getElementById('sisi2').value);
    let w = parseInt(document.getElementById('tinggi').value);
    let z = (x+y)*w/2;
    document.getElementById('hasil').value = z ;
}

function kelilingSegitiga(){
    let a = parseInt(document.getElementById('sisi1').value);
    let b = parseInt(document.getElementById('sisi2').value);
    let c = parseInt(document.getElementById('sisi3').value);
    let d = a+b+c;
    document.getElementById('hasil').value = d ;
}

function kelilingPersegi(){
    let a = parseInt(document.getElementById('sisi1').value);
    let d = 4*a;
    document.getElementById('hasil').value = d ;
}

function kelilingPersegiPanjang(){
    let a = parseInt(document.getElementById('panjang').value);
    let b = parseInt(document.getElementById('lebar').value);
    let d = 2*(a+b);
    document.getElementById('hasil').value = d ;
}

function kelilingLingkaran(){
    let a = parseInt(document.getElementById('jari').value);
    let d = 2*3.14*a;
    document.getElementById('hasil').value = d ;
}

function kelilingTrapesium(){
    let a = parseInt(document.getElementById('sisi1').value);
    let b = parseInt(document.getElementById('sisi2').value);
    let c = parseInt(document.getElementById('sisi3').value);
    let d = parseInt(document.getElementById('sisi4').value);
    let e = a+b+c+d;
    document.getElementById('hasil').value = e ;
}