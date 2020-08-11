import React from 'react';
import { Card } from 'antd';

const Education = () => (
  <div>
    <br />
    <h1 className="education">EDUCATION</h1>
    <br />
    <div className="once">
      <h2 className="onceNum">1990</h2>
      <Card className="card" style={{ width: 800, height: 120 }}>
        <h4 className="katowice">I was born in Katowice</h4>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
          exercitationem, totam, dolores iste dolore est aut modi.
        </h4>
      </Card>
    </div>
    <br />
    <div className="once">
      <h2 className="onceNum">2005</h2>
      <Card className="card" style={{ width: 800, height: 120 }}>
        <h4 className="katowice">Secondary school specializing in artistic</h4>
        <h4>
          Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum
          ducimus quibusdam quis voluptatibus.
        </h4>
      </Card>
    </div>
    <br />
    <div className="once">
      <h2 className="onceNum">2009</h2>
      <Card className="card" style={{ width: 800, height: 120 }}>
        <h4 className="katowice">First level graduation in Graphic Design</h4>
        <h4>
          Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus
          quaerat quibusdam perferendis? lusto, quibusdam asperiores unde
          repeliat.
        </h4>
      </Card>
    </div>
    <br />
    <div className="once">
      <h2 className="onceNum">2012</h2>
      <Card className="card" style={{ width: 800, height: 120 }}>
        <h4 className="katowice">Second level graduation in Graphic Design</h4>
        <h4>Ducimus, aliquam tempore autem itaque et accusantium!</h4>
      </Card>
    </div>
  </div>
);

export default Education;
