const server = require('../routes');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`"Team Drawer" running on port ${PORT}`));
