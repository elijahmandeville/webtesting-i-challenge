let weapons = [
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

function succeed(item) {
  if (item.enhancement < 0) {
    item.enhancement = 0;
  } else if (typeof item.enhancement !== "number") {
    throw new Error("Item durability must be a number");
  }

  if (item.enhancement < 20) {
    item.enhancement++;
    return { ...item };
  } else {
    return { ...item };
  }
}

function fail(item) {
  if (typeof item.enhancement !== "number") {
    throw new Error("Item enhancement must be a number");
  } else if (item.enhancement >= 15) {
    if (item.durability <= 0) {
      if (item.enhancement >= 16) {
        return { ...item, durability: 0, enhancement: item.enhancement - 1 };
      }
      return { ...item, durability: 0 };
    }
    if (item.enhancement >= 16) {
      return {
        ...item,
        durability: item.durability - 10,
        enhancement: item.enhancement - 1,
      };
    }
    return { ...item, durability: item.durability - 10 };
  } else if (item.enhancement < 15) {
    if (item.durability <= 0) {
      return { ...item, durability: 0 };
    }
    return { ...item, durability: item.durability - 5 };
  }
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}

module.exports = {
  succeed,
  fail,
  repair,
  get,
  weapons,
};
