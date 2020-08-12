import { Request, Response } from "express";
import * as HTTPStatus from "http-status";
import { Context } from "../Context";
import { responseErrorHandler } from "../errorHandlerApi";

class DealController {
  /**
   * Get movie with all translations
   *
   * @export
   * @param {Request} req
   * @param {Response} res
   */
  async getMovieTranslations(req: Request, res: Response) {
    try {
      const deals = await Context.getInstance().db.deals.find({});

      res.status(HTTPStatus.OK).json({
        deals,
        message: "OK",
      });
    } catch (err) {
      responseErrorHandler(err, res);
    }
  }
}
export default new DealController();
