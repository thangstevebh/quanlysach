export const validator = (schema) => async (req, res, next) => {
  try {
    await schema?.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (error) {
    const errorValidateResponse = error?.issues?.map((issue) => {
      return {
        path: issue.path.join(" > "),
        message: issue.message,
      };
    });

    console.log(error);

    const errorResponse = {
      statusCode: 500,
      message: "error",
      error: errorValidateResponse,
      data: {},
    };
    return res.status(400).json(errorResponse);
  }
};
