import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService  {

  constructor() { }
  //foodDetails
  foodDetails = [
    {
      id: 1,
      foodName: "Indulgence Brownie",
      foodDetails: "(Eggless) Indulge in richly decadent choclate brownie crafted with chocolate",
      foodPrice: 200,
      foodImg: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
    },
    {
      id: 2,
      foodName: "Veggie Supreme",
      foodDetails: "Onion| Green Cpasicum|Mushroom |black olives, sweet corn ,Red papprica",
      foodPrice: 369,
      foodImg: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    },
    {
      id: 3,
      foodName: "Veg Masala Roll In Naan",
      foodDetails: "A homely mix of mashed potato and veggie, seasoned with Indian spices ",
      foodPrice: 140,
      foodImg: "https://spicecravings.com/wp-content/uploads/2020/12/Paneer-kathi-Roll-Featured-1.jpg"
    },
    {
      id: 4,
      foodName: "Panner Burger",
      foodDetails:"Crunchy panner patty" ,
      foodPrice: 149,
      foodImg: "https://mcdonaldsblog.in/wp-content/uploads/2016/06/mcspicy-paneer-1-1.jpg "
    },
    {
      id: 5,
      foodName: "Panner Grilled Sandwich ",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 105,
      foodImg: "https://www.ruchikrandhap.com/wp-content/uploads/2017/09/Paneer-Corn-Spinach-Sandwich-4-1.jpg"
    },
    {
      id: 6,
      foodName: "Oreo ice cream",
      foodDetails: "Oreo",
      foodPrice: 119,
      foodImg: "https://www.seriouseats.com/thmb/W9zf9ezs2hsl8K_lwDjgL8wGqIU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__08__20170729-oreo-ice-cream-vicky-wasik-18-47ec4942ed2a441a959822d97e9cd9ec.jpg"
    },
  ]

}
