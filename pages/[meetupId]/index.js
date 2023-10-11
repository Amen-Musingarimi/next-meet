import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="A Meetup"
      address="Some Street 5, Some city"
      description="This is a meetup"
    />
  );
};

export default MeetupDetails;
