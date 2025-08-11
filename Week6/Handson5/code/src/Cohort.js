import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  if (!cohort) return null;

  const cohortStatus = cohort.currentStatus;  // Use currentStatus here

  return (
    <div className={styles.box}>
      <h3 style={{ color: cohortStatus.toLowerCase() === 'ongoing' ? 'green' : 'blue' }}>
        {cohort.cohortCode} {/* or cohort.technology or cohort.trainerName as needed */}
      </h3>
      <dl>
        <dt>Cohort Code:</dt><dd>{cohort.cohortCode}</dd>
        <dt>Start Date:</dt><dd>{cohort.startDate}</dd>
        <dt>Technology:</dt><dd>{cohort.technology}</dd>
        <dt>Trainer Name:</dt><dd>{cohort.trainerName}</dd>
        <dt>Coach Name:</dt><dd>{cohort.coachName}</dd>
        <dt>Status:</dt><dd>{cohortStatus}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
