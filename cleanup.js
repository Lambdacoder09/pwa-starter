import fs from 'fs';
import path from 'path';

const toDelete = [
    'src/pages/app-about',
    'src/styles/shared-styles.ts',
    'src/styles/tailwind.ts'
];

toDelete.forEach(p => {
    const fullPath = path.resolve(p);
    if (fs.existsSync(fullPath)) {
        console.log(`Deleting ${fullPath}`);
        fs.rmSync(fullPath, { recursive: true, force: true });
    } else {
        console.log(`Skipping ${fullPath} (not found)`);
    }
});
