const gjennomsnittPrBilde = document.getElementById("gjennomsnitt-pr-bilde")
const antallBilde = document.getElementById("antall-bilde")
const gjennomsnittPrVideo = document.getElementById("gjennomsnitt-pr-video")
const antallVideo = document.getElementById("antall-video")
const totalPrÅr = document.getElementById("total-pr-år")
const årFrem = document.getElementById("år-frem")
const vekstfaktor = document.getElementById("vekst-faktor")
const regnUtTotal = document.getElementById("regn-ut-total")
const regnUtVekst = document.getElementById("regn-ut-vekst")
const tabell = document.getElementById("tabell")

const MB_PER_GB = 1000

regnUtTotal.onclick = () => {
    const totalBilde = (gjennomsnittPrBilde.value * antallBilde.value) / MB_PER_GB
    const totalVideo = gjennomsnittPrVideo.value * antallVideo.value

    totalPrÅr.value = totalBilde + totalVideo
}

regnUtVekst.onclick = () => {
    tabell.innerHTML = ""
    const nåverendeÅr = new Date().getFullYear()

    const tabellHeader = document.createElement("tr")

    for (let i = 0; i <= årFrem.value; i++) {
        const år = document.createElement("th")
        år.innerHTML = i !== 0 ? nåverendeÅr + i - 1 : ""
        tabellHeader.appendChild(år)
    }

    tabell.appendChild(tabellHeader)

    const totalRad = document.createElement("tr")
    let forrigeTotal = parseFloat(totalPrÅr.value)

    for (let i = 0; i <= årFrem.value; i++) {
        const år = document.createElement("td")
        if (i === 0) {
            år.innerHTML = "Total"
            totalRad.appendChild(år)
            continue
        }

        år.innerHTML = forrigeTotal.toFixed(2) + " GB"

        totalRad.appendChild(år)

        forrigeTotal = forrigeTotal * vekstfaktor.value
    }

    tabell.appendChild(totalRad)
}
