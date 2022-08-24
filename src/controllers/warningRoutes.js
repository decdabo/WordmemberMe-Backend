const warningRoutes = (_, res) => {
  res.json({
    message: 'Queryparams needed'
  });
}

export default warningRoutes;
