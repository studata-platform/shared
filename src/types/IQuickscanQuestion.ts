import { IQuickscanQuestionOption } from "./IQuickscanQuestionOption";

export type IQuickscanQuestion = {
  question: string;
  target: number;
  body: string;
  min: number;
  max: number;
  options: IQuickscanQuestionOption[];
};
