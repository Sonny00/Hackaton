Projet Hackaton
Ceci est un site web développé dans le cadre d'un Hackaton utilisant React.js en front-end et Nest.js en back-end.

# Prérequis
- Avoir Docker
- La patience
- Le temps

# Étapes d'installation
- Cloner le projet
- Aller dans le dosser hackaton
   - cd hackaton
- Lancer ces commandes
  - make up # pour lancer les containers
  - make back-install # pour installer les dépendances du back
  - make front-install # pour installer les dépendances du front
  - make prisma-generate # pour générer les models
  - make prisma-db # pour créer la base de données
  - make prisma-seed # pour remplir la base de données
  - make back-start # pour lancer le back
  - make front-start # pour lancer le front

# Remarques
- Assurez-vous que les ports 3000 et 8080 sont disponibles sur votre machine avant de lancer l'application.

# Auteur
Ce projet a été développé par les développeurs de l'ESGI. Pour toute question ou remarque, veuillez me contacter à l'adresse myges@quimarche.pas