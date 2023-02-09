import { TopicItem } from "./Components/MainGame/questionTypes";

export const loadTopics = async (): Promise<TopicItem[]> => {
    const res = await fetch('http://localhost:4000/api/topics') ;
    return res.json();
}
