# Dr DIOURI Lamya — Cabinet d'Imagerie Médicale

Site web premium pour le cabinet de radiologie du Dr DIOURI Lamya — design haut de gamme, animations fluides, expérience utilisateur soignée.

## Aperçu

Site éditorial moderne pour un cabinet médical spécialisé en imagerie : IRM, Scanner, Échographie, Radiographie, Mammographie. Design inspiré des grandes agences digitales internationales, adapté à l'univers médical premium.

## Direction artistique

- **Typographie bi-fonte** — Cormorant Garamond (serif italique éditorial) + Inter (sans-serif moderne)
- **Palette** — Bleu marine profond, accents or, blancs nuancés
- **Style** — Minimalisme luxueux, beaucoup d'espace, hiérarchie typographique forte

## Sections

1. Hero immersif avec parallax 3D et floating cards
2. Piliers du cabinet (Précision, Expertise, Accompagnement, Rapidité)
3. À propos avec composition photo asymétrique
4. Services — 6 examens présentés en cards éditoriales
5. Expertise — grille bento immersive sur fond sombre
6. Parcours patient en timeline
7. CTA prise de rendez-vous
8. Témoignages patients
9. Ressources patients / professionnels
10. Contact et formulaire de rendez-vous
11. Footer structuré

## Interactions premium

- Loader d'ouverture animé
- Curseur custom avec blend mode (desktop)
- Progress bar de scroll
- Reveal au scroll étagé
- Parallax 3D sur l'image hero
- Compteurs animés avec easing
- Menu mobile slide latéral
- Hover effects premium

## Stack

Site statique sans dépendance — HTML5, CSS3 moderne (Grid, Flexbox, custom properties), JavaScript vanilla.

## Démarrage

```bash
# Cloner le projet
git clone <repo-url>
cd dr-diouri-lamya

# Lancer un serveur local
python3 -m http.server 8000
# Ou avec npx
npx serve .
```

Puis ouvrir [http://localhost:8000](http://localhost:8000)

## Structure

```
.
├── index.html      # Structure complète du site
├── styles.css      # Design premium et responsive
├── script.js       # Animations et interactions
└── README.md
```

## Responsive

Compatible 100% mobile, tablette, desktop avec breakpoints à 520px / 900px / 1200px.
