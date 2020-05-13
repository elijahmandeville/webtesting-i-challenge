const enhancer = require("./enhancer.js");
// test away!

describe("enhancer unit tests", () => {
  beforeEach(() => {
    enhancer.weapons = [
      {
        name: "Dawnblade",
        durability: 95,
        enhancement: 13,
      },
      {
        name: "Sunshot",
        durability: 46,
        enhancement: 16,
      },
      {
        name: "Bag of dirt",
        durability: -1,
        enhancement: 16,
      },
      {
        name: "Chuck Norris",
        durability: 100,
        enhancement: 20,
      },
      {
        name: "Garbage",
        durability: "dirty socks",
        enhancement: "it's garbage",
      },
    ];
  });

  it("repairs", () => {
    expect(enhancer.repair(enhancer.weapons[0]).durability).toBe(100);
    expect(enhancer.repair(enhancer.weapons[0]).durability).not.toBe(
      enhancer.weapons[0].durability
    );
    expect(enhancer.repair(enhancer.weapons[1]).durability).toBe(100);
    expect(enhancer.repair(enhancer.weapons[2]).durability).toBe(100);
    expect(enhancer.repair(enhancer.weapons[3]).durability).toBe(100);
  });

  it("enhances", () => {
    expect(enhancer.succeed(enhancer.weapons[0]).enhancement).toBe(
      enhancer.weapons[0].enhancement++
    );
    expect(enhancer.succeed(enhancer.weapons[1]).enhancement).toBe(
      enhancer.weapons[1].enhancement++
    );
    expect(enhancer.succeed(enhancer.weapons[2]).enhancement).toBe(
      enhancer.weapons[2].enhancement++
    );
    expect(enhancer.succeed(enhancer.weapons[3]).enhancement).toBe(
      enhancer.weapons[3].enhancement++
    );
    expect(() => enhancer.succeed(enhancer.weapons[4]).enhancement).toThrow();
  });

  it("enhancement fails", () => {
    expect(enhancer.fail(enhancer.weapons[0]).durability).toBe(90);
    expect(enhancer.fail(enhancer.weapons[1]).durability).toBe(36);
    expect(enhancer.fail(enhancer.weapons[2]).durability).toBe(0);
    expect(enhancer.fail(enhancer.weapons[3]).durability).toBe(90);
    expect(enhancer.fail(enhancer.weapons[3]).enhancement).toBe(19);

    expect(() => enhancer.fail(enhancer.weapons[4]).durability).toThrow();
  });
});
