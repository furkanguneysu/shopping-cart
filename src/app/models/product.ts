export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id,name,description='',price=0,imageUrl = "https://media-exp1.licdn.com/dms/image/C4D0BAQHuPT-7lghQZw/company-logo_200_200/0?e=2159024400&v=beta&t=N6qjSywtl-MFy47KtynW-crQjscyhp1UB91R9WjiNuY"){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
