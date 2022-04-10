const ethers = require('ethers');
const utils = ethers.utils;
const labelhash = (label) => utils.keccak256(utils.toUtf8Bytes(label))
const namehash = require('eth-ens-namehash');

async function setupResolver(ens, resolver, accounts) {
  const resolverNode1 = namehash.hash("eth.eth");
  const resolverNode2 = namehash.hash("eth");
  const resolverLabel = labelhash("eth");
  console.log(`ethethresolverNode=${resolverNode1}, ethresolverNode=${resolverNode2}, resolverLabel=${resolverLabel}`);

  //await ens.setSubnodeOwner("0x0000000000000000000000000000000000000000", resolverLabel, accounts[0]);
  //await ens.setResolver(resolverNode, resolver.address);
  //await resolver.setAddr(resolverNode, resolver.address);
}

setupResolver()
.then(() => process.exit(0))
.catch(error => {
      console.error(error)
      process.exit(1)
})