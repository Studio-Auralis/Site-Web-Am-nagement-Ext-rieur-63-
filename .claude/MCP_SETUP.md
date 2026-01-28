# Configuration MCP Servers

Ce projet utilise des MCP (Model Context Protocol) servers pour améliorer les capacités de développement avec Claude Code.

## MCP Servers configurés

### 1. Context7
Documentation en temps réel pour les librairies et frameworks.

**Fonctionnalités :**
- Accès à la documentation à jour de n'importe quelle librairie
- Exemples de code contextuels
- Recherche dans la documentation

**Configuration :**
1. Obtenez une clé API sur https://context7.ai
2. Ajoutez-la dans votre fichier `.env.local` :
   ```
   CONTEXT7_API_KEY=votre_cle_api_context7
   ```

### 2. Playwright
Automatisation et testing de navigateur.

**Fonctionnalités :**
- Navigation web automatisée
- Captures d'écran
- Testing E2E
- Interaction avec les pages web
- Extraction de données

**Configuration :**
Aucune configuration nécessaire - fonctionne out of the box.

## Installation

Les MCP servers sont automatiquement installés et exécutés via `npx` lorsque Claude Code les utilise.

### Prérequis
- Node.js 18+ installé
- npm ou npx disponible dans le PATH

## Utilisation dans Claude Code

Une fois configurés, les MCP servers sont automatiquement chargés par Claude Code au démarrage du projet.

### Exemples d'utilisation

#### Context7
```
"Comment utiliser useState avec React 18 ?"
"Montre-moi des exemples de Prisma avec Next.js"
```

#### Playwright
```
"Ouvre localhost:3000 et prends une capture d'écran"
"Teste le formulaire de contact"
"Vérifie que la page se charge correctement"
```

## Vérification

Pour vérifier que les MCP servers sont bien chargés :
```bash
claude-code --list-mcp
```

## Dépannage

### Context7 ne fonctionne pas
- Vérifiez que `CONTEXT7_API_KEY` est bien défini dans `.env.local`
- Vérifiez que la clé API est valide
- Relancez Claude Code

### Playwright ne fonctionne pas
- Assurez-vous que Node.js 18+ est installé
- Vérifiez que npx fonctionne : `npx --version`
- Essayez d'installer manuellement : `npx -y @modelcontextprotocol/server-playwright`

## Fichiers de configuration

- `.claude/mcp.json` - Configuration des MCP servers
- `.env.local` - Variables d'environnement (clés API)
- `.env.example` - Template des variables d'environnement

## Sécurité

⚠️ **Important :**
- Ne committez JAMAIS le fichier `.env.local`
- Ne partagez JAMAIS vos clés API
- Les clés API sont déjà dans `.gitignore`

## Ressources

- [MCP Documentation](https://modelcontextprotocol.io)
- [Context7 Website](https://context7.ai)
- [Playwright MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/playwright)
- [Claude Code Documentation](https://docs.anthropic.com/claude-code)
