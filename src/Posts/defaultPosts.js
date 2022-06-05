import "./DefaultPosts.css";

import {
  randomLikes,
  randomReplies,
  randomShares,
} from "../Pages/Credit/UI/Input-utils";
import agarishev from "./img/agarishev.jpg";

const date = new Date();

const defaultPosts = [
  {
    id: 3452342,
    picture: agarishev,
    author: "Jack Dorsey",
    title:
      "Всем привет,я понял что хочу двигаться в другом направлении. Встречайте, мой новый проект - Cross Posts. Техническим дериктором назначен - Богдан Безуглый.",
    date: date.getDate() + " мая",
    time:
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes(),

    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },
  {
    id: 234132414,
    picture: "",
    author: "Elon Musk",
    title:
      "Только что завершилась моя сделка по полному выкупу прав на язык программирования 1С. Планируем использовать его чуткий синтаксис в новых моделях автопилотов Tesla!",
    date: date.getDate() + " мая",
    time:
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes(),

    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },
  {
    id: 12341234,
    picture: "",
    author: "Владимир Путин",
    title: "Вперед Россия!",
    date: date.getDate() + " мая",
    time:
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes(),

    likes: "99",
    replies: "99",
    shares: "99",
  },
  {
    id: 1234123,
    picture: "",
    author: "Delvon Lamarr Organ Trio",
    title: "https://www.youtube.com/watch?v=jhicDUgXyNg&ab_channel=KEXP",
    date: date.getDate() + " мая",
    time:
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes(),

    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },
  {
    id: 12343124,
    picture: "",
    author: "Michael Scott",
    title: "The city...",
    date: date.getDate() + " мая",
    time:
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes(),

    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 23412341241,
    picture: "",
    author: "Twitter",
    title: "Ребята, вы реально красавцы, увидимся в суде!)",
    date: date.getDate() + " мая",
    time:
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes(),

    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 23423432,
    picture: "",
    author: "Michael Jackson",
    title:
      "Привет это Майкл Джексон. На самом деле я не умер, скиньте  по 600руб на сберОнлайн по номеру телефона, чтобы я мог вернуться в Америку и продолжить выступать.",
    date: date.getDate() + " мая",
    time:
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes(),

    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 67867876,
    picture: "",
    author: "Joe Biden",
    title: "Кто я",
    date: date.getDate() + " мая",
    time:
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes(),

    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },
  {
    id: 87876,
    picture: "",
    author: "Jamez Deann",
    title: "Еду в Питер, я приеду в Питер, и...",
    date: date.getDate() + " мая",
    time:
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes(),

    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 67585655,
    picture: "",
    author: "Кросс Нации",
    title: "Скоро сами все услышите...",
    date: date.getDate() + " мая",
    time:
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes(),

    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },
];

export default defaultPosts;
