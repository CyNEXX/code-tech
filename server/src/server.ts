import Server from './serverModel/serverModel';

const start = async () => {
    const server = new Server();

    server.listen();
};

start();
