export interface WordProps {
  jap: string;
  eng: string;
  rus?: string;
  number?: string;
  kanji?: string;
}

export interface TopicsStoreProps {
  id: string;
  name: string;
  value: WordProps[];
}

export interface ResultProps {
  text: string;
  status: boolean;
}

export interface Word {
  jap: string;
  eng: string;
  number: string;
  kanji: string;
}
