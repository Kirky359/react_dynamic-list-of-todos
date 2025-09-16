import { Type } from '../../App';

type Props = {
  filterType: (type: Type) => void;
  query: string;
  setQuery: (value: string) => void;
  filter: Type;
};

export const TodoFilter: React.FC<Props> = ({
  filterType,
  query,
  setQuery,
  filter,
}) => {
  const handleFilterType = (type: Type) => {
    filterType(type);
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={filter}
            onChange={event => handleFilterType(event.target.value as Type)}
          >
            <option value={Type.All}>All</option>
            <option value={Type.Active}>Active</option>
            <option value={Type.Completed}>Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {query && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => setQuery('')}
            />
          </span>
        )}
      </p>
    </form>
  );
};
