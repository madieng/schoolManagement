import React, { useState, useEffect } from "react";
import moment from "moment";
import SchoolAPIService from "../services/SchoolAPIService";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import SchoolConstant from "../constants/SchoolConstant";
import SearchService from "../services/SearchService";
// import { toast } from "react-toastify";

const SchoolPage = props => {
  const [schools, setSchools] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
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
      setTotalItems(response["hydra:totalItems"]);
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
      <Table items={paginatedSchools} columns={SchoolConstant.getColumns()} />
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
