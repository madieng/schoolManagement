function searchSchool(schools, search) {
  return schools.filter(
    school =>
      school.label.toLowerCase().includes(search.toLowerCase()) ||
      school.country.toLowerCase().includes(search.toLowerCase()) ||
      school.city.toLowerCase().includes(search.toLowerCase()) ||
      school.createdAt.includes(search)
  );
}

export default {
  searchSchool
};
