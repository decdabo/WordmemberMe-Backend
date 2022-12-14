export const notFoundError = (_, res) => {
  res.status({
    status: 404,
    message: 'Not Found'
  })
}

export const serverError = (error, _, res, next) => {
  if (error.status) {
    res.status(error.status).json({ status: error.status, message: error.message });
  } else {
    res.status(500).json({ status: 500, message: 'Server Error' });
  }
}
