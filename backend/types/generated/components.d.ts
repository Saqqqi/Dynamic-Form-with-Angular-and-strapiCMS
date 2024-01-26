import type { Schema, Attribute } from '@strapi/strapi';

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
  };
  attributes: {
    degree: Attribute.String;
    school: Attribute.String;
    graduation_date: Attribute.String;
    gpa: Attribute.Decimal;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
  };
  attributes: {
    title: Attribute.String;
    company: Attribute.String;
    start_date: Attribute.Date;
    end_date: Attribute.Date;
    description: Attribute.Blocks;
  };
}

export interface ProjectsProjects extends Schema.Component {
  collectionName: 'components_projects_projects';
  info: {
    displayName: 'Projects';
  };
  attributes: {
    description: Attribute.String;
    technologies_used: Attribute.String;
    start_date: Attribute.Integer;
    end_date: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'projects.projects': ProjectsProjects;
    }
  }
}
