const useIsMounted = require("./useIsMounted")
// @ponicode
describe("useIsMounted.useIsMounted", () => {
    test("0", () => {
        let callFunction = () => {
            useIsMounted.useIsMounted()
        }
    
        expect(callFunction).not.toThrow()
    })
})
