import express from 'express';
import router from './routes/todos';
const app = express()
const port = 3000

app.use('/allTodos', router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

