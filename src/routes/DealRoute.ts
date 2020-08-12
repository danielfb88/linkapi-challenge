import { Request, Response } from "express";
import dealController from "../controllers/DealController";

class DealRoute {
  /**
   * Get deals
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   * @memberof DealRoute
   */
  async getDeals(req: Request, res: Response) {
    return dealController.getMovieTranslations(req, res);
  }
}

export default new DealRoute();
