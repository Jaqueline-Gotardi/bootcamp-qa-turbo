/// <reference types="cypress" />
describe("Buscar dispositivos", () => {
    it("Deve buscar dispositivos com sucesso", () => {
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objects/1"
        }).then((resposta) => {
            expect(resposta.status).to.equal(200);  
            expect(resposta.body.name).to.equal("Google Pixel 6 Pro");
            expect(resposta.body.id).to.equal("1");
        })
    });

    it("Deve listar dispositivos com sucesso", () => {
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objects/",
        }).then((resposta) => {
            expect(resposta.status).to.equal(200);
            expect(resposta.body).to.be.an("array");
            expect(resposta.body.legth).to.be.greaterThan(0);
            //valida o primeiro item do array
            expect(resposta.body[0]).to.have.property("id", "1");
            expect(resposta.body[0]).to.have.property("name", "Google Pixel 6 Pro");
            expect(resposta.body[0].data).to.have.property({
                color: "Cloudy White",
                capacity: "128 GB",
            });
            //valida o último item do array
            expect(resposta.body[resposta.body.legth-1]).to.have.property("id", "13");
            expect(resposta.body[resposta.body.legth-1]).to.have.property("name", "Apple iPhone 13 Pro Max");
            expect(resposta.body[resposta.body.legth-1].to.deep.equal({
                Generation: "4th",
                Price: "519.99",
                Capacity: "256 GB",
            }));
        });
    });

    it("Cadastrar dispositivos com sucesso", () => {
        cy.request({
            method: "POST",
            url: "https://api.restful-api.dev/objects/",
            body: {
                "name": "Celular teste",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }
        }).then((resposta) => {
            expect(resposta.status).to.equal(200);  
            expect(resposta.body.name).to.equal("Celular teste");
            expect(resposta.body.id).not.empty(); //validar se o id não é vazio
        })
    });
});