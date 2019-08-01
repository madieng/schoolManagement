import React, { useState, useEffect } from "react";
import moment from "moment";
import SchoolsAPI from "./../services/schoolsAPI";
// import { toast } from "react-toastify";

const Schools = props => {
  const [schools, setSchools] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
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
      const response = await SchoolsAPI.findAll().then(schools => schools.data);
      setSchools(response["hydra:member"]);
      setTotalItems(response["hydra:totalItems"]);
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
      const response = await SchoolsAPI.remove(id).then(response => response);
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

  /**
   *
   * @param {*} date
   */
  const dateFormat = date => moment(date).format("DD/MM/YYYY");

  const pages = [...Array(Math.ceil(totalItems / itemPerPage)).keys()];
  console.log(pages);
  return (
    <>
      <h1 className="h2">Listes des écoles</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#Id</th>
            <th>Nom</th>
            <th>Date de création</th>
            <th>Pays</th>
            <th>Ville</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {schools.map(school => (
            <tr key={school.id}>
              <td>{school.id}</td>
              <td>{school.label}</td>
              <td>{dateFormat(school.createdAt)}</td>
              <td>
                <a href="#">Pays</a>
              </td>
              <td>{school.city}</td>
              <td className="text-center">
                <button type="button" className="btn btn-warning btn-sm mr-2">
                  Warning
                </button>
                <button
                  onClick={() => handleRemove(school.id)}
                  type="button"
                  className="btn btn-danger btn-sm"
                >
                  Danger
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group mr-2" role="group" aria-label="First group">
            {pages.map(page => (
              <button
                key={page + 1}
                type="button"
                className="btn btn-secondary"
              >
                {page + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Schools;
