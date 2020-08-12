import { EntityRepository, Repository } from "typeorm";
import { Deal } from "../models";

@EntityRepository(Deal)
export class DealRepository extends Repository<Deal> {}
