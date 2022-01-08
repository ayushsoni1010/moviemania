import React from "react";
// Helpers
import { calcTime, convertMoney } from "../../helpers/helpers";

// Styles
import { Wrapper, Content } from "./MovieInfoBar.styles";

// Types
type Props = {
  time: number;
  budget: number;
  revenue: number;
}

const MovieInfoBar: React.FC<Props> = ({ time, budget, revenue }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Content>
          <div className="column">
            <p>Running Time: {calcTime(time)}</p>
          </div>
          <div className="column">
            <p>Budget: {convertMoney(budget)}</p>
          </div>
          <div className="column">
            <p>Revenue: {convertMoney(revenue)}</p>
          </div>
        </Content>
      </Wrapper>
    </React.Fragment>
  );
};

export default MovieInfoBar;
