import useGetDocumentListQuery from "hooks/apis/queries/useGetDocumentListQuery";
import { Document } from "types/document";

const DocumentTree = () => {
  const { data, isLoading } = useGetDocumentListQuery();

  const convertDataToJSX = (data: Document[]) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {data.map(({ id, title, documents }: Document) => (
          <li key={id}>
            {title}
            <ul>{convertDataToJSX(documents)}</ul>
          </li>
        ))}
      </ul>
    );
  };

  return <div>{convertDataToJSX(data)}</div>;
};

export default DocumentTree;
