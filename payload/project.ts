import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Kakao Taxi ( copy app )',
      startedAt: '2018-02',
      where: '개인 프로젝트 (web)',
      descriptions: [
        { content: 'Kakao Taxi 카피 웹' },
        { 
          content: '( 자세한 내용은 해당 PDF 참조 )',
          href:'https://drive.google.com/file/d/1cC-NA9Y1SVcu1d39E2nWo8Q_db4dfT2q/view?usp=sharing' 
        },
      ]
    },
    {
      title: 'Moday ',
      startedAt: '2016-10',
      where: '개인 프로젝트 (android)',
      descriptions: [
        { content: 'CGV, MEGABOX, LOTTE Cinema 3사의 영화 상영정보를 파싱하여 보여주는 안드로이드 앱' },
        { 
          content: '( 자세한 내용은 해당 PDF 참조 )',
          href:'https://drive.google.com/file/d/1d4YmAdkTbkRG7_09Ob_8r-A2VPT_w2cg/view?usp=sharing' 
        },
      ],
    },
    {
      title: 'DrawWord',
      startedAt: '2016-10',
      where: '개인 프로젝트 (android)',
      descriptions: [
        { content: 'TCP통신을 이용한 실시간 그림 공유 및 채팅 앱으로 넷마블의 캐치마인드 카피 앱' },
        { 
          content: '( 자세한 내용은 해당 PDF 참조 )',
          href:'https://drive.google.com/file/d/1FMQmXXTQFeutYF7x-ygSRHhBUbXBbTxK/view?usp=sharing' 
        },
      ],
    },
    {
      title: 'DrawWord 설계서',
      startedAt: '2016-10',
      where: '개인 프로젝트 (android 설계서)',
      descriptions: [
        { content: 'Drawword 프로젝트의 설계서' },
        { 
          content: '( 자세한 내용은 해당 PDF 참조 )',
          href:'https://drive.google.com/file/d/1HB36c4ICRzyzKmoS-inJPm8w6QTzkKIg/view?usp=sharing'
        },
      ],
    },
  ],
};

export default project;
