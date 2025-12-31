const fs = require('fs');
const path = require('path');

describe('Infrastructure Configuration', () => {
    const dockerfilePath = path.resolve(__dirname, '../../Dockerfile');
    const entrypointPath = path.resolve(__dirname, '../../entrypoint.sh');

    it('Dockerfile should contain VUE_APP_MAPILLARY_CLIENT_ID environment variable', () => {
        const content = fs.readFileSync(dockerfilePath, 'utf8');
        expect(content).toContain('ENV VUE_APP_MAPILLARY_CLIENT_ID=VUE_APP_MAPILLARY_CLIENT_ID_ENV');
    });

    it('entrypoint.sh should contain VUE_APP_MAPILLARY_CLIENT_ID replacement logic', () => {
        const content = fs.readFileSync(entrypointPath, 'utf8');
        expect(content).toContain("sed -i 's|VUE_APP_MAPILLARY_CLIENT_ID_ENV|'${VUE_APP_MAPILLARY_CLIENT_ID:-none}|g' $file");
    });
});
