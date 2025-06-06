import { Request, Response } from 'express';
import * as otherService from '../services/other.services';

async function clear(_: Request, res: Response) {
  const resp = otherService.clear();
  res.json(resp);
}

export { clear };
