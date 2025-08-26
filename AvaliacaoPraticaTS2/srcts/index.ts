import express from 'express';
import routes from './routes'; // ou './routes/index';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('*** API INCIADA NA PORTA 3000 ***');
    console.log('*** PRESSIONE CTRL+C PARA FINALIZAR ***');
});