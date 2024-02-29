type ListProps<T> = {
  data: T[];
  render: (value: T, key: number) => React.ReactNode;
};

const List = <T,>({ data, render }: ListProps<T>) => {
  return <ul>{data.map(render)}</ul>;
};

export default List;
