const warning = (err: Error | string) => {
  if (import.meta.env.PROD) return;
  console.error(err);
};

export default warning;
