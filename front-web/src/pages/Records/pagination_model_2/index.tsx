import React from "react";
import "./styles.css";
import 'primeicons/primeicons.css';

type Props = {
  totalPages?: number;
  goToPage: Function;
  activePage: number;
};

const Paginationx = ({ totalPages = 0, goToPage, activePage }: Props) => {
  const firstPage = 0;
  const lastPage = totalPages - 1;
  const nextPage = activePage >= lastPage ? lastPage : activePage + 1;
  const prevPage = activePage > 0 ? activePage - 1 : activePage;

  return (
    <div className="pagination-container">
      <button className="pagination-item" title="Primeira página" onClick={() => goToPage(firstPage)}>
        <i className="pi pi-step-backward"></i>
      </button>
      <button className="pagination-item" title="Próxima página" onClick={() => goToPage(nextPage)}>
        <i className="pi pi-caret-right"></i>
      </button>
      <button className="pagination-item" title="Página anterior" onClick={() => goToPage(prevPage)}>
        <i className="pi pi-caret-left"></i>
      </button>
      <button className="pagination-item" title="Última página" onClick={() => goToPage(lastPage)}>
        <i className="pi pi-step-forward"></i>
      </button>
    </div>
  );
};

export default Paginationx;
