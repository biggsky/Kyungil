import supertest from "supertest";

const request = supertest("https://api.bouncexplorer.site");

describe("GET /block", () => {
  it("responds with data", async () => {

    const response = await request.get("/block");
    console.log(response)
    expect(response.statusCode).toBe(200);
    
    expect(response.body).toHaveProperty("data");
  });
});
