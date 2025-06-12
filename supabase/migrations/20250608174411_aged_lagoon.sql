/*
  # Seed sample internships

  1. Sample Data
    - Creates sample internships for different companies and roles
    - Provides realistic internship opportunities for testing
    
  2. Security
    - Uses existing RLS policies
    - Creates internships with admin user as creator
*/

-- Insert sample internships
INSERT INTO internships (title, company, description, requirements, duration, location, type, deadline, created_by) VALUES
(
  'Frontend Development Intern',
  'TechCorp Solutions',
  'Join our frontend team to work on cutting-edge web applications using React, TypeScript, and modern CSS frameworks. You will collaborate with senior developers to build user-friendly interfaces and gain hands-on experience with industry-standard tools.',
  'Basic knowledge of HTML, CSS, JavaScript; Familiarity with React; Good communication skills; Currently pursuing Computer Science or related field',
  '3 months',
  'Mumbai, Maharashtra',
  'hybrid',
  '2025-02-15',
  '00000000-0000-0000-0000-000000000002'
),
(
  'Backend Development Intern',
  'DataFlow Systems',
  'Work with our backend engineering team to develop scalable APIs and microservices. Learn about database design, server architecture, and cloud deployment while contributing to real-world projects.',
  'Knowledge of Node.js or Python; Understanding of databases (SQL/NoSQL); Basic understanding of REST APIs; Problem-solving mindset',
  '4 months',
  'Pune, Maharashtra',
  'onsite',
  '2025-02-20',
  '00000000-0000-0000-0000-000000000002'
),
(
  'Full Stack Development Intern',
  'InnovateLabs',
  'Get comprehensive experience in both frontend and backend development. Work on complete web applications from conception to deployment, using modern technologies like React, Node.js, and cloud services.',
  'Proficiency in JavaScript; Experience with React and Node.js; Understanding of databases; Git version control; Portfolio of projects',
  '6 months',
  'Bangalore, Karnataka',
  'remote',
  '2025-03-01',
  '00000000-0000-0000-0000-000000000002'
),
(
  'UI/UX Design Intern',
  'Creative Digital Agency',
  'Join our design team to create intuitive and beautiful user experiences. Work on wireframes, prototypes, and visual designs for web and mobile applications while learning industry best practices.',
  'Proficiency in Figma or Adobe XD; Basic understanding of design principles; Portfolio of design work; Creative thinking; Attention to detail',
  '3 months',
  'Delhi, NCR',
  'hybrid',
  '2025-02-25',
  '00000000-0000-0000-0000-000000000002'
),
(
  'Data Science Intern',
  'Analytics Pro',
  'Dive into the world of data science and machine learning. Work with real datasets to extract insights, build predictive models, and create data visualizations that drive business decisions.',
  'Knowledge of Python or R; Understanding of statistics; Familiarity with pandas, numpy; Basic machine learning concepts; Analytical mindset',
  '4 months',
  'Hyderabad, Telangana',
  'onsite',
  '2025-03-10',
  '00000000-0000-0000-0000-000000000002'
),
(
  'Mobile App Development Intern',
  'MobileTech Innovations',
  'Develop mobile applications for iOS and Android platforms. Learn React Native or Flutter while working on apps that reach thousands of users. Gain experience in mobile UI/UX and app store deployment.',
  'Basic programming knowledge; Interest in mobile development; Understanding of React or Flutter; Problem-solving skills; Team collaboration',
  '5 months',
  'Chennai, Tamil Nadu',
  'hybrid',
  '2025-02-28',
  '00000000-0000-0000-0000-000000000002'
);