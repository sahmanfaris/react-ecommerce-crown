import CollectionItem from "../collection-item/CollectionItem";
import "./CollectionPreview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map(({ id, ...item }) => (
          <CollectionItem key={id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
