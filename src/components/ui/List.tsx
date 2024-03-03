type ListProps<T> = {
  data: T[];
  render: (value: T, key: number) => React.ReactNode;
};

const List = <T,>({ data, render }: ListProps<T>) => {
  return <>{data.map(render)}</>;
};

export default List;
