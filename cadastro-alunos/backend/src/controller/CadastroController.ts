import { getRepository } from "typeorm";
import { Cadastro } from "../entity/cadastros";
import { request, Request, Response } from "express";


export const getCadastros = async(request: Request, response: Response) => {

    const cadastro = await getRepository(Cadastro).find()
    return response.json(cadastro);
};

export const saveCadastro = async(request: Request, response: Response) => {
    const cadastro = await getRepository(Cadastro).save(request.body)
    return response.json(cadastro);
};

export const getCadastro = async(request: Request, response: Response) => {
    const{id} = request.params
    const cadastro = await getRepository(Cadastro).findOne(id)
    return response.json(cadastro);
};

export const updateCadastro = async(request: Request, response: Response) => {
    const{id} = request.params
    const cadastro = await getRepository(Cadastro).update(id, request.body)

    if (cadastro.affected == 1) {
        const cadastroUpdated = await getRepository(Cadastro).findOne(id)
        return response.json(cadastroUpdated);
    }
    else{
        return response.status(404).json( {message: 'Cadastro não encontrado!'})
    }
};

export const  deleteCadastro = async(request: Request, response: Response) => {
    const {id} = request.params
    const cadastro = await getRepository(Cadastro).delete(id)

    if(cadastro.affected == 1) {
        return response.status(200).json( {message: "Cadastro excluido com sucesso!"})
    }
    else { 
        return response.status(404).json ( {message:'Cadastro não encontrado!'})
    }
};

export const finishedCadastro = async(request: Request, response: Response) => {
    const {id} = request.params
    const cadastro = await getRepository(Cadastro).update(id, {
        matriculado: true,
    })

    
    if (cadastro.affected == 1) {   
        const cadastroFinished = await getRepository(Cadastro).findOne(id)
        return response.json(cadastroFinished);
    }
    else {
        return response.status(404).json( {message: 'Cadastro não encontrado!'})
    }
};

