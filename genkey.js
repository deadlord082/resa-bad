const crypto = require('crypto');
const fs = require('fs');

//Génère une clef aléatoire de 32 bytes (char) en ascii
const secret = crypto.randomBytes(32).toString('hex');
//Enregistrer clef dans un fichier private.key

fs.writeFileSync('private.key', secret);