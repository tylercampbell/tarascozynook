import colorsData from '../data/colors.json';

export function getColors() {
  return colorsData;
}

export function getBooksByFeaturedStatus(offerings, isFeatured) {
  return Object.keys(offerings).flatMap(categoryKey => {
    return Object.keys(offerings[categoryKey].series).flatMap(seriesKey => {
      return offerings[categoryKey].series[seriesKey].books.filter(book => book.featured === isFeatured);
    });
  });
}

export function getBooksByCategory(categoryData) {
  return Object.keys(categoryData.series).flatMap(seriesKey => {
    return categoryData.series[seriesKey].books;
  });
}
