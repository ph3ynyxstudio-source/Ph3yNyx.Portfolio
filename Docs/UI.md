# UI Notes
Courriel : ph3ynyx.studio@gmail.com
## Mini glossaire CSS

- `margin-top`: espace exterieur au-dessus d’un element. Si la valeur est negative, l’element remonte.
- `margin-bottom`: espace exterieur en dessous d’un element. Si la valeur est negative, l’element descend visuellement sur le bloc suivant.
- `padding-top`: espace interieur au-dessus du contenu.
- `padding-bottom`: espace interieur en dessous du contenu.
- `position: relative`: permet de garder l’element dans le flux normal tout en servant de reference a des pseudo-elements ou des enfants positionnes.
- `position: absolute`: sort l’element du flux et le place par rapport au parent positionne le plus proche.
- `z-index`: definit quel element passe devant ou derriere un autre.
- `overflow: hidden`: coupe ce qui depasse du bloc.
- `background-size`: controle la taille d’une image de fond.
- `background-position`: controle la position d’une image de fond.
- `linear-gradient(...)`: cree un degrade, souvent utilise pour assombrir ou lisser une transition.
- `::before` / `::after`: pseudo-elements CSS utiles pour dessiner des effets visuels sans changer le HTML.
- `clamp(min, ideal, max)`: permet une valeur responsive entre un minimum et un maximum.

## Structure UI actuelle

Les fichiers principaux qui pilotent l’interface:

- `src/pages/index.astro`: assemble la page d’accueil.
- `src/components/layout/PageHero.astro`: contenu textuel du hero.
- `src/components/backgrounds/HeroBackground.astro`: wrapper du fond du hero.
- `src/components/backgrounds/SectionBackground.astro`: wrapper du fond des sections basses.
- `src/styles/global.css`: styles globaux et regles UI principales.
- `src/styles/tokens.css`: variables de couleurs, rayons, ombres et tailles globales.

## Backgrounds utilises

### Hero

- Image: `public/Hero.webp`
- Zone concernee: hero principal
- CSS principale: `.hero-background` dans `src/styles/global.css`

Role:

- afficher le sol techno du hero
- garder une ambiance sombre et lisible sous le texte
- deborder legerement vers le bas pour mieux couvrir la transition

Regles importantes:

- `background-size: cover`
- overlay sombre via `linear-gradient(...)`
- chevauchement vertical via `margin-bottom` et `padding-bottom`

### Sections basses

- Image: `public/Mur.webp`
- Zone concernee: projets, services, a propos, contact
- CSS principale: `.section-background` dans `src/styles/global.css`

Role:

- servir de fond discret aux sections basses
- montrer le motif de carres sans prendre trop de place
- rester assez sombre pour que le contenu reste lisible

Regles importantes:

- image moins zoom ee qu’au debut
- `background-size` controle au lieu de `cover`
- overlay sombre pour eviter un fond trop present

## Ligne de transition

Il y a deux logiques selon l’ecran.

### Desktop

La ligne de separation desktop vient du bloc HTML ajoute entre le hero et le contenu:

- `src/pages/index.astro`
- classes CSS:
  - `.hero-body-accent`
  - `.hero-body-accent-line`

Role:

- tracer une separation stylisee entre hero et corps de page
- garder un accent cyan discret


### Mobile

Sur mobile, la ligne visible ne vient plus du bloc externe. Elle est dessinee directement dans le hero avec un pseudo-element:

- media query: `@media (max-width: 768px)`
- selecteur principal: `.hero::before`

Role:

- mieux controler la position de la ligne sur petit ecran
- eviter l’effet de collage brutal entre `Hero.webp` et `Mur.webp`

Les proprietes les plus importantes pour cette ligne:

- `bottom`: position verticale de la ligne
- `height`: epaisseur de la ligne
- `background`: couleur ou degrade de la ligne
- `box-shadow`: glow de la ligne

## Fondu mobile entre Hero.webp et Mur.webp

Sur mobile, le fondu principal est gere dans:

- `@media (max-width: 768px)`
- selecteur: `.hero::after`

Role:

- assombrir progressivement le bas du hero
- cacher la coupure horizontale entre les deux backgrounds
- aider la ligne cyan a agir comme une separation, pas comme une cassure

Les proprietes les plus importantes:

- `bottom`
- `height`
- `background: linear-gradient(...)`
- `z-index`

## Selecteurs UI a connaitre

- `.hero-background`: fond global du hero
- `.hero`: bloc principal du hero
- `.hero-copy`: texte et boutons du hero
- `.hero-title`: grand titre du hero
- `.hero-description`: texte descriptif
- `.hero-actions`: boutons du hero
- `.section-background`: fond des sections basses
- `.hero-body-accent`: zone de separation desktop
- `.hero-body-accent-line`: ligne desktop

## Si tu veux ajuster la ligne mobile

Le plus important est ici dans `src/styles/global.css`:

- `@media (max-width: 768px)`
- `.hero::before`

Tu joues surtout avec:

- `bottom`: pour monter ou descendre la ligne
- `height`: pour la rendre plus fine ou plus epaisse
- `background`: pour changer sa couleur
- `box-shadow`: pour augmenter ou reduire son glow

## Si tu veux ajuster le fondu mobile

Toujours dans `@media (max-width: 768px)`, mais sur `.hero::after`.

Tu joues surtout avec:

- `height`: longueur du fondu
- les valeurs RGBA du degrade
- `bottom`: pour le coller ou le descendre

## Si tu veux ajuster la hauteur du hero

Regles utiles:

- `.hero`
- media query mobile `@media (max-width: 640px)`

Tu joues surtout avec:

- `min-height`
- `padding-top`
- `padding-bottom`

## Regle pratique

Quand tu modifies l’UI:

1. touche d’abord au CSS, pas au HTML, si le besoin est purement visuel
2. sur mobile, regarde d’abord les media queries `768px` puis `640px`
3. pour une ligne ou un glow, commence par changer une seule valeur a la fois
4. si deux effets se chevauchent, verifie lequel est dessine par le HTML et lequel vient d’un pseudo-element
