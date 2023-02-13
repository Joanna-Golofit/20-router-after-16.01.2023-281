import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  console.log(data)
  
  if (data.isError) {
    return <p>{data.message}</p>
  }

  const events = data.events;
  return (
    <EventsList events={events} />
  );
}

export default EventsPage;


export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw new json(
      { message: 'Could not fetch events' },
      { status: 500 }
    );
    // throw new Response(JSON.stringify({ message: 'Could not fetch events' }), {status: 500});
    // return {isError: true, message: 'Could not fetch events'};
    // throw {message: 'Could not fetch events'};
  } else {
    return response;
  }
}