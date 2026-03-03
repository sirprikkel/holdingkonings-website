# Holding Konings - Complete Website Rebuild

## Opdracht
Rebuild de website van holdingkonings.nl als een moderne Next.js app met Tailwind CSS. Behoud ALLE bestaande content, teksten en afbeeldingen (via directe URLs naar holdingkonings.nl). Het project heeft al de template basis (shadcn/ui components, tailwind, etc). Jij hoeft alleen de pagina's en custom components te bouwen.

## IMPORTANT: Image Configuration
Add to next.config.mjs:
```js
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.holdingkonings.nl' },
    ],
  },
}
```

## Site Structuur & Navigatie
6 pagina's:
1. **Home** (`/`) - Hero + 3 uitgelichte voertuigen + link naar voorraad
2. **Onze voorraad** (`/voorraad`) - Overzicht 14 voertuigen als cards
3. **Over ons** (`/over-ons`) - Bedrijfsinformatie
4. **Konings Scania Power** (`/konings-scania-power`) - Fotogalerij
5. **Nieuws** (`/nieuws`) - Nieuwspagina
6. **Contact** (`/contact`) - Adres + email + Google Maps

## Bedrijfsinfo
- **Naam:** Holding Konings
- **Slogan:** In- en verkoop
- **Adres:** Bulk 19, 5371 ML Ravenstein
- **Email:** holdingkonings@hotmail.com

