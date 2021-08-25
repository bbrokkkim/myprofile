import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Spring Boot'
    },
    {
      title: 'Express',
    },
    {
      title: 'Nest Js',
    },
    {
      title: 'Apollo Server',
    },
    {
      title: 'django',
    },
  ],
};

const database: ISkill.Skill = {
  category: 'RDS',
  items: [
    {
      title: 'MySQL',
    },
    {
      title: 'MariaDB',
    },
    {
      title: 'Postgre',
    },
    {
      title: 'Sqlite',
    },
    {
      title: 'Cassandra',
    },
    {
      title: 'Redis',
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
      title: 'github webhook',
    },
  ],
};

const test: ISkill.Skill = {
  category: 'TEST',
  items: [
    {
      title: 'JUnit',
    },
    {
      title: 'Jest',
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React.js',
    },
    {
      title: 'Apollo Client',
    },
    {
      title: 'JQuery',
    },
  ],
};

const aws: ISkill.Skill = {
  category: 'AWS',
  items: [
    {
      title: 'EC2',
    },
    {
      title: 'ELB',
    },
    {
      title: 'CodeDeploy',
    },
    {
      title: 'S3',
    },
    {
      title: 'RDS',
    },
    {
      title: 'SES',
    },
    {
      title: 'route53',
    },
    
  ],
};

const versionControl: ISkill.Skill = {
  category: 'ETC',
  items: [
    
    {
      title: 'GraphQL',
    },
    {
      title: 'Git',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, cicd, test, frontend, aws, versionControl],
};

export default skill;
