import React, { useEffect } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer';

const Section = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  [theme.breakpoints.down('md')]: {
    padding: '80px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '60px 0',
  },
}));

const AboutContent = styled(Typography)(({ theme }) => ({
  marginBottom: '40px',
  fontSize: '1.2rem',
  lineHeight: 1.8,
  textAlign: 'justify',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
    marginBottom: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: '20px',
    textAlign: 'left',
  },
}));

const CollaborationSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  padding: '60px 0',
  [theme.breakpoints.down('md')]: {
    padding: '50px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '40px 0',
  },
}));

const ServiceCard = styled(Box)(({ theme }) => ({
  padding: '30px 20px',
  backgroundColor: 'white',
  borderRadius: '12px',
  height: '160px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    height: '140px',
    padding: '25px 18px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '120px',
    padding: '18px 14px',
    marginBottom: '16px',
  },
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.75rem',
    marginBottom: '1rem',
  },
}));

const ColabCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  height: '200px',
  overflow: 'hidden',
  cursor: 'pointer',
  borderRadius: '8px',
  [theme.breakpoints.down('md')]: {
    height: '180px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '150px',
    marginBottom: '16px',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));

const ColabImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
});

const ColabOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '15px',
  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    padding: '12px',
  },
}));



const About = () => {
  const collaborations = [
    { id: 1, title: 'Sony Music India', image: '/images/sony_music.jpg' },
    { id: 2, title: 'Warner Music India', image: '/images/warner_music.jpg' },
    { id: 3, title: 'Desi Trill', image: '/images/desi_trill.jpg' },
    { id: 4, title: 'Mass Appeal', image: '/images/mass_appeal.jpg' },
    { id: 5, title: 'Universal Music Group', image: '/images/universal_music.jpg' },
    { id: 6, title: 'Zerodha', image: '/images/zerodha.png' },
  ];



  const services = [
    {
      title: 'Concept Development',
      description: `1. Understanding the Song
• Lyrics & Mood: Analyzing the message, tone, and emotion of the track.
• Genre & Artist's Identity: Matching visuals to the style and brand of the artist.

2. Brainstorming Ideas
• Creative sessions to generate visual interpretations of the song:
• Is it narrative, performance-based, conceptual, abstract, or cinematic?
• Mood board or references are often created at this stage.

3. Theme & Storyline Development
• Turning raw ideas into a structured concept:
• What's the story or vibe?
• Are there characters or a visual metaphor?
• Does it evolve or stay static?

4. Visual Treatment
• A treatment deck or lookbook is prepared:
• Describes the visual tone (lighting, color palette, costume, locations)
• Contains reference images, rough storyboard, shot ideas
• Helps communicate the vision to the artist and crew

5. Feasibility & Execution Planning
• Budget, location access, equipment, and time constraints are considered.
• Creative tweaks are made to fit logistics without compromising the essence.`
    },
    {
      title: 'Filming',
      description: `1. Setup
• Location prep: Art direction, set design, lighting setups.
• Camera setups: Tripods, gimbals, cranes, drones, etc.
• Gear checks: Cameras, lenses, memory, audio sync (if needed), lights.

2. Blocking
• Director and DOP (Director of Photography) rehearse with the artist/actors:
• Define movements, camera angles, performance energy.
• Helps align choreography, expressions, and camera timing.

3. Shooting Scenes
• Performance shots: Artist lip-syncs or performs to playback music.
• Narrative shots: Actors or the artist act out a storyline or scene.
• B-roll: Creative or atmospheric visuals to enhance storytelling.

Shots are done from multiple angles for flexibility in editing:
• Wide / Establishing
• Mid-shots
• Close-ups
• Creative camera moves (dolly, handheld, drone, etc.)

4. Lighting and Mood
• Cinematic lighting sets the tone and mood: soft, dramatic, neon, natural.
• Different scenes may require different setups.

5. Audio Playback
• The track is played out loud so performers can sync their lip movements.
• Playback is always at full resolution and BPM to avoid mismatch.

6. On-Set Direction
• Director guides performance energy, expression, and movement.
• DOP ensures the framing, exposure, and movement are perfect.

7. Multiple Takes
• Same scenes are shot multiple times for safety and variation.
• Often shot out of sequence depending on light, location, or artist availability.`
    },
    {
      title: 'Post Production',
      description: `1. Editing (Initial Step)
• Ingesting & Organizing Footage
• Import and back up all footage.
• Organize into folders (performance shots, B-roll, narrative, etc.).
• Label takes, mark best shots (also called "selects").

2. Syncing to Music
• Match performance footage to the music track.
• Use markers or waveform peaks to line up lip-sync accurately.

3. Rough Cut
• Lay down the basic sequence of the video.
• Choose best takes, arrange in the timeline.
• Establish pacing, shot flow, and story structure.

4. Fine Cut
• Refine transitions, rhythm, and timing with the music.
• Add cutaways, insert B-roll, or dynamic movement.
• Make creative decisions—speed ramps, zooms, overlays, etc.

2. Color Correction & Color Grading
• Color correction: Balances the lighting, white balance, and exposure across all shots to maintain consistency.
• Color grading: Adds a stylistic tone to match the concept or mood (e.g., warm vintage, cold urban, high-contrast).

3. Visual Effects (VFX) & Motion Graphics
• Adding creative enhancements like:
• Glitch effects, flares, light leaks, fire, smoke, slow motion
• Compositing elements (e.g., sky replacement, screen replacements)
• Animated text or motion graphics
• Can be minimal or heavy depending on concept.

4. Titles, Lyrics & Subtitles (Optional)
• Add:
• Opening/closing titles
• Credits (Director, DOP, Production House)
• On-screen lyrics (for lyrical videos or subtitled versions)
• Branding logos or watermarks

5. Audio Finalization
• Ensuring the final video uses the mastered version of the track.
• Add ambience, foley, or transitional sounds if needed (only in cinematic or storytelling MVs).
• Sync double-check to ensure lip movement matches audio.

6. Master Export
• Final video is rendered/exported in different formats based on platform:
• 4K for YouTube
• Square or vertical for Instagram
• Light versions for reels/stories
• Export with correct bitrate, color profile, and compression to avoid quality loss.

7. Backup & Delivery
• Organize and backup:
• Final project files
• Raw footage
• Exported versions
• Artwork or poster files
• Deliver to client or label, often via drive links or physical storage.`
    },
    {
      title: 'Marketing',
      description: `1. Marketing the Music Video Itself (If you're involved in release strategy)

Pre-Release Strategy
• Teasers & Posters: Share sneak peeks 3–7 days before launch.
• Behind-the-scenes (BTS): Short reels or photo carousels that build hype.
• Countdown posts on Instagram or YouTube community tab.

Launch Strategy
• YouTube Premiere: Schedule the video with a countdown.
• Share the YouTube link in advance across platforms.
• Cross-post on the artist's pages, label pages, and yours.
• Use hashtags + location tags smartly for discovery.
• Ask friends/fans to comment, share, and engage early (boosts algorithm).

Post-Release Push
• Post highlight reels, cinematic shots, or transitions from the video.
• Drop a "Director's Cut", an alternate edit, or fan edits.
• Encourage user-generated content (UGC) like dance challenges, covers, etc.
• Submit to music blogs, Instagram music curators, or YouTube channels that feature indie videos.

2. Marketing Your Production House

Brand Yourself Creatively
• Use a consistent logo, color scheme, and tone across all platforms.
• Create a portfolio site or Instagram page that clearly shows:
• Highlight reels
• Still frames/posters
• BTS content
• Client testimonials

Use Social Media Strategically
• Share before-and-after edits, breakdowns, or shot setups.
• Post client shout-outs when a music video crosses a milestone.
• Share director's commentary or concept decks.
• Reuse every project across multiple formats (Reels, YouTube Shorts, IGTV).

Build Relationships
• Collaborate with indie artists, stylists, choreographers, and cinematographers.
• Offer free or discounted test shoots for promising talent to build reputation.
• Join online communities (Instagram, Discords, Reddit, Facebook groups) focused on music video production, indie music, and short films.

Promotion Channels
• Instagram, YouTube, and LinkedIn (for networking)
• Behance or Vimeo (for a high-end creative portfolio)
• Google My Business and Maps (for local search visibility)
• Music video contests and festivals`
    }
  ];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Section>
        <Container>
          <PageTitle variant="h2">
            About Us
          </PageTitle>
          <AboutContent>
          We are a production house based in Dehradun, extending our services to Delhi and across India. Established in 2022, our venture was born from the belief that film is one of humanity's greatest creations, capturing moments that endure through time and serve as witnesses to the universe. Our mission is to bring visions to life on screen for all to enjoy, and in doing so, we aim to create a lasting legacy.
          </AboutContent>
          <AboutContent>
            With a deep understanding of the dynamic Indian music landscape, we collaborate closely with artists across genres to produce visually stunning and conceptually compelling music videos. Our comprehensive services encompass every stage of production, from conceptualization and storyboarding to filming, editing, and post-production.
          </AboutContent>
        </Container>
      </Section>

      <CollaborationSection>
        <Container>
          <SectionTitle variant="h3">
            Our Services
          </SectionTitle>
          <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={6} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <ServiceCard>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 'bold',
                        fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                        color: '#333'
                      }}
                    >
                      {service.title}
                    </Typography>
                  </ServiceCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </CollaborationSection>

      <Section>
        <Container>
          <SectionTitle variant="h3">
            Collaborations
          </SectionTitle>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
            {collaborations.map((colab) => (
              <Grid item xs={12} sm={6} md={4} key={colab.id}>
                <ColabCard
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * colab.id }}
                >
                  <ColabImage src={colab.image} alt={colab.title} />
                  <ColabOverlay>
                    <Typography 
                      variant="h6" 
                      sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}
                    >
                      {colab.title}
                    </Typography>
                  </ColabOverlay>
                </ColabCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>


      <Footer />
    </motion.div>
  );
};

export default About; 