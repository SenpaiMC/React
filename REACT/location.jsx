function MonComposant(){
    return <h1>Bienvenue sur mon site de location</h1>
}
ReactDOM.render(<MonComposant/>, document.getElementById('titre_page'));

const voitures =[
    {id:1, nom:"Mazda 3", prix_voiture:70, image:"voiture_1.jpg"},
    {id:2, nom:"R5 Turbo", prix_voiture:120, image:"voiture_2.jpg"},
    {id:3, nom:"Honda FK8", prix_voiture:203, image:"voiture_3.jpg"},
]

function CarItem({car}){
    return (
        <div className="car-item">
            <img src={car.image} alt="" />
            <h2>{car.nom}</h2>
            <p>{car.prix_voiture}€</p>
            <button>Ajouter</button>
        </div>
    );
}

const voitureItem = [];
let i = 0;
while(i<voitures.length){
    voitureItem.push(<CarItem key={voitures[i].id} car={voitures[i]} />);
    i++;
}

ReactDOM.render(<section>{voitureItem}</section>,document.getElementById('car-list'));