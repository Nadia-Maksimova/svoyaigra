import { TopicItem } from './Components/MainGame/questionTypes';
import { Res, User } from './Components/Auth/Types/type';

export const loadTopics = async (): Promise<TopicItem[]> => {
  const res = await fetch('http://localhost:4000/api/topics');
  return res.json();
};

export const loadUsers = async (): Promise<User[]> => {
  const res = await fetch('http://localhost:4000/api/users');
  return res.json();
};

export const reg = async (newUser: User): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    }),
  });
  return res.json();
};

export const log = async (item: User): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email: item.email, password: item.password }),
  });
  return res.json();
};

export const logout = async (): Promise<Res> => {
  const res = await fetch('http://localhost:4000/api/auth/logout', {
    credentials: 'include',
  });
  return res.json();
};
