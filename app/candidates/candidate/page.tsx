//import { FloatingNavigation } from "@/devlink";
"use client";
import {
  CandidateDetailHeader,
  CandidateDetailLayout,
  CandidateDetailTabs,
  CoachJobCard,
  CoachJobDescription,
} from "@/devlink";

import React from "react";


const newjobs = [
  { wishlist:false,
    employer_name: "Cardinal Health",
    employer_logo:
      "https://cdn.cookielaw.org/logos/eaeb5d68-6207-4c38-bf6a-69072892ff24/e18e793c-031a-4b49-937f-2fcc9d4ca5df/e197d6e8-9f21-4bb4-bee8-cf1d1432924c/cardinal-health-logo-2021.png",
    employer_website: "http://www.cardinal.com",
    employer_company_type: "Health Care",
    job_publisher: "Cardinal Health Careers",
    job_id: "lq3IWs4EQzAAAAAAAAAAAA==",
    job_employment_type: "FULLTIME",
    job_title: "Data Analyst",
    job_apply_link:
      "https://jobs.cardinalhealth.com/search/jobdetails/data-analyst/70c00b34-3d5d-4c48-8168-f18ba193de81",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.7968,
    job_description:
      "What Data Analytics contributes to Cardinal Health\n\nData Analytics is responsible for understanding, preparing, processing and analyzing data to make the data valuable and useful for operational and/or decision making purposes. Data Analytics may need to team with either Business Intelligence, Advanced Analytics and Data Governance positions to create highly useful information.\n• * Uses knowledge of business objectives, strategies, and needs to identify opportunities where data can be leveraged to achieve the desired business benefits\n• Has an understanding of current data context, processes and availability, and how current data processes and existing data can be leveraged to achieve the desired benefits\n• Prepares and analyzes data. This can include: locating, profiling, cleansing, extracting, mapping, importing, transforming, validating, budgeting, scorecarding, or modeling\n• Applies query, data exploration and transformation, basic statistical methods and visualization techniques to create business insights or improve data quality\n• Performs validation and testing to confirm the accuracy of the information created.\n• Interprets results of analyses, identifies trends and issues, and develops recommendations to support business objectives\n• Ability to work with all levels of the business, including senior leadership, to gather requirements, provide alternatives, and interpret data into meaningful results\n• Communicates complex information so that it is easy to understand and influences others to take action based on the useful information provided\n• Implements and maintains decision support or master data management solutions\n• Has familiarity with IT shared services enabling partnership to move forward business objectives and initiatives.\n\nAccountabilities in this role\n• * Support inside sales rep compensation process\n• Support Tableau visualizations\n• Responsible for SQL code development\n• Maintain and develop Alteryx workflows\n• Support Data Lab for maintenance and construction\n• Data support of Business Intelligence Unit\n\nQualifications\n• * Bachelor’s Degree preferred\n• 7+ years’ experience in related field preferred\n• Alteryx & Tableau (desktop and server) proficiency required.\n• Business Objects and SQL proficiency preferred\n• Proficient in Microsoft Office Suite, especially Excel and PowerPoint\n• Has familiarity with database structure/ architecture\n• Analytical tool skills preferred\n• Experience developing creative and innovative analytical insights with high business value preferred\n• Strong communication skills preferred\n• Business Facing and Pharmaceutical Distribution experience required\n• GCP Cloud Experience preferred\n\nWhat is expected of you and others at this level\n• * Applies comprehensive knowledge and a thorough understanding of concepts, principles, and technical capabilities to perform varied tasks and projects\n• May contribute to the development of policies and procedures (SOPs)\n• Works on complex projects of large scope. Owns end to end development and solutioning with business and/or IT\n• May be required to perform testing & provide feedback for future state business applications\n• Develops technical solutions to a wide range of difficult problems. Solutions are innovative and consistent with organization objectives\n• Completes work independently receives general guidance on new projects\n• Work reviewed for purpose of meeting objectives\n• May act as a mentor/trainer to less experienced colleagues\n\nCandidates who are back-to-work, people with disabilities, without a college degree, and Veterans are encouraged to apply.\n\nCardinal Health supports an inclusive workplace that values diversity of thought, experience and background. We celebrate the power of our differences to create better solutions for our customers by ensuring employees can be their authentic selves each day. Cardinal Health is an Equal Opportunity/Affirmative Action employer. All qualified applicants will receive consideration for employment without regard to race, religion, color, national origin, ancestry, age, physical or mental disability, sex, sexual orientation, gender identity/expression, pregnancy, veteran status, marital status, creed, status with regard to public assistance, genetic status or any other status protected by federal, state or local law.",
    job_is_remote: false,
    job_posted_at_timestamp: 1686009600,
    job_posted_at_datetime_utc: "2023-06-06T00:00:00.000Z",
    job_city: "Bengaluru",
    job_state: "KA",
    job_country: "IN",
    job_latitude: 12.971599,
    job_longitude: 77.59457,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=data+analyst+in+banglore&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=data+analyst+in+banglore&htidocid=lq3IWs4EQzAAAAAAAAAAAA%3D%3D",
    job_offer_expiration_datetime_utc: null,
    job_offer_expiration_timestamp: null,
    job_required_experience: {
      no_experience_required: false,
      required_experience_in_months: null,
      experience_mentioned: true,
      experience_preferred: true,
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: false,
      professional_certification: false,
      high_school: false,
      associates_degree: false,
      bachelors_degree: false,
      degree_mentioned: true,
      degree_preferred: false,
      professional_certification_mentioned: false,
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {},
    job_job_title: "Data analyst",
    job_posting_language: "en",
    job_onet_soc: "43911100",
    job_onet_job_zone: "4",
    job_naics_code: "424210",
    job_naics_name: "Drugs and Druggists' Sundries Merchant Wholesalers",
  },
  { wishlist:true,
    employer_name: "Lilly",
    employer_logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eli_Lilly_and_Company.svg/1200px-Eli_Lilly_and_Company.svg.png",
    employer_website: "http://www.lilly.com",
    employer_company_type: "Manufacturing",
    job_publisher: "Eli Lilly",
    job_id: "diJu7q-G3RAAAAAAAAAAAA==",
    job_employment_type: "FULLTIME",
    job_title: "Data Analyst - Consumer Analytics",
    job_apply_link:
      "https://careers.lilly.com/us/en/job/R-41366/Data-Analyst-Consumer-Analytics",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.9004,
    job_description:
      "At Lilly, we unite caring with discovery to make life better for people around the world. We are a global healthcare leader headquartered in Indianapolis, Indiana. Our 35,000 employees around the world work to discover and bring life-changing medicines to those who need them, improve the understanding and management of disease, and give back to our communities through philanthropy and volunteerism. We give our best effort to our work, and we put people first. We’re looking for people who are determined to make life better for people around the world.\n\nEli Lilly Services India Pvt Ltd\n\nConsumer Marketing Analytics Team: Data Analyst\n\nAs Eli Lilly strives to achieve its purpose of making life better for patients, we have been building up our in-house ‘Consumer Experience’ function, which will design and execute next-generation marketing campaigns aimed at informing and educating consumers (or patients) directly.\n\nTo support the Consumer marketing teams in their decision-making, a data and analytics team has been set up in Indianapolis (HQ) and Bengaluru (LCCI). This team will be responsible for setting up the data warehouses necessary to handle large volumes of digital streaming data, create meaningful analyses, analytics and deliver recommendations to leadership.\n\nAs part of the LCCI team, we are excited to offer the role of a data analyst who will be an integral part of the Consumer analytics team.\n\nCore Responsibilities:\n• Working with media and digital advertising experts to help answer business questions by analysing large volumes of data from sources like Google Ad Server, DCM, Double Click, Google Search/Ads. Campaign Metadata etc.\n• Share findings from analysis along with recommendations to a wide variety of business and technical stakeholders\n• Perform detailed analysis of Media, Marketing, Search Engine and Social Ad server’s data sources for to define cleansing rules for data quality and modelling\n• Stay up to date in the ever changing ad-tech/mar-tech ecosystem and identify areas to drive more data driven thinking throughout the organization\n\nRequired\n• Strong hands-on experience with SQL. Working knowledge of R or Python are good to have but not mandatory\n• Demonstrated history of breaking down unstructured business problems and translating them to more tangible problem solving approaches\n• Experience in gathering business requirements, transforming data and preparing readout and recommendation narratives from Analytics to share with Business users.\n• Knowledge of digital advertising data and strategies highly preferred though not mandatory\n• Strong working knowledge of visualization tools such as (PowerBI preferred)\n• Comfort with ambiguity and a willingness to work with a high degree of autonomy\n• Demonstrated experience working in cross-functional, cross-geography teams\n\nPreferred Qualifications\n• Experience in Data and/or Business Analysts from Healthcare/Pharma/Retail/BFSI/Digital/ Media Ad companies\n• Bachelor’s degree or master’s degree in technology, Statistics or Computer Science background\n\nEli Lilly and Company, Lilly USA, LLC and our wholly owned subsidiaries (collectively “Lilly”) are committed to help individuals with disabilities to participate in the workforce and ensure equal opportunity to compete for jobs. If you require an accommodation to submit a resume for positions at Lilly, please email Lilly Human Resources ( Lilly_Recruiting_Compliance@lists.lilly.com ) for further assistance. Please note This email address is intended for use only to request an accommodation as part of the application process. Any other correspondence will not receive a response.\n\nLilly does not discriminate on the basis of age, race, color, religion, gender, sexual orientation, gender identity, gender expression, national origin, protected veteran status, disability or any other legally protected status.\n\n#WeAreLilly",
    job_is_remote: false,
    job_posted_at_timestamp: 1675123200,
    job_posted_at_datetime_utc: "2023-01-31T00:00:00.000Z",
    job_city: "Bengaluru",
    job_state: "KA",
    job_country: "IN",
    job_latitude: 12.971599,
    job_longitude: 77.59457,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=data+analyst+in+banglore&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=data+analyst+in+banglore&htidocid=diJu7q-G3RAAAAAAAAAAAA%3D%3D",
    job_offer_expiration_datetime_utc: null,
    job_offer_expiration_timestamp: null,
    job_required_experience: {
      no_experience_required: false,
      required_experience_in_months: null,
      experience_mentioned: true,
      experience_preferred: false,
    },
    job_required_skills: [
      "Analytics",
      "SQL",
      "Philanthropy",
      "Management",
      "digital advertising data",
      "Problem Solving",
      "Google Search",
      "Data Driven",
      "Analysis",
      "Social",
      "Marketing",
      "Digital Advertising",
      "Statistics",
      "Detailed Analysis",
      "BFSI",
      "visualization tools",
      "Python",
      "google ad server",
      "Ecosystem",
      "Core",
      "Visualization",
      "Computer Science",
      "Technology",
      "Leadership",
      "Willingness To Work",
      "Senior Data Analyst Consultant",
      "Data Analytics",
      "Statistical & Marketing Data Analyst",
      "Head - Data Science & Analytics COE",
      "Business Intelligence & Analytics",
      "Associate Analytics",
      "Big Data Analytics Consultant",
      "Data Analyst",
      "Analyst - Content",
      "Business Analyst Consulting",
    ],
    job_required_education: {
      postgraduate_degree: false,
      professional_certification: false,
      high_school: false,
      associates_degree: false,
      bachelors_degree: false,
      degree_mentioned: true,
      degree_preferred: true,
      professional_certification_mentioned: false,
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {},
    job_job_title: "Data analyst",
    job_posting_language: "en",
    job_onet_soc: "43911100",
    job_onet_job_zone: "4",
    job_occupational_categories: ["Sales/Marketing"],
    job_naics_code: "325412",
    job_naics_name: "Pharmaceutical Preparation Manufacturing",
  },
  {
    wishlist:true,
    employer_name: "izmo ltd",
    employer_logo:
      "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/f6zkbzaj1qkuxttt63hh",
    employer_website: "http://www.izmoltd.com",
    employer_company_type: null,
    job_publisher: "LinkedIn",
    job_id: "6j-mZyZ29YkAAAAAAAAAAA==",
    job_employment_type: "FULLTIME",
    job_title: "Data Analyst",
    job_apply_link:
      "https://in.linkedin.com/jobs/view/data-analyst-at-izmo-ltd-3591643570",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.5708,
    job_description:
      "izmo Ltd. (www.izmoltd.com) is a leading software products company based in Bangalore with operations in 7 countries. izmo Ltd., is a publicly listed company on the BSE & NSE and we are expanding rapidly through global expansion with offices in San Francisco, Los Angeles, Paris, Brussels & Bangalore, we are the largest producers of content for the automotive industry globally.\n\nOur automotive division - izmocars is a leading provider of automotive solutions globally with operations in North America, Europe, and Asia. We provide retail solutions for online eCommerce, CRM, and Data Analytics for the automotive industry.\n\nOur clients are Automotive OEMs, large dealer groups, rental car companies, and leading online portals. We are expanding our Global Development Centre in Bangalore and are looking for a dynamic Data Manager.\n\n## Immediate Joiners Preferred ##\n\n## This position is based in Bangalore. Hybrid model ##\n\nizmocars (www.izmoltd.com / www.izmocars.com) is a leading Interactive Media and Internet Solutions company with a strong presence in the Automotive industry. With Interactive Media studios in Long Beach, CA & Brussels, Europe, we are the largest producers of automotive content in the world. Our products include Interactive Media Solutions for Automotive, Web Platform, CRM, Online Marketing and Virtual Reality Platform for the Automotive industry.\n\nJob Description\n• Research of automotive accessories of different manufactures, online.\n• Responsible for collecting, analyzing and data update for Client/s (various vendors, distributors & suppliers).\n• Periodically assess and update accessory data per manufacture/s.\n\nMandatory / Primary Skills\n• Graduate in any stream and/or equivalent.\n• Good in Microsoft office (Word & Excel).\n• Good communication skills.\n• Logical thinking and problem-solving abilities.\n• Excellent computer skills with interest in online research.\n• Interest in the automobile industry & knowledge of accessories will be an added advantage.\n\nDesired Characteristics\n• Good time management skills with ability to multi-task and prioritize to meet deadlines.\n• Ability to work closely with internal teams and external contacts.\n• Ability to follow and carry out single or multi-step instructions.\n• Flexibility to adapt to a dynamic business environment.",
    job_is_remote: false,
    job_posted_at_timestamp: 1682926601,
    job_posted_at_datetime_utc: "2023-05-01T07:36:41.000Z",
    job_city: "Bengaluru",
    job_state: "KA",
    job_country: "IN",
    job_latitude: 12.971599,
    job_longitude: 77.59457,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=data+analyst+in+banglore&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=data+analyst+in+banglore&htidocid=6j-mZyZ29YkAAAAAAAAAAA%3D%3D",
    job_offer_expiration_datetime_utc: "2023-10-28T07:36:42.000Z",
    job_offer_expiration_timestamp: 1698478602,
    job_required_experience: {
      no_experience_required: false,
      required_experience_in_months: null,
      experience_mentioned: false,
      experience_preferred: false,
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: false,
      professional_certification: false,
      high_school: false,
      associates_degree: false,
      bachelors_degree: true,
      degree_mentioned: true,
      degree_preferred: false,
      professional_certification_mentioned: false,
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {},
    job_job_title: "Data analyst",
    job_posting_language: "en",
    job_onet_soc: "43911100",
    job_onet_job_zone: "4",
  },
  {wishlist:false,
    employer_name: "Arcadis",
    employer_logo:
      "https://getlogovector.com/wp-content/uploads/2019/05/arcadis-logo-vector.png",
    employer_website: "http://www.arcadis.com",
    employer_company_type: "Construction",
    job_publisher: "Indeed",
    job_id: "o6P6YFB13kcAAAAAAAAAAA==",
    job_employment_type: "FULLTIME",
    job_title: "Data Analyst",
    job_apply_link: "https://in.indeed.com/viewjob?jk=798ef301acb05e58",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.6135,
    job_description:
      "Job Description – Senior Engineer (Roadway Design– NAInfra)\n\nCorporate Profile Summary:\n\nArcadis is the leading global Design & Consultancy firm for natural and built assets. Applying\n\nour deep market sector insights and collective design, consultancy, engineering, project and\n\nmanagement services we work in partnership with our clients to deliver exceptional and\n\nsustainable outcomes throughout the lifecycle of their natural and built assets. We are 28,000\n\npeople active in over 70 countries that generate more than €3 billion in revenues. We support\n\nUN-Habitat with knowledge and expertise to improve the quality of life in rapidly growing cities\n\naround the world\n\nWork Location: Bangalore , India\n\nARCADIS is looking for talented individuals from India’s global IT capitals to help lead our surge into digital. We are transforming our own operations and those of our clients, analytics and digital is at the core of this transformation.\n\nOur analytics team works in a number of areas, supporting our key clients globally as well as transforming internal processes. We deliver predictive analytics as a service. We implement data-base and data-hosting solutions. We develop platforms for our clients and our teams to access and interact with their data. We create the right data architecture to achieve the best possible insights. Our clients also love the insights we provide through our dashboarding solutions.\n\nWe are now recruiting talented individuals to fill our current vacancy for Data Analyst (US Projects) to work on our projects in Bangalore.\n\nTo be considered for a role we are seeking candidates with the following credentials:\n\nPrincipal Duties & Key Responsibilities;\n• Proficient in using Microsoft suite of technologies, such as Power BI, Power Apps, Power Automate, to solve complex business problems.\n• Manipulate, transform, and analyse data sets that are large and complex.\n• Build mathematical models in Python or R\n• Proficient in RDBMS - SQL\n• Plan, gather, analyse and document user and business information.\n• Incorporate, integrate, and interface technical knowledge with business / systems requirements.\n• Collect and organize data, data warehouse reports, spreadsheets and databases for analytical reporting.\n• Data collection, data input, monitoring, maintaining and reporting.\n\nRequired Competencies;\n• Possess strong quantitative and qualitative research and analytical skills\n• Ability to communicate analysis with clarity and precision. An ideal candidate would have a strong grasp of both technical and business perspectives.\n• Ability to adapt quickly in handling multiple/evolving tasks as a result of new engagements and/or re-prioritized deadlines\n• Hands-on experience in developing dashboards using BI tools.\n• Experience in data transformation (ETL) and proficiency in working with RDBMS.\n• Proficiency in analysing data using R and/or Python.\n• Good understanding of statistical analysis and hypothesis testing.\n• Experience in basic statistical methodology: e.g. clustering and testing, predictive modelling (e.g. decision trees, regressions)\n• Knowledge in Robotic Process Automation is highly desirable.\n\nKey competencies / Values:\n• Client focus – differentiating through tailored skills and depth of client understanding\n• Excellence – striving for excellence, recognising that excellence is defined by our clients\n• Trust – building and retaining relationships of trust with our clients, colleagues and business partners\n• Teamwork – working together as a team for the Group, not just the individual\n• Responsibility – taking responsibility for our performance and our safety\n• People - we create the environment for people to realise their potential\n\nQualification & Experience:\n• Bachelors/Masters in Math, Statistics, Comp Science, Engineering, or another technical field.\n• Experience required: 3 - 7 years\n\nWhat do we offer?\n\nWe offer a dynamic challenging job with international focus in a pleasant working climate, attention to education and a competitive remuneration package reflecting the seniority of the role. You will have a great deal of responsibility with endless opportunity for impact and freedom for initiatives. Given the international spread of the business a certain level of flexibility in working hours is important.",
    job_is_remote: false,
    job_posted_at_timestamp: 1686065721,
    job_posted_at_datetime_utc: "2023-06-06T15:35:21.000Z",
    job_city: "Bengaluru",
    job_state: "KA",
    job_country: "IN",
    job_latitude: 12.971599,
    job_longitude: 77.59457,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=data+analyst+in+banglore&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=data+analyst+in+banglore&htidocid=o6P6YFB13kcAAAAAAAAAAA%3D%3D",
    job_offer_expiration_datetime_utc: "2023-07-08T02:50:26.000Z",
    job_offer_expiration_timestamp: 1688784626,
    job_required_experience: {
      no_experience_required: false,
      required_experience_in_months: null,
      experience_mentioned: true,
      experience_preferred: false,
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: false,
      professional_certification: false,
      high_school: false,
      associates_degree: false,
      bachelors_degree: false,
      degree_mentioned: true,
      degree_preferred: false,
      professional_certification_mentioned: false,
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {},
    job_job_title: "Data analyst",
    job_posting_language: "en",
    job_onet_soc: "43911100",
    job_onet_job_zone: "4",
    job_naics_code: "237",
    job_naics_name: "Heavy and Civil Engineering Construction",
  },
  { wishlist:false,
    employer_name: "NetApp, Inc.",
    employer_logo:
      "https://www.netapp.com/media/na_logo_black_rgb_reg-mark_tcm19-21014.jpg",
    employer_website: "http://www.netapp.com",
    employer_company_type: "Manufacturing",
    job_publisher: "Jobs At NetApp",
    job_id: "ruG3x4-RL-8AAAAAAAAAAA==",
    job_employment_type: "FULLTIME",
    job_title: "Business Data Analyst",
    job_apply_link:
      "https://jobs.netapp.com/job/Business-Data-Analyst/1002666500/",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.9194,
    job_description:
      'About NetApp\n\nWe’re forward-thinking technology people with heart. We make our own rules, drive our own opportunities, and try to approach every challenge with fresh eyes. Of course, we can’t do it alone. We know when to ask for help, collaborate with others, and partner with smart people. We embrace diversity and openness because it’s in our DNA. We push limits and reward great ideas. What is your great idea?\n\n"At NetApp, we fully embrace and advance a diverse, inclusive global workforce with a culture of belonging that leverages the backgrounds and perspectives of all employees, customers, partners, and communities to foster a higher performing organization." -George Kurian, CEO\n\nJob Summary\n\nAbout NetApp\n\nWe’re forward-thinking technology people with heart. We make our own rules, drive our own opportunities, and try to approach every challenge with fresh eyes. Of course, we can’t do it alone. We know when to ask for help, collaborate with others, and partner with smart people. We embrace diversity and openness because it’s in our DNA. We push limits and reward great ideas. What is your great idea?\n\n"At NetApp, we fully embrace and advance a diverse, inclusive global workforce with a culture of belonging that leverages the backgrounds and perspectives of all employees, customers, partners, and communities to foster a higher performing organization." -George Kurian, CEO\n\nAs a Senior Business Data Analyst (BDA), you will work as part of a team that supports and enhances NetApp’s business processes with respect to Data Quality, Data Governance for Master Data Domains (Company Master, Contact Master, Product Master, Installed Base Master). You will utilize your strong business knowledge and functional expertise to drive Data Operations, identify/evaluate and develop processes and procedures that meets business requirements. To do this successfully, you will work closely with cross-functional business teams to understand business needs and drive data quality improvement/master data operational projects.\n\nJob Requirements\n\nSkills Needed:\n\n• Working knowledge of Master Data Management Domains (Company Master, Installed Base Master, Contact Master, product Master etc.,)\n\n• Ability to lead and manage multiple projects and changes simultaneously\n\n• Experience in creating, reviewing, and analyzing BRDs, system enhancements\n\n• Able to learn and administer master data flow across systems in a fast-paced environment\n\n• Excellent verbal and written communications skills; presentation, customer service, and business skills, problem solving, and interpersonal skills\n\n• This individual will apply broad expertise or unique technical/industry knowledge in solving problems that are unique and extremely complex\n\n• Demonstrate favorable results through leadership and influencing multiple individuals & groups\n\n• Often acts as mentor or facilitator to the team\n\n• Flexibility to work in shifts\n\nJob Expectations:\n\n• Lend expertise to the team in the Master Data Management space to enhance and support day to day transactional operations\n\n• Drive cross-functional discussions to identify and resolve Master Data Management challenges across NetApp’s ecosystem\n\n• Respond to field issue escalations within defined SLAs\n\n• Lead or participate in enterprise driven projects where Master Data enablement is a requirement\n\n• Apply quality management practices to improve process output and procedures\n\n• Develop and implement process improvements and procedures that incorporate good business practices\n\n• Troubleshoot interface errors between Company Master & all participating spoke systems (ERP, Sales CRM, Support CRM, Quoting Tool, Data Warehouse, etc.)\n\n• Manage special projects as assigned and deliver results on time\n\n• Provide cross functional expertise and build strong working relationships with internal teams\n\n• Identify and drive process automation where possible; monitor existing processes subject to automation\n\n• Derive metrics to support decision making and drive improvements utilizing the same; includes Quarterly Business Reviews\n\n• Drive stakeholder engagement program through periodic service reviews\n\nEducation\n\n• A minimum of 6 to 8 years of experience is required. Master Data Management & Dun and Bradstreet experience would be preferred\n\n• A Bachelor’s Degree is required\n\n• A minimum of 2 to 3 years of experience in a team leadership role\n\nDid you know…\n\nStatistics show women apply to jobs only when they’re 100% qualified. But no one is 100% qualified. We encourage you to shift the trend and apply anyway! We look forward to hearing from you.\n\nWhy NetApp?\n\nIn a world full of generalists, NetApp is a specialist. No one knows how to elevate the world’s biggest clouds like NetApp. We are data-driven and empowered to innovate. Trust, integrity, and teamwork all combine to make a difference for our customers, partners, and communities.\n\nWe expect a healthy work-life balance. Our volunteer time off program is best in class, offering employees 40 hours of paid time off per year to volunteer with their favorite organizations. We provide comprehensive medical, dental, wellness, and vision plans for you and your family. We offer educational assistance, legal services, and access to discounts. We also offer financial savings programs to help you plan for your future.\n\nIf you run toward knowledge and problem-solving, join us.\n\nDid you know…\n\nStatistics show women apply to jobs only when they’re 100% qualified. But no one is 100% qualified. We encourage you to shift the trend and apply anyway! We look forward to hearing from you.\n\nWhy NetApp?\n\nIn a world full of generalists, NetApp is a specialist. No one knows how to elevate the world’s biggest clouds like NetApp. We are data-driven and empowered to innovate. Trust, integrity, and teamwork all combine to make a difference for our customers, partners, and communities.\n\nWe expect a healthy work-life balance. Our volunteer time off program is best in class, offering employees 40 hours of paid time off per year to volunteer with their favorite organizations. We provide comprehensive medical, dental, wellness, and vision plans for you and your family. We offer educational assistance, legal services, and access to discounts. We also offer financial savings programs to help you plan for your future.\n\nIf you run toward knowledge and problem-solving, join us.',
    job_is_remote: false,
    job_posted_at_timestamp: 1685948400,
    job_posted_at_datetime_utc: "2023-06-05T07:00:00.000Z",
    job_city: "Bengaluru",
    job_state: "KA",
    job_country: "IN",
    job_latitude: 12.953296,
    job_longitude: 77.640816,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=data+analyst+in+banglore&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=data+analyst+in+banglore&htidocid=ruG3x4-RL-8AAAAAAAAAAA%3D%3D",
    job_offer_expiration_datetime_utc: null,
    job_offer_expiration_timestamp: null,
    job_required_experience: {
      no_experience_required: false,
      required_experience_in_months: 72,
      experience_mentioned: true,
      experience_preferred: true,
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: false,
      professional_certification: false,
      high_school: false,
      associates_degree: false,
      bachelors_degree: false,
      degree_mentioned: true,
      degree_preferred: false,
      professional_certification_mentioned: false,
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {},
    job_job_title: "Data analyst",
    job_posting_language: "en",
    job_onet_soc: "43911100",
    job_onet_job_zone: "4",
    job_naics_code: "334112",
    job_naics_name: "Computer Storage Device Manufacturing",
  },
  { wishlist:false,
    employer_name: "EY",
    employer_logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/220px-EY_logo_2019.svg.png",
    employer_website: "http://www.ey.com",
    employer_company_type: "Accounting",
    job_publisher: "Glassdoor",
    job_id: "2bH_-394azwAAAAAAAAAAA==",
    job_employment_type: "FULLTIME",
    job_title: "Data Analytics",
    job_apply_link:
      "https://www.glassdoor.co.in/job-listing/data-analytics-ey-JV_IC2940587_KO0,14_KE15,17.htm?jl=1008110574640",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.5549,
    job_description:
      "At EY, you’ll have the chance to build a career as unique as you are, with the global scale, support, inclusive culture and technology to become the best version of you. And we’re counting on your unique voice and perspective to help EY become even better, too. Join us and build an exceptional experience for yourself, and a better working world for all.\n\nOur Consulting practice provides differentiated focus on the key business themes to help our clients solve better questions around technology. Our vision is to be recognized as a leading provider of differentiated technology consulting services, harnessing new disruptive technology, alliances and attracting talented people to solve our clients' issues. It's an exciting time to join us and grow your career as a technology professional. A technology career is about far more than leading-edge innovations. It’s about the application of these technologies in the real world to make a real, meaningful impact. We are looking for highly motivated, articulate individuals who have the skills to the technology lifecycle and are passionate about designing innovative solutions to solve complex business problems.\n\nBehavioral Competencies:\n• Adaptive to team and fosters collaborative approach\n• Innovative approach to the project, when required\n• Shows passion and curiosity, desire to learn and can think digital\n• Agile mindset and ability to multi-task\n• Must have an eye for detail\n\nQualification:\n• Should have secured 60% and above\n• No active Backlogs\n\nEY | Building a better working world\n\nEY exists to build a better working world, helping to create long-term value for clients, people and society and build trust in the capital markets.\n\nEnabled by data and technology, diverse EY teams in over 150 countries provide trust through assurance and help clients grow, transform and operate.\n\nWorking across assurance, consulting, law, strategy, tax and transactions, EY teams ask better questions to find new answers for the complex issues facing our world today.",
    job_is_remote: false,
    job_posted_at_timestamp: 1685577600,
    job_posted_at_datetime_utc: "2023-06-01T00:00:00.000Z",
    job_city: "Bengaluru",
    job_state: "KA",
    job_country: "IN",
    job_latitude: 12.971599,
    job_longitude: 77.59457,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=data+analyst+in+banglore&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=data+analyst+in+banglore&htidocid=2bH_-394azwAAAAAAAAAAA%3D%3D",
    job_offer_expiration_datetime_utc: null,
    job_offer_expiration_timestamp: null,
    job_required_experience: {
      no_experience_required: false,
      required_experience_in_months: null,
      experience_mentioned: true,
      experience_preferred: false,
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: false,
      professional_certification: false,
      high_school: false,
      associates_degree: false,
      bachelors_degree: false,
      degree_mentioned: false,
      degree_preferred: false,
      professional_certification_mentioned: false,
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {},
    job_job_title: null,
    job_posting_language: "en",
    job_onet_soc: "43911100",
    job_onet_job_zone: "4",
    job_naics_code: "54121",
    job_naics_name:
      "Accounting, Tax Preparation, Bookkeeping, and Payroll Services",
  },
  { wishlist:true,
    employer_name: "Jodo",
    employer_logo: null,
    employer_website: null,
    employer_company_type: null,
    job_publisher: "Iimjobs.com",
    job_id: "0goLaUMzzd8AAAAAAAAAAA==",
    job_employment_type: "FULLTIME",
    job_title: "Jodo - Business Analyst/Data Analyst (2-5 yrs)",
    job_apply_link:
      "https://www.iimjobs.com/j/jodo-business-analyst-data-analyst-2-5-yrs-1266798.html",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.6852,
    job_description:
      "Jodo Fintech - Business/Data Analyst\n\nABOUT JODO:\n\nJodo is a mission-oriented early-stage fin-tech startup building a suite of carefully tailored financial products and delivery mechanisms to fulfill the aspirations and needs of middle-income households in urban India.\n\nJodo is started by three co-founders, who have a pedigreed education background (IIT/IIM) and relevant professional experience in financial services (ex-Nomura, Goldman Sachs, Morgan Stanley, Barclays, Edelweiss Capital). More importantly, they come from a similar background as the customer segment they are serving, and have done extensive customer research to understand the needs of the customer.\n\nJodo is backed by high-quality investors to realize this mission.\n\n- VC investors: Tiger Global, Elevation Capital, Matrix Partners - investors in Paytm, Swiggy, Urban Company, Ola, Practo etc.\n\n- Angel investors: Kunal Shah (CRED), Nithin Kamath (Zerodha), Amit Ranjan (SlideShare) Jodo currently works with 1000+ schools and has served 3,00,000 parents last year.\n\nKey Responsibilities:\n\nBusiness Strategy and Analysis:\n\n- Lead and manage key analytical initiatives to evaluate and expand the business realized (or GTV) from Jodo's products and services\n\n- Closely work with account managers to understand data requirements and make the internal platforms and product live\n\n- Work closely with the Product and Tech team to onboard new schools on the Jodo tech platforms\n\n- Create independent analysis to identify gaps in current systems and optimize data processes\n\nStakeholder Management :\n\n- Forge a strong relationship across account managers, tech, product and sales team to manage high priority tasks and ensure timelines are met\n\nWhat are we looking for?\n\n- Self-starter with a high sense of ownership - Comfortable to work with minimal supervision and do tasks independently\n\n- Hungry to learn and grow - Passion to learn & be a better version of oneself; motivated to succeed\n\n- Bias for action - Have the temperament to experiment and execute in uncertainty\n\n- Hustler - Ability to generate resources to solve a problem\n\n- Intellectual honesty - Always seeking and presenting truth irrespective of personal POV or beliefs\n\n- Mission-oriented - Deeply care about delivering value and making an impact on customer's lives\n\nDesired Qualifications:\n\n- Expertise in Excel and familiarity with SQL\n\n- Attention to Detail: Making sure to be vigilant in the data\n\n- Outstanding written and verbal communication skills with tech and business\n\n- Experience of working on analytics in consumer internet domain or accounting, finance areas is desirable but not a requirement\n\nMeasures Of Outcomes:\n\n- Schedule adherence to tasks\n\n- Number of business processes changed due to vital analysis.\n\n- Number of stakeholder appreciations/escalations\n\nBenefits:\n\n- Becoming a part of the early team\n\n- Competitive salary\n\n- Work with colleagues from strong backgrounds & hungry to succeed\n\n- Opportunity to interact with and learn from high-pedigree investors & mentors\n\n- VCs: Elevation Capital (erstwhile SAIF Partners), Matrix Partners\n\n- Select angel investors: Kunal Shah, Nithin Kamat, Amit Ranjan\n\nLocation: Bangalore\n\nWorking 6 days a week",
    job_is_remote: false,
    job_posted_at_timestamp: 1686009600,
    job_posted_at_datetime_utc: "2023-06-06T00:00:00.000Z",
    job_city: "Bengaluru",
    job_state: "KA",
    job_country: "IN",
    job_latitude: 12.971599,
    job_longitude: 77.59457,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=data+analyst+in+banglore&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=data+analyst+in+banglore&htidocid=0goLaUMzzd8AAAAAAAAAAA%3D%3D",
    job_offer_expiration_datetime_utc: "2023-12-06T00:00:00.000Z",
    job_offer_expiration_timestamp: 1701820800,
    job_required_experience: {
      no_experience_required: false,
      required_experience_in_months: null,
      experience_mentioned: true,
      experience_preferred: false,
    },
    job_required_skills: [
      "Analytics",
      "Data Analytics",
      "SQL",
      "Business Analysis",
    ],
    job_required_education: {
      postgraduate_degree: false,
      professional_certification: false,
      high_school: false,
      associates_degree: false,
      bachelors_degree: false,
      degree_mentioned: false,
      degree_preferred: false,
      professional_certification_mentioned: false,
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {},
    job_job_title: null,
    job_posting_language: "en",
    job_onet_soc: "43911100",
    job_onet_job_zone: "4",
  },
  {
    wishlist:true,
    employer_name: "Qualcomm",
    employer_logo:
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/Qualcomm-Logo.svg",
    employer_website: "http://www.qualcomm.com",
    employer_company_type: "Manufacturing",
    job_publisher: "Qualcomm Jobs",
    job_id: "ixASaDYi2PYAAAAAAAAAAA==",
    job_employment_type: "FULLTIME",
    job_title: "Data Analyst",
    job_apply_link:
      "https://qualcomm.dejobs.org/bangalore-ind/data-analyst/36C20F91F19942938FD6EF8D2BBCBCDB/job/?vs=25&utm_source=RR%20RSS%20Feed-DE&utm_medium=Other&utm_campaign=RR%20RSS%20Feed",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.5505,
    job_description:
      'Company:\n\nQualcomm India Private Limited\n\nJob Area:\n\nMiscellaneous Group, Miscellaneous Group > Data Analyst\n\nGeneral Summary:\n\nWe are currently searching for a talented and motivated Data Analyst to join the People Analytics team. The candidate should have experience building analytics solutions. They should be comfortable with data visualization tools, aggregating and cleansing data, as well as conceptual Cloud Architecture as they will actively contribute and collaborate to continuously improve the HR Analytics platform. The successful candidate will need a strategic mindset while ensuring day-to-day execution at a tactical level. The ability to partner in a matrixed environment and work with the broader HR organization to consistently deliver well thought out solutions will be critical.\n\nAs a member of the People Analytics Team, you will be expected to:\n• Understand and execute towards the vision for People Analytics\n• Create end-user facing BI and analytics products (specifically Tableau dashboards)\n• Understand and implement best practices / standards for all HR reporting and analytics delivery\n• Conduct and participate in whiteboarding sessions, workshops, design sessions, and project meetings as needed\n• Provide thought leadership, best practices, and standards required to deliver effective and sustainable solutions\n• Act as an expert to advise consulting teams on the application and design of data visualization and dashboarding solutions\n• Design and/or implement tools for data visualization and reporting solutions to support data analysis, including calculation of metrics, and detection of trends\n• Develop and deploy visualizations & dashboards, etc., following modern data visualization methods and using Tableau.\n• Explore, model, mine, and experiment with data to answer critical business issues\n• Work in a collaborative manner with clients and team members to understand business needs and translate these in metrics and data needs, while collaborating iteratively on data visualization\n• Keep abreast of new and current data visualization trends and technologies\n• Provide guidance and support on BI and reporting strategies for different audiences and use cases\n• Proactively identify risks and drive action to mitigate and resolve issues, including data quality issues, unsustainable processes, and impact of business process changes to the analytics environment\n• Lead analysis, design, development and deployment of dashboards and reports\n• Translate business needs into compelling visualizations of KPI trends through iterative design sessions and wireframing\n• Collaborate closely with and influence business leaders to assess opportunities and technical solutions for the enterprise\n• Develop reusable templates for solving common data visualization needs\n\nMinimum Qualifications:\n\n• Bachelor’s Degree in Data Science, Data Analytics, Information Management, Computer Science, Information Technology, or related field, or equivalent professional experience\n\n• 3-5 years working in Data and Analytics\n\n• 2-3 years working in an Agile methodology/ environment\n\n• Experience with data analytics and visualization packages (Tableau, Qlik, Power BI, etc.)\n\n• Hands-on expertise with big data and/or cloud data warehousing (Redshift, Snowflake, Azure SQL DW, BigQuery)\n\n• Proven ability to query and wrangle disparate data sets together for ad-hoc analysis\n\n• Experience with designing effective exploratory and presentational data visualizations\n\n• Experience interacting with customers and extracting requirements\n\n• Expertise in standards and best practices around data visualization design\n\n• Ability to analyze problems and generate creative solutions for challenging issues\n\n• Solid written and oral communications skills\n\nPreferred Qualifications:\n• Strong business acumen, critical thinking ability, and attention to detail\n• Strong understanding of data visualization development, data analysis process and turning information into actionable insights\n• 2-3 years of Python and SQL coding\n• Ability to write, enhance and debug code\n\nApplicants : If you need an accommodation, during the application/hiring process, you may request an accommodation by sending email to accommodationsupport\n\nQualcomm expects its employees to abide by all applicable policies and procedures, including but not limited to security and other requirements regarding protection of Company confidential information and other confidential and/or proprietary information, to the extent those requirements are permissible under applicable law.\n\nTo all Staffing and Recruiting Agencies : Our Careers Site is only for individuals seeking a job at Qualcomm. Staffing and recruiting agencies and individuals being represented by an agency are not authorized to use this site or to submit profiles, applications or resumes, and any such submissions will be considered unsolicited. Qualcomm does not accept unsolicited resumes or applications from agencies. Please do not forward resumes to our jobs alias, Qualcomm employees or any other company location. Qualcomm is not responsible for any fees related to unsolicited resumes/applications.\n\nIf you would like more information about this role, please contact Qualcomm Careers (http://www.qualcomm.com/contact/corporate) .\n\nEEO Employer: Qualcomm is an equal opportunity employer; all qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, Veteran status, or any other protected classification.\n\nEqual Employment Opportunity: https://www.eeoc.gov/sites/default/files/migrated_files/employers/poster_screen_reader_optimized.pdf\n\n"EEO is the Law" Poster Supplement : https://www.dol.gov/sites/dolgov/files/ofccp/regs/compliance/posters/pdf/OFCCP_EEO_Supplement_Final_JRF_QA_508c.pdf\n\nPay Transparency NonDiscrimination Provision: https://www.dol.gov/sites/dolgov/files/ofccp/pdf/pay-transp_%20English_formattedESQA508c.pdf\n\nEmployee Polygraph Protection Act: https://www.dol.gov/sites/dolgov/files/WHD/legacy/files/eppac.pdf\n\nFamily Medical Leave Act: https://www.dol.gov/sites/dolgov/files/WHD/legacy/files/fmlaen.pdf\n\nRights of Pregnant Employees: https://www.dfeh.ca.gov/wp-content/uploads/sites/32/2020/12/Your-Rights-and-Obligations-as-a-Pregnant-Employee_ENG.pdf\n\nDiscrimination and Harassment: https://www.dfeh.ca.gov/wp-content/uploads/sites/32/2020/10/Workplace-Discrimination-Poster_ENG.pdf\n\nCalifornia Family Rights Act: https://www.dfeh.ca.gov/wp-content/uploads/sites/32/2020/12/CFRA-and-Pregnancy-Leave_ENG.pdf',
    job_is_remote: false,
    job_posted_at_timestamp: 1679536478,
    job_posted_at_datetime_utc: "2023-03-23T01:54:38.000Z",
    job_city: "Bengaluru",
    job_state: "KA",
    job_country: "IN",
    job_latitude: 12.971599,
    job_longitude: 77.59457,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=data+analyst+in+banglore&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=data+analyst+in+banglore&htidocid=ixASaDYi2PYAAAAAAAAAAA%3D%3D",
    job_offer_expiration_datetime_utc: null,
    job_offer_expiration_timestamp: null,
    job_required_experience: {
      no_experience_required: false,
      required_experience_in_months: 24,
      experience_mentioned: true,
      experience_preferred: false,
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: false,
      professional_certification: false,
      high_school: false,
      associates_degree: false,
      bachelors_degree: false,
      degree_mentioned: true,
      degree_preferred: true,
      professional_certification_mentioned: false,
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {},
    job_job_title: "Data analyst",
    job_posting_language: "en",
    job_onet_soc: "43911100",
    job_onet_job_zone: "4",
    job_naics_code: "334413",
    job_naics_name: "Semiconductor and Related Device Manufacturing",
  },
];

export default function FloatingNav() {
  const [jobDetail, setJobDetail] = React.useState(false);
  const [joblist, setJobList] = React.useState(true);
  const [slotDetail, setSlotDetail] = React.useState(<></>);

  function showJobDetail(obj) {
    setJobDetail(true);
    setJobList(false);
    setSlotDetail(
      <CoachJobDescription
        textJobTitle={obj.job_title}
        isJobRemote={obj.job_is_remote}
        isJobOnsite={!obj.job_is_remote}
        imageCompanyLogo={obj.employer_logo}
        isInWishList={obj.wishlist}
        onClickCompanyWebsite={{onClick:()=>alert('clicked')}}
        isNotInWishlist={!obj.wishlist}
        textOriginalJobLink={obj.job_apply_link}
        textJobDescription={obj.job_description}
        textJobType={obj.job_employment_type}
        textCompanyAndLocation={`${obj.employer_name},${obj.job_city},${obj.job_state},${obj.job_country}`}
        textPostedDay={obj.job_posted_at_datetime_utc}
      />
    );
  }
  function back() {
    setJobDetail(false);
    setJobList(true);
  }
  return (
    <>
      <CandidateDetailLayout
        slotCandidateDetailHeader={
          <CandidateDetailHeader
            textRole="Marketing Executive"
            textName="Sudhakar"
            textApplied={1}
            textOffered={3}
            textEmail={"sudhakaranbhat@gmail.com"}
            textJobPreference={
              "looking for marketing executive role at bangalore"
            }
            textPhone={"90660077754"}
          />
        }
        slotCandidateDetailTabs={
          <CandidateDetailTabs
            isJobEmpty={false}
            isJobLoading={false}
            isJobListing={joblist}
            isJobDetail={jobDetail}
            slotJobDetails={slotDetail}
            onClickBack={{
              onClick: () => {
                back();
              },
            }}
            slotCoachJobCard={newjobs.map((obj, i) => (
              <CoachJobCard
                textJobTitle={obj.job_title}
                imageLogo={obj.employer_logo}
                textJobType={obj.job_employment_type}
                textLocation={`${obj.employer_name},${obj.job_city},${obj.job_state},${obj.job_country}`}
                textPostedDate={obj.job_posted_at_datetime_utc}
                onClickJobCard={{ onClick: () => showJobDetail(obj) }}
              />
            ))}
          />
        }
      />
    </>
  );
}
