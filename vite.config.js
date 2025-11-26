import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 5173
    },
    preview: {
        port: 80,
        host: '0.0.0.0',
        allowedHosts: ['remlit.fr'],
    }
    // Ajoute ici tes plugins ou options spécifiques
    // Exemple pour Phaser (optionnel) :
    // plugins: [/* tes plugins */]
});
