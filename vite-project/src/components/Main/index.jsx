import { Column } from "../Column/index.jsx";
import { statusList } from "../../data.js";
// eslint-disable-next-line react/prop-types
export const Main = ({ cards }) => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status, i) => (
              <Column
                key={i}
                title={status}
                // eslint-disable-next-line react/prop-types
                cards={cards.filter((card) => card.status === status)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
