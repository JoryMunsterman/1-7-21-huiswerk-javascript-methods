// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken.
// Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken
// hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
//Door een for-loop te maken.
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
//Dat ik gebruik maak van .length
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
//Een counter aanmaken. Bij elke keer voldoen aan de voorwaarde +1 toe te voegen aan saldo van de counter
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6


const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

function cumLaude (getGrades) {
    let counter = 0;
    for (let i = 0; i < getGrades.length; i++) {
        const element = getGrades[i];
        if (element >= 8) {
            counter++;
        }
    }
    return counter;
}
console.log(cumLaude(grades))



/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

console.log(cumLaude(grades))
console.log(cumLaude([6, 4, 5]))
console.log(cumLaude([8,9,4,6,10]))

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// door alle cijfers in array te delen door het aantal cijfers in de array
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// Het aantal cijfers en de hoogte van elk cijfer
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
//.length gebruiken in de loop
// Log het antwoord in de terminal.

const grades2 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
function averageNumber (optellen) {
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    for (let i = 0; i < optellen.length; i++) {
        counter2+=optellen[i]
    }
    for (let i = 0; i < optellen.length; i++) {
        counter3++
    }
    counter4 = counter2 / counter3;
    return counter4.toFixed(2);
}
console.log(averageNumber(grades2))
console.log(averageNumber([4, 5, 6]))
console.log(averageNumber([8, 9, 4, 6, 10]))
// ---- Verwachte uitkomst: 6.642857142857143

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

//zie boven...


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is.
// Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
//de waarde in een for loop laten gaan
// * Op welke conditie moet ik checken?
//is dit cijfer hoger dan het hoogste cijfer tot nu toe? Zo ja dan is dit nu het hoogste cijfer
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

const grade3 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6]
function highestGrade (compare) {
    let eachNumber = 0
    let counter5 = 0
    for ( let i = 0; i < compare.length; i++) {
        eachNumber = counter5.max   //hier moet ik nog een oplossing voor vinden
    }                               //het lukt mij niet om het hoogste getal te bewaren
        return counter5
}

console.log(highestGrade(grade3))
console.log(highestGrade([4,6,5]))
console.log(highestGrade([8, 9, 4, 6, 10]))

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
