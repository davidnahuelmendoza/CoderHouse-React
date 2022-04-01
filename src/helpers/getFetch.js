const productos = [
    {id: "1", nombre: "Hamburguesa Simple", stock: 50, precio: 150, foto: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXEH2NW/200/200/original?country=ar" },
    {id: "2", nombre: "Hamburguesa Doble", stock: 75, precio: 300, foto: "https://burgerkingec.com/wp-content/uploads/2020/05/Hamburguesa-Doble-con-Queso.png"},
    {id: "3", nombre: "Cheeseburguer", stock: 50, precio: 250, foto:"https://mcdonalds.es/api/cms/images/mcdonalds-es/bece0fec-976e-4403-8374-8424497c8b97_1080x943_Menu%CC%814You_cheeseburger.png?auto=compress,format"},
    {id: "4", nombre: "Cheeseburger Doble", stock: 75, precio: 400, foto: "https://mcdonalds.es/api/cms/images/mcdonalds-es/57e9dca6-0242-4048-9554-bc35c6f3fc84_1080x943_Menu%CC%814You_doble+cheeseburger.png?auto=compress,format"}
]

export const getFetch = new Promise((resolve, reject) => {
    let condicion = true;
    if (condicion) {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    } else {
        reject("404 Not Found")
    }
})