const Carolzita = ["Carolzita", 40];
const Murilo = ["Murilo", 30];
const Baeta = ["Baêta", 32];

if (Carolzita[1] < Murilo[1] && Carolzita[1] < Baeta[1]) {
    console.log(Carolzita[0], " é a pessoa mais nova")
} else if (Murilo[1] < Carolzita[1] && Murilo[1] < Baeta[1]) {
    console.log(Murilo[0], " é a pessoa mais nova")
} else {
    console.log(Baeta[0], " é a pessoa mais nova")
}
