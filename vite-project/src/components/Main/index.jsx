import { Card } from "../Card";
import { Column } from "../Column";

export const Main = () => {
  // const CARD_ARRAY = [
  //   {
  //     type: "webDesign",
  //     title: "Название задачи",
  //     date: "30.10.23",
  //   },
  //   {
  //     type: "research",
  //     title: "Название задачи",
  //     date: "30.10.23",
  //   },
  //   {
  //     type: "copywriting",
  //     title: "Название задачи",
  //     date: "30.10.23",
  //   },
  //   {
  //     type: "research",
  //     title: "Название задачи",
  //     date: "30.10.23",
  //   },
  // ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column title="Без заголовка">
              <Card type="webDesign" />
              <Card type="research" />
              <Card type="webDesign" />
              <Card type="copywriting" />
              <Card type="research" />
              {/* {CARD_ARRAY.map((el) => {
                return (
                  <Card
                    key={el.title}
                    title={el.title}
                    type={el.type}
                    date={el.date}
                  />
                );
              })} */}
            </Column>
            <Column title="Нужно сделать">
              <Card type="research" />
            </Column>
            <Column title="В работе">
              <Card type="research" />
              <Card type="copywriting" />
              <Card type="webDesign" />
            </Column>
            <Column title="Тестирование">
              <Card type="research" />
            </Column>
            <Column title="Готово">
              <Card type="research" />
            </Column>
          </div>
        </div>
      </div>
    </main>
  );
};
