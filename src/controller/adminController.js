import Author from "../models/Author";

////////// Author //////////
export const authorViewController = (req, res) => {
  res.render("screens/authorView");
};
export const authorDetailController = (req, res) => {
  res.render("screens/authorDetail");
};
export const authorCreateController = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
  }
  res.render("screens/authorCreate");
};
export const postAuthotCreateController = async (req, res) => {
  const {
    body: { authorName, authorBirth, authorBelong, authorGender },
  } = req;
  try {
    const result = await Author.create({
      name: authorName,
      birth: authorBirth,
      gender: authorBelong,
      belong: authorGender,
    });
    authorCreateController(req, res);
  } catch (e) {
    console.log(e);
    authorCreateController(req, res);
  }
};
////////// Book //////////
export const bookViewController = (req, res) => {
  res.render("screens/bookView");
};
export const bookDetailController = (req, res) => {
  res.render("screens/bookDetail");
};
export const bookCreateController = (req, res) => {
  res.render("screens/bookCreate");
};
