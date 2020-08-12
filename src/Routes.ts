import { Application } from "express";
import dealRoute from "./routes/DealRoute";

class Routes {
  /**
   * Initialize routes
   *
   * @param {Application} app
   * @memberof Routes
   */
  initRoutes(app: Application): void {
    app.route("/api/deals").get((req, res) => {
      dealRoute.getDeals(req, res);
    });
  }
}

export default new Routes();
