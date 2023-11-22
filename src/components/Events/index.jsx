import EventItem from "./components/EventItem";
import data from '../../data/events.json'

//Datos de los eventos (_embedded.events) así viene en el json
const events = data._embedded.events;  //array

//utilizando destructuracion --> se asigna events a una variable events
//const { _embedded: { events }} = data;

//se asigna events a una variable conciertos
//const { _embedded: { events: conciertos }} = data;

const Events = () => {

    const eventsComponent = events.map((eventItem) => (
        <EventItem 
            key={`event-item-${eventItem.id}`}
            name = { eventItem.name }
            info = { eventItem.info }
            image = { eventItem.images[0].url}
        />
    ));

    return (
        <div>
            Componente de Eventos
            {eventsComponent}
        </div>
    );
};

//No utilizando eventsComponent - escribiendo todo dentro del return
/* const Events = () => {

    return (
        <div>
            Componente de Eventos - Inside
            
           {events.map((eventItem) => (
                <EventItem 
                    key={`event-item-${eventItem.id}`}
                    name = { eventItem.name }
                    info = { eventItem.info }
                    image = { eventItem.images[0].url}
                />
            ))}
        </div>
    );
}; */





export default Events;