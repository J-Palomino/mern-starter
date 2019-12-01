describe("app.js", () => {
    it("runs without crashing", () => {
        const server = require("./app");
        expect(server).not.toBeNull();
        server.close();
    });
});
