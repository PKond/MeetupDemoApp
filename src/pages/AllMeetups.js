import MeetupList from '../components/meetups/MeetupList.js'

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSgAw6wHuDYhubvq2yDX5oO16Up18U8Do3uUIxueWKqi7q9SMxFJKwmx-lP_S9u",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSgAw6wHuDYhubvq2yDX5oO16Up18U8Do3uUIxueWKqi7q9SMxFJKwmx-lP_S9u",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
