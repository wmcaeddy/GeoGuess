const fs = require('fs');
const path = require('path');
const packageJson = require('../../package.json');

describe('Mapillary Installation', () => {
    it('mapillary-js should be listed in dependencies', () => {
        expect(packageJson.dependencies['mapillary-js']).toBeDefined();
    });

    it('Mapillary CSS should be imported in main.js', () => {
        const mainJsPath = path.resolve(__dirname, '../../src/main.js');
        const content = fs.readFileSync(mainJsPath, 'utf8');
        expect(content).toContain("import 'mapillary-js/dist/mapillary.css'");
    });
});
