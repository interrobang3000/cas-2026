/**
 * Guerilla Archive - Kartendatenbank
 * Struktur:
 * id: Eindeutige Nummer
 * title: Kurzer Titel (Vorderseite)
 * image: Pfad zum Bild oder URL
 * fullTitle: Ausführlicher Titel (Rückseite, Fett)
 * text: Hauptinhalt (unterstützt HTML-Tags)
 * source: Quellenangabe oder Referenzcode
 */

const cardData = [
    {
        id: 1,
        title: "STREET ART",
        image: "https://picsum.photos/seed/guerilla1/400/300",
        fullTitle: "VISUELLE OKKUPATION",
        text: "Nutze <b>umweltfreundliche Kreidesprays</b> für temporäre Botschaften. Der Fokus liegt auf hochfrequentierten Gehwegen in der Innenstadt.",
        source: "LOG-REF: 001-A"
    },
    {
        id: 2,
        title: "FLASHMOB",
        image: "https://picsum.photos/seed/guerilla2/400/300",
        fullTitle: "SYNCHRONISIERTE AKTION",
        text: "30 Personen agieren als 'eingefroren' für exakt 120 Sekunden am Hauptplatz. <br><br>Ziel: <i>Maximale Irritation</i> der Passanten.",
        source: "LOG-REF: 002-B"
    },
    {
        id: 3,
        title: "STICKER BOMB",
        image: "https://picsum.photos/seed/guerilla3/400/300",
        fullTitle: "KLEBE-INVASION",
        text: "Platzierung von QR-Code-Stickern auf Rückseiten von Straßenschildern. Führt direkt zum geheimen Archiv.",
        source: "LOG-REF: 003-C"
    },
    {
        id: 4,
        title: "LIGHT PROJECTION",
        image: "https://picsum.photos/seed/guerilla4/400/300",
        fullTitle: "PHANTOM-WERBUNG",
        text: "Projektion des Logos auf graue Betonfassaden nach Sonnenuntergang. Mobil, lautlos und rückstandslos.",
        source: "LOG-REF: 004-D"
    }
];

// Automatische Generierung der restlichen 32 Platzhalter, 
// damit die Seite sofort mit 36 Karten funktioniert.
for (let i = 5; i <= 36; i++) {
    cardData.push({
        id: i,
        title: `OPERATION ${i}`,
        image: `https://picsum.photos/seed/guerilla${i}/400/300`,
        fullTitle: `TAKTIK-PROTOKOLL #${i}`,
        text: `Dies ist ein Platzhalter-Text für die <b>Einheit ${i}</b>. Hier kannst du später deine spezifischen Inhalte einfügen, sobald das Dossier finalisiert ist.`,
        source: `SEC-ID: ${1000 + i}-X`
    });
}