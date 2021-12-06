
class Dreieck
{
    constructor(aLaenge,bLaenge,cLaenge,doppelF)
    {
        this.aLaenge = aLaenge;
        this.bLaenge = bLaenge;
        this.cLaenge = cLaenge;
    }

    fKathetenBerechnen()
    {   
    return this.cLaenge = Math.sqrt((this.aLaenge*this.aLaenge) + (this.bLaenge*this.bLaenge));
    }

    FlaechenRechnung() 
    {
    return this.doppelF = (this.aLaenge * this.bLaenge)/ 2;
    }

    fHypotenuseUndABerechnen()
    {
    return this.bLaenge = Math.sqrt((this.cLaenge * this.cLaenge) - (this.aLaenge * this.aLaenge));
    }

    fHypotenuseUndBBerechnen()
    {
    return this.aLaenge = Math.sqrt((this.cLaenge * this.cLaenge) - (this.cLaenge * this.bLaenge));
    }

}



function Berechnen()
{
    if(isKathetenInputValid()) 
    {
        let dreieckobj = new Dreieck(document.getElementById("inputA").value, document.getElementById("inputB").value, document.getElementById("inputC").value);
        
        document.getElementById("inputC").value = dreieckobj.fKathetenBerechnen();
        document.getElementById("labelF").innerHTML = "(Fläche)F:" + (dreieckobj.FlaechenRechnung());
    }

    if(isHypotenusenUndAInputValid())
    {
        let dreieckobj = new Dreieck(document.getElementById("inputA").value, document.getElementById("inputB").value, document.getElementById("inputC").value);

        document.getElementById("inputB").value = dreieckobj.fHypotenuseUndABerechnen();
        document.getElementById("labelF").innerHTML = "(Fläche)F:" + (dreieckobj.FlaechenRechnung());
    }

    if(isHypotenusenUndBInputValid())
    {
        let dreieckobj = new Dreieck(document.getElementById("inputA").value, document.getElementById("inputB").value, document.getElementById("inputC").value);

        document.getElementById("inputA").value = dreieckobj.fHypotenuseUndBBerechnen();
        document.getElementById("labelF").innerHTML = "(Fläche)F:" + (dreieckobj.FlaechenRechnung());
    }
}





function isHypotenusenUndBInputValid() {
    return (document.getElementById("inputB").value !== "") && (document.getElementById("inputC").value !== "") && (document.getElementById("inputA").value == "");
}

function isHypotenusenUndAInputValid() {
    return (document.getElementById("inputA").value !== "") && (document.getElementById("inputC").value !== "") && (document.getElementById("inputB").value == "");
}

function isKathetenInputValid() {
    return (document.getElementById("inputA").value !== "") && (document.getElementById("inputB").value !== "") && (document.getElementById("inputC").value == "");
}

function alleInputsResetten()
{
   
    document.getElementById("inputA").value = "";
    document.getElementById("inputB").value = "";
    document.getElementById("inputC").value = "";
    document.getElementById("labelF").innerHTML = "(Fläche)F:";
}