import Event_logDTO from "./Event_log.dto";
import Event_logService from "./Event_log.service";
import { NextFunction, Request, Response } from "express";

const ViewOneEventlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const data = await Event_logService.viewOneEventlog(id, next);

    res.json(data);
  } catch (error) {
    next(error);
  }
};
const ViewAllEventlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const address = req.params.address.toString();
    const data = await Event_logService.viewAllEventlog(address, next);

    res.json(data);
  } catch (error) {
    next(error);
  }
};

export default { ViewOneEventlog, ViewAllEventlog };
