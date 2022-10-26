import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    `안녕하십니까. 2017년부터 소프트웨어를 공부하였으며, 초창기에는 다양하게 경험을 하고 싶어 안드로이드를 중점으로 Web Server, Back-end, Front-end, DB 등을 공부했습니다. 취직을 한 후에는 Web을 중점으로 개발하고습니다.
    소프트웨어 개발자는 은퇴할 때까지 공부해야 한다고 믿고 있고 꾸준히 연구하고 공부하고 있습니다. 또 개발 외적으로는 많은 사람과 협업을 하다 보니 단순하게 구현을 목적으로 하는 게 아닌 원활한 협업을 해야 한다는 것을 배웠습니다.
    `,
  ],
  sign: 'kyungkwan kim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
