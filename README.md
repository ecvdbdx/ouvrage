# ECVD Ouvrage

Ouvrage est un projet pédagogique pour les élèves de Master 1 Développement, dans le cadre du cours de Javascript.
Il s'agit de créer un portfolio des élèves et profs de l’ECV Digital en utilisant des technologies Javascript front/back modernes, ainsi que des méthodologies Agile de travail en équipe.


### La vision

Cette application serait co-construite par les élèves de M1, année après année.
Le projet pourrait être transverse aux 4 spécialités:
* Développement
* UX
* Design
* Marketing

Dans ce cadre, chaque année les élèves d'UX/Marketing pourraient élaborer lors du premier semestre les objectifs d'usages et construire un backlog, qui serait ensuite repris lors du second semestre aux élèves de Dev/Design.
La spécialité UX aurait un rôle de suivi sur l'année.

Les responsables de chaque spécialité pourraient être Product Owner.


### Premiers pas (Printemps 2018)

Dans un premier temps, nous avons choisi de réaliser un un simple visualiseur de profils, en [React](https://reactjs.org/).
Il permet de voir les différentes classes de l'ECV Digital ainsi que les profils des élèves. Certains profils peuvent afficher des informations concernant le profil Github de l'élève.

Les profils peuvent être créés et modifiés.

Une base de données sommaire a été mise en place grâce à [Airtable](https://airtable.com/)

Un système de chat est également disponible.

L'application est encore rudimentaire dans ses fonctionnalités et dans son design.


### Deuxième vague (2018/2019)

L'objectif de ce projet reste de faire travailler les différentes spécialités de l'ECVD ensemble. Néanmoins, ce projet reste valide comme support de travail pour la spécialité Développement.

Une [liste de bugs et d'améliorations possibles](https://github.com/ecvdbdx/ouvrage/issues) est disponible.

Toutefois, l'idée est d'abord de laisser les élèves décider de ce que pourrait devenir le projet. Nous commencerons donc par une première phase de réflexion concernant les usages. 
Ensuite, dans l'optique de faire travailler les élèves en mode Agile, le backlog sera étoffé, et différents sprints seront établis.


### Lancer le projet

```
npm install
npm run watch
```

N'oubliez pas de créer un fichier `airtableConfig.json` sur le modèle de `airtableConfig_sample.json`, en intégrant les bons token et clé pour Airtable.

### Lancer les tests

```
npm run test
```
