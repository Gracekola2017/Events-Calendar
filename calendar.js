const events = [
    {
        title: 'Frankie Wedding Committe',
        date: new Date(2023-08-25),
        location: 'Avenida Lounge',
        attendees: new Set(['Kola','Annie','Sim','Tim','Apiri','Faith']),
    },
    {
        title: 'Grace Birthday',
        date: new Date(2023-11-09),
        location: 'Kempinski',
        attendees: new Set(['Kola','Duncan','Susan','Frankie','Angie','DRA']), 
    },
    {
        title: 'Graduation Ceremony',
        date: new Date(2023-12-09),
        location: 'Siaya',
        attendees: new Set(['Kola','Duncan','Susan','Frankie','Angie','DRA']), 
    },
    {
        title: 'Christmas Celebration',
        date: new Date(2023-12-25),
        location: 'Bondo',
        attendees: new Set(['Samuel','Erick','Milly','Magda','JJ','Vicky']),
    },
    {
        title: 'New Year Celebration',
        date: new Date(2024-01-01),
        location: 'Kisumu',
        attendees: new Set(['Samuel','Erick','Milly','Magda','JJ','Vicky']),
    },
];
const eventOrganizers = new WeakMap();
eventOrganizers.set(events[0].title, 'Organizer 1');
eventOrganizers.set(events[1].title, 'Organizer 2');
eventOrganizers.set(events[2].title, 'Organizer 3');
eventOrganizers.set(events[3].title, 'Organizer 4');
eventOrganizers.set(events[4].title, 'Organizer 5');

function addAttendee(eventTitle, attendeeName) {
    const event = events.find(event) => event.title === eventTitle);
    if (event) {
        event.attendees.add(attendeeName);
    }
}
