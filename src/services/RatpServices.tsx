import axios from "axios";
import { GetAllType } from "../dto";

export const getAll = async ({
  query = "",
  rowsPerPage = 10,
  page = 0,
}: GetAllType): Promise<Array<any>> => {
  const response = await axios(`${process.env.REACT_APP_RATP_API_KEY}&q=${query}&rows=${rowsPerPage}&start=${page}`, {
    headers: {
      post: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  });
  return response.data.records;
};
