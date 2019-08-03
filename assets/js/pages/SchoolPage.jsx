import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import SchoolAPIService from "../services/SchoolAPIService";
import SearchService from "../services/SearchService";
import DateService from "../services/DateService";
// import { toast } from "react-toastify";

const SchoolPage = props => {
  const [schools, setSchools] = useState([]);
  // const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemPerPage = 10;

  /**
   *
   */
  useEffect(() => {
    findAll();
  }, []);

  /**
   * findAll
   */
  const findAll = async () => {
    try {
      const response = await SchoolAPIService.findAll().then(
        schools => schools.data
      );
      setSchools(response["hydra:member"]);
      // setTotalItems(response["hydra:totalItems"]);
      setCurrentPage(1);
    } catch (error) {
      console.log("[ ERROR ]", error);
      //   toast.error(
      //     "Une erreur s'est produite lors de la récupération dse écoles."
      //   );
    }
  };

  const handleRemove = async id => {
    const originalSchools = [...schools];
    const newSchools = schools.filter(school => school.id !== id);
    try {
      const response = await SchoolAPIService.remove(id).then(
        response => response
      );
      setSchools(newSchools);
      //   toast.success("L'école a été supprimée avec succés.");
    } catch (error) {
      console.log("[ ERROR ]", error);
      setSchools(originalSchools);
      //   toast.error(
      //     "Une erreur s'est produite lors de la suppression de l'école."
      //   );
    }
  };

  const handleChange = event => {
    setSearch(event.currentTarget.value);
    setCurrentPage(1);
  };

  const filteredSchools = SearchService.searchSchool(schools, search);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  // const totalPages = Math.ceil(totalItems / itemPerPage);
  // const pages = [...Array(totalPages).keys()];

  const paginatedSchools = Pagination.getDatas(
    filteredSchools,
    currentPage,
    itemPerPage
  );

  return (
    <>
      <h1 className="h2">Listes des écoles</h1>
      <div className="form-group">
        <input
          value={search}
          type="text"
          className="form-control"
          placeholder="Rechercher..."
          onChange={handleChange}
        />
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#Id</th>
            <th>libelle</th>
            <th>Date de création</th>
            <th>Pays</th>
            <th>Ville</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {paginatedSchools.map(school => (
            <tr key={school.id}>
              <td>{school.id}</td>
              <td>{school.label}</td>
              <td>{DateService.dateFormat(school.createdAt)}</td>
              <td>{school.country.label}</td>
              <td>{school.city}</td>
              <td className="text-center">
                <button type="button" className="btn btn-warning btn-sm mr-2">
                  Modifier
                </button>
                <button
                  onClick={() => handleRemove(school.id)}
                  type="button"
                  className="btn btn-danger btn-sm"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemPerPage={itemPerPage}
        totalItems={filteredSchools.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default SchoolPage;
