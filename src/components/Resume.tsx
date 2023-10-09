import '../styles/reset.css';
import '../styles/base.scss';

import {
  ICourse,
  IEducation,
  IJob,
  ILanguage,
  IPublication,
  ISkillGroup,
} from '../types';
import React, {Component} from 'react';

import Course from './Course';
import Education from './Education';
import Job from './Job';
import Language from './Language';
import Publication from './Publication';
import SkillGroup from './SkillGroup';

interface IResumeProps {
  jobs: IJob[];
  educations: IEducation[];
  skills: ISkillGroup[];
  languages: ILanguage[];
  publications: IPublication[];
  courses: ICourse[];
}

export default class Resume extends Component<IResumeProps, {}> {
  renderJobs() {
    const {jobs} = this.props;
    return jobs.map((job, index) => <Job key={index} job={job} />);
  }

  renderEducation() {
    const {educations} = this.props;
    return educations.map((education, index) => (
      <Education key={index} education={education} />
    ));
  }

  renderCourses() {
    const {courses} = this.props;
    return courses.map((courses, index) => (
      <Course key={index} course={courses} />
    ));
  }

  renderPublications() {
    const {publications} = this.props;
    return publications.map((publication, index) => (
      <Publication key={index} publication={publication} />
    ));
  }

  renderSkills() {
    const {skills} = this.props;
    return skills.map((skillGroup, index) => (
      <SkillGroup key={index} skillGroup={skillGroup} />
    ));
  }

  renderLanguages() {
    const {languages} = this.props;
    return languages.map((language, index) => (
      <Language key={index} language={language} />
    ));
  }

  render() {
    return (
      <div className="resumeWrapper">
        <div className="resumeHeader">
          <h2>
            <p className="name">Jordi Bartolomé</p>
            <p className="jobTitle">, Software engineer</p>
          </h2>
        </div>
        <div className="resumeSection" id="workExperience">
          <p className="resumeTitle">Experience</p>
          {this.renderJobs()}
        </div>
        <div className="resumeSection" id="education">
          <p className="resumeTitle">Education</p>
          {this.renderEducation()}
        </div>
        <div className="resumeSection" id="education">
          <p className="resumeTitle">Courses</p>
          {this.renderCourses()}
        </div>
        <div className="resumeSection" id="publications">
          <p className="resumeTitle">Publications</p>
          {this.renderPublications()}
        </div>
        <div className="resumeSection" id="education">
          <p className="resumeTitle">Computer Skills</p>
          {this.renderSkills()}
        </div>
        <div className="resumeSection" id="education">
          <p className="resumeTitle">Languages</p>
          {this.renderLanguages()}
        </div>
      </div>
    );
  }
}
