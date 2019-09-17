let configObject = {
    "caEndpoint": process.env.CA_ENDPOINT || "localhost:7054",
    "peerEndpoint": process.env.PEER_ENDPOINT || "grpc://localhost:7051",
    "ordererEndpoint": process.env.ORDERER_ENDPOINT || "grpc://localhost:7050",
    "channelName": process.env.CHANNEL_NAME || "mychannel",
    "chaincodeId": process.env.CHAIN_CODE_ID || "ngo",
    "s3CryptoBucket": process.env.S3_CRYPTO_BUCKET || "cryptobucketname",
    "cryptoFolder": process.env.CRYPTO_FOLDER || '/tmp',
    "mspID": process.env.MSP_ID || 'm-1A2B3CXXXXXXXX',
    'fabricUsername': process.env.FABRIC_USERNAME || 'fabricLambdaUser'
}

module.exports = configObject;