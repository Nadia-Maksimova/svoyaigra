
export type QuestionsState = {
    topics: QuestionItem[];
    error: Error | null;
    
}

export type TopicsState = {
    topics: TopicItem[];
    error: Error | null;
    
}

export type QuestionItem = {
  id: number;
  text: string;
  answer: string;
  score: number;
};

export type TopicItem = {
  id: number;
  title: string;
  questions: QuestionItem[];
};

export type TopicAction = { type: "GET_TOPIC"; payload: TopicItem[] };
