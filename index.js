const app = require('./app');
const main = async() => {
    const {argv,env} = process;
    const port = argv[2] || 3000
    app.listen( port , ()=> {
        console.log(`Running on port: ${port}`);
    })
}
main();