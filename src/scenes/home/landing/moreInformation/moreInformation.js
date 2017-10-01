import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import ClipPathImage from 'shared/components/clipPathImage/clipPathImage';
import familyImage from 'images/Family-1.jpg';
import milImage from 'images/Mil-1.jpg';
import volunteerImage from 'images/Volunteer-1.jpg';

import styles from './moreInformation.css';

class MoreInformation extends Component {
  render() {
    return (
      <Section title="Who We Serve" theme="gray">
        <div className={styles.moreInformation}>
          <ClipPathImage
            title="Military Families and Spouses"
            image={familyImage}
            altText="Military Families and Spouses"
          />
          <ClipPathImage
            title="Veterans, Active Duty, and Reservists"
            image={milImage}
            altText="Veterans, Active Duty, and Reservists"
          />
          <ClipPathImage
            title="Volunteers and Sponsors"
            image={volunteerImage}
            altText="Volunteers and Sponsors"
          />
        </div>
      </Section>
    );
  }
}

export default MoreInformation;
