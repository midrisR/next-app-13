export const getFieldError = (field, errorResponse) => {
  return !!errorResponse?.[field];
};
export const getMessageError = (field, errorResponse) => {
  if (!!errorResponse?.[field]) {
    return <p className="text-sm text-red-500">{errorResponse?.[field]} </p>;
  }
};
