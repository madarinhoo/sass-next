# SASS - MDC

## Fonctionnalités

- Connexion utilisateur avec NextAuth.js
- Création, lecture, mise à jour et suppression (CRUD) de notes
- Édition de profil utilisateur
- Intégration de Stripe pour un abonnement fictif

## Technologies Utilisées

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- SQLite (base de données)
- [Stripe](https://stripe.com/)

## Prérequis

- Node.js installé localement
- SQLite installé localement (ou un autre serveur de base de données)

## Installation

1. Cloner le dépôt
2. Installer les dépendances avec `npm install`
3. Configurer les variables d'environnement
4. Lancer l'application avec `npm run dev`

## Configuration

1. Créer un fichier `.env` à la racine du projet et configurer les variables suivantes :


- GITHUB_ID=
- GITHUB_SECRET=
- GOOGLE_CLIENT_ID=
- STRIPE_KEY_SECRET=
- STRIPE_API_ID=
- STRIPE_WEBHOOK_SECRET=
- DATABASE_URL=
- PRODUCTION_URL=
- NEXTAUTH_SECRET=


Obtenez les identifiants OAuth pour Google et GitHub depuis les plateformes de développement correspondantes.


## Contribuer

Si vous souhaitez contribuer à ce projet, veuillez consulter [CONTRIBUTING.md](CONTRIBUTING.md) pour obtenir des instructions sur la façon de démarrer.

Ce projet est sous licence [MIT](LICENSE).

