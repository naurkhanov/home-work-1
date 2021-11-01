import React from "react";

const EmptyBlock = () => {
  return (
    <div>
      <div className="block empty-block">
        <span className="ghost">👻</span>
        <h2>Список фраз пустой</h2>
        <p>
          Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку
          “Сгенерировать”
        </p>
      </div>
    </div>
  );
};

export default EmptyBlock;