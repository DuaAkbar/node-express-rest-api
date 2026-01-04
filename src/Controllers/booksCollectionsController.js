import books from "../models/books.js";
export const getBooksCollections = async (req, res) => {
  const bookies = await books.find();
  res.status(200);
    res.json({
      success: true,
      books: bookies,
      count: bookies.length,
    });
};

export const getBooksCollectionsById = async (req, res) => {
  console.log(req.params);

  const bookiesById = await books.findById(req.params.id);

  if (bookiesById != null) {
    res.status(200);
      res.json({
        success: true,
        books: bookiesById,
      });
  } else {
    res.status(404);
      res.json({
        success: false,
        message: `Book not found!`,
      });
  }
};

export const deleteBooksCollectionsById = async (req, res) => {
  const bookiesById = await books.findById(req.params.id);

  if (bookiesById != null) {
    await books.findByIdAndDelete(req.params.id);
    res.status(200);
      res.json({
        success: true,
        message: `Books has been deleted Successfully`,
      });
  } else {
    res.status(404);
    res.json({
      success: false,
      message: "Book not found",
    });
  }
};

export const postBooksCollections = async (req, res) => {
  const body = req.body;

  if (
    body?.BookName != null &&
    body?.BookGenre != null &&
    body?.BookAuthor != null &&
    body?.BookPublishYear != null
  ) {
    const createdBook = await books.create(req.body);
    console.log(createdBook);

    res.status(201);
      res.json({
        success: true,
        itemId : createdBook?._id,
        message: "Book has been created Successfully",
      });
  } else {
    res.status(404);
    res.json({
      success: false,
      message: "All fields Are Required",
    });
  }
};

export const putBooksCollectionsById = async (req, res) => {
  console.log(req.params);

  const bookiesById = await books.findById(req.params.id);
  if (bookiesById != null) {
    await books.findByIdAndUpdate(req.params.id, req.body);
    res.status(200);
      res.json({
        success: true,
        message: `Books has been Updated Successfully`,
      });
  } else {
    res.status(404);
    res.json({
      success: false,
      message: "Book not found",
    });
  }
};
