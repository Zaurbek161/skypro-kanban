import { Link } from "react-router-dom";
import * as S from "./card.styled";
import { useThemeContext } from "../../context/ThemeContext";
import { categories } from "../../data";
import { parseISO, parseJSON } from "date-fns";

export const Card = ({ id, item }) => {
  const { theme } = useThemeContext();

  const getClassForTopic = () => {
    let obj = categories.filter((obj) => obj.topic === item.topic);

    return obj[0].class;
  };

  return (
    <div className="cards__item">
      <S.Card $theme={theme} className="card">
        <div className="card__group">
          <div className={`card__theme ${getClassForTopic()}`}>
            <p className={getClassForTopic()}>{item.topic}</p>
          </div>
          <a href="#" target="_self">
            <div className="card__btn">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>
        <div className="card__content">
          <Link to={`/task/${id}`}>
            <S.Title $theme={theme}>{item.title}</S.Title>
          </Link>
          <div className="card__date">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clip-path="url(#clip0_1_415)">
                <path
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  stroke-width="0.8"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>
              {parseJSON(item.date).toLocaleDateString("ru-RU", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </S.Card>
    </div>
  );
};
