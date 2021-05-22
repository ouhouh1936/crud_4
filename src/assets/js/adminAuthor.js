let prevPk = "";

const bookDetailHandler = (pk) => {
  if (prevPk !== "") {
    const preveBox = document.getElementById(prevPk);
    preveBox.style.display = "none";
  }
  const box = document.getElementById(pk);
  box.style.display = "block";
  prevPk = pk;
};
