import axios from 'axios';

const url = 'https://api.accessban.com/v1/data/sana/json';

export const fetchData = async () => {
  try {
    const {
      data: {
        sana: { data },
      },
    } = await axios.get(url);

    // const dataArray = data.map((item) => item);

    return {
      data,
    };
  } catch (error) {
    console.log(error);
  }
};
