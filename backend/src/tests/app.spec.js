const mongoose = require('mongoose');
const app = require('../app');
const request = require('supertest');

const callApi = (query) => {
  return request(app).get("/laptops").query(query);
};

beforeAll(async () => {
  const uri = 'mongodb://localhost:27017/mongo';
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Laptops endpoint', () => {
  test("Return all laptops", async () => {
    const response = await callApi()
    expect(response.body.length).toEqual(19)
  })

  test("Return business laptops", async () => {
    const response = await callApi({laptopType: 'business'})
    expect(response.body.length).toEqual(11)
  })

  test("Return laptops by screen size", async () => {
    const response = await callApi({screenSize: ["12 inches", "13 inches"]})
    expect(response.body.length).toEqual(5)
  })

  test("Return laptops combining search filters", async () => {
    const response = await callApi({screenSize: ["13 inches"], laptopType: 'business'})
    expect(response.body.length).toEqual(2)
  })
});
