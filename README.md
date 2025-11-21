# 🏎️ Rush GP Manager - Game Design Document

## 📖 Vue d'ensemble

**Rush GP Manager** est un jeu de gestion d'écurie de course automobile en 2D (avec évolution 3D prévue). Le joueur gère une équipe de course, recrute des pilotes, améliore ses voitures et participe à des championnats.

***

## 🎯 Concept du jeu

### Genre
- Management / Simulation
- Course automobile (gestion d'écurie)
- Progression incrémentale

### Objectif principal
Développer son écurie de course pour devenir champion du monde en gérant :
- Budget et finances
- Recrutement et développement des pilotes
- Amélioration et maintenance des voitures
- Stratégie de course

***

## 🎮 Gameplay Core Loop

```
Menu Principal
    ↓
Dashboard Écurie (vue principale)
    ↓
Gérer → Pilotes / Voitures / Finances / Upgrades
    ↓
Préparer la course → Sélectionner pilote + voiture + stratégie
    ↓
Lancer la course → Simulation avec résultats
    ↓
Gains / Pertes → Budget mis à jour
    ↓
Retour Dashboard → Améliorer l'écurie
    ↓
Prochaine course
```

***

## 📊 Systèmes de jeu

### 1. Système de Pilotes
**Attributs des pilotes :**
- Nom
- Niveau de compétence (1-100)
- Spécialités (vitesse, virage, pluie, dépassement)
- Salaire
- Moral / Fatigue
- Expérience (progression)

**Actions :**
- Recruter (marché des transferts)
- Entraîner (améliore compétences)
- Licencier

***

### 2. Système de Voitures
**Attributs des voitures :**
- Nom / Modèle
- Performance (moteur, aéro, freins, pneus)
- Fiabilité (risque de casse)
- Coût d'entretien
- Niveau d'upgrade

**Actions :**
- Acheter nouvelle voiture
- Upgrader composants
- Réparer / Entretenir

***

### 3. Système de Course
**Préparation :**
- Choix du pilote
- Choix de la voiture
- Stratégie (agressif / équilibré / défensif)
- Pneus (tendres / médium / durs)

**Simulation :**
- Calcul automatique basé sur :
  - Stats pilote
  - Stats voiture
  - Conditions météo (aléatoire)
  - Stratégie choisie
  - Facteur chance (10-20%)

**Résultats :**
- Position finale (1er à 20ème)
- Points de championnat
- Gains financiers
- Usure voiture
- Expérience pilote

***

### 4. Système Financier
**Revenus :**
- Primes de course (selon position)
- Sponsors (revenus passifs)
- Vente de pilotes/voitures

**Dépenses :**
- Salaires pilotes
- Entretien voitures
- Upgrades
- Frais d'inscription courses

**Budget de départ :** 100 000 €

***

### 5. Système de Progression
**Calendrier de saison :**
- 10 courses par saison
- Circuit différent à chaque course
- Conditions météo variables

**Objectifs :**
- Court terme : Gagner les courses
- Moyen terme : Gagner le championnat de la saison
- Long terme : Construire l'écurie la plus performante

***

## 🎨 Interface utilisateur

### Menu Principal
- Titre du jeu
- Bouton "JOUER" (nouvelle partie)
- Bouton "CONTINUER" (si sauvegarde existe)
- Bouton "OPTIONS"
- Bouton "QUITTER"

### Dashboard Écurie (écran principal)
**Haut de l'écran :**
- Nom de l'écurie
- Budget actuel
- Saison / Course en cours

**Sections :**
1. **Pilotes** (card pour chaque pilote avec stats)
2. **Voitures** (card pour chaque voiture avec stats)
3. **Prochaine course** (info + bouton "Lancer")
4. **Classement** (position championnat)

**Boutons d'action :**
- Marché (recruter)
- Garage (améliorer voitures)
- Finances (voir détails)

### Écran de Course
- Nom du circuit
- Classement en temps réel (simplifié)
- Animation/progression
- Résultat final + gains

***

## 🗂️ Structure de données

### Pilote (Driver)
```typescript
interface Driver {
  id: number;
  name: string;
  skill: number;        // 1-100
  speed: number;        // 1-100
  corners: number;      // 1-100
  rain: number;         // 1-100
  salary: number;       // €/course
}
```

### Ecurie (Team)
```typescript
interface Driver {
  id: number;
  name: string;
  budget: number,
  
}
```

### Voiture (Car)
```typescript
interface Car {
  id: number;
  model: string;
  engine: number;       // 1-100
  aero: number;         // 1-100
  tires: number;        // 1-100
  reliability: number;  // 1-100
  wear: number;         // 0-100 
  upgradeCost: number;
}
```

### Course (Race)
```typescript
interface Race {
  id: number;
  circuit: string;
  weather: 'sunny' | 'cloudy' | 'rain';
  laps: number;
  difficulty: number;   // 1-5
}
```

### Saison (Season)
```typescript
interface Season {
  number: number;
  currentRace: number;  // 1-10
  races: Race[];
  standings: Standing[];
}
```

***

## 🎲 Formules de calcul

### Performance globale d'un pilote
```
pilotPerformance = (skill + speed + corners + overtaking) / 4
bonus = rain * weatherFactor (si pluie)
finalPerformance = pilotPerformance + bonus + random(-10, +10)
```

### Performance globale d'une voiture
```
carPerformance = (engine + aero + brakes + tires) / 4
penalty = wear * 0.2 (usure pénalise)
finalPerformance = carPerformance - penalty
```

### Résultat de course
```
raceScore = (pilotPerformance * 0.6) + (carPerformance * 0.4)
position = classement basé sur raceScore de tous les participants
```

***

## 📅 Roadmap de développement

### Phase 1 : MVP (Minimum Viable Product) ✅ En cours
- [x] Menu principal
- [x] Système de scènes
- [x] Composant Button réutilisable
- [ ] PlayScene - Dashboard basique
- [ ] Affichage pilotes/voitures (données hardcodées)
- [ ] Bouton "Lancer course" → Résultat aléatoire simple

### Phase 2 : Systèmes de base
- [ ] Système de calcul de course (formules)
- [ ] Écran de résultat de course
- [ ] Mise à jour budget après course
- [ ] Calendrier de saison (10 courses)
- [ ] Sauvegarde/Chargement (localStorage)

### Phase 3 : Gestion avancée
- [ ] Marché des pilotes (recruter/vendre)
- [ ] Garage (améliorer voitures)
- [ ] Système d'expérience pilotes
- [ ] Usure des voitures
- [ ] Sponsors

### Phase 4 : Polish & Contenu
- [ ] Assets graphiques (sprites pilotes/voitures)
- [ ] Animations de course
- [ ] Effets sonores
- [ ] Musique
- [ ] Multiples écuries IA

### Phase 5 : Évolution 3D (futur)
- [ ] Migration vers Three.js
- [ ] Vue 3D du circuit
- [ ] Modèles 3D des voitures
- [ ] Caméra dynamique

***

## 🛠️ Stack technique

**Moteur de jeu :** Phaser 3  
**Langage :** TypeScript  
**Bundler :** Vite  
**Plateforme de dev :** StackBlitz  
**Hébergement :** GitHub Pages (prévu)

***

## 📝 Notes de design

### Principes
- **Simplicité** : Interface claire et intuitive
- **Progression** : Le joueur doit sentir qu'il progresse
- **Choix** : Stratégies multiples possibles
- **Récompense** : Chaque course doit être satisfaisante

### Ton du jeu
- Sérieux mais accessible
- Simulation réaliste mais pas trop complexe
- Focus sur le plaisir de la gestion

***

**Version :** 0.1.0  
**Dernière mise à jour :** 21 novembre 2025  
**Auteur :** gruv0o
