import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./styles.css";
import { RecordResponse } from "./types";
import { formatDate } from "./helpers";
import Pagination from "./pagination_model_2";
import Filters from "../../components/Filters";

const BASE_URL = "https://sds1-datoro.herokuapp.com";

const Records = () => {
  const [recordsResponse, setRecordsResponse] = useState<RecordResponse>();
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    Axios.get(
      `${BASE_URL}/records?linesPerPage=10&page=${activePage}`
    ).then((response) => setRecordsResponse(response.data));
  }, [activePage]);

  const handPageChange = (index: number) => {
    setActivePage(index);
  };

  return (
    <div className="page-container">
      <Filters link="/charts" linkText="VER GRÁFICOS" />
      <table className="records-table" cellPadding="0" cellSpacing="0" title ={`Pagina: ${activePage + 1}`}>
        <thead>
          <tr>
            <th>INSTANTE</th>
            <th>NOME</th>
            <th>IDADE</th>
            <th>PLATAFORMA</th>
            <th>GÊNERO</th>
            <th>TÍTULO DO GAME</th>
          </tr>
        </thead>
        <tbody>
          {recordsResponse?.content.map((record) => (
            <tr key={record.id}>
              <td>{formatDate(record.moment)}</td>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td className="text-secondary">{record.gamePlatform}</td>
              <td>{record.genreName}</td>
              <td className="text-primary">{record.gameTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        activePage={activePage}
        goToPage={handPageChange}
        totalPages={recordsResponse?.totalPages}
      />
    </div>
  );
};

export default Records;
