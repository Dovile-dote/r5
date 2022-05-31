function Ex({ ex, setDeleteData, setModalData }) {
  const handleDelete = () => {
    setDeleteData(ex);
  };

  const handleEdit = () => {
    setModalData(ex);
  };

  return (
    <li className="list-group-item">
      <div className="item">
        <div className="content">
          <b>{ex.name}</b>
          <span>{['Test', 'Written', 'Spoken'][--ex.type]}</span>
          <i>{ex.place}</i>
        </div>
        <div className="buttons">
          <button className="btn btn-outline-success ml-2" onClick={handleEdit}>
            EDIT
          </button>
          <button
            className="btn btn-outline-danger ml-2"
            onClick={handleDelete}
          >
            DELETE
          </button>
        </div>
      </div>
    </li>
  );
}

export default Ex;
