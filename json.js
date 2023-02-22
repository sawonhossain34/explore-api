// javascrippt object notation
// const user = {id : 1, name:'Gorib Amir', job: 'actor'};
// const stringtified = JSON.stringify(user);

// console.log(user);
// console.log(stringtified);


const shop = {
    ownner : 'aliya',
    address : {
        street : 'moheshpur',
        city : 'jessore',
        country : 'BD'
    },
    products : ['laptop','mobail','mouse','keyboard'],
    revinue : 45000,
    isOpen : true,
    isNew : false

}
// console.log(shop);
const shopJSON = JSON.stringify(shop);
const shopObj = JSON.parse(shopJSON);



console.log(shopJSON);
console.log(shopObj);