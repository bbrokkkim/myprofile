import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Nestjs',
    },
    {
      title: 'Spring Boot',
    },
    {
      title: 'Express',
    },
    {
      title: 'Apollo Server',
    },
    {
      title: 'Django',
    },
  ],
};

const cicd: ISkill.Skill = {
  category: 'CICD',
  items: [
    {
      title: 'Jenkins',
    },
    {
      title: 'Github webhook',
    },
  ],
};

const test: ISkill.Skill = {
  category: 'Test',
  items: [
    {
      title: 'Jest',
    },
    {
      title: 'JUnit',
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React',
    },
    {
      title: 'Apollo Client',
    },
  ],
};

const aws: ISkill.Skill = {
  category: 'AWS',
  items: [
    {
      title: 'EKS',
    },
    {
      title: 'Elasticache',
    },
    {
      title: 'RDS',
    },
  ],
};

const versionControl: ISkill.Skill = {
  category: 'ETC',
  items: [
    {
      title: 'kubernetes',
    },
    {
      title: 'GraphQL',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, cicd, test, frontend, aws, versionControl],
};

export default skill;
