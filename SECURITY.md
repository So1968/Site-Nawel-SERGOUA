# Sécurité

Le dépôt ne doit jamais contenir de mot de passe, de clé API ou de fichier `.env` réel.

Pour signaler une vulnérabilité, ne publiez pas de détail exploitable dans une issue publique. Utilisez la fonction de signalement privé de GitHub si elle est disponible pour le dépôt, ou contactez directement la propriétaire du dépôt afin de transmettre les éléments de reproduction de manière confidentielle.

Avant chaque mise en ligne :

- définir `NEXT_PUBLIC_SITE_URL` avec le domaine HTTPS réel ;
- définir un identifiant et un mot de passe de bureau d’au moins 16 caractères ;
- vérifier que `/bureau` répond `401` sans authentification ;
- vérifier que la CI est verte ;
- ne jamais réutiliser le secret de test de la CI.
