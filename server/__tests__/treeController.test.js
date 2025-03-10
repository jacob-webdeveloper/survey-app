const request = require("supertest");
const app = require("../server"); 

describe("Tree API Endpoints", () => {
  it("should return a list of trees", async () => {
    const res = await request(app).get("/api/trees");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