## Design
- Donker thema (dark grijs/zwart achtergrond, witte tekst)
- Accent: oranje (#f97316) of een stoere rode tint - past bij trucks
- Responsive mobile-first
- Framer-motion animaties (fade-in, hover scale, smooth scroll)
- Sticky navigatie met transparant-naar-solid effect bij scrollen
- Vehicle cards met hover lift effect
- Hero met grote background-home7.jpg als overlay

## File Structure te maken:
```
app/
  layout.tsx          - Root layout met SiteHeader + SiteFooter
  page.tsx            - Home
  globals.css         - Global styles
  voorraad/
    page.tsx          - Grid van alle voertuigen
    [slug]/
      page.tsx        - Detail met foto galerij
  over-ons/
    page.tsx
  konings-scania-power/
    page.tsx          - Foto grid/galerij
  nieuws/
    page.tsx
  contact/
    page.tsx          - Met Maps embed
components/
  site-header.tsx     - Sticky nav met mobile menu
  site-footer.tsx
  vehicle-card.tsx    - Card component
  photo-gallery.tsx   - Clickable foto galerij met lightbox
lib/
  vehicles.ts         - Alle voertuig data als TypeScript array
```

## Vehicle Data (lib/vehicles.ts)
Export een array `vehicles` met alle 14 voertuigen. Elk voertuig heeft: id, title, slug, thumbnail (full URL), shortDescription (string[]), detailInfo (string[] of null), photos (full URLs[]), sold (boolean).

BASE_URL = "https://www.holdingkonings.nl/img/"

### Vehicles:

1. title: "Mercedes Benz SL", slug: "mercedes-benz-sl", sold: false
   thumb: `${BASE}/voorraad_16_1769695804_MB-SL-3.jpg`
   shortDesc: ["Te koop Mercedes Benz SL", "Bouwjaar 2003", "43.642 km", "€ 50.000,-"]
   photos: [`${BASE}/voorraad_16_1769695704_MB-SL-3.jpg`, `${BASE}/voorraad_16_1769695712_MB-SL-4.jpg`, `${BASE}/voorraad_16_1769695722_MB-SL-6.jpg`, `${BASE}/voorraad_16_1769695731_MB-SL-7.jpg`, `${BASE}/voorraad_16_1769695738_MB-SL-8.jpg`]

2. title: "Porsche GT3", slug: "porsche-gt3", sold: false
   thumb: `${BASE}/voorraad_15_1769695415_Porsche-2.jpg`
   shortDesc: ["Te koop Porsche GT3", "Bouwjaar 2014", "41.385 km", "Prijs € 150.000,-"]
   photos: [`${BASE}/voorraad_15_1769695427_Porsche-3.jpg`, `${BASE}/voorraad_15_1769695449_Porsche-5.jpg`, `${BASE}/voorraad_15_1769695458_Porsche-6.jpg`]

3. title: "Mercedes Benz Sprinter 311", slug: "mercedes-benz-sprinter-311", sold: false
   thumb: `${BASE}/voorraad_14_1763036775_IMG-9525.jpg`
   shortDesc: ["Te koop Mercedes Benz Sprinter 311 NIEUW!!", "BPM vrij", "Registratie 2024", "Prijs: € 39.000,-"]
   photos: [`${BASE}/voorraad_14_1763036792_IMG-9524.jpg`, `${BASE}/voorraad_14_1763036805_IMG-9523.jpg`, `${BASE}/voorraad_14_1763036820_IMG-9528.jpg`, `${BASE}/voorraad_14_1763036832_IMG-9533.jpg`, `${BASE}/voorraad_14_1763036845_IMG-9531.jpg`]

4. title: "Showtruck Scania S530", slug: "showtruck-scania-s530", sold: false
   thumb: `${BASE}/voorraad_13_1742897362_Scania-S530-65BZV6-4.jpg`
   shortDesc: ["Te koop: Scania S530", "Bouwjaar 2023", "Prijs € 285.000,00"]
   photos: [`${BASE}/voorraad_13_1742897395_Scania-S530-65BZV6-2.jpg`, `${BASE}/voorraad_13_1742897407_Scania-S530-65BZV6-3.jpg`, `${BASE}/voorraad_13_1742897430_Scania-S530-65BZV6-5.jpg`]

5. title: "DAF XG 480 FT", slug: "daf-xg-480-ft", sold: false
   thumb: `${BASE}/voorraad_12_1732192545_DAF-XG-86-BTR-1-2-VERKOCHT.jpg`
   shortDesc: ["Te koop: DAF XG 480 FT"]
   detailInfo: ["Bouwjaar 24-11-2022", "Kilometerstand 44600", "Nog 26 maanden volledige DAF fabrieksgarantie"]
   photos: [`${BASE}/voorraad_12_1694863966_DAF-XG-86-BTR-1.jpg`, `${BASE}/voorraad_12_1694863975_DAF-XG-86-BTR-1-2.jpg`]

6. title: "Showtruck Scania 144 V8", slug: "showtruck-scania-144-v8", sold: false
   thumb: `${BASE}/voorraad_11_1747918807_Scania-BV-LJ-17-2-VERKOCHT.jpg`
   shortDesc: ["Te koop: Scania 144 V8"]
   detailInfo: ["Bouwjaar 1998", "Kilometerstand 954600", "BTW wagen", "Bijzonderheden: nieuwe opbouw en M&M interieur"]
   photos: [`${BASE}/voorraad_11_1687854379_Scania-BN-NL-11-4.jpg`, `${BASE}/voorraad_11_1687854388_Scania-BN-NL-11-6.jpg`, `${BASE}/voorraad_11_1687854396_Scania-BN-NL-11-2.jpg`, `${BASE}/voorraad_11_1687854405_Scania-BN-NL-11-3.jpg`]

7. title: "VERKOCHT Decontaminatie unit", slug: "verkocht-decontaminatie-unit", sold: true
   thumb: `${BASE}/voorraad_10_1732191549_Deco-unit-5-verkocht.jpg`
   shortDesc: ["Te koop: Decontaminatie unit"]
   detailInfo: ["Böhmer", "Bouwjaar 2022", "Nieuw"]
   photos: [`${BASE}/voorraad_10_1687853882_Deco-unit-3.jpg`, `${BASE}/voorraad_10_1687853894_Deco-unit-6-binnenkant.jpg`, `${BASE}/voorraad_10_1687853904_Deco-unit-6-binnenkant-3.jpg`, `${BASE}/voorraad_10_1687853911_Deco-unit-6-binnenkant-4.jpg`, `${BASE}/voorraad_10_1687853920_Deco-unit-6-binnenkant-2.jpg`]

8. title: "Mercedes Benz", slug: "mercedes-benz", sold: false
   thumb: `${BASE}/voorraad_9_1732191763_MB-VJ-40-XD-6-VERKOCHT.jpg`
   shortDesc: ["Te koop: Mercedes Benz 1935 LS-2"]
   detailInfo: ["Bouwjaar 1990", "Kilometerstand 867601", "BTW wagen", "Bijzonderheden cabine is al opnieuw gespoten", "Bezichtiging op afspraak"]
   photos: [`${BASE}/voorraad_9_1687801862_MB-VJ-40-XD-3.jpg`, `${BASE}/voorraad_9_1687801872_MB-VJ-40-XD-4.jpg`, `${BASE}/voorraad_9_1687801890_MB-VJ-40-XD-5.jpg`, `${BASE}/voorraad_9_1687801902_MB-VJ-40-XD-2.jpg`]

9. title: "Oldtimer Scania 141 V8", slug: "oldtimer-scania-141-v8", sold: false
   thumb: `${BASE}/voorraad_8_1687799240_68-BVK-8.jpg-6.jpg`
   shortDesc: ["Te koop: Scania 141 V8"]
   detailInfo: ["Bouwjaar 1978", "Kilometerstand 1104600", "BTW wagen", "Prijs: € 95.000,-", "Bezichtiging op afspraak"]
   photos: [`${BASE}/voorraad_8_1687798809_68-BVK-8.jpg-5.jpg`, `${BASE}/voorraad_8_1687798818_68-BVK-8.jpg-3.jpg`, `${BASE}/voorraad_8_1687798827_68-BVK-8.jpg-2.jpg`, `${BASE}/voorraad_8_1687798885_68-BVK-8.jpg`, `${BASE}/voorraad_8_1687798897_68-BVK-8.jpg-4.jpg`]

10. title: "Unimog", slug: "unimog", sold: false
    thumb: `${BASE}/voorraad_7_1687799907_Unimog-3.jpg`
    shortDesc: ["Te koop: Unimog Bolkop"]
    detailInfo: ["Bouwjaar 1976", "Kilometerstand 34950", "BTW wagen", "Bijzonderheden: Er zit een Werner lier op", "Prijs: € 20.000,-", "Bezichtiging op afspraak"]
    photos: [`${BASE}/voorraad_7_1687799931_Unimog-7.jpg`, `${BASE}/voorraad_7_1687799953_Unimog-9.jpg`, `${BASE}/voorraad_7_1687799969_Unimog-5.jpg`, `${BASE}/voorraad_7_1687799983_Unimog-6.jpg`, `${BASE}/voorraad_7_1687799992_Unimog-8.jpg`]

11. title: "Oldtimer Volvo F88", slug: "oldtimer-volvo-f88", sold: false
    thumb: `${BASE}/voorraad_6_1745910546_Volvo-BE-89-33-4-verkocht.jpg`
    shortDesc: ["Te koop: Oldtimer Volvo F88"]
    detailInfo: ["Bouwjaar 1969", "Kilometerstand 1398773", "BTW wagen", "Bezichtiging op afspraak"]
    photos: [`${BASE}/voorraad_6_1687800341_Volvo-BE-89-33-4.jpg`, `${BASE}/voorraad_6_1687800353_Volvo-BE-89-33.jpg`, `${BASE}/voorraad_6_1687800366_Volvo-BE-89-33-2.jpg`]

12. title: "Showtruck Scania 143 V8", slug: "showtruck-scania-143-v8", sold: false
    thumb: `${BASE}/voorraad_5_1756972531_Scania-143-bewerkt-4-9.jpg`
    shortDesc: ["Te koop: SHOWTRUCK SCANIA 143 V8"]
    detailInfo: ["Bouwjaar 1990", "Kilometerstand 1454737", "BTW wagen", "M&M interieur", "Prijs € 45.000,-", "Bezichtiging op afspraak"]
    photos: [`${BASE}/voorraad_5_1756972334_Scania-BN-NL-11-4.jpg`, `${BASE}/voorraad_5_1756972346_Scania-BN-NL-11-3.jpg`, `${BASE}/voorraad_5_1756972360_Scania-BN-NL-11.jpg`, `${BASE}/voorraad_5_1756972373_Scania-BN-NL-11-2.jpg`]

13. title: "Showtruck Scania 141 V8", slug: "showtruck-scania-141-v8", sold: false
    thumb: `${BASE}/voorraad_1_1687800971_Scania-65-BPN-3-2.jpg`
    shortDesc: ["Te koop: SHOWTRUCK SCANIA 141 V8"]
    detailInfo: ["Bouwjaar 1980", "Kilometerstand 1139500", "Gerestaureerd door Leo Bol", "BTW wagen", "Prijs € 95.000,-", "Bezichtiging op afspraak"]
    photos: [`${BASE}/voorraad_1_1687800987_Scania-65-BPN-3.jpg`]

14. title: "Showtruck Scania 143 V8 Streamliner", slug: "showtruck-scania-143-v8-streamliner", sold: false
    thumb: `${BASE}/voorraad_4_1687801313_Scania-BX-LZ-72-3.jpg`
    shortDesc: ["Te koop: SHOWTRUCK SCANIA 143 V8 STREAMLINER"]
    detailInfo: ["Bouwjaar 1995", "Kilometerstand 1336645", "BTW wagen", "Prijs € 60.000,-", "Bezichtiging op afspraak"]
    photos: [`${BASE}/voorraad_4_1687801341_Scania-BX-LZ-72-5.jpg`, `${BASE}/voorraad_4_1687801356_Scania-BX-LZ-72.jpg`, `${BASE}/voorraad_4_1687801368_Scania-BX-LZ-72-4.jpg`]

## Over Ons pagina
Image: `https://www.holdingkonings.nl/img/general/980_980_1758619489_Assen-2025-3.jpg`
Text: "Geert Konings is eigenaar van Holding Konings B.V. en is sinds 2022 actief in de truck branche. Dit doet hij samen met zijn vrouw, Marion. Deze werkt actief mee in het bedrijf. Samen zorgen ze ervoor dat de klanten altijd kunnen rekenen op kwaliteit en betrouwbaarheid. De passie voor vrachtwagens heeft hij van thuis uit meegekregen en zit er al van jongs af aan in. Sinds 2010 is hij zelf in bezit van diverse showtrucks. Hier bezoeken ze jaarlijks diverse festivals mee. Nu is de tijd aangebroken om van zijn hobby zijn werk te maken en deze ook te gaan inkopen en verkopen. Zowel nieuw als jong gebruikt en oldtimers. U bent van harte welkom om ons aanbod en showtrucks te komen bekijken in onze showroom in Ravenstein!"

## Konings Scania Power pagina - Fotogalerij
13 fotos (full URLs):
1. https://www.holdingkonings.nl/img/general/980_980_1758613202_9.jpg
2. https://www.holdingkonings.nl/img/general/980_980_1758613182_12.jpg
3. https://www.holdingkonings.nl/img/general/980_980_1756980045_Schermafbeelding-2025-09-04-115844.jpg
4. https://www.holdingkonings.nl/img/general/980_980_1756980029_Schermafbeelding-2025-09-04-115804.jpg
5. https://www.holdingkonings.nl/img/general/980_980_1756980007_Schermafbeelding-2025-09-04-115711.jpg
6. https://www.holdingkonings.nl/img/general/980_980_1756979734_Schermafbeelding-2025-09-04-115511.jpg
7. https://www.holdingkonings.nl/img/general/980_980_1729585144_2023.jpg
8. https://www.holdingkonings.nl/img/general/980_980_1729585004_2024-4.jpg
9. https://www.holdingkonings.nl/img/general/980_980_1729584959_2024.jpg
10. https://www.holdingkonings.nl/img/general/980_980_1729584927_2024-3.jpg
11. https://www.holdingkonings.nl/img/general/980_980_1696506892_Geert-en-Marion-Konings-2.jpg
12. https://www.holdingkonings.nl/img/general/980_980_1685436110_Liessel-2022.jpg
13. https://www.holdingkonings.nl/img/general/980_980_1685433127_Truckersfestival-Assen-2022-3.jpg

## Nieuws pagina
Just one image: https://www.holdingkonings.nl/img/general/980_980_1756972058_Goed-2.jpg

## Contact pagina
- Adres: Bulk 19, 5371 ML Ravenstein
- E-Mail: holdingkonings@hotmail.com
- Google Maps iframe src: https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2468.3534337544415!2d5.651883815932623!3d51.78142629845091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c70235a07b54a5%3A0x974bebd867090d83!2sBulk%2019%2C%205371%20ML%20Ravenstein!5e0!3m2!1snl!2snl!4v1667315526980!5m2!1snl!2snl

## CRITICAL INSTRUCTIONS
- Build ALL pages completely. Do not skip any page.
- Use all the vehicle data exactly as specified. Every vehicle, every photo URL.
- Make it look professional and modern - dark theme with orange accent
- Use framer-motion for page transitions and hover effects
- Mobile responsive with hamburger menu
- The hero section should be impressive with the background-home7.jpg
- Vehicle detail pages should have a proper photo gallery
- Run `npm install` first, then build everything
- Commit when done with message "feat: complete Holding Konings website rebuild"
