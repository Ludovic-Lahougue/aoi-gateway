# API-Gateway

[Qu'est-ce qu'une API Gateway ?](https://www.tibco.com/fr/reference-center/what-is-an-api-gateway)

## Preparation

Ce projet est decomposé en 2 services:
- api-gateway
- service-user

Faire un `npm install` dans chacun de ces dossiers.

Faire un `npm run start:dev` dans chacun de ces dossiers pour les faire tourner en parallele.

Le service-user est une version simplifié de ce que nous avions fait [lors des précédents cours](https://github.com/qdesrame/service-users).

Le service-user tourne sur le [port 3001](http://localhost:3001/)

L'api-gateway tourne sur le [port 3000](http://localhost:3000/)

## Contexte

### Permetre l'accès à l'api user
Notre api-gateway sera exposée sur le web et nos utilisateurs pourront l'utiliser pour faire différentes actions sur nos différents services.
Un de ces services est le service-user.
Le but de notre api-gateway sera de rediriger le traffic vers le service-users.
Toutes les requetes `/users/*` seront transmises vers le service-users.
Pour faire cela, utiliser le [HTTP Module](https://docs.nestjs.com/techniques/http-module) de nest.

### Stocker des statistiques
Le role de l'api-gateway est de permettre aux administrateurs de connaitre l'utilisation de l'api.
A chaque appel HTPP d'une route, stocker dans une base de donnée (au choix mysql ou mongodb) les informations suivantes concernant la requete:
- la date de la requete
- le temps qu'a mis la requete a etre executée
- le chemin de la requete
- la  methode http de la requete
- l'user-agent

Ces statistiques devront etre exposé sur un endpoint /admin/metrics protégés par une authentification BASIC.

### BONUS: Mise en cache des reponses
Pour ameliorer les performances du temps de traitement des requetes qui vont vers le service-user,
mettre en cache les réponses dans l'api-gateway.
Le module [Cache Manager](https://docs.nestjs.com/techniques/caching) suivant permet de le faire assez simplement.



### Aide
La plupart des notions on déjà etait abordé lors des cours.
N'hesitez pas a vous inspirer de ce qui a été fait dans le projet [service-user](https://github.com/qdesrame/service-users) que nous avions fait en cours.
N'hesitez pas non plus à utiliser la documentation de NestJS.
Je reste disponible par teams dans le cas d'enventuels blocages/questions.