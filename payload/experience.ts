import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'Pushnews',
      position: 'Back-end Developer',
      startedAt: '2021-05',
      endedAt: '2021-07',
      descriptions: [
        '기존 퓨어 php 백앤드 서버를 nestjs로 재구축',
        '기존 로우쿼리 Typeorm으로 리팩토링',
        '기존 디비 스키마 리뉴얼 하여 디비 마이그레이션',
        '리뉴얼 프로젝트 전략 기획 및 서비스 기획 주도',
        '기존 restAPI중 일부 graphQL로 마이그레이션',
        'test code 작성 및 CICD 도입',
        '기존 백앤드 서버 Spring boot로 마이그레이션 중 퇴사 ( 개발팀 없어짐 )'
      ],
      skillKeywords: ['Spring boot', 'Nest js', 'TypeScript', 'GraphQL', 'AWS'],
    },
    {
      title: 'KJ GLOBAL',
      position: 'FullStack Developer',
      startedAt: '2020-05',
      endedAt: '2020-12',
      descriptions: [
        'express 서버 javascript를 typescript로 교체 및 로직 리펙토링',
        '암호화폐 api 연동 하여 배치 봇 구축',
        '각 서버별 벤치마킹, 요금등 검토 후 카페24 서버 aws cloud서버로 교체',
        'front-end 실시간 통신 최적화',
        'react 이용하여 프론트 구축',
        'styled component로 디자인 변경 및 페이지 반응형으로 교체',
      ],
      skillKeywords: ['Express', 'TypeScript', 'dJango', 'React', 'MySQL', 'AWS'],
    },
    {
      title: 'Gandago',
      position: 'freelancer Developer',
      startedAt: '2019-06',
      endedAt: '2020-05',
      descriptions: [
        '한국 대학입시를 위한 대학입시 추천 플랫폼',
        '초창기부터 개발(풀스택)과 기획에 관여 ( 개발 80%, 기획 20% )',
        '포트폴리오 참조||https://drive.google.com/file/d/1c49MfN-V_3vrblQj1zul-mTKAhiuhGfJ/view?usp=sharing',
      ],
      skillKeywords: ['PHP', 'MySQL', 'AWS'],
    },
    {
      title: 'kloser',
      position: 'FullStack Developer',
      startedAt: '2018-05',
      endedAt: '2019-05',
      descriptions: [
        '바이럴 마케팅 이벤트에서 누구(개인)를 통해 어떤 플랫폼을 따라서 바이럴이 일어났는지 추적하는 솔루션을 만드는 회사',
        '이벤트 페이지 대용량 트래픽 대응',
        'AWS Lambda를 이용하여 서버리스 구축',
        '가비아 문자 메세지 api, AWS SES 연동',
        '한국, 중국, 일본 그리고 베트남 회사와의 커뮤니케이션 진행',
        '포트폴리오 참조||https://drive.google.com/file/d/1nlN5QtGXnGJEPykjbSahw00yLvQGlffx/view?usp=sharing',
      ],
      skillKeywords: ['PHP', 'MySQL', 'AWS'],
    },
  ],
};

export default experience;
