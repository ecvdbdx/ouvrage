# ECVD Ouvrage

Ouvrage est un projet pédagogique pour les élèves de Master 1 Développement, dans le cadre du cours de Javascript.
Il s'agit créer portfolio des élèves et profs de l’ECV Digital en utilisant des technologies Javascript front/back modernes.


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

Dans un premier temps, le projet sera un simple visualiseur de profils Github, basé sur l’API Github.
Il permettra de voir les différentes classes et les profils Github des élèves.

D'autres APIs peuvent être envisagées pour intégrer les élèves ne possédant pas de profil Github.

Cette première application sera "factice", sans application serveur, et hébergée sur Github Pages. Cette esquisse est développée uniquement par les élèves de M1 développement.

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
