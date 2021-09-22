# ilovethistrack.com (React + SCSS + Airtable)

Application musicale réalisée avec React, Airtable (en guise de base de donnée) et SCSS (pour la mise en forme).
- appel à l'API afin de récupérer et afficher les données
- possibilité de trier les morceaux par genre sans recharger la page
- création de plusieurs composants ("Navigation", "Footer" etc...)
- création de routes dynamiques (basées sur l'ID) permettant d'afficher les données d'un seul morceau (cf. "Record")
- mise en place d'un preloader permettant de charger les pages avant de les afficher
- ajout d'un favicon personnalisé
- gestion du responsive mobile, tablette et big screen


![Screenshot](screenshot.png)

## 🚀 Installation

1. git clone ou télécharger le projet
2. dans **`src/assets`**, récupérer le fichier **ilovethistrack.com.csv** (base de donnée Airtable utilisée pour le projet)
3. créer un compte sur [Airtable](https://drive.google.com/file/d/1CgASOopJozOfaHEMDn0A0qFuaH1kZ6Lc) (si ce n'est pas déjà fait) 
4. importer le fichier csv afin de créer une nouvelle base de donnée (cf. "add data to new table")
5. se rendre sur l'[API d'Airtable](https://airtable.com/api) et selectionner la base nouvellement créée
6. cliquer sur l'onglet "Javascript" et cocher "show API" afin de récupérer:
- ID de la base
- nom de la base
- API Key
7. dans **`src/components/Music.js`** remplacer les données de l'URL par celles récupérées précédemment (...) <br/>
Exemple: https://api.airtable.com/v0/ID_BASE/NOM_BASE?api_key=API_KEY 
8. une fois l'URL mise à jour, ouvrir la console et faire (à la racine du projet):
- **npm i** pour installer les dépendances (nodes modules)
- **npm start** pour lancer le projet
