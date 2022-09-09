const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const deployer = await getNamedAccounts()
    const fundMe = await ethers.getContract("Fundme", deployer)
    console.log("Funding Contract...")
    const transactionResponse = await fundMe.fund({
        value: ethers.utils.parseEther("0.6"),
    })
    await transactionResponse.wait(1)
    console.log("Funded Me...")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
