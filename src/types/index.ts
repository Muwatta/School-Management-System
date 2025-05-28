export interface Teacher {
  id: number;
  name: string;
  email: string;
  photo: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  submittedBy: Teacher;
  submissionDate: Date;
}

export interface Result {
  id: number;
  taskId: number;
  grade: string;
  feedback: string;
  evaluatedBy: Teacher;
  evaluationDate: Date;
}
