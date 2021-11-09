import { Router, request, response, Request, Response} from 'express'

import { getCadastros, saveCadastro, getCadastro, updateCadastro, deleteCadastro, finishedCadastro } from './controller/CadastroController';

const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma 007tinho!' })
})

routes.get('/cadastros', getCadastros)
routes.post('/cadastros', saveCadastro)
routes.get('/cadastros/:id', getCadastro)
routes.put('/cadastros/:id', updateCadastro)
routes.delete('/cadastros/:id', deleteCadastro)
routes.patch('/cadastros/:id', finishedCadastro)

export default routes