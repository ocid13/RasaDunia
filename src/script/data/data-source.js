import axios from 'axios';

class DataSource {
  static async searchMeal(keyword) {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`);
      const { meals } = response.data;

      if (meals) {
        return meals;
      }
      throw new Error(`${keyword} is not found.`);
    } catch (error) {
      throw new Error(`Failed to fetch meals: ${error.message}`);
    }
  }
}

export default DataSource;
