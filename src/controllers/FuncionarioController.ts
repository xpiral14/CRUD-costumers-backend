import { Request, Response, NextFunction } from "express";
import { Funcionario } from "../models/Funcionario";
import NotFoundException from "../exceptions/NotFound";
import { Cargo } from "../models/Cargo";
export default class FuncionarioController {
  static async index(req: Request, res: Response, next: NextFunction) {
    try {
      const funcionarios = await Funcionario.findAll({ include: [Cargo] });

      return res.json(funcionarios);
    } catch (error) {
      return next(error);
    }
  }

  static async show(req: Request, res: Response, next: NextFunction) {
    try {
      const funcionario = await Funcionario.findByPk(req.params.id, {
        include: [Cargo],
      });

      if (!funcionario) throw new NotFoundException();

      return res.json(funcionario);
    } catch (error) {
      return next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const funcionario = await Funcionario.findByPk(req.params.id);
      const { body } = req;

      if (!funcionario) throw new NotFoundException();

      await funcionario.update(body);
      await funcionario.reload();

      return res.json(funcionario);
    } catch (error) {
      return next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const funcionario = await Funcionario.findByPk(req.params.id);

      if (!funcionario) throw new NotFoundException();

      await funcionario.destroy();

      return res.json();
    } catch (error) {
      return next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;

      const funcionario = await Funcionario.create(body);

      return res.json(funcionario);
    } catch (error) {
      return next(error);
    }
  }
}
