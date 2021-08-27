const shop = { 
    name : 'Alia Store',
    address : 'victoria road',
    products : ['mobile, laptop', 'routers'],
    profit : 12000,
    owner : {
        name: 'Alia vhat',
        proffession: 'actor'
    },isEcpansive : false
}
const shopStringified = JSON.stringify(shop)
console.log(shopStringified.name)
const converter = JSON.parse(shopStringified)
console.log(converter.name)
