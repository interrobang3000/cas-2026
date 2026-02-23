/**
 * data.js - Guerilla Transformation Tactics
 * Datenbank für 36 Interventionen
 */

const cardData = [
    {
        id: 1,
        title: "PARKING DAY",
        image: "https://images.unsplash.com/photo-1519301330767-2f7b9136c13b?auto=format&fit=crop&q=80&w=400",
        tags: ["Urban", "Raum"],
        fullTitle: "TRANSFORMATION VON PARKRAUM",
        text: "Miete einen Parkplatz für einen Tag und verwandle ihn in einen <b>Mini-Park</b> oder ein Café. Zeige auf, wie viel öffentlicher Raum durch stehende Fahrzeuge belegt wird.",
        source: "TACTICAL-URBANISM-01"
    },
    {
        id: 2,
        title: "SEED BOMBS",
        image: "https://images.unsplash.com/photo-1416870213587-89b3ce8830bd?auto=format&fit=crop&q=80&w=400",
        tags: ["Natur", "Aktion"],
        fullTitle: "BOTANISCHE GUERILLA",
        text: "Verteile handgroße Kugeln aus Erde, Ton und <i>heimischem Wildblumensaatgut</i> auf brachliegenden Stadtflächen. Verwandle Betonwüsten in Bienenweiden.",
        source: "GUERILLA-GARDENING-REF"
    },
    {
        id: 3,
        title: "CHALK ACTIVISM",
        image: "https://images.unsplash.com/photo-1516641396056-0ce60a85d49f?auto=format&fit=crop&q=80&w=400",
        tags: ["Kommunikation", "Visuell"],
        fullTitle: "TEMPORÄRE BOTSCHAFTEN",
        text: "Nutze Sprühkreide oder Straßenkreide, um unsichtbare Probleme (z.B. fehlende Radwege) direkt auf dem Asphalt zu markieren. Rückstandslos, aber wirkungsvoll.",
        source: "URBAN-MARKING-ID"
    },
    {
        id: 4,
        title: "DESIRE PATHS",
        image: "https://images.unsplash.com/photo-1502164483625-17551390f055?auto=format&fit=crop&q=80&w=400",
        tags: ["Analyse", "Struktur"],
        fullTitle: "TRAMPELPFADE SICHTBAR MACHEN",
        text: "Beobachte, wo Menschen Abkürzungen nehmen. Markiere diese <b>natürlichen Wege</b>, um Stadtplanern zu zeigen, wo Infrastruktur wirklich gebraucht wird.",
        source: "HUMAN-FLOW-ANALYSIS"
    },
    {
        id: 5,
        title: "DIGITAL SHADOWS",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
        tags: ["Digital", "Kommunikation"],
        fullTitle: "WI-FI ALS MEDIUM",
        text: "Benenne mobile Hotspots nach Botschaften oder Fragen um. Jeder, der nach WLAN sucht, sieht deine Nachricht auf seinem Endgerät.",
        source: "NET-TRANSFORM-X"
    },
    {
        id: 6,
        title: "ADBUSTING",
        image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&q=80&w=400",
        tags: ["Visuell", "Kritik"],
        fullTitle: "REKLAME-RECONSTRUCTION",
        text: "Verändere Werbeplakate durch Überklebungen so, dass ihr ursprünglicher Sinn ironisch gebrochen wird. Schaffe Bewusstsein für Konsumkritik.",
        source: "MEDIA-SUBVERSION"
    }
];

// Generierung der restlichen 30 Karten mit rotierenden Kategorien
const extraTags = ["Urban", "Digital", "Natur", "Kommunikation", "Raum", "Aktion"];

for (let i = 7; i <= 36; i++) {
    const randomTag1 = extraTags[i % extraTags.length];
    const randomTag2 = extraTags[(i + 2) % extraTags.length];

    cardData.push({
        id: i,
        title: `TAKTIK #${i}`,
        image: `https://picsum.photos/seed/guerilla${i}/400/300`,
        tags: [randomTag1, randomTag2],
        fullTitle: `INTERVENTION NR. ${i}`,
        text: `Dies ist eine Platzhalter-Taktik für das Dossier ${i}. Hier können Sie spezifische Interventionen im Bereich <b>${randomTag1}</b> einpflegen. <br><br>Erfolgreiche Transformation erfordert Beständigkeit.`,
        source: `ARCHIV-ID-${2000 + i}`
    });
}