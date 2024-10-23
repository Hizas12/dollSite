import React from "react";

const Pay = () => {
  return (
    <div className="container_login">
      <div className="login__wrapper">
        <form method="POST" action="https://demo.rsb-processing.ru/create">
          <h1 className="log">Оплата</h1>
          <div className="input-box">
            <input type="text" placeholder="Имя и фамилия" required />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Почта" required />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Сумма заказа" name='sum' required />
          </div>
          <button type="submit" className="btn-reg">
            Оплатить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pay;
