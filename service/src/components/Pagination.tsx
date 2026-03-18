interface Props {
    page: number;
    totalPage: number;
    onChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
    page,
    totalPage,
    onChange,
}) => {
    if (totalPage <= 1) return null;

    return (
        <div className="pagination">
            <button
                disabled={page === 1}
                onClick={() => onChange(page - 1)}
            >
                Prev
            </button>

            <span>
                {page} / {totalPage}
            </span>

            <button
                disabled={page === totalPage}
                onClick={() => onChange(page + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;