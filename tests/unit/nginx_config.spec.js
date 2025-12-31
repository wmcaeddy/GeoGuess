const fs = require('fs');
const path = require('path');

describe('Nginx Configuration', () => {
    const nginxPath = path.resolve(__dirname, '../../nginx.conf');

    it('should include IPv6 listening directive', () => {
        const content = fs.readFileSync(nginxPath, 'utf8');
        expect(content).toContain('listen [::]:PORT_HOLDER;');
    });

    it('should use PORT_HOLDER for IPv4', () => {
        const content = fs.readFileSync(nginxPath, 'utf8');
        expect(content).toContain('listen PORT_HOLDER;');
    });
});
