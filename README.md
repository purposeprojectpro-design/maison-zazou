# Maison Zazou — site vitrine

Site statique (HTML + CSS, sans framework) prêt pour GitHub et Netlify.

## Contenu

| Fichier | Rôle |
| --- | --- |
| `index.html` | Page d'accueil (ouverture, 2 produits, Duo, En ce moment, coupe teckel, esprit Zazou, engagements) |
| `collection.html` | Nouveautés : les 4 articles |
| `le-paletot.html`, `le-pull.html`, `le-terrier.html` | Pages produit (galerie, tailles, liste d'attente) |
| `le-duo.html` | Offre Paletot + Pull |
| `le-teckel.html` | La coupe teckel |
| `la-maison.html` | La Maison : Azalée, l'esprit zazou |
| `guide-des-tailles.html` | Guide des 7 tailles teckel |
| `mentions-legales.html` | Mentions légales — **à compléter** (champs entre crochets) |
| `404.html` | Page introuvable |
| `styles.css` | Styles (polices Poppins + Montserrat via Google Fonts) |
| `site.js` | En-tête collant, menu mobile, apparition des images, formulaires sans rechargement |
| `netlify.toml` | Configuration Netlify (pas de build) |
| `favicon.svg` | Icône d'onglet |

## Mettre en ligne

### 1. Sur GitHub
1. Créer un dépôt vide sur github.com (ex. `maison-zazou`), sans README.
2. Dans ce dossier :
   ```bash
   git remote add origin https://github.com/VOTRE-COMPTE/maison-zazou.git
   git branch -M main
   git push -u origin main
   ```
   Sans terminal : sur la page du dépôt, « uploading an existing file », puis glisser tous les fichiers.

### 2. Sur Netlify
1. app.netlify.com → **Add new site** → **Import an existing project** → GitHub → choisir `maison-zazou`.
2. Laisser la commande de build vide, dossier de publication `.` (déjà réglé par `netlify.toml`).
3. **Deploy**. Chaque nouveau push sur GitHub met le site à jour automatiquement.

Option rapide sans GitHub : app.netlify.com/drop, puis glisser le dossier.

### 3. Newsletter et liste d'attente
Les deux formulaires utilisent **Netlify Forms** : les inscriptions (avec la pièce et la taille choisies) apparaissent dans Netlify → Forms. Rien à installer.

### 4. Nom de domaine
Netlify → Domain management → Add a domain (ex. `maisonzazou.fr`). Vérifier d'abord la disponibilité de la marque (INPI, classes 18 et 25).

## Photos
Toutes les photos viennent d'**Unsplash** (licence Unsplash : usage commercial gratuit, attribution non obligatoire) et sont chargées depuis `images.unsplash.com`. À remplacer par vos propres photos produit dès les premiers prototypes.

| Emplacement | Photo |
| --- | --- |
| Ouverture, gauche | `photo-1665004063236-998c3f11ce4b` |
| Ouverture, droite | `photo-1536867520774-5b4f2628a69b` |
| Le Paletot | `photo-1697939829612-f2ee98421a53` |
| Le Pull Torsadé | `photo-1622150749206-4168a393b139` |
| Le Duo | `photo-1621757298577-3d65e065ecbe`, `photo-1613051466655-682343e2f2dd` |
| En ce moment | `photo-1760413496862-2b8345eee603`, `photo-1791584328574-c2e7253af6ff`, `photo-1774440052293-35434686075d`, `photo-1787505136265-9a99dad3bbac` |
| Pensé pour le teckel | `photo-1741875801005-53f6b969426e` |
| L'esprit Zazou | `photo-1633655442330-0b44ca0cce9b`, `photo-1681003564665-62848f8d481e` |

Pour remplacer une photo : déposer l'image dans un dossier `images/` et changer le `src` correspondant dans `index.html`.

## À faire avant la vente en ligne
- Compléter les mentions légales et rédiger les CGV.
- Brancher un paiement (Shopify Lite, Stripe Payment Links ou Snipcart).
- Remplacer les photos d'ambiance par les vraies pièces.
