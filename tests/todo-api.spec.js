import {expect, test} from "@playwright/test";
import { request } from "http";
import * as fs from "fs";

test("Создание задачи", async ({request}) => {
    const todoTitle = "Изучить ApiRequestContext";
    const todo = {
        title: todoTitle
    };

    const response = await request.post("https://todo-app-sky.herokuapp.com/", {data: todo});
    
    const body = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(body['title']).toEqual(todoTitle);
  });

  test("Переименование задачи", async ({request}) => {
    const todoTitle = "Тестовое дело";
    const todo = {
      title: todoTitle
    };
    const response = await request.post("https://todo-app-sky.herokuapp.com/", {data: todo});
    const body = await response.json();
    const todoId = body['id'];

    const newTodoTitle = "Новое тестовое дело";
    const newTodo = {
      title: newTodoTitle
    }
    const newResponse = await request.patch("https://todo-app-sky.herokuapp.com/" + todoId, {data: newTodo});
    const newBody = await newResponse.json();

    expect(newResponse.ok()).toBeTruthy();
    expect(newBody['title']).toEqual(newTodoTitle);
  });

  test("", async ({request}) => {
    const todoTitle = "Тестовое дело";
    const todo = {
      title: todoTitle
    };
    const response = await request.post("https://todo-app-sky.herokuapp.com/", {data: todo});
    const body = await response.json();
    const todoId = body['id'];

    if (body['completed'] === false) {
      const newTodo = {
        completed: true
      };
      const newResponse = await request.patch("https://todo-app-sky.herokuapp.com/" + todoId, {data: newTodo});
      const newBody = await newResponse.json();

      expect(newResponse.ok()).toBeTruthy();
      expect(newBody['completed']).toEqual(true);
    }
  });

  test("Проверка статуса", async ({request}) => {
    const todoTitle = "Тестовое дело";
    const todo = {
      title: todoTitle
    };
    const response = await request.post("https://todo-app-sky.herokuapp.com/", {data: todo});
    expect(response.status()).toEqual(201);
  });
  
  test("Сохраняем тело в файл", async ({request}) => {
    const url = "https://google.com/search?q=playwright";
    const response = await request.get(url);
    const body = await response.body();
    expect(response.status()).toEqual(200);
    fs.writeFileSync("index.html", body);
  });
  
  test("Проверка полей тела", async ({request}) => {
    const url = "https://todo-app-sky.herokuapp.com";
    const todoTitle = "Тестовое дело";
    const todo = {
      title: todoTitle
    };
    const response = await request.post(url, {data: todo});
    expect(response.status()).toEqual(201);
    const body = await response.json();
    expect(body.completed).toBeFalsy();
    expect(body.id).toBeGreaterThan(0);
  });
