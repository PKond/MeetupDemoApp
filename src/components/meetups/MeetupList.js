import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul classname={classes.list}>
      {/*
        map every meetup into another object into a jsx element to be precise
        ,we transform every meetup into MeetupItem
        */}
      {props.meetups.map((meetup) => (
        <MeetupItem key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
