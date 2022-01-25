export const filterArray = (Articles, filter1) => {
  console.log(Articles);
  const result = Articles.filter((article) => {
    console.log(article.title);
    return article.title.includes(filter1) === true;
  });
  return result;
};

export const formatHrefTitle = (title) => {
  var Title = title.replace(" ", "-");
  return Title;
};

export const deformatHrefTitle = (Title) => {
  var title = Title.replaceAll("-", " ");
  return title;
};

export const FormatDay = (date) => {
  var arr = date.split("T");
  return arr[0];
};

export const removeTags = (desc) => {
  var text = desc.replace(/<\/?[^>]+(>|$)/g, "");
  return text;
};
