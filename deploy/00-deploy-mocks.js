const { network } = require("hardhat")
const { developmentChain } = require("../helper-hardhat-config")

const DECIMALS = "8"
const INITIAL_PRICE = "200000000000"

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    if (developmentChain.includes(network.name)) {
        log("Local network detected!! Deploying mocks ...😏😏")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_PRICE],
        })
        log("MOCkS deployed successfully....🙂🙂🙂")
        log("----------------------------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]

//MockV3Aggregator
