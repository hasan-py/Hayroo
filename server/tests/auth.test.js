const request  = require("supertest")
const app =  require("../app")
const userModel = require("../models/users");

describe('test Authentication', () => {
    it('register user successfully ', async () => {
        const res = await request(app)
            .post('/api/signup')
            .send (
                {
                    "name" : "testing",
                    "email" : "testing@gmail.com",
                    "password" : "testingAZA",
                    "cPassword" : "testingAZA",
                }
            )
        expect(res.statusCode).toBe(200);
    });


    it('login user successfully ', async () => {
    const user = await userModel.create({
        name: "loginTest",
        email: "testing@gmail.com",
        password: "testing",
        userRole: 0
    });
    const res = await request(app)
        .post('/api/signin')
        .send({
        email: user.email,
        password: "testing"
        });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');  
    });


    it('isadmin', async () => {
            const user = await userModel.create({
                name: "adminUser",
                email: "admin@example.com",
                password: "123456344",
                userRole: 1
            });
            const res = await request(app)
                .post('/api/isadmin')
                .send({ loggedInUserId: user._id });

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('role');
            expect(res.body.role).toBe(1);
    }, 10000);  



   
    

    
});
