import { CoachProfileLayout, CoachSkillOrLanguage } from "@/devlink";
import React from "react";

const skills = [
  "Software Design",

  "Debugging",

  "Problem Solving",

  "Data Structures",

  "Algorithms",

  "Version Control",

  "Testing",

  "Database Design",

  "Software Development Lifecycle",
];
export default function Profile() {
  return <CoachProfileLayout textName={'Ravi Kanchikare'} textCompanyAndLocation={'Aglint Inc.'} textProfession='Success Coach' textBio='Hello, I am a part of Aglints coaching success team. Let me know how I can help and I will do my best.' slotSkill={skills.map((i)=><CoachSkillOrLanguage text={i}/>)} slotLanguage={<><CoachSkillOrLanguage text='English'/><CoachSkillOrLanguage text='Spanish'/><CoachSkillOrLanguage text='Dutch'/></>}/>;
}
