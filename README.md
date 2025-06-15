# SportSee

**SportSee** est une application web de suivi d’activité physique permettant aux utilisateurs de visualiser leurs performances sportives à travers des graphiques interactifs.

---

## Aperçu

![SportSee Dashboard](https://github.com/Callouu/Sportsee/blob/main/src/assets/Screenshot_4.png)

---

## Stack technique

- React 17
- Recharts & D3
- SCSS
- Node.js (API REST)
- JSDoc (Documentation)
- Docker (optionnel)

---

## Prérequis

- Node.js ≥ 16.13.1 (ou 12.18 recommandé par OC)
- Yarn (ou npm)
- Git
- Navigateur récent (Chrome, Firefox…)

---

## Installation & démarrage

### 1. Cloner le dépôt

```bash
git clone https://github.com/Callouu/Sportsee.git
cd Sportsee
```

## Installer les dépendances

### Back‑end

```bash
cd api
yarn install
yarn start
```

### Front-End

```bash
cd ..
yarn install
yarn dev
```
## Structure du projet

```c#
Sportsee/
├── api/                 # API simulée avec Node.js
├── src/                 # Code source React
│   ├── assets/          # images et SVG
│   ├── components/      # Composants UI (Header, Sidebar, etc.)
│   ├── data/            # Données mockées de l'API
│   ├── pages/           # Pages (Dashboard, Profil)
│   ├── scss/            # Fichier SCSS 
│   └── utils/           # Appels API
├── jsdoc.json           # Config JSDoc
└── README.md            # Ce fichier
```
## API - Utilisateurs disponibles

L’API propose des données pour les utilisateurs suivants :

ID 12
ID 18

Accédez par exemple à :
http://localhost:3001/user/12


## Documentation technique

### documentation JSDoc

```bash
# Ouvrir docs/index.html dans votre navigateur
```

## API – Endpoints disponibles

| Méthode | Endpoint                     | Description              |
| ------- | ---------------------------- | ------------------------ |
| GET     | `/user/:id`                  | Informations utilisateur |
| GET     | `/user/:id/activity`         | Activité quotidienne     |
| GET     | `/user/:id/average-sessions` | Sessions moyennes        |
| GET     | `/user/:id/performance`      | Données de performance   |




