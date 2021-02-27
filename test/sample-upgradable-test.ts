import { expect } from 'chai'
import { ethers, upgrades } from "hardhat";

describe("GreeterUpgradable", function() {
  it("Should return the new greeting once it's changed", async function() {
    const GreeterUpgradable = await ethers.getContractFactory("GreeterUpgradable");
    const greeterUpgradable = await upgrades.deployProxy(GreeterUpgradable, ["Hello, world!"]);
    
    expect(await greeterUpgradable.greet()).to.equal("Hello, world!");

    await greeterUpgradable.setGreeting("Hola, mundo!");
    expect(await greeterUpgradable.greet()).to.equal("Hola, mundo!");
  });
});
