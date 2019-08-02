function getColumns() {
  return [
    { name: "id", type: "number", label: "#Id" },
    { name: "label", type: "string", label: "libelle" },
    { name: "createdAt", type: "datetime", label: "Date de création" },
    { name: "country", type: "string", label: "Pays" },
    { name: "city", type: "string", label: "Ville" }
  ];
}

export default {
  getColumns
};
