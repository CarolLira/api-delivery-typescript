import request from "supertest"
import { prisma } from "@/database/prisma"

import { app } from "@/app"

describe("SessionsController", () => {
  let user_id: string

  afterAll(async () => {
    await prisma.user.delete({ where: { id: user_id } })
  })

  it("should authenticate and get access token", async () => {
    const response = await request(app).post("/users").send({
      name: "Auth Test User",
      email: "auth_test@gmail.com",
      password: "password123"
    })

    user_id = response.body.id

    const sessionResponse = await request(app).post("/sessions").send({
      email: "auth_test@gmail.com",
      password: "password123",
    })

    expect(sessionResponse.status).toBe(200)
    expect(sessionResponse.body.token).toEqual(expect.any(String))
  })
})
