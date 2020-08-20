var imagenes = [];

imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
imagenes["Cauchin"] = "vaca.png";


class Pakiman
{
    constructor(n, v, a, ty)
{
    this.image = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.tipo =  ty;
    this.image.src = imagenes[this.nombre]
}
hablar()
{
    alert(this.nombre);
}
mostrar()
{
    document.body.appendChild(this.image);

    document.write("<br/><strong>" + this.nombre + "</strong> </br>");
    document.write("Vida: " + this.vida +  "<br/>");
    document.write("Ataque: " + this.ataque + "<br/> <hr/>");

}
}


var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30, "tierra"));
coleccion.push(new Pakiman("Pokacho", 80 , 50, "aire"));
coleccion.push(new Pakiman("Tocinauro", 120 , 40, "tierra"));

for ( var paki of coleccion)
{
    paki.mostrar();
}