export const flatObj = (input: Object): Object => {
  const getEntries = (o, prefix = "") =>
    Object.entries(o).flatMap(([k, v]) =>
      Object(v) === v ? getEntries(v, `${prefix}${k}_`) : [[`${prefix}${k}`, v]]
    );

  return Object.fromEntries(getEntries(input));
};
