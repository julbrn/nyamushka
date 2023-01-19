import DOMPurify from 'dompurify';

export const makeDigitsBold = (str) => {
  return str.replace(/\d+/g, function (match) {
    return `<b>${match}</b>`;
  });

}

export const sanitizedData = (data) => ({
  __html: DOMPurify.sanitize(data)
})