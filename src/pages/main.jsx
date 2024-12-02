import React, { useEffect } from "react";
import Slider from "../components/Slider";
import AnimalCards from "../components/AnimalCards";
import SubscriptionForm from "../components/SubscriptionForm";

const Main = () => {
  useEffect(() => {
    const form = document.getElementById("registrationForm");
    const passwordInput = document.getElementById("passwordInput");
    const passwordConfirmInput = document.getElementById("passwordConfirmInput");

    if (form) {
      passwordConfirmInput?.addEventListener("input", () => {
        if (passwordInput?.value !== passwordConfirmInput?.value) {
          passwordConfirmInput.setCustomValidity("Пароли не совпадают");
        } else {
          passwordConfirmInput.setCustomValidity("");
        }
      });

      form.addEventListener("submit", (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      });
    }

    const validateFio = () => {
      const fullNameInput = document.getElementById("nameInput");
      const pattern = /^[А-Яа-яЁё]+([ -][А-Яа-яЁё]+)*$/;

      if (pattern.test(fullNameInput?.value)) {
        fullNameInput.setCustomValidity("");
      } else {
        fullNameInput.setCustomValidity("ФИО должно содержать только кириллицу, пробелы и тире.");
      }
    };

    const fullNameInput = document.getElementById("nameInput");
    fullNameInput?.addEventListener("input", validateFio);

    return () => {
      passwordConfirmInput?.removeEventListener("input", null);
      fullNameInput?.removeEventListener("input", validateFio);
    };
  }, []);

  return (
    <main style={{ minHeight: "70vh" }}>
      <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
      <Slider />
      <h2 className="text-center text-white bg-primary m-2">Карточки найденных животных</h2>
      <AnimalCards />
      <h2 className="text-center text-white bg-primary m-2">Подписка на новости</h2>
      <SubscriptionForm />
    </main>
  );
};

export default Main;
