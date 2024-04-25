import {expect, test} from "@playwright/test";
import { request } from "http";

test("Создание задачи", async ({request}) => {
    const response = await createTask("https://todo-app-sky.herokuapp.com/", "Создание задачи", {request});
    const body = await response.json();

    expect(response.status()).toEqual(201);
    expect(body.completed).toBeFalsy();
    expect(body.id).toBeGreaterThan(0);
    expect(body.title).toEqual("Создание задачи");
  });

  test("Получение задачи по id", async ({request}) => {
    const response = await createTask("https://todo-app-sky.herokuapp.com/", "Получение задачи по id", {request});
    const body = await response.json();
    
    const getResponse = await request.get(`https://todo-app-sky.herokuapp.com/${body.id}`);
    const getBody = await getResponse.json();

    expect(getResponse.status()).toEqual(200);
    expect(getBody.completed).toBeFalsy();
    expect(getBody.id).toEqual(body.id);
    expect(getBody.title).toEqual("Получение задачи по id");
  });

  test("Редактирование задачи. Переименование", async ({request}) => {
    const response = await createTask("https://todo-app-sky.herokuapp.com/", "Редактирование задачи", {request});
    const body = await response.json();
    
    const newTitle = { title: "Редактирование задачи. Переименование" };
    const patchResponce = await request.patch(`https://todo-app-sky.herokuapp.com/${body.id}`, {data: newTitle});
    const patchBody = await patchResponce.json();

    expect(patchResponce.ok()).toBeTruthy;
    expect(patchBody.title).toEqual("Редактирование задачи. Переименование");
  });

  test("Получение списка задач", async ({request}) => {
    const response = await request.get("https://todo-app-sky.herokuapp.com/");
    const body = await response.json();

    expect(response.status()).toEqual(200);
    expect(body.length).toBeGreaterThan(4);
    body.forEach(task => {
      expect(task).toHaveProperty('id');
      expect(task.id).toBeDefined();
    });
  });

  async function createTask(url, todoTitle, {request}) {
    const todo = { title: todoTitle };
    const response = await request.post(url, {data: todo});
    return response;
  }