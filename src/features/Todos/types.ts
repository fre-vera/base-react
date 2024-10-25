export type TodosDetails = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodosProps = {
  todos: TodosDetails[];
};
