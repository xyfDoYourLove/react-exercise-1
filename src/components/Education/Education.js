import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import TimeLine from '../TimeLine/TimeLine.js';
import './Education.scss';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const timeLineEvents = [
      {
        time: 1990,
        event: 'I was born in Katowice',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.',
      },
      {
        time: 2005,
        event: 'Secondary school specializing in artistic',
        content:
          'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
      },
      {
        time: 2009,
        event: 'First level graduation in Graphic Design',
        content:
          'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores unde repel lat.',
      },
      {
        time: 2012,
        event: 'Second level graduation in Graphic Design',
        content: 'Ducimus, aliquam tempore autem itaque et accusantium!',
      },
    ];
    return (
      <div className="education">
        <SectionTitle text={'education'} />
        <TimeLine data={timeLineEvents} />
      </div>
    );
  }
}

Education.propTypes = {};

export default Education;
