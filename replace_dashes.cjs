const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.ts') || file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'src'));
let totalReplaced = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('—')) {
        const matches = content.match(/—/g);
        if (matches) {
            totalReplaced += matches.length;
            // Replace all occurrences of em dash with comma
            content = content.replace(/—/g, ',');
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Replaced dashes in ${file}`);
        }
    }
});

console.log(`Total dashes replaced: ${totalReplaced}`);
