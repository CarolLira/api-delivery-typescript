import { Request, Response } from "express"
import { prisma } from "@/database/prisma"
import { z } from "zod"

class DeliveryLogsController {
  async create(request: Request, response: Response) {
    return response.json({ message: "ok" })
  }
}

export { DeliveryLogsController }
