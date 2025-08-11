import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  // Defensive check (optional)
  if (!cohort) return null;

  const cohortStatus = cohort.status;

  return (
    <div className={styles.box}>
      <h3 style={{ color: cohortStatus === 'ongoing' ? 'green' : 'blue' }}>
        {cohort.name}
      </h3>
      <dl>
        <dt>Status:</dt><dd>{cohortStatus}</dd>
        {/* Add other cohort properties if needed */}
      </dl>
    </div>
  );
}

export default CohortDetails;
