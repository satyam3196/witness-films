import React from 'react';
import styles from './Team.module.css';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Rishabh Pandey",
    role: "Founder & Executive Producer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageUrl: "/images/rishabh-pandey.jpg" // You'll need to add this image to public/images
  },
  {
    name: "Divyansh Joshi",
    role: "Founder & Director",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugenda. Nulla quis lorem ut libero malesuada feugenda.",
    imageUrl: "/images/divyansh-joshi.jpg" // You'll need to add this image to public/images
  }
];

const Team: React.FC = () => {
  return (
    <div className={styles.teamContainer}>
      <h1 className={styles.teamTitle}>Our Team</h1>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <div className={styles.imageContainer}>
              <img
                src={member.imageUrl}
                alt={member.name}
                className={styles.memberImage}
              />
            </div>
            <div className={styles.memberInfo}>
              <h2 className={styles.memberName}>{member.name}</h2>
              <h3 className={styles.memberRole}>{member.role}</h3>
              <p className={styles.memberBio}>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team; 